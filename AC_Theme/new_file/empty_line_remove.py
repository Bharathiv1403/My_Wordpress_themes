def remove_empty_lines(file_path):
    with open(file_path, 'r') as file:
        lines = file.readlines()

    # Remove empty lines
    non_empty_lines = [line for line in lines if line.strip() != '']

    # Write the cleaned code back to the file
    with open(file_path, 'w') as file:
        file.writelines(non_empty_lines)

# Usage
file_path = '/home/bharathiragav/Pictures/wordpress/My_Wordpress_themes/AC_Theme/new_file/home_try.css'  
remove_empty_lines(file_path)



# def remove_empty_lines(my_file_path):
#     with open (my_file_path,'r') as file:
#         lines= file.readline()

#         non_empty_lines = [line for line in lines if line.strip() !=""]

#         with open (my_file_path,'w') as file:
#             file.writelines(non_empty_lines)

# my_file_path="~/Pictures/wordpress/My_Wordpress_themes/AC_Theme/new_file/index.html"
# remove_empty_lines(my_file_path)