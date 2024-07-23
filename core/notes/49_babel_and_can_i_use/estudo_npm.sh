echo "Deu Certo."

npm init -y &&
npm install --save-dev @babel/cli @babel/preset-env @babel/core &&
npx babel script.js -o bundle.js --presets=@babel/env -w