import React, { Component } from 'react';
import axios from 'axios';


axios.get('http://localhost:5000/salarys/')
  .then(function (response) {
    // handle success
    console.log(response);
  })