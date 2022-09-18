#AIR POLLUTION
IDEAL_VALS = {"PM2.5": 11, "PM10": 16, "NO": 0, "NO2": 0, "Nox": 0, "NH3": 0, #Air Quality
              "CO": 0, "SO2": 88, "O3": 33, "Benzene": 5, "Toluene": 2.3, "Xylene": 0, "AQI": 16 , 
              'TotalSteps': 10000, 'TotalDistance': 8, 'Calories': 450, #Exercise
              'hematocrit': {'male': 45.5, 'female': 42}, 'RBC': {'male': 5.4, 'female': 4.8}, 'MCH': {'male': 29, 'female': 29}, #Blood Reports
              "MCV": {'male': 30.5, 'female': 29.5}, 'RDW': {'male': 13.5, 'female': 13.5}, 'Leucocyte': {'male': 7.2, 'female': 7.2}, 
              "Platelets": {'male': 240, 'female': 240}, 'Neutrophils': {'male': 50, 'female': 50}, 'Basophils': {'male': 0.75, 'female': 0.75}, 
              'Lymphocyte': {'male': 20, 'female': 20}, 'Creatinine': {'male': 1, 'female': 1.1}, 'Blood potassium': {'male': 4.4, 'female': 4.4}, 
              'Blood sodium': {'male': 140, 'female': 140}, 'Chloride': {'male': 102.5, 'female': 102.5}, 
              'CALORIES': 2250, 'CARBOHYDRATES': 275, 'FAT': 61, 'PROTEIN': 112.5, 'SODIUM': 2300, 'SUGAR': 125, #Nutrition
              'HOURS_OF_SLEEP': 8, 'REM_SLEEP': 0.225, 'DEEP_SLEEP': 0.18, 'HEART_RATE_BELOW_RESTING': 0.58} #Sleep

print('TOTAL FACTORS: ', len(IDEAL_VALS))