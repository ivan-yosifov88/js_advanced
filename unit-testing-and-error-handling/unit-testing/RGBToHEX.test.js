const {expect} = require('chai');
const {rgbToHexColor} = require('../lab/rgb-to-hex');


describe('Test converter', function(){
    describe('Test converter functionality when all parameters are correct', function(){
        it ('convert white', function(){
            expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF')
        });
        it ('convert black', function(){
            expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000')
        });
        it ('convert some green from medium.com', function(){
            expect(rgbToHexColor(26, 137, 23)).to.be.equal('#1A8917')
        });
    });
    describe('Test when parameters are invalid', function(){
        it ('when missing parameters expect return undefined', function(){
            expect(rgbToHexColor(255, 255)).to.be.undefined
            expect(rgbToHexColor(255)).to.be.undefined
            expect(rgbToHexColor()).to.be.undefined
        });
        it ('when parameters are invalid type', function(){
            expect(rgbToHexColor('255', 255, 255)).to.be.undefined
            expect(rgbToHexColor(255, [255], 255)).to.be.undefined
            expect(rgbToHexColor(255, {}, 255)).to.be.undefined
            expect(rgbToHexColor(255, 255, 254.3)).to.be.undefined
        });
    });
    describe('Test when parameters are number but not in range', function(){
        it ('when range is invalid', function(){
            expect(rgbToHexColor(256, 255, 255)).to.be.undefined
            expect(rgbToHexColor(255, 256, 255)).to.be.undefined
            expect(rgbToHexColor(255, 255, 256)).to.be.undefined
            expect(rgbToHexColor(256, 256, 256)).to.be.undefined
            
            expect(rgbToHexColor(-1, 255, 255)).to.be.undefined
            expect(rgbToHexColor(255, -1, 255)).to.be.undefined
            expect(rgbToHexColor(255, 255, -1)).to.be.undefined
            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined
        });
    });

})


