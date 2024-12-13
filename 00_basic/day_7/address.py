file_name = 'address.txt'
file_addresses = []

def read_addresses_from_file():
    opened_file = open(file_name, 'r')
    file_data = opened_file.readlines()
    opened_file.close()

    for line in file_data:
        address_one, address_two = line.split("     ")

        if(is_address_a_unit_or_appartment(address_one)):
            file_addresses.append(address_one.strip())
        if(is_address_a_unit_or_appartment(address_two)):
            file_addresses.append(address_two.strip())

    print(file_addresses)

def is_address_a_unit_or_appartment(address):
    return "unit" in address.lower() or "apartment" in address.lower()

read_addresses_from_file()