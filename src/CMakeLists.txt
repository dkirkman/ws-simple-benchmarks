add_library (dkbench sum.c smooth.c square.c)
add_executable (main main.c)
target_link_libraries(main dkbench)
