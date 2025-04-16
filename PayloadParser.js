//AA070120073B00000000000000D500002000000400000000000000000000000000000000000000000000000000000000A5007FFF0000000000000000000000000117E255


function parseUplink(device, payload) {

    var payloadb = payload.asBytes();
    var decoded = Decoder(payloadb, payload.port)
    env.log(decoded);

    // Store Total Voltage
    if (decoded.Totalvoltage != null) {
        var sensor1 = device.endpoints.byAddress("1");

        if (sensor1 != null)
            sensor1.updateVoltageSensorStatus(decoded.Totalvoltage);
    };


    // Store Leakage current
    if (decoded.Leakagecurrent != null) {
        var sensor2 = device.endpoints.byAddress("2");

        if (sensor2 != null)
            sensor2.updateGenericSensorStatus(decoded.Leakagecurrent);
    };


    // Store Power
    if (decoded.power != null) {
        var sensor3 = device.endpoints.byAddress("3");

        if (sensor3 != null)
            sensor3.updateApparentPowerSensorStatus(decoded.power);
    };


    // Store Temperature
    if (decoded.temperature != null) {
        var sensor4 = device.endpoints.byAddress("4");

        if (sensor4 != null)
            sensor4.updateTemperatureSensorStatus(decoded.temperature);
    };


    // Store Current
    if (decoded.current != null) {
        var sensor5 = device.endpoints.byAddress("5");

        if (sensor5 != null)
            sensor5.updateCurrentSensorStatus(decoded.current);
    };


    // Store Alarm
    if (decoded.warning != null) {
        var sensor6 = device.endpoints.byAddress("6");
        if (sensor6 != null)
            sensor6.updateIASSensorStatus(decoded.warning);
    };


    // Store A Phase Voltage
    if (decoded.Phasevoltage_A != null) {
        var sensor7 = device.endpoints.byAddress("7");

        if (sensor7 != null)
            sensor7.updateVoltageSensorStatus(decoded.Phasevoltage_A);
    };

    // Store B Phase Voltage
    if (decoded.Phasevoltage_B != null) {
        var sensor8 = device.endpoints.byAddress("8");

        if (sensor8 != null)
            sensor8.updateVoltageSensorStatus(decoded.Phasevoltage_B);
    };

    // Store C Phase Voltage
    if (decoded.Phasevoltage_C != null) {
        var sensor9 = device.endpoints.byAddress("9");

        if (sensor9 != null)
            sensor9.updateVoltageSensorStatus(decoded.Phasevoltage_C);
    };


    // Store A Phase Current
    if (decoded.Phasecurrent_A != null) {
        var sensor10 = device.endpoints.byAddress("10");

        if (sensor10 != null)
            sensor10.updateCurrentSensorStatus(decoded.Phasecurrent_A);
    };

    // Store B Phase Current
    if (decoded.Phasecurrent_B != null) {
        var sensor11 = device.endpoints.byAddress("11");

        if (sensor11 != null)
            sensor11.updateCurrentSensorStatus(decoded.Phasecurrent_B);
    };
    // Store C Phase Current
    if (decoded.Phasecurrent_C != null) {
        var sensor12 = device.endpoints.byAddress("12");

        if (sensor12 != null)
            sensor12.updateCurrentSensorStatus(decoded.Phasecurrent_C);
    };

    
    // Store N Phase Current
    if (decoded.Phasecurrent_N != null) {
        var sensor13 = device.endpoints.byAddress("13");

        if (sensor13 != null)
            sensor13.updateCurrentSensorStatus(decoded.Phasecurrent_N);
    };


    // Store A phase power
    if (decoded.Phasepower_A != null) {
        var sensor14 = device.endpoints.byAddress("14");

        if (sensor14 != null)
            sensor14.updateApparentPowerSensorStatus(decoded.Phasepower_A);
    };


    // Store B phase power
    if (decoded.Phasepower_B != null) {
        var sensor15 = device.endpoints.byAddress("15");

        if (sensor15 != null)
            sensor15.updateApparentPowerSensorStatus(decoded.Phasepower_B);
    };

    // Store C phase power
    if (decoded.Phasepower_C != null) {
        var sensor16 = device.endpoints.byAddress("16");

        if (sensor16 != null)
            sensor16.updateApparentPowerSensorStatus(decoded.Phasepower_C);
    }; 

    // Store A phase Alarms
    if (decoded.Phase_A_Warning != null) {
        var sensor17 = device.endpoints.byAddress("17");
var warningA = parseInt(decoded.Phase_A_Warning, 2);
        if (sensor17 != null)
            sensor17.updateIASSensorStatus(warningA);
    };


    // Store B phase Alarms
    if (decoded.Phase_B_Warning != null) {
        var sensor18 = device.endpoints.byAddress("18");
var warningB = parseInt(decoded.Phase_B_Warning, 2);
        if (sensor18 != null)
            sensor18.updateIASSensorStatus(warningB);
    };


    // Store C phase Alarms
    if (decoded.Phase_C_Warning != null) {
        var sensor19 = device.endpoints.byAddress("19");
var warningC = parseInt(decoded.Phase_C_Warning, 2);
        if (sensor19 != null)
            sensor19.updateIASSensorStatus(warningC);
    };


 // Store Status
if (decoded.closing != null) {
    var sensor20 = device.endpoints.byAddress("20");
    
var closingInt = parseInt(decoded.closing, 16);
    if (sensor20 != null) {
        sensor20.updateIASSensorStatus(closingInt);
    }
}


    // Store A phase power factor

    if (decoded.Phasepower_factor_A != null) {
        var sensor21 = device.endpoints.byAddress("21");

        if (sensor21 != null)
            sensor21.updateCosPhiSensorStatus(decoded.Phasepower_factor_A);
    };

    // Store B phase power factor

    if (decoded.Phasepower_factor_B != null) {
        var sensor22 = device.endpoints.byAddress("22");

        if (sensor22 != null)
            sensor22.updateCosPhiSensorStatus(decoded.Phasepower_factor_B);
    };

    // Store C phase power factor

    if (decoded.Phasepower_factor_C != null) {
        var sensor23 = device.endpoints.byAddress("23");

        if (sensor23 != null)
            sensor23.updateCosPhiSensorStatus(decoded.Phasepower_factor_C);
    };

    

    // Store Temperature A
    if (decoded.temperature_A != null) {
        var sensor24 = device.endpoints.byAddress("24");

        if (sensor24 != null)
            sensor24.updateTemperatureSensorStatus(decoded.temperature_A);
    };

    // Store Temperature B
    if (decoded.temperature_B != null) {
        var sensor25 = device.endpoints.byAddress("25");

        if (sensor25 != null)
            sensor25.updateTemperatureSensorStatus(decoded.temperature_B);
    };

    // Store Temperature C
    if (decoded.temperature_C != null) {
        var sensor26 = device.endpoints.byAddress("26");

        if (sensor26 != null)
            sensor26.updateTemperatureSensorStatus(decoded.temperature_C);
    };
    // Store Temperature N
    if (decoded.temperature_N != null) {
        var sensor27 = device.endpoints.byAddress("27");

        if (sensor27 != null)
            sensor27.updateTemperatureSensorStatus(decoded.temperature_N);
    };


}

