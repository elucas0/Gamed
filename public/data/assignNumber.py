# assign a unique random number between 0 and the number of elements to each element in the given json file

import json
import os
import random

def assignNumber(jsonFile):
    # read json file
    with open(jsonFile, 'r') as f:
        data = json.load(f)

    # assign a unique random number between 0 and the number of elements to each element
    for i in range(len(data)):
        rdNumbers = random.sample(range(0, len(data)), len(data))
        data[i]['number'] = rdNumbers[i]

    # check if every number is unique in rdNumbers
    if len(rdNumbers) == len(set(rdNumbers)):
        print('Every number is unique.')

    # write json file
    with open(jsonFile, 'w') as f:
        json.dump(data, f)

if __name__ == '__main__':
    jsonFile = os.path.join(os.path.dirname(__file__), 'mydata.json')
    assignNumber(jsonFile)