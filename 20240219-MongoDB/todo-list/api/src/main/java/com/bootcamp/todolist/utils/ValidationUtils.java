package com.bootcamp.todolist.utils;

import java.util.HashMap;
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

}