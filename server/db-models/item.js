/*
============================================
; Title: NodeBucket
; Author: PRofessor Krasso
; Date: 12-14-20
; Modified By: Rhonda Rivas
; Description: Node Bucket employee management app
;===========================================
*/
const mongoose = require('mongoose');

let itemSchema = mongoose.Schema({
  text: {type: String}
});

module.exports = itemSchema;