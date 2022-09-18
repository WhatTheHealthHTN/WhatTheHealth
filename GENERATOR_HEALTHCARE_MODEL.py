import torch
import torch.nn as nn
import torch.nn.functional as F

class LeverGenerator(nn.Module):
    """
    """
    def __init__(self, latent_dimension):
        super(LeverGenerator, self).__init__()
        self.main = nn.Sequential(
            nn.Linear(latent_dimension, 1000),
            nn.ReLU(),
            nn.Linear(1000, 750), 
            nn.ReLU(),
            nn.Linear(750, 500), 
            nn.ReLU(),
            nn.Linear(500, 40)
        )
    
    def forward(self, input):
        return self.main(input)
