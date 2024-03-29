"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageController = void 0;
const common_1 = require("@nestjs/common");
const image_service_1 = require("./image.service");
let ImageController = class ImageController {
    constructor(imageService) {
        this.imageService = imageService;
    }
    async getImage(params) {
        try {
            const name = params.name;
            return this.imageService.getImageFromDB(name);
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException('Invalid', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async generateImage(params) {
        try {
            const { name } = params;
            const imageUrl = await this.imageService.generateImage(name);
            return imageUrl;
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.ImageController = ImageController;
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "getImage", null);
__decorate([
    (0, common_1.Get)('generate/:name'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "generateImage", null);
exports.ImageController = ImageController = __decorate([
    (0, common_1.Controller)('image'),
    __metadata("design:paramtypes", [image_service_1.ImageService])
], ImageController);
//# sourceMappingURL=image.controller.js.map