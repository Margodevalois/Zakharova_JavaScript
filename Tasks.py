def main():
    """
    Main function of the script.

    Take user input from console, check number, name or number array.
    """
    user_input = input("Введите число, имя или массив (через пробел): ")

    # Check for a number
    if user_input.isdigit():
        number = int(user_input)
        if number > 7:
            print("Привет")

    # Check for a name
    elif user_input == "Вячеслав":
        print("Привет, Вячеслав")
    
    else:
        # Check for an array
        try:
            array = list(map(int, user_input.split()))
            multiple_of_3 = [num for num in array if num % 3 == 0]
            if multiple_of_3:
                print("Элементы массива кратные 3:", multiple_of_3)
            else:
                print("В массиве нет элементов, кратных 3")

        except ValueError:
            # If not a number and not "Вячеслав", then output "Нет такого имени"
            print("Нет такого имени")

# checking that the script is executed directly and not as a module
if __name__ == "__main__":
    main()

