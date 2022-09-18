from flask import Flask, request
import xgboost as xgb
import pandas as pd
import json
from GENERATOR_XGBOOST import *

GRADIENT_BOOSTED_HEALTH_ENGINE = Flask(__name__)
intialize_trees()

@GRADIENT_BOOSTED_HEALTH_ENGINE.route("/ai-health-engine", methods = ['GET'])
def redirect():
    'Incorrect usage. Correct format: url/ai-health-engine?args'
    return

@GRADIENT_BOOSTED_HEALTH_ENGINE.route("/ai-health-engine", methods = ["GET"])
def run_engine():
    METRICS = request.args
    #Generate score
    score = get_avg_model_score
    recommendations = compute_recommendations()
    return json.dumps({"AVERAGE_SCORE": {score}, "TOP_3_METRICS":{recommendations}})

if __name__ == '__main__':
    from waitress import serve
    print('AI Engine API Running on Port 3000.')
    serve(GRADIENT_BOOSTED_HEALTH_ENGINE, host = '0.0.0.0', port = 3000)
