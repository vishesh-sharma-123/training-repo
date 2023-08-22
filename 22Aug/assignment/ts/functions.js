"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchWeather = void 0;
function fetchWeather(city) {
    return __awaiter(this, void 0, void 0, function () {
        var apiKey, apiUrl, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiKey = 'e23bdf99bbaf4ffca37102138232208';
                    apiUrl = "http://api.weatherapi.com/v1/forecast.json?key=".concat(apiKey, "&q=").concat(city, "&days=5&aqi=no&alerts=no");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(apiUrl)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    console.log(data);
                    displayData(data);
                    return [2 /*return*/, data];
                case 4:
                    error_1 = _a.sent();
                    console.error('Error fetching weather data:', error_1);
                    return [2 /*return*/, null];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.fetchWeather = fetchWeather;
function displayData(data) {
    var weatherDisplay = document.getElementById('weatherDisplay');
    if (!weatherDisplay)
        return;
    if (data) {
        console.log('data', data);
        var place = data.location.name;
        var currentTemp = data.current.temp_c;
        var minTemp = data.forecast.forecastday[0].day.maxtemp_c;
        var maxTemp = data.forecast.forecastday[0].day.mintemp_c;
        var humidity = data.current.humidity;
        var status_1 = data.current.condition.text;
        weatherDisplay.innerHTML = "\n        <p>Current Temperature: ".concat(currentTemp, "\u00B0C</p>\n        <p>Humidity: ").concat(humidity, "%</p>\n        <p>Weather: ").concat(status_1, "</p>\n        <p>Place: ").concat(place, "</p>\n        <p>Max Temp: ").concat(maxTemp, " </p>\n        <p>Min Temp: ").concat(minTemp, " </p>\n      ");
    }
    else {
        weatherDisplay.innerHTML = '<p>Error fetching weather data.</p>';
    }
}
