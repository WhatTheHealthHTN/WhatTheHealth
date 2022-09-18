from flask import Flask, request
from flask_cors import CORS
import xgboost as xgb
import pandas as pd
import json
from GENERATOR_XGBOOST import *

GRADIENT_BOOSTED_HEALTH_ENGINE = Flask(__name__)
CORS(GRADIENT_BOOSTED_HEALTH_ENGINE)
intialize_trees()

@GRADIENT_BOOSTED_HEALTH_ENGINE.route("/", methods = ['GET'])
def redirect():
    return 'Incorrect usage. Correct format: url/ai-health-engine?args'

@GRADIENT_BOOSTED_HEALTH_ENGINE.route("/ai-health-engine", methods = ["GET"])
def run_engine():
    print('REQUEST MADE')
    METRICS = dict(request.args)
    #Generate score
    score = get_avg_model_score(METRICS)[0]
    output_rec = {}
    recommendations = compute_recommendations()
    recommendations[0] = output_rec['FIRST_REC']
    recommendations[1] = output_rec['SECOND_REC']
    recommendations[2] = output_rec['THIRD_REC']
    print(recommendations)
    return json.dumps({"AVERAGE_SCORE": {score}, "TOP_3_METRICS":{output_rec}})

if __name__ == '__main__':
    from waitress import serve
    print('AI Engine API Running on Port 3000.')
    serve(GRADIENT_BOOSTED_HEALTH_ENGINE, host = '0.0.0.0', port = 3000)