function buildDownlink(device, endpoint, command, payload) {
    // This function allows you to convert a command from the platform 
    // into a payload to be sent to the device.
    // Learn more at https://wiki.cloud.studio/page/200

    // The parameters in this function are:
    // - device: object representing the device to which the command will
    //   be sent. 
    // - endpoint: endpoint object representing the endpoint to which the 
    //   command will be sent. May be null if the command is to be sent to 
    //   the device, and not to an individual endpoint within the device.
    // - command: object containing the command that needs to be sent. More
    //   information at https://wiki.cloud.studio/page/1195.

    // This example is written assuming a device that contains a single endpoint, 
    // of type appliance, that can be turned on, off, and toggled. 
    // It is assumed that a single byte must be sent in the payload, 
    // which indicates the type of operation.

    
  /*       payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
         payload.buildResult = downlinkBuildResult.ok; 
    
         switch (command.type) { 
               case commandType.onOff: 
                       switch (command.onOff.type) { 
                               case onOffCommandType.turnOn: 
                                       payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
                                       break; 
                               case onOffCommandType.turnOff: 
                                       payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
                                       break; 
                               case onOffCommandType.toggle: 
                                       payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
                                       break; 
                               default: 
                                       payload.buildResult = downlinkBuildResult.unsupported; 
                                       break; 
                       } 
                       break; 
               default: 
                       payload.buildResult = downlinkBuildResult.unsupported; 
                       break; 
         }
    */

}
/**
 * Payload Decoder for The Things Network
 * 
 * Copyright 2023 HKT SmartHard
 * 
 * @product HKT-SCB-100
 */

