#!/bin/bash
rm -rf dist
npm run build
npm run add_product -- --name Orange --price 1.50 --amount 25
npm run add_product -- --name Lemon --price 1.45 --amount 40
npm run add_product -- --name Pineapple --price 3.45 --amount 35

npm run add_account -- --firstname John --lastname Smith
npm run add_account -- --firstname Juice --lastname Monster
