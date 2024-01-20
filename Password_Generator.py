import random 
import array 

MAX_LEN = int(input("Enter the length of the Password : "))

Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] 

Lower_case = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 

Upper_case = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 

Special_characters = ['@', '#', '$', '%', '=', ':', '?', '.', '/', '|', '~', '>', '*', '(', ')', '<'] 

COMBINED_LIST = Numbers + Upper_case + Lower_case + Special_characters 

rand_digit = random.choice(Numbers) 
rand_upper = random.choice(Upper_case) 
rand_lower = random.choice(Lower_case) 
rand_symbol = random.choice(Special_characters) 

temp_pass = rand_digit + rand_upper + rand_lower + rand_symbol 

for x in range(MAX_LEN - 4): 
	temp_pass = temp_pass + random.choice(COMBINED_LIST) 

	temp_pass_list = array.array('u', temp_pass) 
	random.shuffle(temp_pass_list) 


password = "" 
for x in temp_pass_list: 
		password = password + x 
		
print("Your Password : ", password) 
