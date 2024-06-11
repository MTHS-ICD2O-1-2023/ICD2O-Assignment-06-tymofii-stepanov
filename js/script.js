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
  const url = "https://zenquotes.io/api/random"
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data && Array.isArray(data) && data.length > 0) {
        const quote = data[0].q
        const author = data[0].a
        document.getElementById("quote").innerHTML = `"${quote}" - ${author}`
      } else {
        document.getElementById("quote").innerHTML = "No quote available, please try again."
      }
    })
    .catch(error => {
      console.error("Error fetching the quote: ", error)
      document.getElementById("quote").innerHTML = "Failed to fetch quote, please try again."
    })
}
