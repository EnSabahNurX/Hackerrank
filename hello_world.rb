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

def printNums
  i = 0
  while i < 4
    puts i
    i += 1
  end
end
printNums()