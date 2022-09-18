import xgboost as xgb
import pandas as pd

#Periodic, automated training for the ML Backend -> collaboarative effort between all modles to provide the best recommendations possible.
#Load all the respective models.
DATASETS = {"pollution_gradient_tree": r'DATASETS\POLLUTION\GEOGRAPHY_AIR_QUALITY_DATASET.pkl', 
            "exercise_gradient_tree": r'DATASETS\EXCERCISE\EXERCISE_DATA.pkl', 
            "nutrition_gradient_tree" : r'DATASETS\NUTRITION\PREPROCESSED_NUTRITION_MYFITNESS_DATA.pkl', 
            "sleep_gradient_tree" : r'DATASETS\SLEEP\PREPROCESSED_SLEEP_FITBIT_DATA.pkl', 
            "blood_gradient_tree": r'DATASETS\BLOOD\PREPROCESSED_BLOOD_D1_DATASET.pkl'}

#Load all models (Gradient Boosted Trees) as global varaibles for further use.
def intialize_trees():
    globals()['pollution_gradient_tree'] = xgb.Booster()
    globals()['pollution_gradient_tree'].load_model(r'MODELS\GEOGRAPHY_POLLUTION_GRADBOOSTED_MODELS.model')

    globals()['exercise_gradient_tree'] = xgb.Booster()
    globals()['exercise_gradient_tree'].load_model(r'MODELS\METRICS_EXERCISE_GRADBOOSTED_MODELS[41443].model')

    globals()['nutrition_gradient_tree'] = xgb.Booster()
    globals()['nutrition_gradient_tree'].load_model(r'MODELS\METRICS_NUTRITION_GRADBOOSTED_MODELS[63.24].model')

    globals()['sleep_gradient_tree'] = xgb.Booster()
    globals()['sleep_gradient_tree'].load_model(r'MODELS\METRICS_SLEEP_GRADBOOSTED_MODELS[0.06].model')

    globals()['blood_gradient_tree'] = xgb.Booster()
    globals()['blood_gradient_tree'].load_model(r'MODELS\REPORTS_BLOOD_GRADBOOSTED_MODELS[1.5].model')

#Function to scale output of a given function
def scale(value, max, min):
    if max!=min and max!=0:
        value = (value - min)/(max - min)
    return value

#Take a given set of metrics and generate scaled model scores
def individual_model_score(dataset, model, metrics):
    data = pd.read_pickle(dataset)
    print('METRICS ', metrics)
    mx_data = max(data["SCORE"])
    mn_data = max(data["SCORE"])
    return scale(globals()[model].predict(xgb.DMatrix(metrics.detach().clone())), mx_data, mn_data)

#Get the average model score
def get_avg_model_score(metrics):
    total = 0
    for model in DATASETS.keys():
        total += individual_model_score(DATASETS[model], model, metrics[model])
    avg_score = total / len(DATASETS.keys())
    return avg_score

#Compute the recommendations for each model, select the top 2, and review across all models to determine end performance.
def compute_recommendations():
    GAIN_SORT_DICT = {}
    for model in DATASETS.keys():
        gain_scores = vars(model).get_score(importance_type = 'gain')
        sorted_gain_scores = dict(sorted(gain_scores.items(), key = lambda item: item[1]))
        sorted_gain_scores = list(sorted_gain_scores.items())[:1]
        #Transfer top 2
        GAIN_SORT_DICT | sorted_gain_scores
    #Sort larger dictionary 
    GAIN_SORT_DICT = dict(sorted(GAIN_SORT_DICT.items(), key = lambda item: item[1]))
    #Take the top 3 metrics
    top_3_metrics = list(GAIN_SORT_DICT.items())[:2]
    #Return
    return top_3_metrics