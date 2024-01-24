package com.bootcamp.todolist;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.validation.BindingResult;

public class ValidationUtils {

	public static Map<String, String> handleBindingResult(BindingResult bindingResult) {
		Map<String, String> errors = new HashMap<>();
		
		if (bindingResult.hasErrors()) {
			bindingResult.getFieldErrors().forEach(error -> {
				String field = error.getField();
				String errorMsg = error.getDefaultMessage();
				errors.put(field, errorMsg);
			});
			
			System.out.println(errors);
		}

		return errors;
	}
	
	public static List<String> handleBindingResult2(BindingResult bindingResult) {
		List<String> errors = new ArrayList<>();
		
		if (bindingResult.hasErrors()) {
			bindingResult.getFieldErrors().forEach(error -> {
				String errorMsg = error.getDefaultMessage();
				errors.add(errorMsg);
			});
		}

		return errors;
	}
}