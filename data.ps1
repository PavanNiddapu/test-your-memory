Get-Content -path ./data.csv
(Get-Content -path ./data.csv -Raw) -replace '#,','{"state":"'
(Get-Content -path ./data.csv -Raw) -replace ',*,','","name":"'
(Get-Content -path ./data.csv -Raw) -replace ',?,','","image":"images/cm/'
(Get-Content -path ./data.csv -Raw) -replace ',,$','.jpg"},'