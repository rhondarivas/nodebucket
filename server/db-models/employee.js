/*
============================================
; Title: nodebucket
; Author: Professor Krasso 
; Date: December 4, 2020
; Modified By: Rhonda Rivas
; Description: employee mongoose/mongoDB
;=========================================== */ 

//mongoose structure here
const mongoose = require('mongoose');
const Item = require('./item');

let employeeSchema = mongoose.Schema({
  empId: {type: String, unique: true, dropDups: true},
  firstname: {type: String},
  lastname: {type: String},
  todo: [Item], 
  done: [Item]
});

module.exports = mongoose.model('Employee', employeeSchema);
