# puts 'Hello World'
# puts 'Goodbye'
# puts (6+ 4)/2

# puts 13 % 5

# def sayMessage
#   puts "Hey Programmers!"
#   puts "What's for lunch?"
# end

# puts "before the method call"
# sayMessage
# puts "after the method call"

# def say_hello(person1, person2)
#   puts "Hello " + person1 + " and " + person2 + "."
# end

# say_hello("Ricardo", "Evelane")

# def calc_average(num1, num2)
#   sum = num1 + num2
#   avg = sum / 2.0
#   return avg
# end

# result = calc_average(5, 10)
# puts result + 2

def average_of_three(num1, num2, num3)
  return (num1 + num2 + num3) / 3.0
end

puts average_of_three(3, 7, 8)
puts average_of_three(2, 5, 17)
puts average_of_three(2, 8, 1)
