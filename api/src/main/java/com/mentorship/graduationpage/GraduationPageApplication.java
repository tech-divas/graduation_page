package com.mentorship.graduationpage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
//		(exclude = {DataSourceAutoConfiguration.class })
public class GraduationPageApplication {

	public static void main(String[] args) {
		SpringApplication.run(GraduationPageApplication.class, args);
	}
}