#!/usr/bin/env node
"use strict";
var opt = require('minimist')(process.argv.slice(2));
process.stdout.write("Mytest hello!! (" + opt.date + ")\n");
