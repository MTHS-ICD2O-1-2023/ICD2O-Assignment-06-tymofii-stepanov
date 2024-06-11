// Copyright (c) 2024 Mr. Coxal All rights reserved
//
// Created by: Tymofii
// Created on: Jun 2024
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  document.getElementById("new-quote").addEventListener("click", fetchQuote)
  fetchQuote()
}

function fetchQuote() {
  const url = "https://api.adviceslip.com/advice"
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data && data.slip && data.slip.advice) {
        const advice = data.slip.advice
        document.getElementById("quote").innerHTML = `"${advice}"`
      } else {
        document.getElementById("quote").innerHTML = "No advice available, please try again."
      }
    })
    .catch(error => {
      console.error("Error fetching the advice: ", error)
      document.getElementById("quote").innerHTML = "Failed to fetch advice, please try again."
    })
}