function easy_decode(bytes) {
    var decoded = {};
    if (bytes[0] === 0xAA) {
        if (bytes[1] === 0x07 || bytes[1] === 0x06) {
            if (bytes.length === 68)
                decoded.CMD = readUInt8LE(bytes.slice(1, 2));
            decoded.addr = readUInt8LE(bytes.slice(2, 3));
            decoded.Ratedcurrent = readUInt8LE(bytes.slice(3, 4));
            decoded.types = readUInt8LE(bytes.slice(4, 5));
            decoded.payload = readUInt8LE(bytes.slice(5, 6));
            decoded.Totalvoltage = readUInt16LE(bytes.slice(6, 8));
            decoded.Leakagecurrent = readUInt16LE(bytes.slice(8, 10));
            decoded.power = readUInt16LE(bytes.slice(10, 12));
            decoded.temperature = readUInt16LE(bytes.slice(12, 14)) / 10;
            decoded.current = readUInt16LE(bytes.slice(14, 16));
            decoded.warning = readUInt16LE(bytes.slice(16, 18));
            decoded.Q = readUInt32LE_SWP32(bytes.slice(18, 22));
            decoded.Phasevoltage_A = readUInt16LE(bytes.slice(22, 24));
            decoded.Phasevoltage_B = readUInt16LE(bytes.slice(24, 26));
            decoded.Phasevoltage_C = readUInt16LE(bytes.slice(26, 28));
            decoded.Phasecurrent_A = readUInt16LE(bytes.slice(28, 30));
            decoded.Phasecurrent_B = readUInt16LE(bytes.slice(30, 32));
            decoded.Phasecurrent_C = readUInt16LE(bytes.slice(32, 34));
            decoded.Phasecurrent_N = readUInt16LE(bytes.slice(34, 36));
            decoded.Phasepower_A = readUInt16LE(bytes.slice(36, 38));
            decoded.Phasepower_B = readUInt16LE(bytes.slice(38, 40));
            decoded.Phasepower_C = readUInt16LE(bytes.slice(40, 42));
            decoded.Phase_A_Warning = readUInt16LE(bytes.slice(42, 44));
            decoded.Phase_B_Warning = readUInt16LE(bytes.slice(44, 46));
            decoded.Phase_C_Warning = readUInt16LE(bytes.slice(46, 48));
            decoded.closing = readUInt16LE(bytes.slice(48, 50)).toString(16);
            decoded.Phasepower_factor_A = readUInt16LE(bytes.slice(50, 52));
            decoded.Phasepower_factor_B = readUInt16LE(bytes.slice(52, 54));
            decoded.Phasepower_factor_C = readUInt16LE(bytes.slice(54, 56));
            decoded.temperature_A = readUInt16LE(bytes.slice(56, 58));
            decoded.temperature_B = readInt16LE(bytes.slice(58, 60)) / 10;
            decoded.temperature_C = readUInt16LE(bytes.slice(60, 62));
            decoded.temperature_N = readUInt16LE(bytes.slice(62, 64));
            decoded.Remotecontrol = readUInt8LE(bytes.slice(64, 65));
        }
        else if (bytes[1] === 0x05 && bytes.length === 49) {
            decoded.CMD = readUInt8LE(bytes.slice(1, 2));
            decoded.addr = readUInt8LE(bytes.slice(2, 3));
            decoded.Types_Loadcurrent = readUInt8LE(bytes.slice(3, 4));
            decoded.Types = readUInt8LE(bytes.slice(4, 5));
            decoded.Datalength = readUInt8LE(bytes.slice(5, 6));
            decoded.voltagelimit_UP = readUInt16LE(bytes.slice(6, 8));
            decoded.voltagelimit_Down = readUInt16LE(bytes.slice(8, 10));
            decoded.Ratedcurrent_limit_UP = readUInt16LE(bytes.slice(10, 12));
            decoded.powerlimit_UP = readUInt16LE(bytes.slice(12, 14));
            decoded.temperaturelimit = readUInt16LE(bytes.slice(14, 16));
            decoded.currentlimit = readUInt16LE(bytes.slice(16, 18));
            decoded.Phasecurrent_A_UPLimit = readUInt16LE(bytes.slice(18, 20));
            decoded.Phasecurrent_B_UPLimit = readUInt16LE(bytes.slice(20, 22));
            decoded.Phasecurrent_C_UPLimit = readUInt16LE(bytes.slice(22, 24));
            decoded.Phasepower_A_UPLimit = readUInt16LE(bytes.slice(24, 26));
            decoded.Phasepower_B_UPLimit = readUInt16LE(bytes.slice(26, 28));
            decoded.Phasepower_C_UPLimit = readUInt16LE(bytes.slice(28, 30));
            decoded.V_Warn_UPLimit = readUInt16LE(bytes.slice(30, 32));
            decoded.V_Warn_DownLimit = readUInt16LE(bytes.slice(32, 34));
            decoded.Ratedcurrent_Warn_UPLimit = readUInt16LE(bytes.slice(34, 36));
            decoded.temperature_Warn_UPLimit = readUInt16LE(bytes.slice(36, 38)) / 10;
            decoded.current_A_Warning = readUInt16LE(bytes.slice(38, 40));
            decoded.current_B_Warning = readUInt16LE(bytes.slice(40, 42));
            decoded.current_C_Warning = readUInt16LE(bytes.slice(42, 44));
            decoded.current_warning = readUInt16LE(bytes.slice(44, 46));
        }
        else if (bytes.length === 7) {
            decoded.CMD = readUInt8LE(bytes.slice(1, 2));
            decoded.addr = readUInt8LE(bytes.slice(2, 3));
            decoded.Datalength = readUInt8LE(bytes.slice(3, 4));
        }
    }

    return decoded;

}

