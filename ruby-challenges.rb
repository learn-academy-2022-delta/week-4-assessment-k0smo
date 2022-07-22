# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# PsuedoCode:
# the creation of a method
#  def a variable that connects the num1,2,and 3 
# use modulo identify odd or even numbers
# using if/ elsif to seperate the logic.
# push p

def number_check(num1, num2, num3)
  if num % 2 == 0
    puts "#{num1} is even"
  elsif num % 2 == 1
    puts "#{num2} is odd"
    elsif num % 2 == 2
        puts "#{num3} is odd"
  end
end

p number_check?    



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'
 

# PsuedoCode
# def variable conects to string
# use a string split 
# use a string delete
# use a string join
# Push p
def remove_vowels(string)
  string = string.split("")
  string.delete("aeiouAEIOU")
  string = string.join(" ")
end

p remove_vowels(album1, album2, album3)




# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


# Def variable palindrome with the test1,2,3
# use if, elsif to seperate the logic
# by using string.reverse for each
# Push p


def palindrome?(palindrome_tester1, palindrome_tester2, palindrome_tester3)
  if string == string.reverse
    puts "#{palindrome_tester1} is a palindrome"
  elsif string != string.reverse
    puts "#{palindrome_tester2} is not a palindrome"
  elsif string != string.reverse
    puts "#{palindrome_tester3} is a palindrome"
  end
end

p palindrome?


