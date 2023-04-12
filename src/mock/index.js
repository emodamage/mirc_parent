import Mock from "mockjs";
import test from './mockData/test'

Mock.mock('http://localhost:8080/api/getMessage', 'get', test)