/* ******************************************
 * bytes to number
 ********************************************/
function readUInt8LE(byte) {
    return (byte & 0xFF);
}

function readUInt8LE_SWP8(byte) {
    return (value & 0xFF);
}

function readInt8LE(byte) {
    var ref = readUInt8LE(byte);
    return (ref > 0x7F) ? ref - 0x100 : ref;
}

function readUInt16LE(byte) {
    var value = (byte[0] << 8) + byte[1];
    return (value & 0xFFFF);
}

function readUInt16LE_SWP16(byte) {
    var value = (byte[1] << 8) + byte[0];
    return (value & 0xFFFF);
}

function readInt16LE(byte) {
    var ref = readUInt16LE(byte);
    return (ref > 0x7FFF) ? ref - 0x10000 : ref;
}

function readUInt32LE(byte) {
    var value = (byte[0] << 24) + (byte[1] << 16) + (byte[2] << 8) + byte[3];
    return (value & 0xFFFFFFFF);
}

function readUInt32LE_SWP32(byte) {
    var value = (byte[3] << 24) + (byte[2] << 16) + (byte[1] << 8) + byte[0];
    return (value & 0xFFFFFFFF);
}

function readInt32LE(byte) {
    var ref = readUInt32LE(byte);
    return (ref > 0x7FFFFFFF) ? ref - 0x100000000 : ref;
}

function readInt32LE_SWP32(byte) {
    var ref = readUInt32LE_SWP32(byte);
    return (ref > 0x7FFFFFFF) ? ref - 0x100000000 : ref;
}

function readDoubleLE(byte) {
    var n;
    var Exponent;
    if (byte[7] & 0xF0) {
        byte[7] = byte[7] & 0x7F;
        Exponent = (byte[7] << 4) + ((byte[6] & 0xF0) >> 4);
        n = Exponent - 1023;
    }
    else {
        Exponent = (byte[7] << 4) + ((byte[6] & 0xF0) >> 4);
        n = Exponent - 1023;
    }
    var integer = ((byte[6] & 0x0F) << 24) + (byte[5] << 16) + (byte[4] << 8) + byte[3];
    var Integer = (integer >> (28 - n)) + (0x01 << n);
    var decimal = (integer - ((integer >> (28 - n)) << (28 - n))) / Math.pow(2, 28 - n);
    return Integer + decimal;

}


function readX16LE(byte) {
    var value = (byte[0] << 8) + byte[1];
    return (value & 0xFFFF);
}

function readX16LE_SWP32(byte) {
    var value = (byte[1] << 8) + byte[0];
    return (value & 0xFFFF);
}

function readS16LE(byte) {
    var value = (byte[0] << 8) + byte[1];
    return (value & 0xFFFF);
}

function readS16LE_SWP32(byte) {
    var value = (byte[1] << 8) + byte[0];
    return (value & 0xFFFF);
}

function decodeUplink(input) {
    var decoded = easy_decode(input.bytes);
    return { data: decoded };
} 


function Decoder(bytes, port) {
    return easy_decode(bytes);
}
