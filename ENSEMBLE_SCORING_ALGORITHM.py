import pandas as pd
import xgboost as xgb

DATASETS = {"pollution_gradient_tree": r'DATASETS\POLLUTION\GEOGRAPHY_AIR_QUALITY_DATASET.pkl', 
            "excercise_gradient_tree": r'DATASETS\EXCERCISE\EXERCISE_DATA.pkl', 
            "nutrition_gradient_tree" : r'DATASETS\NUTRITION\PREPROCESSED_NUTRITION_MYFITNESS_DATA.pkl', 
            "sleep_gradient_tree" : r'DATASETS\SLEEP\PREPROCESSED_SLEEP_FITBIT_DATA.pkl', 
            "blood_gradient_tree": r'DATASETS\BLOOD\PREPROCESSED_BLOOD_D1_DATASET.pkl'}

#Load all models (Gradient Boosted Trees) as global varaibles for further use.
def intialize_trees():
    globals()['pollution_gradient_tree'] = xgb.Booster()
    globals()['pollution_gradient_tree'].load_model(r'MODELS\GEOGRAPHY_POLLUTION_GRADBOOSTED_MODELS.model')

    globals()['excercise_gradient_tree'] = xgb.Booster()
    globals()['excercise_gradient_tree'].load_model(r'MODELS\METRICS_EXERCISE_GRADBOOSTED_MODELS[41443].model')

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
    print(dataset)
    data = pd.read_pickle(dataset)
    print('DATA: ', data.head)
    mx_data = max(data["SCORE"])
    mn_data = max(data["SCORE"])
    return scale(globals()[model].predict(xgb.DMatrix(metrics.detach().clone())), mx_data, mn_data)

def get_avg_model_score(metrics):
    total = 0
    for model in DATASETS.keys():
        print(metrics[model])
        total += individual_model_score(DATASETS[model], model, metrics[model])
    avg_score = total / len(DATASETS.keys())
    return avg_score