#!/usr/bin/env node
// -*- coding: utf-8 -*-
"use strict"

const protocol = require("./lib/ocpp-protocol.js")

protocol.readWSDLFiles();
protocol.buildJSONSchemas();

const values = {
    "connectorId": 0,
    "chargingProfile" : {
        "chargingProfileId" : 1,
        "chargingProfileKind" : "Absolute",
        "chargingProfilePurpose" : "ChargePointMaxProfile",
        "chargingSchedule" : {
            "chargingRateUnit" : "W",
            "chargingSchedulePeriod" : [ {
                "limit" : 50000.0,
                "startPeriod" : 0
            } ],
            "minChargingRate" : null,
            "startSchedule" : "2023-11-30T16:00:50Z"
        },
        "recurrencyKind" : null,
        "stackLevel" : 1,
        "transactionId" : null
    }
};

protocol.debugPayloadErrors(values, {version: 1.6, model: "cp", suffix: "Request", procName: "SetChargingProfile"})
if(protocol.debugPayloadErrors(values, {version: 1.6, model: "cp", suffix: "Request", procName: "SetChargingProfile"})){
    console.log()
    console.log("Great success!")
} else {
    console.log()
    console.error("Sad trombone")
}