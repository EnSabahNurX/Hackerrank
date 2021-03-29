# arr = %w[Vanessa David Candace]
# print arr
# puts
# arr.push('Jia')
# print arr
# puts
# arr.pop
# print arr
# puts
# arr.unshift('Bob')
# print arr
# puts
# arr.shift
# print arr
# puts

# arr = ['SF', 'NY', 'LA']
# puts arr.index('LA')
# puts arr.include?('LA')

# arr = %w[1 2 3 4 ]
# print arr
# puts
# print arr.reverse
# arr.reverse!
# puts
# print arr

# str = 'hello'
# puts str.reverse
# puts str
# str.reverse!
# puts str

def is_palindrome(word)
  return word == word.reverse
end

puts is_palindrome('nadan') # true
puts is_palindrome('hello') # false
