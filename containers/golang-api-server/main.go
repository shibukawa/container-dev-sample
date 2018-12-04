package main

import (
	"encoding/json"
	"log"
	"math/rand"
	"net/http"
)

var fortunes = []string{
	"大吉",
	"吉",
	"中吉",
	"小吉",
	"末吉",
	"凶",
	"大凶",
}

// Result is HTTP result of fortune method
type Result struct {
	Result string `json:"result"`
}

func main() {
	http.HandleFunc("/api/fortune", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		result := Result{
			Result: fortunes[rand.Intn(len(fortunes))],
		}
		encoder := json.NewEncoder(w)
		encoder.Encode(result)
	})

	log.Fatal(http.ListenAndServe(":8080", nil))
}
