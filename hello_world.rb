# # puts 'Hello World'
# # puts 'Goodbye'
# # puts (6+ 4)/2

# # puts 13 % 5

# # def sayMessage
# #   puts "Hey Programmers!"
# #   puts "What's for lunch?"
# # end

# # puts "before the method call"
# # sayMessage
# # puts "after the method call"

# # def say_hello(person1, person2)
# #   puts "Hello " + person1 + " and " + person2 + "."
# # end

# # say_hello("Ricardo", "Evelane")

# def calc_average(num1, num2)
#   sum = num1 + num2
#   avg = sum / 2.0
#   return avg
# end

# result = calc_average(5, 10)
# puts result + 2

# def average_of_three(num1, num2, num3)
#   return (num1 + num2 + num3) / 3.0
# end

# puts average_of_three(3, 7, 8)
# puts average_of_three(2, 5, 17)
# puts average_of_three(2, 8, 1)

# num = 0
# if num > 0
#   puts 'positive'
# elsif num < 0
#   puts 'negative'
# else
#   puts 'its zero'
# end

# def either_only(number)
# 	# return (number % 3 == 0 && number % 5 != 0) || number % 3 != 0 && number % 5 == 0
#   return (number % 3 == 0) ^ (number % 5 == 0)
# end

# puts either_only(9)  # => true
# puts either_only(20) # => true
# puts either_only(7)  # => false
# puts either_only(15) # => false
# puts either_only(30) # => false

# def longer_string(str1, str2)
#   if str2.length > str1.length
#     return str2
#   end
#   return str1
# end

# puts longer_string("app", "academy") # => "academy"
# puts longer_string("summer", "fall") # => "summer"
# puts longer_string("hello", "world") # => "hello"

# def number_check(num)
#   if num > 0
#     return 'positive'
#   elsif num < 0
#     return 'negative'
#   else
#     return 'zero'
#   end
# end

# puts number_check(5)    # => "positive"
# puts number_check(-2)   # => "negative"
# puts number_check(0)    # => "zero"

# def repeatHello()
#   counter = 1
#   while counter <= 5
#     puts "hello " + String(counter)
#     counter += 1
#   end
# end
# repeatHello()

# def printNums
#   i = 0
#   while i < 4
#     puts i
#     i += 1
#   end
# end
# printNums()

# def count_e(word)
#   index = word.length - 1
#   count = 0
#   while index >= 0
#     if word[index] == "e"
#       count = count + 1
#     end
#     index = index - 1
#   end
#   return count
# end

# puts count_e("movie") # => 1
# puts count_e("excellent") # => 3

# def factorial(num)
#   fact = 1
#   while num > 0
#     fact *= num
#     num -= 1
#   end
#   return fact
# end

# puts factorial(3) # => 6, because 1 * 2 * 3 = 6
# puts factorial(5) # => 120, because 1 * 2 * 3 * 4 * 5 = 120
# puts factorial(25) # => 120, because 1 * 2 * 3 * 4 * 5 = 120

# def reverse(word)
#   reversedWord = ""
#   i = word.length - 1
#   while i >= 0
#     reversedWord += word[i]
#     i -= 1
#   end
#   return reversedWord
# end

# puts reverse("cat")          # => "tac"
# puts reverse("programming")  # => "gnimmargorp"
# puts reverse("bootcamp")     # => "pmactoob"

# def is_palindrome(word)
#   i = 0
#   j = word.length - 1
#   while i < word.length
#     if word[i] != word[j]
#       return false
#     end
#     i += 1
#     j -= 1
#   end
#   return true
# end
#
# puts is_palindrome("racecar")  # => true
# puts is_palindrome("kayak")    # => true
# puts is_palindrome("bootcamp") # => false

# def factors_of(num)
# 	factors =[]
#   	i = 1
#   	while i <= num
#       if num % i == 0
#         factors << i
#       end
#       i += 1
#     end
#   	return factors
# end
#
# print factors_of(3)   # => [1, 3]
# puts
# print factors_of(4)   # => [1, 2, 4]
# puts
# print factors_of(8)   # => [1, 2, 4, 8]
# puts
# print factors_of(9)   # => [1, 3, 9]
# puts
# print factors_of(16)  # => [1, 2, 4, 8, 16]

# def select_odds(numbers)
# 	odds = []
#   	i = 0
#   	while i < numbers.length
#       if numbers[i] % 2 != 0
#         odds << numbers[i]
#       end
#       i += 1
#     end
#     return odds
# end
#
# print select_odds([13, 4, 3, 7, 6, 11]) # => [13, 3, 7, 11]
# puts
# print select_odds([2, 4, 6])            # => []

def fizz_buzz(max)
  fizzBuzz = []
  i = 1
  while i < max
    if (i % 4 == 0) ^ (i % 6 == 0)
      fizzBuzz << i
    end
    i += 1
  end
  return fizzBuzz
end

print fizz_buzz(20) # => [4, 6, 8, 16, 18]
puts
print fizz_buzz(15) # => [4, 6, 8]
