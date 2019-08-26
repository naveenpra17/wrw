package com.stackroute.jwtauthentication.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashBoard {
    @RequestMapping({ "/welcome" })
    public String firstPage() {
        return "Welcome";
    }

}
