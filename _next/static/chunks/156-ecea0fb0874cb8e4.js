(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[156],{9610:function(e,t,n){"use strict";n.d(t,{A:function(){return a}});var r=n(5239);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function a(){let e,t,n,a,o,i,s,u,l,h;return 2===(0,r.OBj)().getNumber("WEBGL_VERSION")?(e="#version 300 es",t="in",n="out",a="in",o="texture",i="outputColor",s="out vec4 outputColor;",u=(0,r.OBj)().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",l="",h=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e="",t="attribute",n="varying",a="varying",o="texture2D",i="gl_FragColor",s="",u=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,l=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,h=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:n,varyingFs:a,texture2D:o,output:i,defineOutput:s,defineSpecialNaN:u,defineSpecialInf:l,defineRound:h}}},16:function(e,t,n){"use strict";let r,a,o;var i,s,u,l,h,c,d,p,f={};n.r(f),n.d(f,{addImpl:function(){return eg},bincountImpl:function(){return ex},bincountReduceImpl:function(){return eb},castImpl:function(){return ec},ceilImpl:function(){return eC},concatImpl:function(){return eI},equalImpl:function(){return e$},expImpl:function(){return eE},expm1Impl:function(){return ek},floorImpl:function(){return eS},gatherNdImpl:function(){return eT},gatherV2Impl:function(){return e_},greaterEqualImpl:function(){return eN},greaterImpl:function(){return eR},lessEqualImpl:function(){return eD},lessImpl:function(){return eA},linSpaceImpl:function(){return eO},logImpl:function(){return eB},maxImpl:function(){return eF},maximumImpl:function(){return eP},minimumImpl:function(){return eL},multiplyImpl:function(){return eW},negImpl:function(){return eU},notEqualImpl:function(){return eV},prodImpl:function(){return ez},raggedGatherImpl:function(){return eH},raggedTensorToTensorImpl:function(){return eZ},rangeImpl:function(){return eQ},rsqrtImpl:function(){return eJ},scatterImpl:function(){return e0},sigmoidImpl:function(){return e1},simpleAbsImpl:function(){return es},sliceImpl:function(){return e2},sparseFillEmptyRowsImpl:function(){return e3},sparseReshapeImpl:function(){return e4},sparseSegmentReductionImpl:function(){return e5},sqrtImpl:function(){return e6},squaredDifferenceImpl:function(){return e8},stridedSliceImpl:function(){return e7},stringNGramsImpl:function(){return te},stringSplitImpl:function(){return tt},stringToHashBucketFastImpl:function(){return tn},subImpl:function(){return tr},tileImpl:function(){return to},topKImpl:function(){return ts},transposeImpl:function(){return eG},uniqueImpl:function(){return tu}});var g=n(5239);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let m={},x={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function b(e,t){if(!(e in m)||null!=t){let n=function(e,t){if(1!==e&&2!==e)throw Error("Cannot get WebGL rendering context, WebGL is disabled.");let n=null==t?function(e){if("undefined"!=typeof OffscreenCanvas&&2===e)return new OffscreenCanvas(300,150);if("undefined"!=typeof document)return document.createElement("canvas");throw Error("Cannot create a canvas in this context")}(e):t;return(n.addEventListener("webglcontextlost",t=>{t.preventDefault(),delete m[e]},!1),(0,g.OBj)().getBool("SOFTWARE_WEBGL_ENABLED")&&(x.failIfMajorPerformanceCaveat=!1),1===e)?n.getContext("webgl",x)||n.getContext("experimental-webgl",x):n.getContext("webgl2",x)}(e,t);if(null===n)return console.log("Could not get context for WebGL version",e),null;m[e]=n}let r=m[e];return null==r||r.isContextLost()?(delete m[e],b(e)):(r.disable(r.DEPTH_TEST),r.disable(r.STENCIL_TEST),r.disable(r.BLEND),r.disable(r.DITHER),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SAMPLE_COVERAGE),r.enable(r.SCISSOR_TEST),r.enable(r.CULL_FACE),r.cullFace(r.BACK),m[e])}function y(e){let t=g.D5U.sizeFromShape(e),n=Math.ceil(t/4);return g.D5U.sizeToSquarishShape(n)}function v(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function w(e,t){let n,r,a,o,i,s,u,l,h,c;return 2===(0,g.OBj)().getNumber("WEBGL_VERSION")?(n=e.R32F,r=e.R16F,a=e.RGBA16F,o=e.RGBA32F,i=e.RED,u=4,l=1,h=e.HALF_FLOAT,c=e.FLOAT,s=e.RGBA8):(n=e.RGBA,r=e.RGBA,a=e.RGBA,o=e.RGBA,i=e.RGBA,u=4,l=4,h=null!=t?t.HALF_FLOAT_OES:null,c=e.FLOAT,s=e.RGBA),{internalFormatFloat:n,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:a,internalFormatPackedFloat:o,textureFormatFloat:i,downloadTextureFormat:s,downloadUnpackNumChannels:u,defaultNumChannels:l,textureTypeHalfFloat:h,textureTypeFloat:c}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function C(e,t){let n=t();return(0,g.OBj)().getBool("DEBUG")&&function(e){let t=e.getError();if(t!==e.NO_ERROR)throw Error("WebGL Error: "+function(e,t){switch(t){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}(e,t))}(e),n}function I(e,t){return N(e,()=>e.getExtension(t),'Extension "'+t+'" not supported on this browser.')}(i=h||(h={}))[i.DENSE=0]="DENSE",i[i.SHARED_BATCH=1]="SHARED_BATCH",(s=c||(c={}))[s.RENDER=0]="RENDER",s[s.UPLOAD=1]="UPLOAD",s[s.PIXELS=2]="PIXELS",s[s.DOWNLOAD=3]="DOWNLOAD",(u=d||(d={}))[u.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",u[u.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",u[u.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",u[u.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",u[u.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16";let $=/ERROR: [0-9]+:([0-9]+):/g;function E(e,t){let n=$.exec(t);if(null==n){console.log(`Couldn't parse line number in error: ${t}`),console.log(e);return}let r=+n[1],a=e.split("\n"),o=a.length.toString().length+2,i=a.map((e,t)=>g.D5U.rightPad((t+1).toString(),o)+e),s=0;for(let u=0;u<i.length;u++)s=Math.max(i[u].length,s);let l=i.slice(0,r-1),h=i.slice(r-1,r),c=i.slice(r);console.log(l.join("\n")),console.log(t.split("\n")[0]),console.log(`%c ${g.D5U.rightPad(h[0],s)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(c.join("\n"))}function k(e,t){if(C(e,()=>e.validateProgram(t)),!1===e.getProgramParameter(t,e.VALIDATE_STATUS))throw console.log(e.getProgramInfoLog(t)),Error("Shader program validation failed.")}function S(e,t,n,r,a,o,i){let s=e.getAttribLocation(t,n);return -1!==s&&(C(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),C(e,()=>e.vertexAttribPointer(s,a,e.FLOAT,!1,o,i)),C(e,()=>e.enableVertexAttribArray(s)),!0)}function T(e,t,n){C(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,n)),C(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0))}function _(e,t){C(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,t)),C(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0))}function R(e){let t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw Error("Error binding framebuffer: "+function(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}(e,t))}function N(e,t,n){let r=C(e,()=>t());if(null==r)throw Error(n);return r}function A(e,t=2){return g.D5U.sizeFromShape(e.slice(0,e.length-t))}function D(e){if(0===e.length)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function O(e){let t=[1,1,1],n=0===e.length||1===e.length&&1===e[0];return n||(t=[A(e),...D(e)]),t}function B(e,t){if(e=e.slice(-2),t=t.slice(-2),g.D5U.arraysEqual(e,t)||!e.length||!t.length||0===e[0]||0===e[1]||0===t[0]||0===t[1])return!0;if(e.length!==t.length){let n=e.slice(-1)[0],r=t.slice(-1)[0];if(n===r||n%2==0&&r%2==0&&(1===e[0]||1===t[0]))return!0}return e[1]===t[1]&&e[0]%2==0&&t[0]%2==0}function F(e,t){let n=e.getExtension(t);return null!=n}function P(e){try{let t=b(e);if(null!=t)return!0}catch(n){console.log("Error when getting WebGL context: ",n)}return!1}function L(e){let t=w(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);let r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);let a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(r),a}function W(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{null!=e&&g.D5U.assert("complex64"!==e.dtype,()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let M=(0,g.OBj)();M.registerFlag("HAS_WEBGL",()=>M.getNumber("WEBGL_VERSION")>0),M.registerFlag("WEBGL_VERSION",()=>P(2)?2:P(1)?1:0),M.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1),M.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>2===M.get("WEBGL_VERSION")),M.registerFlag("WEBGL_CPU_FORWARD",()=>!0),M.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1),M.registerFlag("WEBGL_PACK",()=>M.getBool("HAS_WEBGL")),M.registerFlag("WEBGL_PACK_NORMALIZATION",()=>M.getBool("WEBGL_PACK")),M.registerFlag("WEBGL_PACK_CLIP",()=>M.getBool("WEBGL_PACK")),M.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>M.getBool("WEBGL_PACK")),M.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>M.getBool("WEBGL_PACK")),M.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>M.getBool("WEBGL_PACK")),M.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>M.getBool("WEBGL_PACK")),M.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>M.getBool("WEBGL_PACK")),M.registerFlag("WEBGL_PACK_REDUCE",()=>M.getBool("WEBGL_PACK")),M.registerFlag("WEBGL_LAZILY_UNPACK",()=>M.getBool("WEBGL_PACK")),M.registerFlag("WEBGL_CONV_IM2COL",()=>M.getBool("WEBGL_PACK")),M.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>(function(e){if(null==r){let t=b(e);r=t.getParameter(t.MAX_TEXTURE_SIZE)}return r})(M.getNumber("WEBGL_VERSION"))),M.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>(function(e){if(null==a){let t=b(e);a=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,a)})(M.getNumber("WEBGL_VERSION"))),M.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{let e=M.getNumber("WEBGL_VERSION");return 0===e?0:function(e){if(0===e)return 0;let t=b(e);return F(t,"EXT_disjoint_timer_query_webgl2")&&2===e?2:F(t,"EXT_disjoint_timer_query")?1:0}(e)}),M.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>M.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!g.C2$.isMobile()),M.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>(function(e){if(0===e)return!1;let t=b(e);if(1===e){if(!F(t,"OES_texture_float"))return!1}else if(!F(t,"EXT_color_buffer_float"))return!1;let n=L(t);return n})(M.getNumber("WEBGL_VERSION"))),M.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>!M.getBool("WEBGL_FORCE_F16_TEXTURES")&&M.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")),M.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>(function(e){if(0===e)return!1;let t=b(e);if(1===e){if(!F(t,"OES_texture_float")||!F(t,"WEBGL_color_buffer_float"))return!1}else{if(F(t,"EXT_color_buffer_float"))return L(t);let n="EXT_color_buffer_half_float";if(F(t,n)){let r=t.getExtension(n);return function(e,t){let n=w(e,t),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,n.internalFormatHalfFloat,1,1,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);let a=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let o=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(a),o}(t,r)}return!1}let a=L(t);return a})(M.getNumber("WEBGL_VERSION"))),M.registerFlag("WEBGL_FENCE_API_ENABLED",()=>(function(e){if(2!==e)return!1;let t=b(e),n=null!=t.fenceSync;return n})(M.getNumber("WEBGL_VERSION"))),M.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>{let e=M.getBool("WEBGL_RENDER_FLOAT32_ENABLED");return e?4:0}),M.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,e=>{if(e<0&&-1!==e)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)}),M.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>g.C2$.isMobile()?1:-1,e=>{if(e<0&&-1!==e)throw Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)}),M.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128),M.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1),M.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5),M.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128),M.registerFlag("WEBGL_EXP_CONV",()=>!1),M.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>M.getBool("IS_TEST")),M.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0),M.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1),M.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);var U=n(9610),V=n(5156);function G(e,t,n){let r,a,o;let i={},s={},u={},l=[],h=null,c=null;c=e.getUniformLocation(n,"NAN",!1),1===(0,g.OBj)().getNumber("WEBGL_VERSION")&&(h=e.getUniformLocation(n,"INFINITY",!1));for(let d=0;d<t.variableNames.length;d++){let p=t.variableNames[d];i[p]=e.getUniformLocation(n,p,!1),i[`offset${p}`]=e.getUniformLocation(n,`offset${p}`,!1),t.enableShapeUniforms&&(s[`${p}Shape`]=e.getUniformLocation(n,`${p}Shape`,!1),u[`${p}TexShape`]=e.getUniformLocation(n,`${p}TexShape`,!1))}return t.enableShapeUniforms&&(r=e.getUniformLocation(n,"outShape",!1),o=e.getUniformLocation(n,"outShapeStrides",!1),a=e.getUniformLocation(n,"outTexShape",!1)),t.customUniforms&&t.customUniforms.forEach((t,r)=>{l[r]=e.getUniformLocation(n,t.name,!1)}),{uniformLocations:i,customUniformLocations:l,infLoc:h,nanLoc:c,inShapesLocations:s,inTexShapesLocations:u,outShapeLocation:r,outShapeStridesLocation:o,outTexShapeLocation:a}}function z(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach((e,n)=>{let r=e.logicalShape,a=t[n],o=a.shape;if(!g.D5U.arraysEqual(r,o))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${o} must match`);if(e.isUniform&&a.isUniform)return;let i=e.texShape,s=a.isUniform?null:a.texData.texShape;if(!g.D5U.arraysEqual(i,s))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${i} and ${s} must match`)})}function X(e){return(0,g.OBj)().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&e<=4}var H=n(8110);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class j{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=h.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let t=(0,U.A)();this.outputShape=e,this.enableShapeUniforms=X(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?H.Kn(["r","c","d"],e):H.RW(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class K{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=h.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let t=(0,U.A)();this.outputShape=e,this.enableShapeUniforms=X(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?H.Kn(["r","c","d"],e):H.RW(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class q{constructor(e){this.variableNames=["A"],this.outTexUsage=c.DOWNLOAD;let t=(0,U.A)();this.outputShape=e,this.userCode=`
      ${H.ye}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class Y{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=c.DOWNLOAD;let t=(0,U.A)();this.outputShape=e,this.userCode=`
      ${H.ye}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class Z{constructor(e,t=!1){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];let n=(0,U.A)();this.outputShape=e,this.enableShapeUniforms=X(this.outputShape.length);let r="result";t&&(r="floor(result * 255. + 0.5)"),this.userCode=`
      ${this.enableShapeUniforms?H.nc():H.ku(e)}

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);

        int r = flatIndex / texShape[1];
        int c = imod(flatIndex, texShape[1]);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
        vec4 values = ${n.texture2D}(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        ${n.output} = vec4(${r}, 0., 0., 0.);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class Q{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];let n=(0,U.A)();this.outputShape=e,this.enableShapeUniforms=X(this.outputShape.length);let r="",a="result";t&&(a="floor(result * 255. + 0.5)");for(let o=0;o<=1;o++)for(let i=0;i<=1;i++){let s=2*o+i;r+=`
          localCoords = coords;
          if(localCoords[2] + ${i} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${i};
          if (localCoords[1] + ${o} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
            localCoords[1] += ${o};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${n.texture2D}(A, uv);

            if (offset == 0) {
              result[${s}] = values[0];
            } else if (offset == 1) {
              result[${s}] = values[1];
            } else if (offset == 2) {
              result[${s}] = values[2];
            } else {
              result[${s}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?H.nc():H.ku(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${r}

          ${n.output} = ${a};
        }
    `}}function J(e,t,n,r,a,o){!function(e,t){let n=(0,g.OBj)().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e<=0||t<=0){let r=`[${e}x${t}]`;throw Error("Requested texture size "+r+" is invalid.")}if(e>n||t>n){let a=`[${e}x${t}]`,o=`[${n}x${n}]`;throw Error("Requested texture size "+a+" greater than WebGL maximum on this browser / GPU "+o+".")}}(t,n);let i=N(e,()=>e.createTexture(),"Unable to create WebGLTexture."),s=e.TEXTURE_2D;return C(e,()=>e.bindTexture(s,i)),C(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)),C(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),C(e,()=>e.texParameteri(s,e.TEXTURE_MIN_FILTER,e.NEAREST)),C(e,()=>e.texParameteri(s,e.TEXTURE_MAG_FILTER,e.NEAREST)),1===(0,g.OBj)().getNumber("WEBGL_VERSION")?C(e,()=>e.texImage2D(s,0,r,t,n,0,a,o,null)):C(e,()=>e.texStorage2D(s,1,r,t,n)),C(e,()=>e.bindTexture(e.TEXTURE_2D,null)),{texture:i,texShape:[n,t]}}function ee(e){return e.internalFormatFloat}function et(e){return e.internalFormatHalfFloat}function en(e){return e.downloadTextureFormat}function er(e){return e.internalFormatPackedFloat}function ea(e){return e.internalFormatPackedHalfFloat}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class eo{constructor(e){var t;this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];let n=(0,g.OBj)().getNumber("WEBGL_VERSION");null!=e?(this.gl=e,m[n]=e):this.gl=b(n);let r="WEBGL_color_buffer_float",a="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),1===(0,g.OBj)().getNumber("WEBGL_VERSION")){let o="OES_texture_half_float";if(this.textureFloatExtension=I(this.gl,"OES_texture_float"),F(this.gl,o))this.textureHalfFloatExtension=I(this.gl,o);else if((0,g.OBj)().get("WEBGL_FORCE_F16_TEXTURES"))throw Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(r),F(this.gl,a))this.colorBufferHalfFloatExtension=I(this.gl,a);else if((0,g.OBj)().get("WEBGL_FORCE_F16_TEXTURES"))throw Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(r="EXT_color_buffer_float",F(this.gl,r))this.colorBufferFloatExtension=this.gl.getExtension(r);else if(F(this.gl,a))this.colorBufferHalfFloatExtension=this.gl.getExtension(a);else throw Error("GL context does not support color renderable floats");this.vertexBuffer=function(e){let t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return function(e,t){let n=N(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return C(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),C(e,()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)),n}(e,t)}(this.gl),this.indexBuffer=function(e){let t=new Uint16Array([0,1,2,2,1,3]);return function(e,t){let n=N(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return C(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n)),C(e,()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)),n}(e,t)}(this.gl),this.framebuffer=N(t=this.gl,()=>t.createFramebuffer(),"Unable to create WebGLFramebuffer."),this.textureConfig=w(this.gl,this.textureHalfFloatExtension)}get debug(){return(0,g.OBj)().getBool("DEBUG")}dispose(){if(this.disposed)return;null!=this.program&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),null!=this.outputTexture&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");let e=this.gl;C(e,()=>e.finish()),C(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),C(e,()=>e.deleteFramebuffer(this.framebuffer)),C(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),C(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),C(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),function(e,t,n,r){let[a,o]=[n,t];return J(e,a,o,ee(r),r.textureFormatFloat,e.FLOAT)}(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),function(e,t,n,r){let[a,o]=[n,t];return J(e,a,o,et(r),r.textureFormatFloat,r.textureTypeHalfFloat)}(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),function(e,t,n,r){let[a,o]=[n,t];return J(e,a,o,en(r),e.RGBA,e.UNSIGNED_BYTE)}(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){var n;this.throwIfDisposed(),C(n=this.gl,()=>n.bindTexture(n.TEXTURE_2D,e)),t.data instanceof Uint8Array?2===(0,g.OBj)().getNumber("WEBGL_VERSION")?C(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,t.width,t.height,n.RGBA,n.UNSIGNED_BYTE,t.data)):C(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,t.width,t.height,0,n.RGBA,n.UNSIGNED_BYTE,t.data)):2===(0,g.OBj)().getNumber("WEBGL_VERSION")?C(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,t)):C(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)),C(n,()=>n.bindTexture(n.TEXTURE_2D,null))}uploadDenseMatrixToTexture(e,t,n,r){var a,o;let i,s,u;this.throwIfDisposed(),a=this.gl,o=this.textureConfig,C(a,()=>a.bindTexture(a.TEXTURE_2D,e)),r instanceof Uint8Array?(i=new Uint8Array(t*n*4),s=a.UNSIGNED_BYTE,u=a.RGBA):(i=new Float32Array(t*n*4),s=a.FLOAT,u=o.internalFormatPackedFloat),i.set(r),2===(0,g.OBj)().getNumber("WEBGL_VERSION")?C(a,()=>a.texSubImage2D(a.TEXTURE_2D,0,0,0,t,n,a.RGBA,s,i)):C(a,()=>a.texImage2D(a.TEXTURE_2D,0,u,t,n,0,a.RGBA,s,i)),C(a,()=>a.bindTexture(a.TEXTURE_2D,null))}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),function(e,t,n,r){let[a,o]=v(t,n);return J(e,a,o,ea(r),e.RGBA,r.textureTypeHalfFloat)}(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),function(e,t,n,r){let[a,o]=v(t,n);return J(e,a,o,er(r),e.RGBA,e.FLOAT)}(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(_(this.gl,this.framebuffer),this.outputTexture=null),C(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,n){return this.downloadMatrixDriver(e,()=>(function(e,t,n,r){let[a,o]=[n,t],i=new Uint8Array(t*n*4);return C(e,()=>e.readPixels(0,0,a,o,r.downloadTextureFormat,e.UNSIGNED_BYTE,i)),new Float32Array(i.buffer)})(this.gl,t,n,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,n,r,a,o){return function(e,t,n,r,a,o,i,s){let u=new Float32Array(function(e,t){let[n,r]=v(e,t);return n*r*4}(o,i));return e.bindBuffer(e.PIXEL_PACK_BUFFER,t),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,u),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),u}(this.gl,e,0,0,0,a,o,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return function(e,t,n){let r=new Float32Array(n);return e.bindBuffer(e.PIXEL_PACK_BUFFER,t),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,r),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),r}(this.gl,e,t)}createBufferFromTexture(e,t,n){this.bindTextureToFrameBuffer(e);let r=function(e,t,n,r){let a=e.createBuffer();C(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,a));let o=16*t*n;return C(e,()=>e.bufferData(e.PIXEL_PACK_BUFFER,o,e.STREAM_READ)),C(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,0)),C(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null)),a}(this.gl,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n;if((0,g.OBj)().getBool("WEBGL_FENCE_API_ENABLED")){let r=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=()=>{let t=e.clientWaitSync(r,0,0);return t===e.ALREADY_SIGNALED||t===e.CONDITION_SATISFIED},t=r}else(0,g.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),n=()=>this.isQueryAvailable(t,(0,g.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):n=()=>!0;return{query:t,isFencePassed:n}}downloadMatrixFromPackedTexture(e,t,n){return this.downloadMatrixDriver(e,()=>(function(e,t,n){let r=new Float32Array(t*n*4);return C(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,r)),r})(this.gl,t,n))}createProgram(e){this.throwIfDisposed();let t=this.gl;null==this.vertexShader&&(this.vertexShader=/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,U.A)(),n=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return function(e,t){let n=N(e,()=>e.createShader(e.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(C(e,()=>e.shaderSource(n,t)),C(e,()=>e.compileShader(n)),!1===e.getShaderParameter(n,e.COMPILE_STATUS))throw console.log(e.getShaderInfoLog(n)),Error("Failed to compile vertex shader.");return n}(e,n)}(t));let n=N(t,()=>t.createProgram(),"Unable to create WebGLProgram.");return C(t,()=>t.attachShader(n,this.vertexShader)),C(t,()=>t.attachShader(n,e)),!function(e,t){if(C(e,()=>e.linkProgram(t)),!(0,g.OBj)().get("ENGINE_COMPILE_ONLY")&&!1===e.getProgramParameter(t,e.LINK_STATUS))throw console.log(e.getProgramInfoLog(t)),Error("Failed to link vertex and fragment shaders.")}(t,n),this.debug&&k(t,n),this.vertexAttrsAreBound||(this.setProgram(n),this.vertexAttrsAreBound=function(e,t,n){C(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n));let r=S(e,t,"clipSpacePos",n,3,20,0);return r&&S(e,t,"uv",n,2,20,12)}(t,this.program,this.vertexBuffer)),n}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),null!=e&&C(this.gl,()=>this.gl.deleteProgram(e))}setProgram(e){this.throwIfDisposed(),this.program=e,null!=this.program&&this.debug&&k(this.gl,this.program),C(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,n=!0){var r,a;return(this.throwIfDisposed(),n)?N(r=this.gl,()=>r.getUniformLocation(e,a),'uniform "'+(a=t)+'" not present in program.'):this.gl.getUniformLocation(e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),C(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,n){var r;this.throwIfDisposed(),this.throwIfNoProgram(),C(r=this.gl,()=>{(function(e,t){let n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n){let a=`[gl.TEXTURE0, gl.TEXTURE${n}]`;throw Error(`textureUnit must be in ${a}.`)}})(r,n),C(r,()=>r.activeTexture(r.TEXTURE0+n)),C(r,()=>r.bindTexture(r.TEXTURE_2D,e))}),C(r,()=>r.uniform1i(t,n))}setOutputMatrixTexture(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)}setOutputPackedMatrixTexture(e,t,n){this.throwIfDisposed();let[r,a]=v(t,n);this.setOutputMatrixTextureDriver(e,r,a)}setOutputMatrixWriteRegion(e,t,n,r){this.setOutputMatrixWriteRegionDriver(n,e,r,t)}setOutputPackedMatrixWriteRegion(e,t,n,r){throw Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){null!=this.program&&k(this.gl,this.program),R(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let e=this.gl;this.debug&&this.debugValidate(),C(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),C(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return null==this.disjointQueryTimerExtension&&(this.disjointQueryTimerExtension=I(this.gl,2===(0,g.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(2===(0,g.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){let e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}let r=this.getQueryTimerExtensionWebGL1(),a=r.createQueryEXT();return r.beginQueryEXT(r.TIME_ELAPSED_EXT,a),a}endQuery(){if(2===(0,g.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){let e=this.gl,t=this.getQueryTimerExtensionWebGL2();e.endQuery(t.TIME_ELAPSED_EXT);return}let n=this.getQueryTimerExtensionWebGL1();n.endQueryEXT(n.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await g.D5U.repeatedTry(()=>this.disposed||this.isQueryAvailable(e,(0,g.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,(0,g.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,t){if(0===t)return null;if(2===t){let n=this.gl,r=n.getQueryParameter(e,n.QUERY_RESULT);return r/1e6}{let a=this.getQueryTimerExtensionWebGL1(),o=a.getQueryObjectEXT(e,a.QUERY_RESULT_EXT);return o/1e6}}isQueryAvailable(e,t){if(0===t)return!0;if(2===t){let n=this.gl,r=this.getQueryTimerExtensionWebGL2(),a=n.getQueryParameter(e,n.QUERY_RESULT_AVAILABLE);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),a&&!this.disjoint}{let o=this.getQueryTimerExtensionWebGL1(),i=o.getQueryObjectEXT(e,o.QUERY_RESULT_AVAILABLE_EXT);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=function(e){let t=0;for(;t<e.length;++t){let n=e[t]();if(!n)break}return t-1}(this.itemsToPoll.map(e=>e.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:n}=this.itemsToPoll[t];n()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){let n;this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1||("setTimeoutCustom"in(0,g.OBj)().platform&&(n=(0,g.OBj)().platform.setTimeoutCustom.bind((0,g.OBj)().platform)),g.D5U.repeatedTry(()=>(this.pollItems(),0===this.itemsToPoll.length),()=>0,null,n))}bindTextureToFrameBuffer(e){this.throwIfDisposed(),T(this.gl,e,this.framebuffer),this.debug&&R(this.gl)}unbindTextureToFrameBuffer(){null!=this.outputTexture?(T(this.gl,this.outputTexture,this.framebuffer),this.debug&&R(this.gl)):_(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);let n=t();return this.unbindTextureToFrameBuffer(),n}setOutputMatrixTextureDriver(e,t,n){this.throwIfDisposed();let r=this.gl;T(r,e,this.framebuffer),this.debug&&R(r),this.outputTexture=e,C(r,()=>r.viewport(0,0,t,n)),C(r,()=>r.scissor(0,0,t,n))}setOutputMatrixWriteRegionDriver(e,t,n,r){this.throwIfDisposed(),C(this.gl,()=>this.gl.scissor(e,t,n,r))}throwIfDisposed(){if(this.disposed)throw Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(null==this.program)throw Error("No GPU program is currently set.")}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function ei(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{null!=e&&g.D5U.assert("complex64"!==e.dtype,()=>`${t} does not support complex64 tensors in the CPU backend.`)})}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function es(e){let t=new Float32Array(e.length);for(let n=0;n<e.length;++n)t[n]=Math.abs(e[n]);return t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function eu(e){return(t,n,r,a,o)=>{let i=g.Wap.assertAndGetBroadcastShape(t,n),s=i.length,u=g.D5U.computeStrides(i),l=g.D5U.sizeFromShape(i),h=g.D5U.getTypedArrayFromDType(o,l),c=t.length,d=n.length,p=g.D5U.computeStrides(t),f=g.D5U.computeStrides(n),m=g.Wap.getBroadcastDims(t,i),x=g.Wap.getBroadcastDims(n,i);if(m.length+x.length===0)for(let b=0;b<h.length;++b)h[b]=e(r[b%r.length],a[b%a.length]);else for(let y=0;y<h.length;++y){let v=g.D5U.indexToLoc(y,s,u),w=v.slice(-c);m.forEach(e=>w[e]=0);let C=g.D5U.locToIndex(w,c,p),I=v.slice(-d);x.forEach(e=>I[e]=0);let $=g.D5U.locToIndex(I,d,f);h[y]=e(r[C],a[$])}return[h,i]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function el(e){let{inputs:t,backend:n}=e,{real:r,imag:a}=t,o=n.data.get(r.dataId).values,i=n.data.get(a.dataId).values,s=n.makeTensorInfo(r.shape,"complex64"),u=n.data.get(s.dataId);return u.complexTensorInfos={real:n.makeTensorInfo(r.shape,"float32",o),imag:n.makeTensorInfo(a.shape,"float32",i)},s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function eh(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function ec(e,t,n,r){if("int32"===r){let a=Int32Array.from(e);return[t,"int32",a]}if("bool"===r){let o=g.D5U.toTypedArray([0],n),[i,s]=eu((e,t)=>e!==t?1:0)(t,[],e,o,"bool");return[s,"bool",i]}throw Error(`Error in Cast: failed to cast ${n} to ${r}`)}function ed(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{dtype:o}=r;if("complex64"===o){if("complex64"===a.dtype)return eh({inputs:{x:a},backend:n});let i=/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function e(t,n,r="float32"){if("complex64"===r){let a=e(t,n,"float32"),o=e(t,n,"float32");return el({inputs:{real:a,imag:o},backend:t})}let i=g.D5U.makeZerosTypedArray(g.D5U.sizeFromShape(n),r);return t.makeTensorInfo(n,r,i)}(n,a.shape,a.dtype),s=ed({inputs:{x:a},backend:n,attrs:{dtype:"float32"}}),u=el({inputs:{real:s,imag:i},backend:n});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(s),u}if("complex64"===a.dtype){let l=/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n}=e,{input:r}=t,a=n.data.get(r.dataId).complexTensorInfos.real,o=n.data.get(a.dataId).values;return n.makeTensorInfo(a.shape,a.dtype,o)}({inputs:{input:a},backend:n}),h=ed({inputs:{x:l},backend:n,attrs:{dtype:o}});return n.disposeIntermediateTensorInfo(l),h}if(!g.D5U.hasEncodingLoss(a.dtype,o)){let c=eh({inputs:{x:a},backend:n});return{dataId:c.dataId,shape:c.shape,dtype:o}}let d=n.data.get(a.dataId).values,[p,f,m]=ec(d,a.shape,a.dtype,o);return n.makeTensorInfo(p,f,m)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function ep(e,t,n,r){return null==n?({inputs:n,backend:a})=>{let{a:o,b:i}=n;ei([o,i],e);let s=a.data.get(o.dataId).values,u=a.data.get(i.dataId).values,l="string"===o.dtype?g.Wap.fromUint8ToStringArray(s):s,h="string"===o.dtype?g.Wap.fromUint8ToStringArray(u):u,c=r||o.dtype,[d,p]=t(o.shape,i.shape,l,h,c);return a.makeTensorInfo(p,c,d)}:({inputs:e,backend:a})=>{let{a:o,b:i}=e;if("complex64"===o.dtype||"complex64"===i.dtype){let s=ed({inputs:{x:o},backend:a,attrs:{dtype:"complex64"}}),u=a.data.get(s.dataId),l=u.complexTensorInfos.real,h=u.complexTensorInfos.imag,c=a.data.get(l.dataId).values,d=a.data.get(h.dataId).values,p=ed({inputs:{x:i},backend:a,attrs:{dtype:"complex64"}}),f=a.data.get(p.dataId),g=f.complexTensorInfos.real,m=f.complexTensorInfos.imag,x=a.data.get(g.dataId).values,b=a.data.get(m.dataId).values,[y,v,w]=n(o.shape,i.shape,c,d,x,b),C=a.makeTensorInfo(w,"float32",y),I=a.makeTensorInfo(w,"float32",v),$=el({inputs:{real:C,imag:I},backend:a});return a.disposeIntermediateTensorInfo(s),a.disposeIntermediateTensorInfo(p),a.disposeIntermediateTensorInfo(C),a.disposeIntermediateTensorInfo(I),$}{let E=a.data.get(o.dataId).values,k=a.data.get(i.dataId).values,S=r||o.dtype,[T,_]=t(o.shape,i.shape,E,k,S);return a.makeTensorInfo(_,S,T)}}}function ef(e){return(t,n,r,a,o,i)=>{let s=g.Wap.assertAndGetBroadcastShape(t,n),u=g.D5U.sizeFromShape(s),l=s.length,h=g.D5U.computeStrides(s),c=g.D5U.getTypedArrayFromDType("float32",u),d=g.D5U.getTypedArrayFromDType("float32",u),p=g.Wap.getBroadcastDims(t,s),f=g.Wap.getBroadcastDims(n,s),m=g.Wap.mergeRealAndImagArrays(r,a),x=g.Wap.mergeRealAndImagArrays(o,i),b=t.length,y=g.D5U.computeStrides(t),v=n.length,w=g.D5U.computeStrides(n);if(p.length+f.length===0)for(let C=0;C<c.length;C++){let I=C%m.length,$=C%x.length,E=e(m[2*I],m[2*I+1],x[2*$],x[2*$+1]);c[C]=E.real,d[C]=E.imag}else for(let k=0;k<c.length;k++){let S=g.D5U.indexToLoc(k,l,h),T=S.slice(-b);p.forEach(e=>T[e]=0);let _=g.D5U.locToIndex(T,b,y),R=S.slice(-v);f.forEach(e=>R[e]=0);let N=g.D5U.locToIndex(R,v,w),A=e(m[2*_],m[2*_+1],x[2*N],x[2*N+1]);c[k]=A.real,d[k]=A.imag}return[c,d,s]}}g.SYM,g.Zz9,g.iJz,g.xJR,g.RFZ;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let eg=eu((e,t)=>e+t),em=ef((e,t,n,r)=>({real:e+n,imag:t+r}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function ex(e,t,n,r,a){let o=g.D5U.sizeFromShape(r),i=g.D5U.makeZerosTypedArray(a,n);for(let s=0;s<e.length;s++){let u=e[s];if(u<0)throw Error("Input x must be non-negative!");u>=a||(o>0?i[u]+=t[s]:i[u]+=1)}return i}function eb(e,t,n,r=!1){let a=e.shape[0],o=e.shape[1],i=(0,g.f3b)([a,n],t.dtype);for(let s=0;s<a;s++)for(let u=0;u<o;u++){let l=e.get(s,u);if(l<0)throw Error("Input x must be non-negative!");l>=n||(r?i.set(1,s,l):t.size>0?i.set(i.get(s,l)+t.get(s,u),s,l):i.set(i.get(s,l)+1,s,l))}return i}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function ey(e){return(t,n,r)=>{let a=g.D5U.getTypedArrayFromDType(n,t.length);for(let o=0;o<t.length;++o)a[o]=e(t[o],r);return a}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function ev(e,t,n){return({inputs:r,attrs:a,backend:o})=>{let{x:i}=r;if(ei(i,e),"string"===i.dtype||"string"===n)throw Error("unaryKernelFunc does not support string input/output");let s=o.data.get(i.dataId).values,u=g.D5U.sizeFromShape(i.shape),l=n||i.dtype,h=g.D5U.getArrayFromDType(l,u);for(let c=0;c<u;++c)h[c]=t(s[c],a);return o.makeTensorInfo(i.shape,l,h)}}function ew(e,t,n){return({inputs:r,attrs:a,backend:o})=>{let{x:i}=r;if(ei(i,e),"string"===i.dtype||"string"===n)throw Error("unaryKernelFunc does not support string input/output");let s=o.data.get(i.dataId).values,u=n||i.dtype,l=t(s,u,a);return o.makeTensorInfo(i.shape,u,l)}}ep(g.mm_,eg,em),g.mm_;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let eC=ey(e=>Math.ceil(e));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function eI(e,t,n,r){let a=g.D5U.getArrayFromDType(n,g.D5U.sizeFromShape(t));if(r&&"string"!==n){let o=0;e.forEach(e=>{let t=g.D5U.sizeFromShape(e.shape);a.set(e.vals,o),o+=t})}else{let i=0;e.forEach(e=>{let r="string"===n?g.Wap.fromUint8ToStringArray(e.vals):e.vals,o=0;for(let s=0;s<e.shape[0];++s){let u=s*t[1]+i;for(let l=0;l<e.shape[1];++l)a[u+l]=r[o++]}i+=e.shape[1]})}return a}ew(g.gJX,eC),g.gJX;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let e$=eu((e,t)=>e===t?1:0);ep(g.hdR,e$,null,"bool"),g.hdR;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let eE=ey(e=>Math.exp(e));ew(g.NEP,eE,"float32"),g.NEP;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let ek=ey(e=>Math.expm1(e));ew(g.Y0y,ek),g.Y0y;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let eS=ey(e=>Math.floor(e));/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function eT(e,t,n,r,a,o,i,s,u){let l=(0,g.f3b)([r,o],n);for(let h=0;h<r;h++){let c=[],d=0;for(let p=0;p<a;p++){let f=e[h*a+p];d+=f*i[p],c.push(f)}if(d<0||d>=u/o)throw Error(`Invalid indices: ${c} does not index into ${s}`);for(let m=0;m<o;m++)l.values[h*o+m]=t.get(...t.indexToLoc(d*o+m))}return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function e_(e,t,n){let r=(0,g.f3b)(n,e.dtype);for(let a=0;a<r.size;++a){let o=r.indexToLoc(a),i=o.slice(),s=i[0],u=i[2],l=t.locToIndex([s,u]);i[2]=t.values[l];let h=e.locToIndex(i);0<=h&&h<e.values.length&&(r.values[a]=e.values[h])}return r}ew(g.OR,eS),g.OR;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let eR=eu((e,t)=>e>t?1:0);ep(g.iZT,eR,null,"bool"),g.iZT;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let eN=eu((e,t)=>e>=t?1:0);ep(g.Acj,eN,null,"bool"),g.Acj;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let eA=eu((e,t)=>e<t?1:0);ep(g.vtC,eA,null,"bool"),g.vtC;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let eD=eu((e,t)=>e<=t?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function eO(e,t,n){let r=(t-e)/(n-1),a=g.D5U.makeZerosTypedArray(n,"float32");a[0]=e;for(let o=1;o<a.length;o++)a[o]=a[o-1]+r;return a}ep(g.CAk,eD,null,"bool"),g.CAk;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let eB=ey(e=>Math.log(e));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function eF(e,t,n,r){let a=g.D5U.getTypedArrayFromDType(r,g.D5U.sizeFromShape(n));for(let o=0;o<a.length;++o){let i=o*t,s=e[i];for(let u=0;u<t;++u){let l=e[i+u];(Number.isNaN(l)||l>s)&&(s=l)}a[o]=s}return a}ew(g.ZbH,eB),g.ZbH;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let eP=eu((e,t)=>Math.max(e,t));ep(g.BMI,eP),g.BMI;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let eL=eu((e,t)=>Math.min(e,t));ep(g.q8u,eL),g.q8u;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let eW=eu((e,t)=>e*t),eM=ef((e,t,n,r)=>({real:e*n-t*r,imag:e*r+t*n}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function eU(e,t,n){let r=g.D5U.createScalarValue(-1,n);return eW([],t,r,e,n)}ep(g.wYn,eW,eM),g.wYn,g.kuV;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let eV=eu((e,t)=>e!==t?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function eG(e,t,n,r,a){let o=t.length,i=g.D5U.sizeFromShape(t),s=g.D5U.computeStrides(t),u=g.D5U.computeStrides(a),l=g.D5U.getTypedArrayFromDType(n,g.D5U.sizeFromShape(a));for(let h=0;h<i;++h){let c=g.D5U.indexToLoc(h,o,s),d=Array(c.length);for(let p=0;p<d.length;p++)d[p]=c[r[p]];let f=g.D5U.locToIndex(d,o,u);l[f]=e[h]}return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function ez(e,t,n,r){let[a,o]=g.Wap.computeOutAndReduceShapes(e,r),i=(0,g.x8V)(t,"int32"),s=g.D5U.makeZerosTypedArray(g.D5U.sizeFromShape(a),i),u=g.D5U.sizeFromShape(o);for(let l=0;l<s.length;++l){let h=l*u,c=1;for(let d=0;d<u;++d)c*=n[h+d];s[l]=c}return{outVals:s,outShape:a,outDtype:i}}function eX(e,t){let n=e.slice(0,t);for(;n.length<t;)n.push(1);for(let r=t;r<e.length;r++)n[t-1]*=e[r];return n}function eH(e,t,n,r,a,o,i,s){if(0===e.length)throw Error("paramsNestedSplits must be non empty");if(0===t[0].length)throw Error("Split tensors must not be scalars");let u=t[0][0]-1;if(!/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){e.forEach((e,r)=>{if(e<0||e>=n){let a=g.D5U.indexToLoc(r,t.length,g.D5U.computeStrides(t)).join(",");throw Error(`indices[${a}] = ${e} is not in [0, ${n})`)}})}(o,i,u),0===r.length)throw Error("params.rank must be nonzero");let l=r[0],{outSplits:h,valueSlices:c,numValues:d}=function(e,t,n,r){let a=[],o=0,i=t.length-1+n.length,s=Array(i).fill(null).map(()=>[0]);!function(e,t){for(let n=0;n<e.length;++n){let r=e[n],a=n===e.length-1?t:e[n+1].length;if(0===r.length)throw Error("Ragged splits may not be empty");if(r[0]<0)throw Error("Ragged splits must be non-negative");if(r[r.length-1]>a)throw Error("Ragged splits must not point past values");for(let o=1;o<r.length;++o)if(r[o-1]>r[o])throw Error("Ragged splits must be sorted in ascending order")}}(n,r);let u=1;for(let l=0;l<t.length-1;++l){u*=t[l];let h=t[l+1];for(let c=1;c<u+1;++c)s[l].push(c*h)}for(let d=0;d<e.length;++d){let p=e[d],f=e[d]+1;for(let g=0;g<n.length;++g){let m=n[g],x=g+t.length-1;if(x>=0){let b=s[x],y=b[b.length-1]-m[p];for(let v=p;v<f;++v)s[x].push(m[v+1]+y)}p=m[p],f=m[f]}f!==p&&(a.push([p,f]),o+=f-p)}return{outSplits:s,valueSlices:a,numValues:o}}(o,i,e,l),p=function(e){let t=[];for(let n=0;n<e.length;++n){let r=e[n].length,a=g.D5U.getArrayFromDType("int32",r);t.push(a),e[n].forEach((e,t)=>a[t]=e)}return t}(h),f=function(e,t,n,r,a){let o=t.slice();o[0]=a;let i=g.D5U.getArrayFromDType(n,g.D5U.sizeFromShape(o)),s=e.length,u=0===s?0:s/t[0];return!function(e,t,n,r,a,o){let i=eX(t,2)[1],s=eX(o,2)[1],u=0;for(let l of n)for(let h=l[0];h<l[1];++h){for(let c=0;c<r;++c)a[u*s+c]=e[h*i+c];++u}}(e,t,r,u,i,o),[i,o]}(n,r,a,c,d);return[p,f[0],f[1]]}ep(g.yQU,eV,null,"bool"),g.yQU,g.G3Y,g.DlI;/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ var ej=g.Wap.RowPartitionType;class eK{constructor(e,t,n,r,a,o,i,s,u,l){this.shape=e,this.shapeShape=t,this.values=n,this.valuesShape=r,this.valuesDType=a,this.defaultValue=o,this.defaultValueShape=i,this.rowPartitionValues=s,this.rowPartitionValuesShapes=u,this.rowPartitionTypes=g.Wap.getRowPartitionTypesHelper(l),this.raggedRank=g.Wap.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===ej.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===ej.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){let t=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case ej.VALUE_ROWIDS:return eK.getMaxWidthValueRowID(t);case ej.ROW_SPLITS:return eK.getMaxWidthRowSplit(t);default:throw Error(`Cannot handle partition type ${ej[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){let t=e.length;if(0===t||1===t)return 0;let n=0;for(let r=0;r<t-1;++r){let a=e[r+1]-e[r];a>n&&(n=a)}return n}static getMaxWidthValueRowID(e){let t=e.length;if(0===t)return 0;let n=0,r=e[0],a=0;for(let o=1;o<t;++o){let i=e[o];i!==r&&(r=i,a=Math.max(o-n,a),n=o)}return Math.max(t-n,a)}tensorShapeFromTensor(e,t,n=!0){if(0===t.length){if(-1===e[0])return[];throw Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return eY(e,n)}calculateOutputSize(e){let t=this.valuesShape,n=this.defaultValueShape;g.Wap.validateDefaultValueShape(n,t);let r=this.tensorShapeFromTensor(this.shape,this.shapeShape),a=g.Wap.combineRaggedTensorToTensorShapes(this.raggedRank,r,t),o=a;o[0]<0&&(o[0]=e);for(let i=1;i<=this.raggedRank;++i)o[i]<0&&(o[i]=this.getMaxWidth(i));return o}calculateFirstParentOutputIndex(e,t,n){let r=Math.min(e,n),a=[],o=0;for(let i=0;i<r;++i,o+=t)a.push(o);for(let s=r;s<e;++s)a.push(-1);return g.D5U.assert(a.length===e,()=>"Final length of result must be equal to firstDimension."),a}calculateOutputIndexRowSplit(e,t,n,r){let a=e.length,o=[];for(let i=0;i<a-1;++i){let s=e[i+1]-e[i],u=Math.min(r,s),l=t[i];-1===l&&(u=0);for(let h=0;h<u;++h)o.push(l),l+=n;for(let c=0;c<s-u;++c)o.push(-1)}if(a>0&&o.length!==e[a-1])throw Error("Invalid row split size.");return o}calculateOutputIndexValueRowID(e,t,n,r){let a=e.length,o=[];if(0===a)return[];let i=0,s=e[0];if(s>=t.length)throw Error(`Got currentValueRowId=${s}, which is not less than ${t.length}`);let u=t[s];o.push(u);for(let l=1;l<a;++l){let h=e[l];if(h===s)u>=0&&(++i<r?u+=n:u=-1);else{if(i=0,s=h,h>=t.length)throw Error(`Got nextValueRowId=${h} which is not less than ${t.length}`);u=t[h]}o.push(u)}if(o.length!==e.length)throw Error("Invalid row ids.");return o}calculateOutputIndex(e,t,n,r){let a=this.getRowPartitionTensor(e),o=this.getRowPartitionTypeByDimension(e);switch(o){case ej.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(a,t,n,r);case ej.ROW_SPLITS:if(a.length-1>t.length)throw Error(`Row partition size is greater than output size: ${a.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(a,t,n,r);default:throw Error(`Unsupported partition type: ${ej[o]}`)}}getFirstDimensionSize(){let e=this.rowPartitionValues[0];if(0===this.rowPartitionTypes.length)throw Error("No row_partition_types given.");let t=this.rowPartitionTypes[0];switch(t){case ej.FIRST_DIM_SIZE:return e[0];case ej.VALUE_ROWIDS:throw Error("Cannot handle VALUE_ROWIDS in first dimension.");case ej.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw Error(`Cannot handle type ${ej[t]}`)}}compute(){let e=this.rowPartitionValues[0];if(e.length<=0)throw Error("Invalid first partition input. Tensor requires at least one element.");let t=this.getFirstDimensionSize(),n=this.calculateOutputSize(t),r=Array(this.raggedRank+1);r[r.length-1]=1;for(let a=r.length-2;a>=0;--a)r[a]=r[a+1]*n[a+1];let o=eY(n,!1),i=g.D5U.getArrayFromDType(this.valuesDType,g.D5U.sizeFromShape(o)),s=r[0]*n[0];if(s>0){let u=this.calculateFirstParentOutputIndex(t,r[0],n[0]);for(let l=1;l<=this.raggedRank;++l){let h=this.calculateOutputIndex(l-1,u,r[l],n[l]);u=h}this.setOutput(this.raggedRank,u,i,o)}return[o,i]}setOutput(e,t,n,r){if(0===n.length)return;let a=this.values,o=r.slice();o=o.slice(e+1);let i=g.D5U.sizeFromShape(o),s=t.length,u=this.defaultValue;if(u.length!==i&&1!==u.length){let l=this.defaultValueShape;(0,g.lub)(()=>{let e=(0,g.XLQ)(u,l),t=(0,g.UFq)(e,o);u=t.dataSync()})}let h=0,c=0,d=0;for(let p=0;p<=s;++p){let f=p<s?t[p]:-1;if(f===d){++d;continue}if(c<d){let m=a.subarray(h*i),x=n.subarray(c*i),b=(d-c)*i;eq(x,m,b)}if(p>=s){let y=n.length;f=Math.floor(y/i)}if(f>d){if(1===this.defaultValue.length)n.subarray(d*i,f*i).fill(this.defaultValue[0]),d=f;else for(;f>d;){let v=n.slice(d*i);eq(v,u,i),++d}}f<0?(h=p+1,c=d):(h=p,d=(c=d)+1)}}}function eq(e,t,n){for(let r=0;r<n;r++)e[r]=t[r]}function eY(e,t){let n=[];for(let r of e){if(r<0){if(!t)throw Error(`Dimension ${r} must be >= 0`);if(r<-1)throw Error(`Dimension ${r} must be >= -1`);r=-1}n.push(r)}return n}function eZ(e,t,n,r,a,o,i,s,u,l){return new eK(e,t,n,r,a,o,i,s,u,l).compute()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function eQ(e,t,n,r){let a=e<t&&n<0,o=t<e&&n>1;if(e===t||a||o)return g.D5U.makeZerosTypedArray(0,r);let i=Math.abs(Math.ceil((t-e)/n)),s=g.D5U.makeZerosTypedArray(i,r);t<e&&1===n&&(n=-1),s[0]=e;for(let u=1;u<s.length;u++)s[u]=s[u-1]+n;return s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let eJ=ey(e=>1/Math.sqrt(e));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function e0(e,t,n,r,a,o,i,s,u,l){let h=e.values,c=t.values;if(0===r)return(0,g.f3b)(n,t.dtype);let d=(0,g.f3b)([r/a,a],t.dtype);"string"==typeof u?d.values.fill(u):"number"==typeof u?d.values.fill(u):"boolean"==typeof u&&d.values.fill(+u);for(let p=0;p<o;p++){let f=[],m=0;for(let x=0;x<i;x++){let b=h[p*i+x];f.push(b),m+=b*s[x]}if(m<0||m>=r/a)throw Error(`Invalid indices: ${f} does not index into ${n}`);for(let y=0;y<a;y++)l?d.values[m*a+y]+=c[p*a+y]:d.values[m*a+y]=0===t.rank?c[0]:c[p*a+y]}return d}ew(g.bV0,eJ),g.bV0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let e1=ey(e=>1/(1+Math.exp(-e)));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function e2(e,t,n,r,a){let o=g.kuN.isSliceContinous(r,t,n),i=g.D5U.sizeFromShape(n),s=g.D5U.computeStrides(r);if(o){let u=g.kuN.computeFlatOffset(t,s);return"string"===a?e.slice(u,u+i):e.subarray(u,u+i)}let l="string"===a?g.Wap.fromUint8ToStringArray(e):e,h=(0,g.f3b)(r,a,l),c=(0,g.f3b)(n,a);for(let d=0;d<c.size;++d){let p=c.indexToLoc(d),f=p.map((e,n)=>e+t[n]);c.set(h.get(...f),...p)}return"string"===a?g.Wap.fromStringArrayToUint8(c.values):c.values}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function e3(e,t,n,r,a,o,i){let s=t[0],u=o[0],l=Array(u),h=Array(s),c=t[1];if(0===u){if(0!==s)throw Error(g.Wap.getSparseFillEmptyRowsIndicesDenseShapeMismatch(s));let d=g.D5U.getArrayFromDType(n,0),p=g.D5U.getArrayFromDType(a,0);return[d,[0,c],p,l,h]}let f=!0,m=0,x=Array(u).fill(0);for(let b=0;b<s;++b){let y=e[b*c];if(y<0)throw Error(g.Wap.getSparseFillEmptyRowsNegativeIndexErrorMessage(b,y));if(y>=u)throw Error(g.Wap.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(b,y,u));++x[y],f=f&&y>=m,m=y}let v=!0;for(let w=0;w<u;++w){let C=0===x[w];l[w]=C,v=v&&!C,x[w]=Math.max(x[w],1),w>0&&(x[w]+=x[w-1])}if(v&&f){for(let I=0;I<s;++I)h[I]=I;return[e,[s,c],r,l,h]}{let $=x[u-1],E=g.D5U.getArrayFromDType(n,$*c),k=g.D5U.getArrayFromDType(a,$),S=Array(u).fill(0);for(let T=0;T<s;++T){let _=e[T*c],R=S[_],N=(0===_?0:x[_-1])+R;S[_]++;for(let A=0;A<c;++A)E[N*c+A]=e[T*c+A];k[N]=r[T],h[T]=N}for(let D=0;D<u;++D){let O=S[D];if(0===O){let B=0===D?0:x[D-1];E[B*c+0]=D;for(let F=1;F<c;++F)E[B*c+F]=0;k[B]=i}}return[E,[$,c],k,l,h]}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function e4(e,t,n,r,a){let o=g.D5U.sizeFromShape(r),i=t[0],s=a.length,u=[],l=1,h=-1;for(let c=0;c<s;++c){let d=a[c];if(-1===d){if(-1!==h)throw Error(g.Wap.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(h,c));h=c,u.push(1)}else{if(d<0)throw Error(g.Wap.getSparseReshapeNegativeOutputDimErrorMessage(c,d));l*=d,u.push(d)}}if(-1!==h){if(l<=0)throw Error(g.Wap.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());let p=Math.trunc(o/l);if(l*p!==o)throw Error(g.Wap.getSparseReshapeInputOutputMultipleErrorMessage(r,u));u[h]=p}let f=g.D5U.sizeFromShape(u);if(f!==o)throw Error(g.Wap.getSparseReshapeInputOutputMismatchErrorMessage(r,u));let m=r.length,x=[];if(m>0){x[m-1]=1;for(let b=m-2;b>=0;--b)x[b]=x[b+1]*r[b+1]}let y=[];if(s>0){y[s-1]=1;for(let v=s-2;v>=0;--v)y[v]=y[v+1]*u[v+1]}let w=g.D5U.getArrayFromDType(n,i*s);for(let C=0;C<i;++C){let I=0;for(let $=0;$<m;++$)I+=e[C*m+$]*x[$];for(let E=0;E<s;++E)w[C*s+E]=Math.trunc(I/y[E]),I%=y[E]}return[w,[i,s],u]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function e5(e,t,n,r,a,o=!1,i=0){let s=r.length,u=[t[0],e.length/t[0]],l=u[1],h=s>0?a[s-1]+1:0;if(h<0)throw Error(g.Wap.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let c=t.slice();c[0]=h;let d=c.reduce((e,t)=>e*t,1),p=g.D5U.getArrayFromDType(n,d);if(0===s)return h>0&&p.fill(i),[p,c];if(h<=0)throw Error(g.Wap.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let f=0,m=1,x=0,b=a[0];for(;;){let y=0;if(m<s){if(b===(y=a[m])){++m;continue}if(b>=y)throw Error(g.Wap.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(b<0||b>=h)throw Error(g.Wap.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(b,h));b>x&&p.fill(i,x*l,b*l);for(let v=f;v<m;++v){let w=r[v];if(w<0||w>=u[0])throw Error(g.Wap.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(v,r[v],u[0]));for(let C=0;C<l;C++)p[b*l+C]+=e[w*l+C]}if(o)for(let I=0;I<l;I++)p[b*l+I]/=m-f;if(f=m,++m,x=b+1,b=y,m>s)break}return x<h&&p.fill(i,x*l,h*l),[p,c]}ev(g.a5O,e=>1/(1+Math.exp(-e))),g.a5O,g.p2w;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let e6=ey(e=>Math.sqrt(e));ev(g.FKq,e=>Math.sqrt(e)),g.FKq;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let e8=eu((e,t)=>{let n=e-t;return n*n});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function e7(e,t,n,r){let a=(0,g.f3b)(e,t.dtype);for(let o=0;o<a.size;o++){let i=a.indexToLoc(o),s=Array(i.length);for(let u=0;u<s.length;u++)s[u]=i[u]*n[u]+r[u];a.set(t.get(...s),...i)}return a}ep(g._tC,e8),g._tC;/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class e9{constructor(e,t,n,r,a,o){this.separator=g.D5U.encodeString(e),this.nGramWidths=t,this.leftPad=g.D5U.encodeString(n),this.rightPad=g.D5U.encodeString(r),this.padWidth=a,this.preserveShort=o}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){let n=this.getPadWidth(t);return Math.max(0,e+2*n-t+1)}createNGrams(e,t,n,r,a,o){for(let i=0;i<a;++i){let s;let u=this.getPadWidth(o),l=Math.max(0,u-i),h=Math.max(0,u-(a-(i+1))),c=o-(l+h),d=t+(l>0?0:i-u);s=0+l*this.leftPad.length;for(let p=0;p<c;++p)s+=e[d+p].length;s+=h*this.rightPad.length;let f=l+h+c-1;s+=f*this.separator.length,n[r+i]=new Uint8Array(s);let g=n[r+i],m=0,x=e=>e.forEach(e=>g[m++]=e);for(let b=0;b<l;++b)x(this.leftPad),x(this.separator);for(let y=0;y<c-1;++y)x(e[d+y]),x(this.separator);if(c>0){x(e[d+c-1]);for(let v=0;v<h;++v)x(this.separator),x(this.rightPad)}else{for(let w=0;w<h-1;++w)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(e,t){let n=e.length,r=t.length;if(r>0){let a=t[0];if(0!==a)throw Error(`First split value must be 0, got ${a}`);for(let o=1;o<r;++o){let i=t[o]>=a;if(!(i=i&&t[o]<=n))throw Error(`Invalid split value ${t[o]}, must be in [${a}, ${n}]`);a=t[o]}if(a!==n)throw Error(`Last split value must be data size. Expected ${n}, got ${a}`)}let s=r-1,u=g.D5U.getArrayFromDType("int32",r);if(0===n||0===r){let l=Array(n);for(let h=0;h<=s;++h)u[h]=0;return[l,u]}u[0]=0;for(let c=1;c<=s;++c){let d=t[c]-t[c-1],p=0;this.nGramWidths.forEach(e=>{p+=this.getNumNGrams(d,e)}),this.preserveShort&&d>0&&0===p&&(p=1),u[c]=u[c-1]+p}let f=Array(u[s]);for(let m=0;m<s;++m){let x=t[m],b=u[m];if(this.nGramWidths.forEach(n=>{let r=t[m+1]-t[m],a=this.getNumNGrams(r,n);this.createNGrams(e,x,f,b,a,n),b+=a}),this.preserveShort&&b===u[m]){let y=t[m+1]-t[m];if(0===y)continue;let v=y+2*this.padWidth;this.createNGrams(e,x,f,b,1,v)}}return[f,u]}}function te(e,t,n,r,a,o,i,s){return new e9(n,r,a,o,i,s).compute(e,t)}function tt(e,t,n){let r=e.length,a=[],o=0,i=0,s=Array(r);for(let u=0;u<r;++u){let l=a.length;!/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r){if(!e.length)return;if(0===t.length){for(let a=0;a<e.length;++a)r.push(e.subarray(a,a+1));return}if(1===t.length){let o=t[0],i=e.indexOf(o);for(;-1!==i;){let s=e.subarray(0,i);n&&0===s.length||r.push(s),i=(e=e.subarray(i+1)).indexOf(o)}n&&0===e.length||r.push(e);return}let u=0;for(let l=0;l<e.length+1;l++)if(l===e.length||-1!==t.indexOf(e[l])){let h=e.subarray(u,l);n&&0===h.length||r.push(h),u=l+1}}(e[u],t,n,a);let h=a.length-l;s[u]=h,o+=h,i=Math.max(i,h)}let c=g.D5U.getArrayFromDType("int32",2*o),d=Array(o),p=[r,i],f=0;for(let m=0;m<r;++m)for(let x=0;x<s[m];++x)c[2*f]=m,c[2*f+1]=x,d[f]=a[f],++f;return[c,d,p]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function tn(e,t){let n=g.D5U.getArrayFromDType("int32",e.length);for(let r=0;r<e.length;++r)n[r]=g.D5U.fingerPrint64(e[r]).modulo(t).getLowBitsUnsigned();return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let tr=eu((e,t)=>e-t),ta=ef((e,t,n,r)=>({real:e-n,imag:t-r}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function to(e,t){let n=Array(e.rank);for(let r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];let a=(0,g.f3b)(n,e.dtype);for(let o=0;o<a.values.length;++o){let i=a.indexToLoc(o),s=Array(e.rank);for(let u=0;u<s.length;u++)s[u]=i[u]%e.shape[u];let l=e.locToIndex(s);a.values[o]=e.values[l]}return a}ep(g.Tr8,tr,ta),g.Tr8;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let ti=(e,t)=>{let n=t.value-e.value;return 0===n?e.index-t.index:n};function ts(e,t,n,r,a){let o=t[t.length-1],[i,s]=[e.length/o,o],u=g.D5U.getTypedArrayFromDType(n,i*r),l=g.D5U.getTypedArrayFromDType("int32",i*r);for(let h=0;h<i;h++){let c=h*s,d=e.subarray(c,c+s),p=Array(d.length);d.forEach((e,t)=>p[t]={value:e,index:t}),r<p.length&&(function e(t,n,r=0,a=t.length-1){for(;a>r;){if(a-r>600){let o=a-r+1,i=n-r+1,s=Math.log(o),u=.5*Math.exp(2*s/3),l=.5*Math.sqrt(s*u*(o-u)/o)*Math.sign(i-o/2),h=Math.max(r,Math.floor(n-i*u/o+l)),c=Math.min(a,Math.floor(n+(o-i)*u/o+l));e(t,n,h,c)}let d=t[n],p=r,f=a;for(g.D5U.swap(t,r,n),ti(t[a],d)>0&&g.D5U.swap(t,r,a);p<f;){for(g.D5U.swap(t,p,f),p++,f--;0>ti(t[p],d);)p+=1;for(;ti(t[f],d)>0;)f-=1}0===ti(t[r],d)?g.D5U.swap(t,r,f):(f+=1,g.D5U.swap(t,f,a)),f<=n&&(r=f+1),n<=f&&(a=f-1)}}(p,r),p=p.slice(0,r)),a&&p.sort(ti);let f=h*r,m=u.subarray(f,f+r),x=l.subarray(f,f+r);for(let b=0;b<r;b++)m[b]=p[b].value,x[b]=p[b].index}let y=t.slice();return y[y.length-1]=r,[(0,g.f3b)(y,n,u),(0,g.f3b)(y,"int32",l)]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function tu(e,t,n,r){let a=g.D5U.parseAxisParam(t,n)[0],o=[1,n[0],1];for(let i=0;i<a;i++)o[0]*=n[i];o[1]=n[a];for(let s=a+1;s<n.length;s++)o[2]*=n[s];let u={},l=new Int32Array(n[a]),h=new g.YDk(o,r,e),c=[],d=1===o[0]&&1===o[2];for(let p=0;p<n[a];p++){let f;if(d)f=e[p].toString();else{let m=[];for(let x=0;x<o[0];x++)for(let b=0;b<o[2];b++)m.push(h.get(x,p,b));f=m.join(",")}if(void 0!==u[f])l[p]=u[f];else{let y=Object.keys(u).length;u[f]=y,l[p]=y,c.push(p)}}let v=o.slice();v[1]=Object.keys(u).length;let w=new g.YDk(v,r);c.forEach((e,t)=>{for(let n=0;n<o[0];n++)for(let r=0;r<o[2];r++)w.set(h.get(n,e,r),n,t,r)});let C=n.slice();return C[a]=v[1],{outputValues:w.values,outputShape:C,indices:l}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let{addImpl:tl,bincountImpl:th,bincountReduceImpl:tc,castImpl:td,ceilImpl:tp,concatImpl:tf,equalImpl:tg,expImpl:tm,expm1Impl:tx,floorImpl:tb,gatherNdImpl:ty,gatherV2Impl:tv,greaterImpl:tw,greaterEqualImpl:tC,lessImpl:tI,lessEqualImpl:t$,linSpaceImpl:tE,logImpl:tk,maxImpl:tS,maximumImpl:tT,minimumImpl:t_,multiplyImpl:tR,negImpl:tN,notEqualImpl:tA,prodImpl:tD,raggedGatherImpl:tO,raggedTensorToTensorImpl:tB,rangeImpl:tF,rsqrtImpl:tP,scatterImpl:tL,sigmoidImpl:tW,simpleAbsImpl:tM,sliceImpl:tU,sparseFillEmptyRowsImpl:tV,sparseReshapeImpl:tG,sparseSegmentReductionImpl:tz,sqrtImpl:tX,stridedSliceImpl:tH,stringNGramsImpl:tj,stringSplitImpl:tK,stringToHashBucketFastImpl:tq,subImpl:tY,tileImpl:tZ,topKImpl:tQ,transposeImpl:tJ,uniqueImpl:t0}=f;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function t1(e,t){return["x","y","z","w","u","v"].slice(0,t).map(t=>`${e}.${t}`)}function t2(e,t){return 1===t?[e]:t1(e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class t3{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=X(this.outputShape.length),0===this.rank)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let t=t2("rc",this.rank),n=(0,V.kW)(this.rank),r=this.getOutOfBoundsCondition(t),a=this.getSetup(t),o=this.getOutput(t);this.userCode=`
        void main() {
          ${n} rc = getOutputCoords();

          if(${r}) {
            setOutput(vec4(0));
          } else {
            ${a}

            setOutput(vec4(${o}));
          }
        }
      `}}getSourceCoordsArr(e){let t=[];for(let n=0;n<=1;n++)for(let r=0;r<=1;r++){let a=`${0===n?"r":"rp1"}, ${0===r?"c":"cp1"}`;for(let o=2;o<this.rank;o++)a=`${e[e.length-1-o]},`+a;t.push(a)}return t}getOutOfBoundsCondition(e){if(1===this.rank)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let n=this.rank-2;n<this.rank;n++)t+=`${e[n]} >= ${this.enableShapeUniforms?`outShape[${n}]`:this.outputShape[n]}`,n<this.rank-1&&(t+="||");return t}getSetup(e){if(1===this.rank)return"";let t=e.slice(-2),n=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],r=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${n};
      bool rEdge = rp1 >= ${r};
    `}getOutput(e){let t=this.getSourceCoordsArr(e);if(1===this.rank){let n=this.enableShapeUniforms?"outShape":this.outputShape[0];return`getA(rc), (rc + 1 >= ${n} ? 0. : getA(rc + 1)), 0, 0`}return`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class t4{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=X(this.outputShape.length);let n="";for(let r=0;r<4;r++){let a="thisRC = rc;";r%2==1&&(a+="thisRC.z += 1;"),r>1&&(a+="thisRC.y += 1;"),n+=`
        ${a}
        ${r>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${r}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${r>0?"}":""}
      `}this.userCode=`
      ${function(e,t){let n=t?H.al(["r","c","d"],"inputShape"):H.RW(["r","c","d"],e);return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${n}
      return ivec3(r, c, d);
    }
  `}(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?H.nc():H.ku(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${n}

        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class t5{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(e,t,n){let r;let a=t8(t,n),o=t7(e,a,n);o in this.freeTextures||(this.freeTextures[o]=[]),o in this.usedTextures||(this.usedTextures[o]=[]);let i=t6(e,a,this.gpgpu.gl,this.gpgpu.textureConfig,n);if(this.freeTextures[o].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();let s=this.freeTextures[o].shift();return this.usedTextures[o].push(s),s}return a===d.PACKED_2X2_FLOAT32?r=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):a===d.PACKED_2X2_FLOAT16?r=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):a===d.UNPACKED_FLOAT32?r=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):a===d.UNPACKED_FLOAT16?r=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):a===d.PACKED_4X1_UNSIGNED_BYTE&&(r=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[o].push(r),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),r}releaseTexture(e,t,n,r){if(null==this.freeTextures)return;let a=t8(n,r),o=t7(t,a,r);o in this.freeTextures||(this.freeTextures[o]=[]);let i=t6(t,a,this.gpgpu.gl,this.gpgpu.textureConfig,r),s=(0,g.OBj)().get("WEBGL_DELETE_TEXTURE_THRESHOLD");-1!==s&&this._numBytesAllocated>s?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=i):(this.freeTextures[o].push(e),this.numFreeTextures++,this._numBytesFree+=i),this.numUsedTextures--;let u=this.usedTextures[o],l=u.indexOf(e);if(l<0)throw Error("Cannot release a texture that was never provided by this texture manager");u.splice(l,1),this.log()}log(){if(!this.logEnabled)return;let e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);let t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(null!=this.freeTextures){for(let e in this.freeTextures)this.freeTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(let t in this.usedTextures)this.usedTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function t6(e,t,n,r,a){let o;let i=function(e,t){switch(e){case d.PACKED_2X2_FLOAT32:return er(t);case d.PACKED_2X2_FLOAT16:return ea(t);case d.UNPACKED_FLOAT32:return ee(t);case d.UNPACKED_FLOAT16:return et(t);case d.PACKED_4X1_UNSIGNED_BYTE:return en(t);default:throw Error(`Unknown physical texture type ${e}`)}}(t,r);if(a){let[s,u]=v(e[0],e[1]);o=s*u}else{var l;let[h,c]=(l=e[0],[e[1],l]);o=h*c}let p=function(e,t){if(t===e.R32F)return 4;if(t===e.R16F)return 2;if(t===e.RGBA32F||t===e.RGBA)return 16;if(t===e.RGBA16F)return 8;if(t===e.RGBA8)return 4;throw Error(`Unknown internal format ${t}`)}(n,i);return o*p}function t8(e,t){if(e===c.UPLOAD)return d.PACKED_2X2_FLOAT32;if(e===c.RENDER||null==e)return(0,g.OBj)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?d.PACKED_2X2_FLOAT32:d.UNPACKED_FLOAT32:t?d.PACKED_2X2_FLOAT16:d.UNPACKED_FLOAT16;if(e===c.DOWNLOAD||e===c.PIXELS)return d.PACKED_4X1_UNSIGNED_BYTE;throw Error(`Unknown logical texture type ${e}`)}function t7(e,t,n){return`${e[0]}_${e[1]}_${t}_${n}`}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class t9{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=X(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}let ne="if (isnan(x)) return x;",nt="return abs(x);",nn=ne+`
  return (x < 0.0) ? 0.0 : x;
`,nr=ne+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,na="return x;",no=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,ni=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,ns=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;class nu{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=X(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class nl{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=X(this.outputShape.length);let t=e.length,n=t2("rc",t),r=(0,V.kW)(t),a=function(e,t){if(1===e)return"rc";let n="";for(let r=0;r<e;r++)n+=t[r],r<e-1&&(n+=",");return n}(t,n),o=n.slice(-2),i=t<=1?"rc":`vec2(${o.join(",")})`;this.userCode=`
      void main() {
        ${r} rc = getOutputCoords();
        vec4 packedInput = getA(${a});

        setOutput(getChannel(packedInput, ${i}));
      }
    `}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let nh=g.GDt.ZA,nc={},nd=(0,g.OBj)().getNumber("CPU_HANDOFF_SIZE_THRESHOLD");class np extends g.Zuw{constructor(e){let t;if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!(0,g.OBj)().getBool("HAS_WEBGL"))throw Error("WebGL is not supported on this device");if(null!=e){if(e instanceof eo)t=e;else{let n=b((0,g.OBj)().getNumber("WEBGL_VERSION"),e);t=new eo(n)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{var r;let a=b((0,g.OBj)().getNumber("WEBGL_VERSION"));t=new eo(a),this.binaryCache=((r=(0,g.OBj)().getNumber("WEBGL_VERSION"))in nc||(nc[r]={}),nc[r]),this.gpgpuCreatedLocally=!0}this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new t5(this.gpgpu),this.numMBBeforeWarning=null==(0,g.OBj)().global.screen?1024:(0,g.OBj)().global.screen.height*(0,g.OBj)().global.screen.width*window.devicePixelRatio*600/1024/1024,this.texData=new g.JLz(this,(0,g.SRH)())}nextDataId(){return np.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}write(e,t,n){if(((0,g.OBj)().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||(0,g.OBj)().getBool("DEBUG"))&&this.checkNumericalProblems(e),"complex64"===n&&null!=e)throw Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");let r={id:this.nextDataId()};return this.texData.set(r,{shape:t,dtype:n,values:e,usage:c.UPLOAD,refCount:1}),r}refCount(e){if(this.texData.has(e)){let t=this.texData.get(e);return t.refCount}return 0}incRef(e){let t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){let t=this.texData.get(e);t.refCount--}}move(e,t,n,r,a){if((0,g.OBj)().getBool("DEBUG")&&this.checkNumericalProblems(t),"complex64"===r)throw Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:n,dtype:r,values:t,usage:c.UPLOAD,refCount:a})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){let t,n;let r=this.texData.get(e),{values:a,dtype:o,complexTensorInfos:i,slice:s,shape:u,isPacked:l}=r;if(null!=s){let h;h=l?new nu(u,na):new t9(u,na);let c=this.runWebGLProgram(h,[{dataId:e,shape:u,dtype:o}],o),d=this.readSync(c.dataId);return this.disposeIntermediateTensorInfo(c),d}if(null!=a)return this.convertAndCacheOnCPU(e);if("string"===o)return a;let p=null!=this.activeTimers;if(p&&(t=g.D5U.now()),"complex64"===o){let f=this.readSync(i.real.dataId),m=this.readSync(i.imag.dataId);n=g.Wap.mergeRealAndImagArrays(f,m)}else n=this.getValuesFromTexture(e);return p&&(this.downloadWaitMs+=g.D5U.now()-t),this.convertAndCacheOnCPU(e,n)}async read(e){let t,n;if(this.pendingRead.has(e)){let r=this.pendingRead.get(e);return new Promise(e=>r.push(e))}let a=this.texData.get(e),{values:o,shape:i,slice:s,dtype:u,complexTensorInfos:l,isPacked:h}=a;if(null!=s){let c;c=h?new nu(i,na):new t9(i,na);let d=this.runWebGLProgram(c,[{dataId:e,shape:i,dtype:u}],u),p=this.read(d.dataId);return this.disposeIntermediateTensorInfo(d),p}if(null!=o)return this.convertAndCacheOnCPU(e);if((0,g.OBj)().getBool("DEBUG")&&!(0,g.OBj)().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&2===(0,g.OBj)().getNumber("WEBGL_VERSION"))throw Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let f=null;if("complex64"!==u&&(0,g.OBj)().get("WEBGL_BUFFER_SUPPORTED")){t=this.decode(e);let m=this.texData.get(t.dataId);f=this.gpgpu.createBufferFromTexture(m.texture.texture,...y(i))}if(this.pendingRead.set(e,[]),"complex64"!==u&&await this.gpgpu.createAndWaitForFence(),"complex64"===u){let x=await Promise.all([this.read(l.real.dataId),this.read(l.imag.dataId)]),b=x[0],v=x[1];n=g.Wap.mergeRealAndImagArrays(b,v)}else if(null==f)n=this.getValuesFromTexture(e);else{let w=g.D5U.sizeFromShape(i);n=this.gpgpu.downloadFloat32MatrixFromBuffer(f,w)}if(null!=t&&this.disposeIntermediateTensorInfo(t),null!=f){let I=this.gpgpu.gl;C(I,()=>I.deleteBuffer(f))}let $=this.convertAndCacheOnCPU(e,n),E=this.pendingRead.get(e);return this.pendingRead.delete(e),E.forEach(e=>e($)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&(0,g.SRH)().removeDataId(e,this),this.pendingDeletes--),$}readToGPU(e,t={}){let n=this.texData.get(e),{values:r,shape:a,slice:o,dtype:i,isPacked:s,texture:u}=n;if("complex64"===i)throw Error("Does not support reading texture for complex64 dtype.");if(null!=o){let l;l=s?new nu(a,na):new t9(a,na);let h=this.runWebGLProgram(l,[{dataId:e,shape:a,dtype:i}],i),c=this.readToGPU(h,t);return this.disposeIntermediateTensorInfo(h),c}if(null==u){if(null!=r)throw Error("Data is not on GPU but on CPU.");throw Error("There is no data on GPU or CPU.")}let d=this.decode(e,t.customTexShape),p=(0,g.SRH)().makeTensorFromTensorInfo(d),f=this.texData.get(d.dataId);return Object.assign({tensorRef:p},f.texture)}bufferSync(e){let t=this.readSync(e.dataId);if("string"===e.dtype)try{let n=t.map(e=>g.D5U.decodeString(e));return(0,g.f3b)(e.shape,e.dtype,n)}catch(r){throw Error("Failed to decode encoded string bytes into utf-8")}return(0,g.f3b)(e.shape,e.dtype,t)}checkNumericalProblems(e){if(null!=e)for(let t=0;t<e.length;t++){let n=e[t];if(!((0,g.OBj)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||0===n||596e-10<Math.abs(n)&&65504>Math.abs(n))){if((0,g.OBj)().getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))throw Error(`The value ${n} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`);throw Error(`The value ${n} cannot be represented on this device.`)}}}getValuesFromTexture(e){let{shape:t,dtype:n,isPacked:r}=this.texData.get(e),a=g.D5U.sizeFromShape(t);if((0,g.OBj)().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){let o=this.decode(e),i=this.texData.get(o.dataId),s=this.gpgpu.downloadMatrixFromPackedTexture(i.texture.texture,...y(t)).subarray(0,a);return this.disposeIntermediateTensorInfo(o),s}let u=(0,g.OBj)().getBool("WEBGL_PACK")&&!0===r,l=u?O(t):t,h=u?new Y(l):new q(l),c=this.runWebGLProgram(h,[{shape:l,dtype:n,dataId:e}],"float32"),d=this.texData.get(c.dataId),p=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(d.texture.texture,d.texShape[0],d.texShape[1]).subarray(0,a);return this.disposeIntermediateTensorInfo(c),p}timerAvailable(){return(0,g.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){let t=this.activeTimers,n=[],r=!1;null==this.programTimersStack?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,e();let a=g.D5U.flatten(this.activeTimers.map(e=>e.query)).filter(e=>null!=e),o=g.D5U.flatten(this.activeTimers.map(e=>e.name)).filter(e=>null!=e);this.activeTimers=t,r&&(this.programTimersStack=null);let i={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if((0,g.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){let e=await Promise.all(a);i.kernelMs=g.D5U.sum(e),i.getExtraProfileInfo=()=>e.map((e,t)=>({name:o[t],ms:e})).map(e=>`${e.name}: ${e.ms}`).join(", ")}else i.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,i})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return(0,g.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:g.D5U.now(),endMs:null}}endTimer(e){return(0,g.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=g.D5U.now(),e)}async getQueryTime(e){return(0,g.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.waitForQueryAndGetTime(e):e.endMs-e.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);let{complexTensorInfos:n}=this.texData.get(e);return null!=n&&(this.disposeData(n.real.dataId,t),this.disposeData(n.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){let{texture:t,dtype:n,texShape:r,usage:a,isPacked:o,slice:i}=this.texData.get(e),s=i&&i.origDataId||e,u=this.dataRefCount.get(s);u>1?this.dataRefCount.set(s,u-1):(this.dataRefCount.delete(s),null!=t&&(this.numBytesInGPU-=this.computeBytes(r,n),this.textureManager.releaseTexture(t,r,a,o)));let l=this.texData.get(e);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=nd){return(0,g.OBj)().getBool("WEBGL_CPU_FORWARD")&&e.every(e=>null==this.texData.get(e.dataId).texture&&g.D5U.sizeFromShape(e.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){g.Wap.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");let t=e.dataSync();return nh(e.shape,t)}packedUnaryOp(e,t,n){let r=new nu(e.shape,t),a=this.compileAndRun(r,[e],n);return(0,g.SRH)().makeTensorFromTensorInfo(a)}abs(e){if(this.shouldExecuteOnCPU([e])&&"complex64"!==e.dtype){let t=tM(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,t)}if((0,g.OBj)().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,nt,e.dtype);let n=new t9(e.shape,nt),r=this.compileAndRun(n,[e]);return(0,g.SRH)().makeTensorFromTensorInfo(r)}makeTensorInfo(e,t,n){let r;if("string"===t&&null!=n&&n.length>0&&g.D5U.isString(n[0])){let a=n.map(e=>g.D5U.encodeString(e));r=this.write(a,e,t)}else r=this.write(n,e,t);return this.texData.get(r).usage=null,{dataId:r,shape:e,dtype:t}}makeOutput(e,t,n){return(0,g.SRH)().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,n),this)}unpackTensor(e){let t=new nl(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){let t=new t3(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){let n=[A(e.shape),...D(e.shape)],r={dtype:e.dtype,shape:n,dataId:e.dataId},a=[A(t),...D(t)],o=new t4(a,n),i=this.runWebGLProgram(o,[r],e.dtype,[n],!0);return{dataId:i.dataId,shape:t,dtype:i.dtype}}decode(e,t){let n;let r=this.texData.get(e),{isPacked:a,shape:o,dtype:i}=r;if(null!=t){let s=g.D5U.sizeFromShape(o),u=t[0]*t[1]*4;g.D5U.assert(s<=u,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}let l=O(o);n=a?new K(l):new j(l);let h=[null!=t?t:y(l)],c=this.runWebGLProgram(n,[{shape:l,dtype:i,dataId:e}],i,h,!0,t);return{dtype:i,shape:o,dataId:c.dataId}}runWebGLProgram(e,t,n,r,a=!1,o){let i;let s=this.makeTensorInfo(e.outputShape,n),u=this.texData.get(s.dataId);if(e.packedOutput&&(u.isPacked=!0),e.outPackingScheme===h.DENSE){let l=null!=o?o:y(e.outputShape);u.texShape=l.map(e=>2*e)}if(null!=e.outTexUsage&&(u.usage=e.outTexUsage),0===g.D5U.sizeFromShape(s.shape))return u.values=g.D5U.getTypedArrayFromDType(s.dtype,0),s;let c=[],d=t.map(t=>{if("complex64"===t.dtype)throw Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let n=this.texData.get(t.dataId);if(null==n.texture){if(!e.packedInputs&&g.D5U.sizeFromShape(t.shape)<=(0,g.OBj)().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:t.shape,texData:null,isUniform:!0,uniformValues:n.values};e.packedInputs&&(n.isPacked=!0,n.shape=t.shape)}if(this.uploadToGPU(t.dataId),!!n.isPacked!=!!e.packedInputs)t=n.isPacked?this.unpackTensor(t):this.packTensor(t),c.push(t),n=this.texData.get(t.dataId);else if(n.isPacked&&!B(n.shape,t.shape)){let r=t,a=t.shape;t.shape=n.shape,t=this.packedReshape(t,a),c.push(t),n=this.texData.get(t.dataId),r.shape=a}return{shape:t.shape,texData:n,isUniform:!1}});this.uploadToGPU(s.dataId);let p={shape:s.shape,texData:u,isUniform:!1},f=function(e,t,n){let r="";t.concat(n).forEach(t=>{let a=null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!t.isUniform){let o=t.texData.texShape,{useSqueezeShape:i,uniformShape:s,keptDims:u}=V.Tt(e.packedInputs,t.shape,o),l="",h="",c="";if(1===s.length&&e.packedInputs){let d=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];l=`${d[0]>1}_${d[1]>1}`}else if(2!==s.length||e.packedInputs){if(s.length>2&&!e.packedInputs){let p=g.D5U.computeStrides(s);c=`${p[0]===o[1]}_${p[p.length-1]===o[1]}`}}else h=`${s[0]>1}_${s[1]>1}`;let f=t.shape.length,m=2===s.length&&g.D5U.arraysEqual(t.shape,o),x=1===g.D5U.sizeFromShape(t.shape),b=g.Wap.getBroadcastDims(t.shape,n.shape),y=!e.packedInputs&&f===n.shape.length&&g.D5U.arraysEqual(o,n.texData.texShape),v=e.packedInputs||s.length>2?"":`${o[0]>1}_${o[1]>1}`;r+=`${f}_${y}_${i?u:""}_${s.length}_${x}_${b}_${m}_${l}_${h}_${c}_${v}_${a}`}else{let w=t.isUniform?"uniform":t.texData.texShape;r+=`${t.shape}_${w}_${a}`}});let a=e.userCode;return e.constructor.name+("_"+r+"_"+a)+`${(0,g.OBj)().getNumber("WEBGL_VERSION")}`}(e,d,p),m=this.getAndSaveBinary(f,()=>/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ (function(e,t,n,r){let a=n.map((e,n)=>{let r={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:!e.isUniform&&e.texData.isPacked,flatOffset:null};return null!=e.texData&&null!=e.texData.slice&&e.texData.slice.flatOffset>0&&(r.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[n],shapeInfo:r}}),o=a.map(e=>e.shapeInfo),i={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},s=V.Vm(a,i,t),u=function(e,t){let n=N(e,()=>e.createShader(e.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(C(e,()=>e.shaderSource(n,t)),C(e,()=>e.compileShader(n)),(0,g.OBj)().get("ENGINE_COMPILE_ONLY"))return n;if(!1===e.getShaderParameter(n,e.COMPILE_STATUS))throw E(t,e.getShaderInfoLog(n)),Error("Failed to compile fragment shader.");return n}(e.gl,s),l=e.createProgram(u);return(0,g.OBj)().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:u,source:s,webGLProgram:l,inShapeInfos:o,outShapeInfo:i,uniformLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,inShapesLocations:null,inTexShapesLocations:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:t,fragmentShader:u,source:s,webGLProgram:l,inShapeInfos:o,outShapeInfo:i},G(e,t,l))})(this.gpgpu,e,d,p)),x=null!=this.activeTimers;x&&(i=this.startTimer()),(0,g.OBj)().get("ENGINE_COMPILE_ONLY")||function(e,t,n,r,a){t.program.enableShapeUniforms||(z(t.inShapeInfos,n),z([t.outShapeInfo],[r]));let o=r.texData.texture,i=r.texData.texShape;r.texData.isPacked?e.setOutputPackedMatrixTexture(o.texture,i[0],i[1]):e.setOutputMatrixTexture(o.texture,i[0],i[1]),e.setProgram(t.webGLProgram),1===(0,g.OBj)().getNumber("WEBGL_VERSION")&&null!==t.infLoc&&e.gl.uniform1f(t.infLoc,1/0),null!==t.nanLoc&&e.gl.uniform1f(t.nanLoc,NaN),n.forEach((n,r)=>{let a=t.program.variableNames[r],o=t.uniformLocations[a],i=t.uniformLocations[`offset${a}`],s=t.inShapesLocations[`${a}Shape`],u=t.inTexShapesLocations[`${a}TexShape`];if(s){let{uniformShape:l}=V.Tt(t.program.packedInputs,n.shape,n.texData.texShape);switch(l.length){case 1:e.gl.uniform1iv(s,new Int32Array(l));break;case 2:e.gl.uniform2iv(s,new Int32Array(l));break;case 3:e.gl.uniform3iv(s,new Int32Array(l));break;case 4:e.gl.uniform4iv(s,new Int32Array(l))}}if(u&&e.gl.uniform2i(u,n.texData.texShape[0],n.texData.texShape[1]),null!=o){if(n.isUniform){if(2>g.D5U.sizeFromShape(n.shape))e.gl.uniform1f(o,n.uniformValues[0]);else{let h=n.uniformValues;h instanceof Float32Array||(h=new Float32Array(h)),e.gl.uniform1fv(o,h)}return}null!=n.texData.slice&&null!=i&&e.gl.uniform1i(i,n.texData.slice.flatOffset),e.setInputMatrixTexture(n.texData.texture.texture,o,r)}});let s=t.outShapeLocation;if(s)switch(r.shape.length){case 1:e.gl.uniform1iv(s,new Int32Array(r.shape));break;case 2:e.gl.uniform2iv(s,new Int32Array(r.shape));break;case 3:e.gl.uniform3iv(s,new Int32Array(r.shape));break;case 4:e.gl.uniform4iv(s,new Int32Array(r.shape))}if(t.outShapeStridesLocation){let u=g.D5U.computeStrides(r.shape);switch(r.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(u));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(u));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(u))}}t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,r.texData.texShape[0],r.texData.texShape[1]),t.program.customUniforms&&a&&t.program.customUniforms.forEach((n,r)=>{let o=t.customUniformLocations[r],i=a[r];if("float"===n.type)e.gl.uniform1fv(o,i);else if("vec2"===n.type)e.gl.uniform2fv(o,i);else if("vec3"===n.type)e.gl.uniform3fv(o,i);else if("vec4"===n.type)e.gl.uniform4fv(o,i);else if("int"===n.type)e.gl.uniform1iv(o,i);else if("ivec2"===n.type)e.gl.uniform2iv(o,i);else if("ivec3"===n.type)e.gl.uniform3iv(o,i);else if("ivec4"===n.type)e.gl.uniform4iv(o,i);else throw Error(`uniform type ${n.type} is not supported yet.`)}),e.executeProgram()}(this.gpgpu,m,d,p,r),c.forEach(e=>this.disposeIntermediateTensorInfo(e)),x&&(i=this.endTimer(i),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(i)}));let b=(0,g.OBj)().get("WEBGL_FLUSH_THRESHOLD");if(b>0){let v=g.D5U.now();v-this.lastGlFlushTime>b&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=v)}if(!(0,g.OBj)().getBool("WEBGL_LAZILY_UNPACK")&&u.isPacked&&!1===a){let w=this.unpackTensor(s);return this.disposeIntermediateTensorInfo(s),w}return s}compileAndRun(e,t,n,r,a=!1){n=n||t[0].dtype;let o=this.runWebGLProgram(e,t,n,r,a);return o}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){if(!this.disposed){if(!(0,g.OBj)().getBool("IS_TEST")){let e=Object.keys(this.binaryCache);e.forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]})}this.textureManager.dispose(),null!=this.canvas&&"undefined"!=typeof HTMLCanvasElement&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0}}floatPrecision(){return null==this.floatPrecisionValue&&(this.floatPrecisionValue=(0,g.lub)(()=>{if(!(0,g.OBj)().get("WEBGL_RENDER_FLOAT32_ENABLED")){let e=(0,g.OBj)().getBool("DEBUG");(0,g.OBj)().set("DEBUG",!1);let t=this.abs((0,g.iD$)(1e-8)).dataSync()[0];if((0,g.OBj)().set("DEBUG",e),t>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}uploadToGPU(e){let t;let n=this.texData.get(e),{shape:r,dtype:a,values:o,texture:i,usage:s,isPacked:u}=n;if(null!=i)return;let l=null!=this.activeTimers;l&&(t=g.D5U.now());let h=n.texShape;if(null==h&&(h=function(e,t=!1){let n=(0,g.OBj)().getNumber("WEBGL_MAX_TEXTURE_SIZE"),r=(0,g.OBj)().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");if(r===1/0&&(0,g.OBj)().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(r=n/2),t&&(n*=2,r*=2,1===(e=e.map((t,n)=>n>=e.length-2?g.D5U.nearestLargerEven(e[n]):e[n])).length&&(e=[2,e[0]])),2!==e.length){let a=g.D5U.squeezeShape(e);e=a.newShape}let o=g.D5U.sizeFromShape(e),i=null;e.length<=1&&o<=n?i=[1,o]:2===e.length&&e[0]<=n&&e[1]<=n?i=e:3===e.length&&e[0]*e[1]<=n&&e[2]<=n?i=[e[0]*e[1],e[2]]:3===e.length&&e[0]<=n&&e[1]*e[2]<=n?i=[e[0],e[1]*e[2]]:4===e.length&&e[0]*e[1]*e[2]<=n&&e[3]<=n?i=[e[0]*e[1]*e[2],e[3]]:4===e.length&&e[0]<=n&&e[1]*e[2]*e[3]<=n&&(i=[e[0],e[1]*e[2]*e[3]]);let s=null!=i&&Math.max(...i)>r&&Math.min(...i)<=(t?2:1)&&Math.min(...i)>0;if(null==i||s){if(t){let u=A(e),l=2,h=2;e.length&&([l,h]=D(e)),o=u*(l/2)*(h/2),i=g.D5U.sizeToSquarishShape(o).map(e=>2*e)}else i=g.D5U.sizeToSquarishShape(o)}return i}(r,u),n.texShape=h),null!=o){let d;let p=O(r),f=h[1],m=h[0],x=o instanceof Uint8Array||o instanceof Uint8ClampedArray;(u||!x)&&([f,m]=v(h[0],h[1])),d=u?new Q(p,x):new Z(p,x);let b=x?[m,f]:h,y=this.makeTensorInfo(b,a),w=this.texData.get(y.dataId);x?w.usage=c.PIXELS:w.usage=c.UPLOAD,w.texShape=b,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(y.dataId),f,m,o);let C=[[m,f]],I=this.runWebGLProgram(d,[y],a,C,!0),$=this.texData.get(I.dataId);n.texShape=$.texShape,n.isPacked=$.isPacked,n.usage=$.usage,(0,g.OBj)().get("ENGINE_COMPILE_ONLY")?this.disposeData(I.dataId):(n.texture=$.texture,n.values=null,this.texData.delete(I.dataId)),this.disposeIntermediateTensorInfo(y),l&&(this.uploadWaitMs+=g.D5U.now()-t)}else{let E=this.acquireTexture(h,s,a,u);n.texture=E}}convertAndCacheOnCPU(e,t){let n=this.texData.get(e),{dtype:r}=n;return this.releaseGPUData(e),null!=t&&(n.values=function(e,t){if("float32"===t||"complex64"===t)return e;if("int32"===t||"bool"===t){let n="int32"===t?new Int32Array(e.length):new Uint8Array(e.length);for(let r=0;r<n.length;++r)n[r]=Math.round(e[r]);return n}throw Error(`Unknown dtype ${t}`)}(t,r)),n.values}acquireTexture(e,t,n,r){if(this.numBytesInGPU+=this.computeBytes(e,n),!this.warnedAboutMemory&&this.numBytesInGPU>1048576*this.numMBBeforeWarning){let a=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${a} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,r)}computeBytes(e,t){return e[0]*e[1]*g.D5U.bytesPerElement(t)}checkCompileCompletion(){for(let[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){let e=[];if(this.gpgpu.parallelCompilationExtension){for(let[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}for(let[,n]of Object.entries(this.binaryCache)){let r=new Promise(e=>{try{this.checkCompletion_(n),e(!0)}catch(t){throw t}});e.push(r)}return Promise.all(e)}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await (0,g.glt)(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(!1===this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)){if(console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),!1===this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS))throw E(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),Error("Failed to compile fragment shader.");throw Error("Failed to link vertex and fragment shaders.")}return!0}getUniformLocations(){for(let[,e]of Object.entries(this.binaryCache)){let{uniformLocations:t,customUniformLocations:n,infLoc:r,nanLoc:a,inShapesLocations:o,inTexShapesLocations:i,outShapeLocation:s,outShapeStridesLocation:u,outTexShapeLocation:l}=G(this.gpgpu,e.program,e.webGLProgram);e.uniformLocations=t,e.customUniformLocations=n,e.infLoc=r,e.nanLoc=a,e.inShapesLocations=o,e.inTexShapesLocations=i,e.outShapeLocation=s,e.outShapeStridesLocation=u,e.outTexShapeLocation=l}}}np.nextDataId=0,g.C2$.isBrowser()&&(0,g.jqO)("webgl",()=>new np,2);/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let nf=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class ng{constructor(e,t,n){this.variableNames=["A","B"],this.outputShape=g.Wap.assertAndGetBroadcastShape(t,n),this.enableShapeUniforms=X(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let nm=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class nx{constructor(e,t,n,r=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=g.Wap.assertAndGetBroadcastShape(t,n);let a=this.outputShape.length;this.enableShapeUniforms=X(a);let o="";if(r){if(0===a||1===g.D5U.sizeFromShape(this.outputShape))o=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else{let i=(0,V.kW)(a);if(o=`
          ${i} coords = getOutputCoords();
        `,1===a)this.enableShapeUniforms?o+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:o+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let s=t2("coords",a);this.enableShapeUniforms?o+=`
            bool nextRowOutOfBounds =
              (${s[a-2]} + 1) >= outShape[${a} - 2];
            bool nextColOutOfBounds =
              (${s[a-1]} + 1) >= outShape[${a} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:o+=`
            bool nextRowOutOfBounds =
              (${s[a-2]} + 1) >= ${this.outputShape[a-2]};
            bool nextColOutOfBounds =
              (${s[a-1]} + 1) >= ${this.outputShape[a-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}}}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${o}

        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function nb(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}let ny={kernelName:g.iJz,backendName:"webgl",kernelFunc:nb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function nv(e){let{inputs:t,backend:n}=e,{real:r,imag:a}=t,o=n.makeTensorInfo(r.shape,"complex64"),i=n.texData.get(o.dataId),s=nb({inputs:{x:r},backend:n}),u=nb({inputs:{x:a},backend:n});return i.complexTensorInfos={real:s,imag:u},o}let nw={kernelName:g.Zz9,backendName:"webgl",kernelFunc:nv},nC="return (a < 0.) ? b * a : a;",nI=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,n$={kernelName:g.J$2,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{alpha:o}=r,i=n.makeTensorInfo([],"float32",g.D5U.createScalarValue(o,"float32")),s=(0,g.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new nx(nI,a.shape,i.shape):new ng(nC,a.shape,i.shape),u=n.runWebGLProgram(s,[a,i],"float32");return n.disposeIntermediateTensorInfo(i),u}},nE="return (a < 0.) ? b * a : a;",nk=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,nS={kernelName:g.o0g,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n}=e,{x:r,alpha:a}=t,o=(0,g.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new nx(nk,r.shape,a.shape):new ng(nE,r.shape,a.shape);return n.runWebGLProgram(o,[r,a],"float32")}},nT="if (isnan(x)) return x;";function n_({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:n,dtype:r}){return({inputs:a,backend:o})=>{let i;let{x:s}=a,u=r||s.dtype;if(o.shouldExecuteOnCPU([s])&&null!=n){let l=o.texData.get(s.dataId),h=n(l.values,u);return o.makeTensorInfo(s.shape,u,h)}let c=(0,g.OBj)().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&null!=t;return i=c?new nu(s.shape,t):new t9(s.shape,e),o.runWebGLProgram(i,[s],u)}}function nR({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:n=!1,supportsComplex:r=!1,cpuKernelImpl:a,dtype:o}){return({inputs:i,backend:s})=>{let u;let{a:l,b:h}=i;if(r&&"complex64"===l.dtype){let c=s.texData.get(l.dataId),d=s.texData.get(h.dataId),[p,f]=[[c.complexTensorInfos.real,d.complexTensorInfos.real],[c.complexTensorInfos.imag,d.complexTensorInfos.imag]].map(t=>{let[n,r]=t,a={dataId:n.dataId,dtype:n.dtype,shape:l.shape},o={dataId:r.dataId,dtype:r.dtype,shape:h.shape},i=new ng(e,l.shape,h.shape);return s.runWebGLProgram(i,[a,o],(0,g.x8V)(n.dtype,r.dtype))}),m=nv({inputs:{real:p,imag:f},backend:s});return s.disposeIntermediateTensorInfo(p),s.disposeIntermediateTensorInfo(f),m}let x=o||(0,g.x8V)(l.dtype,h.dtype);if(("string"===l.dtype||"string"===h.dtype||s.shouldExecuteOnCPU([l,h]))&&null!=a){let b=s.texData.get(l.dataId).values,y=s.texData.get(h.dataId).values,v="string"===l.dtype?g.Wap.fromUint8ToStringArray(b):b,w="string"===l.dtype?g.Wap.fromUint8ToStringArray(y):y,[C,I]=a(l.shape,h.shape,v,w,x),$=s.makeTensorInfo(I,x),E=s.texData.get($.dataId);return E.values=C,$}let k=(0,g.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&null!=t;return u=k?new nx(t,l.shape,h.shape,n):new ng(e,l.shape,h.shape),s.runWebGLProgram(u,[l,h],x)}}function nN(e,t=!1){if("linear"===e)return"return x;";if("relu"===e)return t?ni:nn;if("elu"===e)return t?no:"return (x >= 0.0) ? x : (exp(x) - 1.0);";if("relu6"===e)return t?ns:nr;if("prelu"===e)return t?nk:nE;if("leakyrelu"===e)return t?nI:nC;if("sigmoid"===e)return"return 1.0 / (1.0 + exp(-1.0 * x));";throw Error(`Activation ${e} has not been implemented for the WebGL backend.`)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class nA{constructor(e,t,n,r=!1,a=!1,o=!1,i=null,s=!1,u=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.enableShapeUniforms=X(this.outputShape.length);let l=r?e[1]:e[2],h=Math.ceil(l/2),c=r?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],d=a?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],p="",f="";i&&(p=s?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${i}
        }`:u?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${i}
        }`:`vec4 activation(vec4 x) {
          ${i}
        }`,f="result = activation(result);"),o&&this.variableNames.push("bias"),s&&this.variableNames.push("preluActivationWeights"),u&&this.variableNames.push("leakyreluAlpha");let g="rc.x",m="rc.x";e[0]<t[0]?g=`int(min(float(rc.x), ${e[0]-1}.))`:t[0]<e[0]&&(m=`int(min(float(rc.x), ${t[0]-1}.))`),this.userCode=`
      ${p}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${h}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < ${h}; i++) {
          int batchA = ${g};
          int batchB = ${m};
          vec4 a = getMatrixA(batchA, ${r?"i * 2, rc.y":"rc.y, i * 2"});
          vec4 b = getMatrixB(batchB, ${a?"rc.z, i * 2":"i * 2, rc.z"});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${c[0]} * ${d[0]});
          result += (${c[1]} * ${d[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${o?"result += getBiasAtOutCoords();":""}

        ${f}

        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let nD={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class nO{constructor(e,t,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=g.Wap.assertAndGetBroadcastShape(t,n),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let nB="return a * b;";function nF(e){let t;let{inputs:n,backend:r}=e,{a,b:o}=n,i=g.Wap.upcastType(a.dtype,o.dtype);if("complex64"===a.dtype){let s=r.texData.get(a.dataId),u=r.texData.get(o.dataId),l=new nO(nD.REAL,a.shape,o.shape),h=new nO(nD.IMAG,a.shape,o.shape),c=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:a.shape},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:a.shape},{dataId:u.complexTensorInfos.real.dataId,dtype:u.complexTensorInfos.real.dtype,shape:o.shape},{dataId:u.complexTensorInfos.imag.dataId,dtype:u.complexTensorInfos.imag.dtype,shape:o.shape}],d=r.runWebGLProgram(l,c,"float32"),p=r.runWebGLProgram(h,c,"float32"),f=nv({inputs:{real:d,imag:p},backend:r});return r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(p),f}if(r.shouldExecuteOnCPU([a,o])){let m=r.texData.get(a.dataId),x=r.texData.get(o.dataId),[b,y]=tR(a.shape,o.shape,m.values,x.values,i),v=r.makeTensorInfo(y,i),w=r.texData.get(v.dataId);return w.values=b,v}return t=(0,g.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new nx(nB,a.shape,o.shape):new ng(nB,a.shape,o.shape),r.runWebGLProgram(t,[a,o],i)}let nP={kernelName:g.wYn,backendName:"webgl",kernelFunc:nF};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function nL(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{shape:o}=r,i=g.D5U.sizeFromShape(a.shape),s=g.D5U.inferFromImplicitShape(o,i),u=g.D5U.sizeFromShape(s);g.D5U.assert(i===u,()=>`The new shape (${s}) has ${u} elements and the old shape (${a.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`);let l=n.texData.get(a.dataId);return!l.isPacked||B(a.shape,s)||null!==l.texture&&B(l.shape,s)?(n.incRef(a.dataId),{dataId:a.dataId,shape:s,dtype:a.dtype}):/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=[A(e.shape),...D(e.shape)],a={dtype:e.dtype,shape:r,dataId:e.dataId},o=[A(t),...D(t)],i=new t4(o,r),s=n.runWebGLProgram(i,[a],e.dtype,[r],!0);return{dataId:s.dataId,shape:t,dtype:s.dtype}}(a,s,n)}let nW={kernelName:g.HZH,backendName:"webgl",kernelFunc:nL};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class nM{constructor(e,t){this.variableNames=["x"];let{windowSize:n,batchSize:r,inSize:a,outSize:o}=e;this.outputShape=[r,o];let i=4*Math.floor(n/4),s=n%4,u="sumValue += dot(values, ones);";if(null!=t){let l=1/t;u=`sumValue += dot(values * ${g.D5U.isInt(l)?l.toPrecision(2):l}, ones);`}let h="";a%n>0&&(h=`
        if (inIdx < 0 || inIdx >= ${a}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${h}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        float sumValue = 0.0;

        for (int i = 0; i < ${i}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${u}
        }

        int inIdx = inOffset + ${i};
        if (${1===s}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${u}
        } else if (${2===s}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${u}
        } else if (${3===s}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${u}
        }
        setOutput(sumValue);
      }
    `}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class nU{constructor(e,t){this.variableNames=["x"];let{windowSize:n,batchSize:r,inSize:a,outSize:o}=e;this.outputShape=[r,o];let i="0.0",s="";"prod"===t?i="1.0":"min"===t?(i="1.0 / 1e-20",s="min"):"max"===t&&(i="-1.0 / 1e-20",s="max");let u=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"sum"===t?u="sumValue":"prod"===t?u="prodValue":"all"===t?u="allValue":"any"===t&&(u="anyValue");let l=4*Math.floor(n/4),h=n%4,c=`
      if (${"sum"===t}) {
        sumValue += dot(values, ones);
      } else if (${"prod"===t}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${s}(values, minMaxValue);
        if (${"min"===t} || ${"max"===t}) {
          minMaxValue = ${s}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,d="vec4";"all"===t?(i="1.0",c=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,d="bvec4"):"any"===t&&(i="0.0",c=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,d="bvec4");let p="";a%n>0&&(p=`
        if (inIdx < 0 || inIdx >= ${a}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${i};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        vec4 minMaxValue = vec4(${i});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${l}; i += 4) {
          int inIdx = inOffset + i;
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${l};
        if (${1===h}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${c}
        } else if (${2===h}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${c}
        } else if (${3===h}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${c}
        }
        setOutput(${u});
      }
    `}}function nV(e,t,n,r){let a=/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=[];for(;0===t.length||1!==t[t.length-1].outSize;){let n=t.length?t[t.length-1].outSize:e[1],r=g.Wap.computeOptimalWindowSize(n);t.push({inSize:n,windowSize:r,outSize:Math.ceil(n/r)})}return t}(e.shape),o=e;for(let i=0;i<a.length;i++){let s,u;let{inSize:l,windowSize:h,outSize:c}=a[i];s="mean"===n?0===i?new nM({windowSize:h,inSize:l,batchSize:e.shape[0],outSize:c},l):new nM({windowSize:h,inSize:l,batchSize:e.shape[0],outSize:c}):new nU({windowSize:h,inSize:l,batchSize:e.shape[0],outSize:c},n),u=o,o=r.runWebGLProgram(s,[o],t),u.dataId!==e.dataId&&r.disposeIntermediateTensorInfo(u)}return o}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class nG{constructor(e,t){this.variableNames=["A"];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.rank=n.length;let a=(0,V.kW)(this.rank),o=function(e){let t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],r=Array(t);for(let a=0;a<e.length;a++)r[e[a]]=n[a];return r.join()}(t);this.userCode=`
    void main() {
      ${a} resRC = getOutputCoords();
      setOutput(getA(${o}));
    }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class nz{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let a=(0,V.kW)(this.rank),o=t1("rc",this.rank),i=Array(this.rank);for(let s=0;s<t.length;s++)i[t[s]]=o[s];let u=`vec2(${i.slice(-2).join()})`,l=`++${o[this.rank-1]} < ${n[this.rank-1]}`,h=`getChannel(getA(${i.join()}), ${u})`;this.userCode=`
    void main() {
      ${a} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${h};
      if(${l}) {
        result[1] = ${h};
      }
      --${o[this.rank-1]};
      if(++${o[this.rank-2]} < ${n[this.rank-2]}) {
        result[2] = ${h};
        if(${l}) {
          result[3] = ${h};
        }
      }
      setOutput(result);
    }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function nX(e,t,n){let r=(0,g.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new nz(e.shape,t):new nG(e.shape,t);return n.runWebGLProgram(r,[e],e.dtype)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function nH(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o,keepDims:i}=r;return(/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r){let a=e.shape.length,o=g.D5U.parseAxisParam(t,e.shape),i=o,s=g.Wap.getAxesPermutation(i,a),u=null!=s,l=e;u&&(l=nX(e,s,r),i=g.Wap.getInnerMostAxes(i.length,a)),g.Wap.assertAxesAreInnerMostDims("sum",i,a);let[h,c]=g.Wap.computeOutAndReduceShapes(l.shape,i),d=h;n&&(d=g.Wap.expandShapeToKeepDim(h,o));let p=g.D5U.sizeFromShape(c),f=g.D5U.sizeFromShape(e.shape),m=nL({inputs:{x:l},attrs:{shape:[f/p,p]},backend:r}),x=(0,g.z4k)(e.dtype),b=nV(m,x,"sum",r),y=nL({inputs:{x:b},attrs:{shape:d},backend:r});return r.disposeIntermediateTensorInfo(m),r.disposeIntermediateTensorInfo(b),u&&r.disposeIntermediateTensorInfo(l),y}(a,o,i,n))}let nj={kernelName:g.GBy,backendName:"webgl",kernelFunc:nH};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function nK(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:o}=n,{perm:i}=a,s=o.shape.length,u=Array(s);for(let l=0;l<u.length;l++)u[l]=o.shape[i[l]];if(r.shouldExecuteOnCPU([o])){let h=r.texData.get(o.dataId),c=h.values,d=tJ(c,o.shape,o.dtype,i,u);t=r.makeTensorInfo(u,o.dtype);let p=r.texData.get(t.dataId);p.values=d}else t=nX(o,i,r);return t}let nq={kernelName:g.G3Y,backendName:"webgl",kernelFunc:nK};function nY({a:e,b:t,transposeA:n,transposeB:r,backend:a,bias:o=null,preluActivationWeights:i=null,leakyreluAlpha:s=0,activation:u=null}){let l;let h=e.shape.length,c=t.shape.length,d=n?e.shape[h-2]:e.shape[h-1],p=r?t.shape[c-1]:t.shape[c-2],f=n?e.shape[h-1]:e.shape[h-2],m=r?t.shape[c-2]:t.shape[c-1],x=e.shape.slice(0,-2),b=t.shape.slice(0,-2),y=g.D5U.sizeFromShape(x),v=g.D5U.sizeFromShape(b),w=g.Jyw.assertAndGetBroadcastShape(e.shape.slice(0,-2),t.shape.slice(0,-2)),C=w.concat([f,m]);g.D5U.assert(d===p,()=>`Error in matMul: inner shapes (${d}) and (${p}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${n} and transposeB=${r} must match.`);let I=n?[y,d,f]:[y,f,d],$=r?[v,m,p]:[v,p,m],E=nL({inputs:{x:e},backend:a,attrs:{shape:I}}),k=nL({inputs:{x:t},backend:a,attrs:{shape:$}}),S=[E,k],T=Math.max(y,v),_=n?E.shape[1]:E.shape[2],R=null!=o,N=null!=i,A="leakyrelu"===u,D=null!=u?nN(u,!0):null;if((1===f||1===m)&&_>1e3&&!1===(R||N||A||null!=D)){let O=E,B=k;n&&(O=nK({inputs:{x:E},backend:a,attrs:{perm:[0,2,1]}}),S.push(O)),r&&(B=nK({inputs:{x:k},backend:a,attrs:{perm:[0,2,1]}}),S.push(B));let F=O;1!==m&&(F=nL({inputs:{x:O},backend:a,attrs:{shape:[T,_,1]}}),S.push(F));let P=B;1===m&&(P=nL({inputs:{x:B},backend:a,attrs:{shape:[T,1,_]}}),S.push(P));let L=nF({inputs:{a:F,b:P},backend:a});l=nH({inputs:{x:L},backend:a,attrs:{axis:1===m?2:1,keepDims:!0}}),S.push(L)}else{let W=(0,g.x8V)(e.dtype,t.dtype),M=new nA(I,$,[T,f,m],n,r,R,D,N,A),U=[E,k];if(null!=o&&U.push(o),N&&U.push(i),A){let V=a.makeTensorInfo([],"float32",g.D5U.createScalarValue(s,"float32"));U.push(V),S.push(V)}l=a.runWebGLProgram(M,U,W)}let G=nL({inputs:{x:l},backend:a,attrs:{shape:C}});for(let z of(S.push(l),S))a.disposeIntermediateTensorInfo(z);return G}let nZ={kernelName:g.usg,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{a,b:o,bias:i,preluActivationWeights:s}=t,{transposeA:u,transposeB:l,activation:h,leakyreluAlpha:c}=r;return nY({a,b:o,transposeA:u,transposeB:l,backend:n,bias:i,preluActivationWeights:s,leakyreluAlpha:c,activation:h})}},nQ="return abs(x);",nJ={kernelName:g.SYM,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r}=e,{x:a}=n;if(r.shouldExecuteOnCPU([a])&&"complex64"!==a.dtype){let o=r.texData.get(a.dataId),i=tM(o.values);return r.makeTensorInfo(a.shape,a.dtype,i)}return t=(0,g.OBj)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new nu(a.shape,nQ):new t9(a.shape,nQ),r.runWebGLProgram(t,[a],a.dtype)}},n0=ne+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,n1=n_({opSnippet:n0}),n2={kernelName:g.VGw,backendName:"webgl",kernelFunc:n1},n3=ne+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,n4=n_({opSnippet:n3}),n5={kernelName:g.SpW,backendName:"webgl",kernelFunc:n4},n6="return a + b;",n8=nR({opSnippet:n6,packedOpSnippet:n6,supportsComplex:!0,cpuKernelImpl:tl}),n7={kernelName:g.mm_,backendName:"webgl",kernelFunc:n8};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class n9{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`float v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(" + ");this.userCode=`
      void main() {
        ${n.join("\n        ")}

        float result = ${r};
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class re{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`vec4 v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(" + ");this.userCode=`
      void main() {
        ${n.join("\n        ")}

        vec4 result = ${r};
        setOutput(result);
      }
    `}}let rt={kernelName:g.Xze,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function e(t){let{inputs:n,backend:r}=t;if(1===n.length)return nb({inputs:{x:n[0]},backend:r});if(n.length>(0,g.OBj)().get("WEBGL_MAX_TEXTURES_IN_SHADER")){let a=Math.floor(n.length/2),o=e({inputs:n.slice(0,a),backend:r}),i=e({inputs:n.slice(a),backend:r});return e({inputs:[o,i],backend:r})}let s=n.map(e=>e.dtype).reduce((e,t)=>(0,g.x8V)(e,t)),u=n.map(e=>e.shape),l=(0,g.OBj)().getBool("WEBGL_PACK"),h=l?new re(n[0].shape,u):new n9(n[0].shape,u);return r.runWebGLProgram(h,n,s)}},rn={kernelName:g.oT6,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:o}=n,{axis:i,keepDims:s}=a,u=o.shape.length,l=g.D5U.parseAxisParam(i,o.shape),h=l,c=g.Wap.getAxesPermutation(h,u),d=o;null!=c&&(d=nK({inputs:{x:o},backend:r,attrs:{perm:c}}),h=g.Wap.getInnerMostAxes(h.length,u)),g.Wap.assertAxesAreInnerMostDims("all",h,u);let[p,f]=g.Wap.computeOutAndReduceShapes(d.shape,h),m=g.D5U.sizeFromShape(f),x=nL({inputs:{x:d},backend:r,attrs:{shape:[-1,m]}}),b=nV(x,x.dtype,"all",r);if(s){let y=g.Wap.expandShapeToKeepDim(p,l);t=nL({inputs:{x:b},backend:r,attrs:{shape:y}})}else t=nL({inputs:{x:b},backend:r,attrs:{shape:p}});return r.disposeIntermediateTensorInfo(x),r.disposeIntermediateTensorInfo(b),null!=c&&r.disposeIntermediateTensorInfo(d),t}},rr={kernelName:g.IKK,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:o}=n,{axis:i,keepDims:s}=a,u=o.shape.length,l=g.D5U.parseAxisParam(i,o.shape),h=l,c=g.Wap.getAxesPermutation(h,u),d=o;null!=c&&(d=nK({inputs:{x:o},backend:r,attrs:{perm:c}}),h=g.Wap.getInnerMostAxes(h.length,u)),g.Wap.assertAxesAreInnerMostDims("any",h,u);let[p,f]=g.Wap.computeOutAndReduceShapes(d.shape,h),m=g.D5U.sizeFromShape(f),x=nL({inputs:{x:d},backend:r,attrs:{shape:[-1,m]}}),b=nV(x,x.dtype,"any",r);if(s){let y=g.Wap.expandShapeToKeepDim(p,l);t=nL({inputs:{x:b},backend:r,attrs:{shape:y}})}else t=nL({inputs:{x:b},backend:r,attrs:{shape:p}});return r.disposeIntermediateTensorInfo(x),r.disposeIntermediateTensorInfo(b),null!=c&&r.disposeIntermediateTensorInfo(d),t}};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class ra{constructor(e,t,n){this.variableNames=["A"];let{windowSize:r,batchSize:a,outSize:o}=e;n||this.variableNames.push("bestIndicesA"),this.outputShape=[a,o],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${r}; i++) {
          int inIdx = ${n?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));"};
          float candidate = getA(batch, inIdx);
          if (candidate ${"max"===t?">":"<"} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class ro{constructor(e,t,n,r){let a,o;this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,g.D5U.assert(e.length>2,()=>`Packed arg${n.charAt(0).toUpperCase()+n.slice(1)} supports only inputs with rank above 2.`);let i=e[e.length-1],s=Math.ceil(i/t);this.outputShape=e.slice(0,-1),s>1&&this.outputShape.push(s),r||this.variableNames.push("bestIndicesA");let u=this.outputShape,l=u.length,h=(0,V.kW)(l),c=t2("coords",l);if(1===s){o=l+1;let d=(0,V.kW)(o);a=`
        ${d} sourceLocR = ${d}(${c.join()}, 0);
        ++${c[l-1]};
        ${d} sourceLocG = ${d}(${c.join()}, 0);
        ++${c[l-2]};
        ${d} sourceLocA = ${d}(${c.join()}, 0);
        --${c[l-1]};
        ${d} sourceLocB = ${d}(${c.join()}, 0);
        --${c[l-2]};`}else o=l,a=`
        ${h} sourceLocR = coords;
        ++${c[l-1]};
        ${h} sourceLocG = coords;
        ++${c[l-2]};
        ${h} sourceLocA = coords;
        --${c[l-1]};
        ${h} sourceLocB = coords;
        --${c[l-2]};`;let p=["x","y","z","w","u","v"].slice(0,o),f="."+p[o-1],m=p.map(e=>"int "+e),x=t2("sourceLocR",o-1).concat("inIdx.r"),b=t2("sourceLocG",o-1).concat("inIdx.g"),y=t2("sourceLocB",o-1).concat("inIdx.b"),v=t2("sourceLocA",o-1).concat("inIdx.a"),w=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${y.join()}),
                             getBestIndicesAChannel(${v.join()})));`,C=`vec4(
            getAChannel(${x.join()}),
            hasNextCol ? getAChannel(${b.join()}) : 0.,
            hasNextRow ? getAChannel(${y.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${v.join()}) : 0.)`,I=r?"":`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${p.join()}),
                                          vec2(${p.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${p.join()}),
                               vec2(${p.slice(-2).join()}));
      }
      ${I}
      void main() {
        ${h} coords = getOutputCoords();
        bool hasNextCol = ${c[l-1]} < ${u[l-1]-1};
        bool hasNextRow = ${c[l-2]} < ${u[l-2]-1};
        ${a}
        ivec4 srcIdx = ivec4(sourceLocR${f}, sourceLocG${f},
          sourceLocB${f}, sourceLocA${f}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${C};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${w}
          vec4 candidate = ${C};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${"max"===n?"greaterThan":"lessThan"}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}function ri(e,t,n,r){let a=[n];if(g.Wap.assertAxesAreInnerMostDims("arg"+r.charAt(0).toUpperCase()+r.slice(1),a,t.shape.length),!(0,g.OBj)().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){let o=[],i=e.texData.get(t.dataId),s=null!==i&&i.isPacked,u=t;s&&o.push(u=e.unpackTensor(t));let[l,h]=g.Wap.computeOutAndReduceShapes(u.shape,a),c=g.D5U.sizeFromShape(h),d=nL({inputs:{x:u},backend:e,attrs:{shape:[-1,c]}});o.push(d);let p=/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function e(t,n,r,a=null){let o=n.shape[0],i=n.shape[1];null!=a&&(o=a.shape[0],i=a.shape[1]);let s=g.Wap.computeOptimalWindowSize(i),u={windowSize:s,inSize:i,batchSize:o,outSize:Math.ceil(i/s)},l=new ra(u,r,null==a),h=[n];null!=a&&h.push(a);let c=t.runWebGLProgram(l,h,"int32");if(1===c.shape[1])return c;let d=e(t,n,r,c);return t.disposeIntermediateTensorInfo(c),d}(e,d,r);o.push(p);let f=nL({inputs:{x:p},backend:e,attrs:{shape:l}});return o.forEach(t=>e.disposeIntermediateTensorInfo(t)),f}return function e(t,n,r,a=null){let o=null!=a?a.shape:n.shape,i=o[o.length-1],s=g.Wap.computeOptimalWindowSize(i),u=new ro(o,s,r,null==a),l=t.runWebGLProgram(u,null==a?[n]:[n,a],"int32");if(l.shape.length===n.shape.length){let h=e(t,n,r,l);return t.disposeIntermediateTensorInfo(l),h}return l}(e,t,r)}let rs={kernelName:g.sJF,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o}=r,i=g.D5U.parseAxisParam(o,a.shape),s=g.Wap.getAxesPermutation(i,a.shape.length),u=a,l=[];null!=s&&(l.push(u=nK({inputs:{x:a},backend:n,attrs:{perm:s}})),i=g.Wap.getInnerMostAxes(i.length,u.shape.length)),g.Wap.assertAxesAreInnerMostDims("argMax",[i[0]],u.shape.length);let h=ri(n,u,i[0],"max");return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),h}},ru={kernelName:g.aJk,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o}=r,i=g.D5U.parseAxisParam(o,a.shape),s=g.Wap.getAxesPermutation(i,a.shape.length),u=a,l=[];null!=s&&(l.push(u=nK({inputs:{x:a},backend:n,attrs:{perm:s}})),i=g.Wap.getInnerMostAxes(i.length,u.shape.length)),g.Wap.assertAxesAreInnerMostDims("argMin",[i[0]],u.shape.length);let h=ri(n,u,i[0],"min");return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),h}},rl=ne+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,rh=n_({opSnippet:rl}),rc={kernelName:g.M2y,backendName:"webgl",kernelFunc:rh},rd=n_({opSnippet:ne+"return log(x + sqrt(x * x + 1.0));"}),rp={kernelName:g.qw7,backendName:"webgl",kernelFunc:rd},rf=ne+`
  return atan(x);
`,rg=n_({opSnippet:rf}),rm={kernelName:g.jMg,backendName:"webgl",kernelFunc:rg},rx=nf+`
  return atan(a, b);
`,rb=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+nm+`
  return result;
`,ry=nR({opSnippet:rx,packedOpSnippet:rb}),rv={kernelName:g.QCc,backendName:"webgl",kernelFunc:ry},rw=ne+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,rC=n_({opSnippet:rw}),rI={kernelName:g.Oyi,backendName:"webgl",kernelFunc:rC};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class r${constructor(e,t,n,r=!1,a=!1){if(this.variableNames=["x"],"avg"===t&&n)throw Error("Cannot compute positions for average pool.");let o=e.filterWidth,i=e.strideHeight,s=e.strideWidth,u=e.dilationHeight,l=e.dilationWidth,h=e.effectiveFilterHeight,c=e.effectiveFilterWidth,d=e.padInfo.top,p=e.padInfo.left;this.outputShape=e.outShape;let f="avg"===t,g=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,m=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`,x="0.0";if(f||(x="-1.0 / 1e-20"),n){this.userCode=`
        const ivec2 strides = ivec2(${i}, ${s});
        const ivec2 pads = ivec2(${d}, ${p});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${h};
              wR += ${u}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${c};
                wC += ${l}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${r?a?g:m:`wR * ${c} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let b=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===t&&(b="avgValue / count");let y=4*Math.floor(o/4),v=o%4,w=`
      if (${f}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${i}, ${s});
      const ivec2 pads = ivec2(${d}, ${p});
      const float initializationValue = ${x};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${x});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${h};
            wR += ${u}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${y}; wC += 4) {
            int xC = xCCorner + wC * ${l};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              getValue(batch, xR, xC + 3 * ${l}, d)
            );

            ${w}
          }

          int xC = xCCorner + ${y};
          if (${1===v}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${w}
          } else if (${2===v}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              initializationValue,
              initializationValue
            );

            ${w}
          } else if (${3===v}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              initializationValue
            );

            ${w}
          }
        }
        setOutput(${b});
      }
    `}}class rE{constructor(e,t,n,r=!1,a=!1){if(this.variableNames=["x"],"avg"===t&&n)throw Error("Cannot compute positions for average pool.");let o=e.filterWidth,i=e.strideDepth,s=e.strideHeight,u=e.strideWidth,l=e.dilationDepth,h=e.dilationHeight,c=e.dilationWidth,d=e.effectiveFilterDepth,p=e.effectiveFilterHeight,f=e.effectiveFilterWidth,g=e.padInfo.front,m=e.padInfo.top,x=e.padInfo.left;this.outputShape=e.outShape;let b="avg"===t,y="0.0";if(b||(y="-1.0 / 1e-20"),n){this.userCode=`
        const ivec3 strides =
            ivec3(${i}, ${s}, ${u});
        const ivec3 pads = ivec3(${g}, ${m}, ${x});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${d};
              wD += ${l}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${p};
                wR += ${h}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${f};
                  wC += ${c}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${r?a?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${p} * ${f} +
                      wR * ${f} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let v=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===t&&(v="avgValue / count");let w=4*Math.floor(o/4),C=o%4,I=`
      if (${b}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${i}, ${s}, ${u});
      const ivec3 pads = ivec3(${g}, ${m}, ${x});
      const float initializationValue = ${y};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${d};
            wD += ${l}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p};
            wR += ${h}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${w}; wC += 4) {
              int xC = xCCorner + wC * ${c};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${c}, ch),
                getValue(batch, xD, xR, xC + 2 * ${c}, ch),
                getValue(batch, xD, xR, xC + 3 * ${c}, ch)
              );

              ${I}
            }

            int xC = xCCorner + ${w};
            if (${1===C}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${I}
            } else if (${2===C}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${c}, ch),
                initializationValue,
                initializationValue
              );

              ${I}
            } else if (${3===C}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${c}, ch),
                getValue(batch, xD, xR, xC + 2 * ${c}, ch),
                initializationValue
              );

              ${I}
            }
          }
          setOutput(${v});
        }
      }
    `}}let rk={kernelName:g.JhU,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t;W(a,"avgPool");let{filterSize:o,strides:i,pad:s,dimRoundingMode:u}=r;g.D5U.assert(g.Wap.eitherStridesOrDilationsAreOne(i,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '1'`);let l=g.Wap.computePool2DInfo(a.shape,o,i,1,s,u);if(1===l.filterWidth&&1===l.filterHeight&&g.D5U.arraysEqual(l.inShape,l.outShape))return nb({inputs:{x:a},backend:n});let h=new r$(l,"avg",!1);return n.runWebGLProgram(h,[a],"float32")}},rS={kernelName:g._k9,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{filterSize:o,strides:i,pad:s,dimRoundingMode:u,dataFormat:l}=r,h=g.Wap.computePool3DInfo(a.shape,o,i,[1,1,1],s,u,l),c=new rE(h,"avg",!1);return n.runWebGLProgram(c,[a],"float32")}};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class rT{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,a=e.strideWidth,o=e.dilationHeight,i=e.dilationWidth,s=e.effectiveFilterHeight,u=e.effectiveFilterWidth,l=s-1-e.padInfo.top,h=u-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${l}, ${h});
      const float avgMultiplier = float(${1/(t*n)});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
            wR += ${o}) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${u};
            wC+= ${i}) {
            float dyC = float(dyCCorner + wC) / ${a}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class r_{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,a=e.strideDepth,o=e.strideHeight,i=e.strideWidth,s=e.dilationDepth,u=e.dilationHeight,l=e.dilationWidth,h=e.effectiveFilterDepth,c=e.effectiveFilterHeight,d=e.effectiveFilterWidth,p=h-1-e.padInfo.front,f=c-1-e.padInfo.top,g=d-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${p}, ${f}, ${g});
      const float avgMultiplier = float(${1/(t*n*r)});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${h};
            wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${a}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${u}) {
            float dyR = float(dyRCorner + wR) / ${o}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${d};
                wC += ${l}) {
              float dyC = float(dyCCorner + wC) / ${i}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}let rR={kernelName:g.IMb,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,input:o}=t,{filterSize:i,strides:s,pad:u,dimRoundingMode:l}=r,h=g.Wap.computePool3DInfo(o.shape,i,s,[1,1,1],u,l),c=new r_(h);return n.runWebGLProgram(c,[a],o.dtype)}},rN={kernelName:g.ROF,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,input:o}=t;W([a,o],"avgPoolGrad");let{filterSize:i,strides:s,pad:u}=r,l=g.Wap.computePool2DInfo(o.shape,i,s,1,u),h=new rT(l);return n.runWebGLProgram(h,[a],o.dtype)}},rA={kernelName:g.XLW,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{a,b:o}=t,{transposeA:i,transposeB:s}=r;return nY({a,b:o,transposeA:i,transposeB:s,backend:n})}};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class rD{constructor(e,t,n,r,a,o){this.outputShape=[],this.variableNames=["x","mean","variance"],g.Wap.assertAndGetBroadcastShape(e,t),g.Wap.assertAndGetBroadcastShape(e,n);let i="0.0";null!=r&&(g.Wap.assertAndGetBroadcastShape(e,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");let s="1.0";null!=a&&(g.Wap.assertAndGetBroadcastShape(e,a),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${i};
        float scale = ${s};
        float inv = scale * inversesqrt(variance + float(${o}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class rO{constructor(e,t,n,r,a,o){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],g.Wap.assertAndGetBroadcastShape(e,t),g.Wap.assertAndGetBroadcastShape(e,n);let i="vec4(0.0)";null!=r&&(g.Wap.assertAndGetBroadcastShape(e,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");let s="vec4(1.0)";null!=a&&(g.Wap.assertAndGetBroadcastShape(e,a),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${i};
        vec4 scale = ${s};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${o}));

        setOutput((x - mean) * inv + offset);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let rB=({inputs:e,backend:t,attrs:n})=>{let{x:r,mean:a,variance:o,offset:i,scale:s}=e;g.D5U.assert(a.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),g.D5U.assert(null==i||a.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),g.D5U.assert(null==s||a.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:u}=n;null==u&&(u=.001);let l=[r,a,o],h=null;null!=i&&(h=i.shape,l.push(i));let c=null;null!=s&&(c=s.shape,l.push(s));let d=(0,g.OBj)().getBool("WEBGL_PACK_NORMALIZATION")?new rO(r.shape,a.shape,o.shape,h,c,u):new rD(r.shape,a.shape,o.shape,h,c,u),p=t.runWebGLProgram(d,l,l[0].dtype);return p},rF={kernelName:g.sHE,backendName:"webgl",kernelFunc:rB};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class rP{constructor(e){let t;this.variableNames=["source"],this.outputShape=e,this.rank=e.length;let n=(0,V.kW)(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let r=function(e){if(1===e)return"sourceLoc";if(e<=6)return rL.slice(0,e).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${e} is not yet supported`)}(this.rank),a=e.map((e,t)=>`sourceLoc.${rL[t]} = start[${t}] + coords.${rL[t]};`);t=`
        ${n} sourceLoc;
        ${n} coords = getOutputCoords();
        ${a.join("\n")}
      `,this.userCode=`
      void main() {
        ${t}
        setOutput(getSource(${r}));
      }
    `}}let rL=["x","y","z","w","u","v"];/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class rW{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let t=(0,V.kW)(this.rank),n=t2("coords",this.rank),r=t2("sourceLoc",this.rank),a=1===this.rank?"sourceLoc":`vec2(${r.slice(-2).join()})`,o=`getChannel(getSource(${r.join()}), ${a})`,i=`
      result.x = ${o};
      if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
        ++${r[this.rank-1]};
        result.y = ${o};
        --${r[this.rank-1]};
      }
    `,s=1===this.rank?"":`
      --${n[this.rank-1]};
      if (++${n[this.rank-2]} < ${e[this.rank-2]}) {
        ++${r[this.rank-2]};
        result.z = ${o};
        if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
          ++${r[this.rank-1]};
          result.w = ${o};
        }
      }
    `,u=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((e,t)=>`start[${t}]`).join()});`:e.map((e,t)=>`${r[t]} = ${n[t]} + start[${t}];`).join("\n");this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${u}
        vec4 result = vec4(0.);
        ${i}
        ${s}
        setOutput(result);
      }
    `}}function rM(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{begin:o,size:i}=r,[s,u]=g.kuN.parseSliceParams(a,o,i);if(g.kuN.assertParamsValid(a,s,u),0===g.D5U.sizeFromShape(u))return n.makeTensorInfo(u,a.dtype,[]);if(n.shouldExecuteOnCPU([a])||"string"===a.dtype){let l=n.texData.get(a.dataId),h=tU(l.values,s,u,a.shape,a.dtype);return n.makeTensorInfo(u,a.dtype,h)}let{isPacked:c}=n.texData.get(a.dataId),d=g.kuN.isSliceContinous(a.shape,s,u);if(c||!d){let p=(0,g.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new rW(u):new rP(u);return n.runWebGLProgram(p,[a],a.dtype,[s])}return n.uploadToGPU(a.dataId),/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r){let a=r.texData.get(e.dataId),o=r.makeTensorInfo(n,e.dtype),i=r.texData.get(o.dataId);Object.assign(i,a),i.refCount=1,i.shape=n,i.dtype=e.dtype;let s=g.kuN.computeFlatOffset(t,g.D5U.computeStrides(e.shape));a.slice&&(s+=a.slice.flatOffset),i.slice={flatOffset:s,origDataId:a.slice&&a.slice.origDataId||e.dataId};let u=r.dataRefCount.get(i.slice.origDataId)||1;return r.dataRefCount.set(i.slice.origDataId,u+1),o}(a,s,u,n)}let rU={kernelName:g.p2w,backendName:"webgl",kernelFunc:rM},rV=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{blockShape:o,crops:i}=r;g.D5U.assert(a.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");let s=o.reduce((e,t)=>e*t),u=g.Wap.getReshaped(a.shape,o,s),l=g.Wap.getPermuted(u.length,o.length),h=g.Wap.getReshapedPermuted(a.shape,o,s),c=g.Wap.getSliceBeginCoords(i,o.length),d=g.Wap.getSliceSize(h,i,o.length),p=[],f=nL({inputs:{x:a},backend:n,attrs:{shape:u}}),m=nK({inputs:{x:f},backend:n,attrs:{perm:l}}),x=nL({inputs:{x:m},backend:n,attrs:{shape:h}}),b=rM({inputs:{x:x},backend:n,attrs:{begin:c,size:d}});return p.push(f),p.push(m),p.push(x),p.forEach(e=>n.disposeIntermediateTensorInfo(e)),b},rG={kernelName:g.zws,backendName:"webgl",kernelFunc:rV},rz={kernelName:g.zvY,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,weights:o}=t,{size:i}=r,s=n.readSync(a.dataId),u=n.readSync(o.dataId),l=th(s,u,o.dtype,o.shape,i);return n.makeTensorInfo([i],o.dtype,l)}},rX={kernelName:g.eEB,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n}=e,{s0:r,s1:a}=t,o=n.readSync(r.dataId),i=n.readSync(a.dataId),s=g.Wap.assertAndGetBroadcastShape(Array.from(o),Array.from(i));return n.makeTensorInfo([s.length],"int32",Int32Array.from(s))}},rH=nR({opSnippet:"return float(a != b);",cpuKernelImpl:tA,dtype:"bool"}),rj={kernelName:g.yQU,backendName:"webgl",kernelFunc:rH};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function rK(e){let{inputs:t,backend:n}=e,{input:r}=t,a=n.texData.get(r.dataId);return nb({inputs:{x:a.complexTensorInfos.real},backend:n})}let rq={kernelName:g.xJR,backendName:"webgl",kernelFunc:rK},rY={kernelName:g.RFZ,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function e(t){let{inputs:n,backend:r,attrs:a}=t,{x:o}=n,{dtype:i}=a;if("complex64"===i){if("complex64"===o.dtype)return nb({inputs:{x:o},backend:r});let s=g.lls(o.shape),u=e({inputs:{x:o},backend:r,attrs:{dtype:"float32"}}),l=nv({inputs:{real:u,imag:s},backend:r});return s.dispose(),r.disposeIntermediateTensorInfo(u),l}if("complex64"===o.dtype){let h=rK({inputs:{input:o},backend:r}),c=e({inputs:{x:h},backend:r,attrs:{dtype:i}});return r.disposeIntermediateTensorInfo(h),c}if(!g.D5U.hasEncodingLoss(o.dtype,i)){let d=nb({inputs:{x:o},backend:r});return{dataId:d.dataId,shape:d.shape,dtype:i}}if(r.shouldExecuteOnCPU([o])){let p=r.texData.get(o.dataId).values,[f,m,x]=td(p,o.shape,o.dtype,i);return r.makeTensorInfo(f,m,x)}if("int32"===i)return function(e,t){let n=new t9(e.shape,"return float(int(x));"),r=t.runWebGLProgram(n,[e],"int32");return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}(o,r);if("bool"===i){let b=r.makeTensorInfo([],"bool",g.D5U.getTypedArrayFromDType("bool",1)),y=rH({inputs:{a:o,b:b},backend:r});return r.disposeIntermediateTensorInfo(b),y}throw Error(`Error in Cast: failed to cast ${o.dtype} to ${i}`)}},rZ="return ceil(x);",rQ=n_({opSnippet:rZ,packedOpSnippet:rZ,cpuKernelImpl:tp}),rJ={kernelName:g.gJX,backendName:"webgl",kernelFunc:rQ};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class r0{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class r1{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}let r2={kernelName:g.xnO,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:o}=n,{clipValueMin:i,clipValueMax:s}=a;return t=(0,g.OBj)().getBool("WEBGL_PACK_CLIP")?new r1(o.shape):new r0(o.shape),r.runWebGLProgram(t,[o],o.dtype,[[i],[s]])}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class r3{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function r4(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}let r5={kernelName:g.yj2,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n}=e,{x:r}=t,a=n.texData.get(r.dataId),o=new r3(r.shape),i=[r4(r,a.complexTensorInfos.real),r4(r,a.complexTensorInfos.imag)];return n.runWebGLProgram(o,i,i[0].dtype)}};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class r6{constructor(e){this.outputShape=[],this.outputShape=g.Wap.computeOutShape(e,1),this.variableNames=e.map((e,t)=>`T${t}`);let t=Array(e.length-1);t[0]=e[0][1];for(let n=1;n<t.length;n++)t[n]=t[n-1]+e[n][1];let r=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let a=1;a<t.length;a++){let o=t[a-1];r.push(`else if (yC < ${t[a]}) setOutput(getT${a}(yR, yC-${o}));`)}let i=t.length,s=t[t.length-1];r.push(`else setOutput(getT${i}(yR, yC-${s}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${r.join("\n        ")}
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class r8{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=g.Wap.computeOutShape(e,t);let n=this.outputShape,r=n.length,a=(0,V.kW)(r),o=t2("coords",r),i=["x","y","z","w","u","v"].slice(0,r);this.variableNames=e.map((e,t)=>`T${t}`);let s=Array(e.length-1);s[0]=e[0][t];for(let u=1;u<s.length;u++)s[u]=s[u-1]+e[u][t];let l=i[t],h=i.slice(-2),c=i.join(),d=`if (${l} < ${s[0]}) {
        return getChannel(
            getT0(${c}), vec2(${h.join()}));
        }`;for(let p=1;p<s.length;p++){let f=s[p-1];d+=`
        if (${l} < ${s[p]}  && ${l} >= ${s[p-1]}) {
          return getChannel(
            getT${p}(${r7(i,l,f)}),
            vec2(${r7(h,l,f)}));
        }`}let m=s.length,x=s[s.length-1];d+=`
        return getChannel(
          getT${m}(${r7(i,l,x)}),
          vec2(${r7(h,l,x)}));`,this.userCode=`
      float getValue(${i.map(e=>"int "+e)}) {
        ${d}
      }

      void main() {
        ${a} coords = getOutputCoords();
        vec4 result = vec4(getValue(${o}), 0., 0., 0.);

        ${o[r-1]} = ${o[r-1]} + 1;
        if (${o[r-1]} < ${n[r-1]}) {
          result.g = getValue(${o});
        }

        ${o[r-2]} = ${o[r-2]} + 1;
        if (${o[r-2]} < ${n[r-2]}) {
          result.a = getValue(${o});
        }

        ${o[r-1]} = ${o[r-1]} - 1;
        if (${o[r-2]} < ${n[r-2]} &&
            ${o[r-1]} < ${n[r-1]}) {
          result.b = getValue(${o});
        }
        setOutput(result);
      }
    `}}function r7(e,t,n){let r=e.indexOf(t),a=e.map((e,t)=>t===r?`${e} - ${n}`:e);return a.join()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function r9(e){let{inputs:t,backend:n}=e,{input:r}=t,a=n.texData.get(r.dataId);return nb({inputs:{x:a.complexTensorInfos.imag},backend:n})}let ae={kernelName:g.J_u,backendName:"webgl",kernelFunc:r9};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function at(e){let{inputs:t,backend:n,attrs:r}=e,{axis:a}=r,o=g.D5U.parseAxisParam(a,t[0].shape)[0],i=t.map(e=>e.shape);g.Wap.assertParamsConsistent(i,o);let s=g.Wap.computeOutShape(t.map(e=>e.shape),o);if(0===g.D5U.sizeFromShape(s))return n.makeTensorInfo(s,t[0].dtype,[]);let u=t.filter(e=>g.D5U.sizeFromShape(e.shape)>0);return 1===u.length?nb({inputs:{x:u[0]},backend:n}):/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function e(t,n,r){let a=t[0].dtype;if("complex64"===a){let o=t.map(e=>rK({inputs:{input:e},backend:r})),i=t.map(e=>r9({inputs:{input:e},backend:r})),s=e(o,n,r),u=e(i,n,r),l=nv({inputs:{real:s,imag:u},backend:r});return o.forEach(e=>r.disposeIntermediateTensorInfo(e)),i.forEach(e=>r.disposeIntermediateTensorInfo(e)),r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(u),l}let h=r.shouldExecuteOnCPU(t);if("string"===a&&(h=!0),h){let c=t.map(e=>{let t=g.D5U.sizeFromShape(e.shape.slice(n));return nL({inputs:{x:e},backend:r,attrs:{shape:[-1,t]}})}),d=c.map(e=>({vals:r.readSync(e.dataId),shape:e.shape})),p=g.Wap.computeOutShape(c.map(e=>e.shape),1),f=1===c[0].shape[0],m=tf(d,p,a,f),x=g.Wap.computeOutShape(t.map(e=>e.shape),n),b=r.makeTensorInfo(x,a,m);return c.forEach(e=>r.disposeIntermediateTensorInfo(e)),b}let y=(0,g.OBj)().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(t.length>y){let v=[];for(let w=0;w<t.length;w+=y){let C=t.slice(w,w+y);v.push(e(C,n,r))}let I=e(v,n,r);for(let $ of v)r.disposeIntermediateTensorInfo($);return I}if((0,g.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&t[0].shape.length>1){let E=new r8(t.map(e=>e.shape),n);return r.runWebGLProgram(E,t,a)}let{tensors2D:k,outShape:S}=function(e,t,n){let r=g.Wap.computeOutShape(e.map(e=>e.shape),t),a=e.map(e=>nL({inputs:{x:e},attrs:{shape:[-1,g.D5U.sizeFromShape(e.shape.slice(t))]},backend:n}));return{tensors2D:a,outShape:r}}(t,n,r),T=new r6(k.map(e=>e.shape)),_=r.runWebGLProgram(T,k,a);k.forEach(e=>r.disposeIntermediateTensorInfo(e));let R=nL({inputs:{x:_},attrs:{shape:S},backend:r});return r.disposeIntermediateTensorInfo(_),R}(u,o,n)}let an={kernelName:g.Eh3,backendName:"webgl",kernelFunc:at};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class ar{constructor(e,t=!1,n=null,r=!1,a=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;let o=e.padInfo.top,i=e.padInfo.left,s=e.strideHeight,u=e.strideWidth,l=e.dilationHeight,h=e.dilationWidth,c=e.filterHeight,d=e.filterWidth,p=4*Math.floor(e.inChannels/4),f=e.inChannels%4,g="channelsLast"===e.dataFormat,m="",x="";n&&(m=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:a?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,x="result = activation(result);"),t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${m}

      const ivec2 strides = ivec2(${s}, ${u});
      const ivec2 pads = ivec2(${o}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${g?3:1}];

        ivec2 xRCCorner =
            ivec2(coords[${g?1:2}], coords[${g?2:3}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${c}; wR++) {
          int xR = xRCorner + wR * ${l};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${d}; wC++) {
            int xC = xCCorner + wC * ${h};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${p}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${g}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${1===f}) {

              if (${g}) {
                dotProd +=
                    getX(batch, xR, xC, ${p}) *
                    getW(wR, wC, ${p}, d2);
              } else {
                dotProd +=
                    getX(batch, ${p}, xR, xC) *
                    getW(wR, wC, ${p}, d2);
              }

            } else if (${2===f}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2)
              );

              if (${g}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${3===f}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2),
                getW(wR, wC, ${p} + 2, d2)
              );

              if (${g}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1),
                  getX(batch, xR, xC, ${p} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC),
                  getX(batch, ${p} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${t?"result += getBiasAtOutCoords();":""}
        ${x}
        setOutput(result);
      }
    `}}class aa{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;let t=e.padInfo.front,n=e.padInfo.top,r=e.padInfo.left,a=e.strideDepth,o=e.strideHeight,i=e.strideWidth,s=e.dilationDepth,u=e.dilationHeight,l=e.dilationWidth,h=e.filterDepth,c=e.filterHeight,d=e.filterWidth,p=4*Math.floor(e.inChannels/4),f=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${a}, ${o}, ${i});
      const ivec3 pads = ivec3(${t}, ${n}, ${r});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${h}; wF++) {
          int xF = xFCorner + wF * ${s};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${c}; wR++) {
            int xR = xRCorner + wR * ${u};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d}; wC++) {
              int xC = xCCorner + wC * ${l};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${p}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${1===f}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${p}) *
                  getW(wF, wR, wC, ${p}, d2);
              } else if (${2===f}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${3===f}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1),
                  getX(batch, xF, xR, xC, ${p} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2),
                  getW(wF, wR, wC, ${p} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class ao{constructor(e,t=!1,n=null,r=!1,a=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=X(this.outputShape.length);let o=e.padInfo.left,i=e.strideWidth,s=e.dilationWidth,u=e.filterHeight,l=e.filterWidth,h=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let c=0;c<l;c++)h+=`
           vec4 xTexelC${2*c};
           int xTexelC${2*c}Ready;
           vec4 xTexelC${2*c+1};
           int xTexelC${2*c+1}Ready;
           vec4 xC${c};`;h+=`
     for (int r = 0; r < ${u}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let d=0;d<l;d++)h+=`
           xTexelC${2*d} = vec4(0.0);
           xTexelC${2*d}Ready = 0;
           xTexelC${2*d+1} = vec4(0.0);
           xTexelC${2*d+1}Ready = 0;
           xC${d} = vec4(0.0);`;h+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let p=0;p<(l+1)/2;p++){let f=2*p;if(h+=`
           xC = xCCorner + ${f*s};
           `,1===i){if(f<l&&(o%2==1?(h+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${f}Ready == 0) {
                   xTexelC${f} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${f}.zw = vec2(0.0);
                   }
                   xTexelC${f}Ready = 1;
                 }
               `,1===s&&f>0?h+=`
                 xC${f} = vec4(xTexelC${f-2}.zw, xTexelC${f}.xy);
                 `:h+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${f} = vec4(previous.zw, xTexelC${f}.xy);
                   } else {
                     xC${f} = vec4(0.0, 0.0, xTexelC${f}.xy);
                   }
                   `):h+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${f}Ready == 0) {
                   xTexelC${f} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${f}.zw = vec2(0.0);
                   }
                   xTexelC${f}Ready = 1;
                 }

                 xC${f} = xTexelC${f};
                 `,f+1<l)){let m=o%2==0?g.D5U.nearestLargerEven(s):s;s%2==0&&o%2==1||s%2!=0&&o%2!=1?(h+=`
                   xCOffset = xC + imod(pads[1], 2) + ${m};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${f+1}Ready == 0) {
                     xTexelC${f+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${f+1}.zw = vec2(0.0);
                     }
                     xTexelC${f+1}Ready = 1;
                   }
                   `,s>1?h+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${f+1} = vec4(previous.zw, xTexelC${f+1}.xy);
                     } else {
                      xC${f+1} = vec4(0.0, 0.0, xTexelC${f+1}.xy);
                     }
                     `:h+=`
                     xC${f+1} = vec4(xTexelC${f}.zw, xTexelC${f+1}.xy);
                     `):1===m?h+=`
                     xC${f+1} = xTexelC${f};
                     `:h+=`
                     xCOffset = xC + ${m};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${f+1}Ready == 0) {
                       xTexelC${f+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${f+1}.zw = vec2(0.0);
                       }
                       xTexelC${f+1}Ready = 1;
                     }

                     xC${f+1} = xTexelC${f+1};
                     `}}else f<l&&(o%2==1?(h+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${f}Ready == 0) {
                   xTexelC${f} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${f}.zw = vec2(0.0);
                   }
                   xTexelC${f}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${f+1}Ready == 0) {
                   xTexelC${f+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${f+1}.zw = vec2(0.0);
                   }
                   xTexelC${f+1}Ready = 1;
                 }

                 xC${f} = vec4(xTexelC${f}.zw, xTexelC${f+1}.zw);
               `,f+1<l&&(h+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${f+1} = vec4(xTexelC${f+1}.xy, final.xy);
                 `)):(h+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${f}Ready == 0) {
                   xTexelC${f} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${f}.zw = vec2(0.0);
                   }
                   xTexelC${f}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${f+1}Ready == 0) {
                   xTexelC${f+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${f+1}.zw = vec2(0.);
                   }
                   xTexelC${f+1}Ready = 1;
                 }

                 xC${f} = vec4(
                   xTexelC${f}.xy, xTexelC${f+1}.xy);
               `,f+1<l&&(h+=`
                   xC${f+1} = vec4(xTexelC${f}.zw, xTexelC${f+1}.zw);
                 `)));f<l&&(h+=`
             wTexel = getW(r, ${f}, d1, d2);
             dotProd += xC${f}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${f}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,f+1<l&&(h+=`
               wTexel = getW(r, ${f+1}, d1, d2);
               dotProd += xC${f+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${f+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}h+=`
     }
   `,h+=`
     }
   `,h+=`
     }
   `;let x="",b="";n&&(x=r?`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${n}
         }`:a?`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${n}
         }`:`vec4 activation(vec4 x) {
           ${n}
         }`,b="result = activation(result);"),t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${x}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${h}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${t?"result += getBiasAtOutCoords();":""}
         ${b}
         setOutput(result);
       }
     `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class ai{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=X(this.outputShape.length);let{dataFormat:n}=t,r=(0,U.A)(),a="channelsLast"===n,o=a?1:2,i=a?2:3,s=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`,u="";for(let l=0;l<=1;l++)for(let h=0;h<=1;h++)u+=`
          blockIndex = rc.z + ${h};
          pos = rc.y + ${l};

          ${s}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${o}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${i}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${a}) {
                  innerDims = vec2(d1, ch);
                  result[${2*l+h}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${2*l+h}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${u}

        ${r.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function as(e,t){let n=e.length;return n>=3?t?[...e.slice(0,-3),e[n-3]*e[n-2],e[n-1]]:[...e.slice(0,-3),e[n-3],e[n-2]*e[n-1]]:!t&&1===n&&e[0]>1?[e[0],1]:null}function au({x:e,filter:t,convInfo:n,backend:r,bias:a=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:s=null}){let u;let l=e.shape,h=r.texData.get(e.dataId),c=n.inChannels,d=l[0]*l[1]*l[2],p=n.outChannels,f="channelsLast"===n.dataFormat,m=[];if(null!=o){let x=as(o.shape,f);null!=x&&(o=nL({inputs:{x:o},backend:r,attrs:{shape:x}}),m.push(o))}if(null!=a){let b=as(a.shape,f);null!=b&&(a=nL({inputs:{x:a},backend:r,attrs:{shape:b}}),m.push(a))}let y=!((1===d||1===p)&&c>1e3)&&h.isPacked&&f&&null!=h.texture&&l[2]%2!=0&&g.D5U.arraysEqual(h.shape.slice(-3),l.slice(-3));if(y){let v=l[0]*l[1]*(l[2]+1),w={dataId:e.dataId,shape:[1,v,n.inChannels],dtype:e.dtype},C=h.shape;h.shape=h.shape.slice(),h.shape[h.shape.length-2]++,g.D5U.assert(B(h.shape,w.shape),()=>`packed reshape ${h.shape} to ${w.shape} isn't free`);let I=nL({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}});m.push(I);let $=nY({a:w,b:I,backend:r,transposeA:!1,transposeB:!1,bias:a,activation:s,preluActivationWeights:o,leakyreluAlpha:i}),E=r.texData.get($.dataId);g.D5U.assert(E.isPacked,()=>"batchMatMul result is expected to be packed"),h.shape=C,E.shape=n.outShape,(u=nb({inputs:{x:$},backend:r})).shape=n.outShape,m.push($)}else{let k=n.outHeight*n.outWidth,S=nL({inputs:{x:e},backend:r,attrs:{shape:f?[n.batchSize,k,n.inChannels]:[n.batchSize,n.inChannels,k]}}),T=nL({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}}),_=nY({a:f?S:T,b:f?T:S,transposeA:!f,transposeB:!1,backend:r,bias:a,activation:s,preluActivationWeights:o,leakyreluAlpha:i});u=nL({inputs:{x:_},backend:r,attrs:{shape:n.outShape}}),m.push(S),m.push(T),m.push(_)}for(let R of m)r.disposeIntermediateTensorInfo(R);return u}function al({x:e,filter:t,convInfo:n,backend:r,bias:a=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:s=null}){let{filterWidth:u,filterHeight:l,inChannels:h,outWidth:c,outHeight:d,dataFormat:p}=n,f="channelsLast"===p,m=u*l*h,x=d*c,b=[n.batchSize,m,x],y=[];if(null!=o){let v=as(o.shape,f);null!=v&&(o=nL({inputs:{x:o},backend:r,attrs:{shape:v}}),y.push(o))}if(null!=a){let w=as(a.shape,f);null!=w&&(a=nL({inputs:{x:a},backend:r,attrs:{shape:w}}),y.push(a))}let C=nL({inputs:{x:t},backend:r,attrs:{shape:[1,m,g.D5U.sizeFromShape(t.shape)/m]}});y.push(C);let I=new ai(b,n),$=[e.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],E=r.runWebGLProgram(I,[e],"float32",$),k=nL({inputs:{x:E},backend:r,attrs:{shape:b}});y.push(E),y.push(k);let S=null!=a,T=null!=o,_="leakyrelu"===s,R=s?nN(s,!0):null,N=new nA(f?k.shape:C.shape,f?C.shape:k.shape,f?[n.batchSize,x,n.outChannels]:[n.batchSize,n.outChannels,x],!0,!1,S,R,T,_),A=f?[k,C]:[C,k];if(a&&A.push(a),T&&A.push(o),_){let D=r.makeTensorInfo([],"float32",g.D5U.createScalarValue(i,"float32"));A.push(D),y.push(D)}let O=r.runWebGLProgram(N,A,"float32"),B=nL({inputs:{x:O},backend:r,attrs:{shape:n.outShape}});for(let F of(y.push(O),y))r.disposeIntermediateTensorInfo(F);return B}let ah={kernelName:g.mhS,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:o,filter:i}=n,{strides:s,pad:u,dataFormat:l,dilations:h,dimRoundingMode:c}=a,d=g.Wap.convertConv2DDataFormat(l),p=g.Wap.computeConv2DInfo(o.shape,i.shape,s,h,u,c,!1,d);if(1===p.filterHeight&&1===p.filterWidth&&1===p.dilationHeight&&1===p.dilationWidth&&1===p.strideHeight&&1===p.strideWidth&&("SAME"===p.padInfo.type||"VALID"===p.padInfo.type))t=au({x:o,filter:i,convInfo:p,backend:r});else if(p.strideWidth<=2&&"channelsLast"===d&&(0,g.OBj)().getBool("WEBGL_EXP_CONV")){let f=new ao(p),m=[[p.padInfo.top,p.padInfo.left],[p.strideHeight,p.strideWidth],[p.dilationHeight,p.dilationWidth],[p.inHeight,p.inWidth]];t=r.runWebGLProgram(f,[o,i],"float32",m)}else if((0,g.OBj)().getBool("WEBGL_CONV_IM2COL"))t=al({x:o,filter:i,convInfo:p,backend:r});else{let x=new ar(p);t=r.runWebGLProgram(x,[o,i],"float32")}let b=nL({inputs:{x:t},backend:r,attrs:{shape:p.outShape}});return r.disposeIntermediateTensorInfo(t),b}};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class ac{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,a=e.padInfo.left,o="channelsLast"===e.dataFormat;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${a};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              if (${o}) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class ad{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,a=e.strideWidth,o="channelsLast"===e.dataFormat,i=t-1-e.padInfo.top,s=n-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${o?3:1}];

        ivec2 dyCorner = ivec2(coords[${o?1:2}], coords[${o?2:3}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${a}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${o}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class ap{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,a=e.padInfo.front,o=e.padInfo.top,i=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${a};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${n} - ${o};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${r} - ${i};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class af{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,a=e.strideDepth,o=e.strideHeight,i=e.strideWidth,s=t-1-e.padInfo.front,u=n-1-e.padInfo.top,l=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${s}, ${u}, ${l});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${a}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${n}; wR++) {
            float dyR = float(dyRCorner + wR) / ${o}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${n} - 1 - wR;

            for (int wC = 0; wC < ${r}; wC++) {
              float dyC = float(dyCCorner + wC) / ${i}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${r} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}let ag={kernelName:g.wUP,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,dy:o}=t,{strides:i,pad:s,dataFormat:u,dimRoundingMode:l,filterShape:h}=r,c=g.Wap.convertConv2DDataFormat(u),d=g.Wap.computeConv2DInfo(a.shape,h,i,1,s,l,!1,c),p=new ac(d);return n.runWebGLProgram(p,[a,o],"float32")}},am={kernelName:g.wm,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,filter:o}=t,{inputShape:i,strides:s,pad:u,dataFormat:l,dimRoundingMode:h}=r,c=g.Wap.convertConv2DDataFormat(l),d=g.Wap.computeConv2DInfo(i,o.shape,s,1,u,h,!1,c),p=new ad(d);return n.runWebGLProgram(p,[a,o],"float32")}},ax={kernelName:g.x12,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,filter:o}=t,{strides:i,pad:s,dilations:u}=r,l=g.Wap.computeConv3DInfo(a.shape,o.shape,i,u,s),h=new aa(l);return n.runWebGLProgram(h,[a,o],"float32")}},ab={kernelName:g.o2y,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,dy:o}=t,{strides:i,pad:s,filterShape:u}=r,l=g.Wap.computeConv3DInfo(a.shape,u,i,1,s),h=new ap(l);return n.runWebGLProgram(h,[a,o],"float32")}},ay={kernelName:g.ik2,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,filter:o}=t,{pad:i,strides:s,inputShape:u}=r,l=g.Wap.computeConv3DInfo(u,o.shape,s,1,i),h=new af(l);return n.runWebGLProgram(h,[a,o],"float32")}},av=nT+`
  return cos(x);
`,aw=n_({opSnippet:av}),aC={kernelName:g.mc4,backendName:"webgl",kernelFunc:aw},aI=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,a$=n_({opSnippet:aI}),aE={kernelName:g.TR1,backendName:"webgl",kernelFunc:a$};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class ak{constructor(e,t,n,r,a){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];let[o,i,s,u]=e,[l]=t,[h,c]=n;this.outputShape=[l,h,c,u];let[d,p]=[`${i-1}.0`,`${s-1}.0`],[f,g,m]=h>1?[`${(i-1)/(h-1)}`,"(y2-y1) * height_ratio",`y1*${d} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${d}`],[x,b,y]=c>1?[`${(s-1)/(c-1)}`,"(x2-x1) * width_ratio",`x1*${p} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${p}`];this.userCode=`
      const float height_ratio = float(${f});
      const float width_ratio = float(${x});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${o}) {
          return;
        }

        float height_scale = ${g};
        float width_scale = ${b};

        float in_y = ${m};
        if( in_y < 0.0 || in_y > ${d} ) {
          setOutput(float(${a}));
          return;
        }
        float in_x = ${y};
        if( in_x < 0.0 || in_x > ${p} ) {
          setOutput(float(${a}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${"bilinear"===r?1:0} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let aS=e=>{let{inputs:t,backend:n,attrs:r}=e,{image:a,boxes:o,boxInd:i}=t,{cropSize:s,method:u,extrapolationValue:l}=r,h=new ak(a.shape,o.shape,s,u,l);return n.runWebGLProgram(h,[a,o,i],"float32")},aT={kernelName:g.VcC,backendName:"webgl",kernelFunc:aS};(l=p||(p={})).Prod="*",l.Sum="+";class a_{constructor(e,t,n,r){this.op=e,this.outputShape=t,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];let a=this.outputShape.length,o=this.op===p.Prod?"1.0":"0.0",i=n?o:`getX(${aR(a,"coords",this.op)})`,s=this.outputShape[this.outputShape.length-1],u="",l="";n?(u=r?`end != ${s-1}`:"end != 0",l=r?"end + 1":"end - 1"):(u=r?`end + pow2 < ${s}`:"end >= pow2",l=r?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${(0,V.kW)(a)} coords = getOutputCoords();
        int end = ${aN(a,"coords",this.op)};
        float val = ${i};
        int pow2 = int(pow(2.0, index));
        if (${u}) {
          int idx = ${l};
          ${aN(a,"coords",this.op)} = idx;
          val ${this.op}= getX(${aR(a,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function aR(e,t,n){if(1===e)return`${t}`;if(2===e)return`${t}.x, ${t}.y`;if(3===e)return`${t}.x, ${t}.y, ${t}.z`;if(4===e)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function aN(e,t,n){if(1===e)return`${t}`;if(2===e)return`${t}.y`;if(3===e)return`${t}.z`;if(4===e)return`${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function aA(e,t,n,r,a,o){let i=t.shape.length,s=g.Wap.getAxesPermutation([r],i),u=t;null!=s&&(u=nK({inputs:{x:t},backend:n,attrs:{perm:s}}));let l=g.Wap.getInnerMostAxes(1,i)[0];if(l!==i-1)throw Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${r}`);let h=u.shape[l],c=nb({inputs:{x:u},backend:n});for(let d=0;d<=Math.ceil(Math.log2(h))-1;d++){let p=new a_(e,u.shape,!1,o),f=[[d]],m=c;c=n.runWebGLProgram(p,[c],c.dtype,f),n.disposeIntermediateTensorInfo(m)}if(a){let x=new a_(e,u.shape,a,o),b=c;c=n.runWebGLProgram(x,[c],c.dtype),n.disposeIntermediateTensorInfo(b)}if(null!=s){let y=g.Wap.getUndoAxesPermutation(s),v=nK({inputs:{x:c},backend:n,attrs:{perm:y}});return n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(u),v}return c}let aD={kernelName:g.Byc,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o,exclusive:i,reverse:s}=r;return aA(p.Prod,a,n,o,i,s)}},aO={kernelName:g.iHb,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o,exclusive:i,reverse:s}=r;return aA(p.Sum,a,n,o,i,s)}},aB={kernelName:g.QRR,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,weights:o}=t,{size:i,binaryOutput:s}=r;if(1===a.shape.length){let u=n.readSync(a.dataId),l=n.readSync(o.dataId),h=th(u,l,o.dtype,o.shape,i);return n.makeTensorInfo([i],o.dtype,h)}if(2===a.shape.length){let c=n.bufferSync(a),d=n.bufferSync(o),p=tc(c,d,i,s);return n.makeTensorInfo(p.shape,o.dtype,p.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${a.shape.length}.`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class aF{constructor(e,t,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return"NHWC"===this.dataFormat?"coords[1]":"coords[2]"}getWidthCoordString(){return"NHWC"===this.dataFormat?"coords[2]":"coords[3]"}getDepthCoordString(){return"NHWC"===this.dataFormat?"coords[3]":"coords[1]"}getOutputDepthSize(){return"NHWC"===this.dataFormat?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return"NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}let aP={kernelName:g.T0n,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{blockSize:o,dataFormat:i}=r,s=a.shape[0],u="NHWC"===i?a.shape[1]:a.shape[2],l="NHWC"===i?a.shape[2]:a.shape[3],h="NHWC"===i?a.shape[3]:a.shape[1],c=u*o,d=l*o,p=h/(o*o),f=new aF("NHWC"===i?[s,c,d,p]:[s,p,c,d],o,i);return n.runWebGLProgram(f,[a],a.dtype)}};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class aL{constructor(e,t=!1,n=null,r=!1,a=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=X(this.outputShape.length);let o=e.filterHeight,i=e.filterWidth,s=e.outChannels/e.inChannels,u="",l="";n&&(u=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:a?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,l="result = activation(result);"),t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${u}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${s};
        int q = d2 - d1 * ${s};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${o}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${i}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${t?"result += getBiasAtOutCoords();":""}
        ${l}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class aW{constructor(e,t=!1,n=null,r=!1,a=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=X(this.outputShape.length);let o=e.outChannels/e.inChannels,i=e.padInfo.left,s=e.strideWidth,u=e.dilationWidth,l=e.filterHeight,h=e.filterWidth,c=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let d=0;d<h;d++)c+=`
          vec4 xTexelC${2*d};
          int xTexelC${2*d}Ready;
          vec4 xTexelC${2*d+1};
          int xTexelC${2*d+1}Ready;
          vec4 xC${d};`;c+=`
    for (int r = 0; r < ${l}; r++) {
      `;for(let p=0;p<h;p++)c+=`
          xTexelC${2*p} = vec4(0.0);
          xTexelC${2*p}Ready = 0;
          xTexelC${2*p+1} = vec4(0.0);
          xTexelC${2*p+1}Ready = 0;
          xC${p} = vec4(0.0);`;c+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let f=0;f<(h+1)/2;f++){let m=2*f;if(c+=`
          xC = xCCorner + ${m*u};
          `,1===s){if(m<h&&(i%2==1?(c+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m}Ready == 0) {
                  xTexelC${m} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${m}.zw = vec2(0.0);
                  }
                  xTexelC${m}Ready = 1;
                }
              `,1===u&&m>0?c+=`
                xC${m} = vec4(xTexelC${m-2}.zw, xTexelC${m}.xy);
                `:c+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${m} = vec4(previous.zw, xTexelC${m}.xy);
                  } else {
                    xC${m} = vec4(0.0, 0.0, xTexelC${m}.xy);
                  }
                  `):c+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${m}Ready == 0) {
                  xTexelC${m} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${m}.zw = vec2(0.0);
                  }
                  xTexelC${m}Ready = 1;
                }

                xC${m} = xTexelC${m};
                `,m+1<h)){let x=i%2==0?g.D5U.nearestLargerEven(u):u;u%2==0&&i%2==1||u%2!=0&&i%2!=1?(c+=`
                  xCOffset = xC + imod(pads[1], 2) + ${x};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m+1}Ready == 0) {
                    xTexelC${m+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${m+1}.zw = vec2(0.0);
                    }
                    xTexelC${m+1}Ready = 1;
                  }
                  `,u>1?c+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${m+1} = vec4(previous.zw, xTexelC${m+1}.xy);
                    } else {
                     xC${m+1} = vec4(0.0, 0.0, xTexelC${m+1}.xy);
                    }
                    `:c+=`
                    xC${m+1} = vec4(xTexelC${m}.zw, xTexelC${m+1}.xy);
                    `):1===x?c+=`
                    xC${m+1} = xTexelC${m};
                    `:c+=`
                    xCOffset = xC + ${x};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m+1}Ready == 0) {
                      xTexelC${m+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${m+1}.zw = vec2(0.0);
                      }
                      xTexelC${m+1}Ready = 1;
                    }

                    xC${m+1} = xTexelC${m+1};
                    `}}else m<h&&(i%2==1?(c+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m}Ready == 0) {
                  xTexelC${m} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${m}.zw = vec2(0.0);
                  }
                  xTexelC${m}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${m+1}Ready == 0) {
                  xTexelC${m+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${m+1}.zw = vec2(0.0);
                  }
                  xTexelC${m+1}Ready = 1;
                }

                xC${m} = vec4(xTexelC${m}.zw, xTexelC${m+1}.zw);
              `,m+1<h&&(c+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${m+1} = vec4(xTexelC${m+1}.xy, final.xy);
                `)):(c+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${m}Ready == 0) {
                  xTexelC${m} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${m}.zw = vec2(0.0);
                  }
                  xTexelC${m}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m+1}Ready == 0) {
                  xTexelC${m+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${m+1}.zw = vec2(0.);
                  }
                  xTexelC${m+1}Ready = 1;
                }

                xC${m} = vec4(
                  xTexelC${m}.xy, xTexelC${m+1}.xy);
              `,m+1<h&&(c+=`
                  xC${m+1} = vec4(xTexelC${m}.zw, xTexelC${m+1}.zw);
                `)));m<h&&(c+=`
            wTexel = getW(r, ${m}, d1, q);
            dotProd += xC${m} * vec4(wTexel.xz, wTexel.xz);
          `,m+1<h&&(c+=`
              wTexel = getW(r, ${m+1}, d1, q);
              dotProd += xC${m+1} * vec4(wTexel.xz, wTexel.xz);
            `))}c+=`
    }
  `,c+=`
      }
    `;let b="",y="";n&&(b=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:a?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`vec4 activation(vec4 x) {
          ${n}
        }`,y="result = activation(result);"),t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${b}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${o};
        int q = d2 - d1 * ${o};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${c}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${t?"result += getBiasAtOutCoords();":""}
        ${y}
        setOutput(result);
      }
    `}}let aM={kernelName:g.cie,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:o,filter:i}=n,{strides:s,pad:u,dilations:l,dimRoundingMode:h}=a,c=l;null==c&&(c=[1,1]),g.D5U.assert(g.Wap.eitherStridesOrDilationsAreOne(s,c),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${s} and dilations '${c}'`);let d=g.Wap.computeConv2DInfo(o.shape,i.shape,s,c,u,h,!0);t=(0,g.OBj)().getBool("WEBGL_PACK_DEPTHWISECONV")&&d.strideWidth<=2&&d.outChannels/d.inChannels==1?new aW(d):new aL(d);let p=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return r.runWebGLProgram(t,[o,i],"float32",p)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class aU{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,a=e.padInfo.left,o=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${o} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${a};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class aV{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,a=e.strideWidth,o=t-1-e.padInfo.top,i=n-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${a}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${s}; dm++) {
              int d2 = d1 * ${s} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}let aG={kernelName:g.sL$,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,dy:o}=t,{strides:i,dilations:s,pad:u,dimRoundingMode:l,filterShape:h}=r,c=g.Wap.computeConv2DInfo(a.shape,h,i,s,u,l,!0),d=new aU(c);return n.runWebGLProgram(d,[a,o],"float32")}},az={kernelName:g.y7R,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,filter:o}=t,{strides:i,dilations:s,pad:u,dimRoundingMode:l,inputShape:h}=r,c=g.Wap.computeConv2DInfo(h,o.shape,i,s,u,l,!0),d=new aV(c);return n.runWebGLProgram(d,[a,o],"float32")}};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class aX{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}let aH={kernelName:g.$w,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n}=e,{x:r}=t,a=[...r.shape,...r.shape],o=g.D5U.sizeFromShape(r.shape),i=nL({inputs:{x:r},backend:n,attrs:{shape:[o]}}),s=new aX(o),u=n.runWebGLProgram(s,[i],i.dtype),l=nL({inputs:{x:u},backend:n,attrs:{shape:a}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(u),l}};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class aj{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;let{inHeight:t,inWidth:n,padInfo:r,strideHeight:a,strideWidth:o,filterHeight:i,filterWidth:s,dilationHeight:u,dilationWidth:l}=e,{top:h,left:c}=r;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${o});
      const ivec2 pads = ivec2(${h}, ${c});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${i}; h++) {
          int hIn = hBeg + h * ${u};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${s}; w++) {
              int wIn = wBeg + w * ${l};

              if (wIn >= 0 && wIn < ${n}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}let aK={kernelName:g.p4S,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:o,filter:i}=n,{strides:s,pad:u,dilations:l}=a,h=g.Wap.computeDilation2DInfo(o.shape,i.shape,s,u,"NHWC",l),c=new aj(h);t=r.runWebGLProgram(c,[o,i],"float32");let d=nL({inputs:{x:t},backend:r,attrs:{shape:h.outShape}});return r.disposeIntermediateTensorInfo(t),d}},aq={kernelName:g.$g6,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{equation:a}=r,{allDims:o,summedDims:i,idDims:s}=g.Wap.decodeEinsumEquation(a,t.length);g.Wap.checkEinsumDimSizes(o.length,s,t);let{path:u,steps:l}=g.Wap.getEinsumComputePath(i,s),h=l.length,c=null,d=o.length,p=[];for(let f=0;f<h;++f){for(let m of l[f]){let x;let{permutationIndices:b,expandDims:y}=g.Wap.getEinsumPermutation(d,s[m]);g.Wap.isIdentityPermutation(b)?x=t[m]:(x=nK({inputs:{x:t[m]},backend:n,attrs:{perm:b}}),p.push(x));let v=x.shape.slice();for(let w=0;w<y.length;++w)v.splice(y[w],0,1);g.D5U.arraysEqual(x.shape,v)||(x=nL({inputs:{x},backend:n,attrs:{shape:v}}),p.push(x)),null===c?c=x:(c=nF({inputs:{a:x,b:c},backend:n}),p.push(c))}f<h-1&&(u[f]>=0&&(c=nH({inputs:{x:c},backend:n,attrs:{axis:u[f]-(o.length-d),keepDims:!1}}),p.push(c)),d--)}for(let C of p)C!==c&&n.disposeIntermediateTensorInfo(C);return c}},aY=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,aZ=n_({opSnippet:"return (x >= 0.0) ? x : (exp(x) - 1.0);",packedOpSnippet:aY}),aQ={kernelName:g.SX0,backendName:"webgl",kernelFunc:aZ},aJ=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,a0=e=>{let{inputs:t,backend:n}=e,{dy:r,y:a}=t,o=(0,g.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new nx(aJ,r.shape,a.shape):new ng("return (b >= 1.0) ? a : a * (b + 1.0);",r.shape,a.shape);return n.runWebGLProgram(o,[r,a],r.dtype)},a1={kernelName:g.HEU,backendName:"webgl",kernelFunc:a0},a2=`
  return vec4(equal(a, b));
`,a3=nR({opSnippet:"return float(a == b);",packedOpSnippet:a2,dtype:"bool",cpuKernelImpl:tg}),a4={kernelName:g.hdR,backendName:"webgl",kernelFunc:a3},a5=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${g.Wap.ERF_P};
  float a1 = ${g.Wap.ERF_A1};
  float a2 = ${g.Wap.ERF_A2};
  float a3 = ${g.Wap.ERF_A3};
  float a4 = ${g.Wap.ERF_A4};
  float a5 = ${g.Wap.ERF_A5};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,a6=n_({opSnippet:a5}),a8={kernelName:g.Omj,backendName:"webgl",kernelFunc:a6},a7=nT+`
  return exp(x);
`,a9=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,oe=n_({opSnippet:a7,packedOpSnippet:a9,cpuKernelImpl:tm,dtype:"float32"}),ot={kernelName:g.NEP,backendName:"webgl",kernelFunc:oe};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function on(e){let{inputs:t,attrs:n,backend:r}=e,{dim:a}=n,{input:o}=t,i=o.shape.length,s=o.shape.slice(),u=a;return a<0&&(g.D5U.assert(-(i+1)<=a,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),u=i+a+1),s.splice(u,0,1),nL({inputs:{x:o},backend:r,attrs:{shape:s}})}let or={kernelName:g.YFo,backendName:"webgl",kernelFunc:on},oa="return exp(x) - 1.0;",oo=n_({opSnippet:oa,packedOpSnippet:oa,cpuKernelImpl:tx}),oi={kernelName:g.Y0y,backendName:"webgl",kernelFunc:oo};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class os{constructor(e,t,n){let r;this.variableNames=["real","imag"];let a=t[1];this.outputShape=t;let o=n?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=n?`${a}.0`:"1.0";if("real"===e)r="return real * expR - imag * expI;";else if("imag"===e)r="return real * expI + imag * expR;";else throw Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${o};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${r}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${a});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${a}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${i};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function ou(e,t,n){let r=n.texData.get(e.dataId),a=g.D5U.sizeFromShape(e.shape),o=e.shape[e.shape.length-1],i=nL({inputs:{x:e},backend:n,attrs:{shape:[a/o,o]}}),s=i.shape,u=new os("real",s,t),l=new os("imag",s,t),h=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:s},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:s}],c=n.runWebGLProgram(u,h,"float32"),d=n.runWebGLProgram(l,h,"float32"),p=nv({inputs:{real:c,imag:d},backend:n});n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(d);let f=nL({inputs:{x:p},backend:n,attrs:{shape:e.shape}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(p),f}let ol={kernelName:g.vwp,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n}=e,{input:r}=t;return ou(r,!1,n)}};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class oh{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function oc(e){let{backend:t,attrs:n}=e,{shape:r,value:a}=n,{dtype:o}=n;if("string"===(o=o||g.D5U.inferDtype(a))){let i=g.D5U.getArrayFromDType(o,g.D5U.sizeFromShape(r));return i.fill(a),t.makeTensorInfo(r,o,i)}{let s=new oh(r,a);return t.runWebGLProgram(s,[],o,[[a]])}}let od={kernelName:g.deh,backendName:"webgl",kernelFunc:oc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class op{constructor(e){this.variableNames=["Image"],this.outputShape=[];let t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let of={kernelName:g.Uyb,backendName:"webgl",kernelFunc({inputs:e,backend:t}){let{image:n}=e,r=new op(n.shape),a=t.runWebGLProgram(r,[n],n.dtype);return a}},og="return floor(x);",om=n_({opSnippet:og,packedOpSnippet:og,cpuKernelImpl:tb}),ox={kernelName:g.OR,backendName:"webgl",kernelFunc:om},ob=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,oy=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,ov=nR({opSnippet:ob,packedOpSnippet:oy,dtype:"int32"}),ow={kernelName:g.jeX,backendName:"webgl",kernelFunc:ov};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class oC{constructor(e){this.variableNames=["A"];let t=(0,U.A)(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}.0, ${n}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class oI{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;let t=(0,U.A)(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${r}.0, ${n}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let o$={kernelName:g.eBW,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{pixels:a}=t,{numChannels:i}=r,s="undefined"!=typeof HTMLVideoElement&&a instanceof HTMLVideoElement,u="undefined"!=typeof HTMLImageElement&&a instanceof HTMLImageElement,[l,h]=s?[a.videoWidth,a.videoHeight]:[a.width,a.height],d=[h,l,i];if(u||s){let p=(0,g.OBj)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(null==o||p!==oE)&&(oE=p,o=document.createElement("canvas").getContext("2d",{willReadFrequently:oE})),o.canvas.width=l,o.canvas.height=h,o.drawImage(a,0,0,l,h),a=o.canvas}let f=n.makeTensorInfo([h,l],"int32");n.texData.get(f.dataId).usage=c.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(f.dataId),a);let m=(0,g.OBj)().getBool("WEBGL_PACK")?new oI(d):new oC(d),x=n.runWebGLProgram(m,[f],"int32");return n.disposeData(f.dataId),x}},oE=(0,g.OBj)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU"),ok={kernelName:g._V0,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:o,filter:i,bias:s,preluActivationWeights:u}=n,{strides:l,pad:h,dataFormat:c,dilations:d,dimRoundingMode:p,activation:f,leakyreluAlpha:m}=a,x=g.Wap.convertConv2DDataFormat(c),b=g.Wap.computeConv2DInfo(o.shape,i.shape,l,d,h,p,!1,x),y=[],v=null!=s,w=null!=u,C="leakyrelu"===f,I=()=>{let e=[o,i],t=(e,t)=>{if("NCHW"===t&&1===e.shape.length&&1!==e.shape[0]){let n=nL({inputs:{x:e},backend:r,attrs:{shape:[e.shape[0],1,1]}});return y.push(n),n}return e};if(v&&e.push(t(s,c)),w&&e.push(t(u,c)),C){let n=r.makeTensorInfo([],"float32",g.D5U.createScalarValue(m,"float32"));e.push(n),y.push(n)}return e};if(1===b.filterHeight&&1===b.filterWidth&&1===b.dilationHeight&&1===b.dilationWidth&&1===b.strideHeight&&1===b.strideWidth&&("SAME"===b.padInfo.type||"VALID"===b.padInfo.type))t=au({x:o,filter:i,convInfo:b,backend:r,bias:s,activation:f,preluActivationWeights:u,leakyreluAlpha:m});else if(b.strideWidth<=2&&"channelsLast"===x&&(0,g.OBj)().getBool("WEBGL_EXP_CONV")){let $=f?nN(f,!0):null,E=new ao(b,v,$,w,C),k=[[b.padInfo.top,b.padInfo.left],[b.strideHeight,b.strideWidth],[b.dilationHeight,b.dilationWidth],[b.inHeight,b.inWidth]],S=I();t=r.runWebGLProgram(E,S,"float32",k)}else if((0,g.OBj)().getBool("WEBGL_CONV_IM2COL"))t=al({x:o,filter:i,convInfo:b,backend:r,bias:s,activation:f,preluActivationWeights:u,leakyreluAlpha:m});else{let T=f?nN(f,!1):null,_=new ar(b,v,T,w,C),R=I();t=r.runWebGLProgram(_,R,"float32")}let N=nL({inputs:{x:t},backend:r,attrs:{shape:b.outShape}});return y.push(t),y.forEach(e=>r.disposeIntermediateTensorInfo(e)),N}},oS={kernelName:g.luS,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:o,filter:i,bias:s,preluActivationWeights:u}=n,{strides:l,pad:h,dilations:c,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=a,m=[],x=c;null==x&&(x=[1,1]),g.D5U.assert(g.Wap.eitherStridesOrDilationsAreOne(l,x),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${x}'`);let b=g.Wap.computeConv2DInfo(o.shape,i.shape,l,x,h,d,!0),y=(0,g.OBj)().getBool("WEBGL_PACK_DEPTHWISECONV")&&b.strideWidth<=2&&b.outChannels/b.inChannels==1,v=p?nN(p,y):null,w=[o,i],C=null!=s,I=null!=u,$="leakyrelu"===p;if(C&&w.push(s),I&&w.push(u),$){let E=r.makeTensorInfo([],"float32",g.D5U.createScalarValue(f,"float32"));w.push(E),m.push(E)}t=y?new aW(b,C,v,I,$):new aL(b,C,v,I,$);let k=[[b.padInfo.top,b.padInfo.left],[b.strideHeight,b.strideWidth],[b.dilationHeight,b.dilationWidth],[b.inHeight,b.inWidth]],S=r.runWebGLProgram(t,w,"float32",k);return m.forEach(e=>r.disposeIntermediateTensorInfo(e)),S}};class oT{constructor(e,t,n,r){this.sliceDim=e,this.strides=t,this.paramsShape=r,this.variableNames=["x","indices"],this.outputShape=n;let a=(0,V.kW)(n.length),o=`
    int index;`;for(let i=0;i<this.sliceDim;i++)o+=`
          index = round(getIndices(coords[0], ${i}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[i]};
          flattenIndex += index * ${this.strides[i]};`;this.userCode=`
         void main() {
          ${a} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${o}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}let o_={kernelName:g.q1x,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n}=e,{params:r,indices:a}=t,o=a.shape,i=o[o.length-1],s=g.D5U.sizeFromShape(r.shape),[u,l,h,c]=g.Wap.prepareAndValidate(r,a),d=nL({inputs:{x:a},backend:n,attrs:{shape:[l,i]}}),p=nL({inputs:{x:r},backend:n,attrs:{shape:[g.D5U.sizeFromShape(r.shape)/h,h]}});if(n.shouldExecuteOnCPU([r,a])||"string"===r.dtype){let f=n.readSync(a.dataId),m=n.bufferSync(r),x=ty(f,m,r.dtype,l,i,h,c,r.shape,s);return n.makeTensorInfo(u,r.dtype,x.values)}let b=new oT(i,c,[l,h],r.shape),y=n.runWebGLProgram(b,[p,d],p.dtype),v=nL({inputs:{x:y},backend:n,attrs:{shape:u}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(y),v}};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class oR{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;let n=(0,V.kW)(this.rank),r=function(e,t){let n=["resRC.x","resRC.y","resRC.z","resRC.w"],r=[];for(let a=0;a<e.length;a++)2===a?r.push("index"):r.push(`${n[a]}`);return r.join()}(e,0);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${r}));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function oN(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,indices:o}=t,{axis:i,batchDims:s}=r,u=g.D5U.parseAxisParam(i,a.shape)[0];if((0,g.OBj)().get("DEBUG")){let l=n.readSync(o.dataId),h=a.shape[u];for(let c=0;c<l.length;++c){let d=l[c];g.D5U.assert(d<=h-1&&d>=0,()=>`GatherV2: the index value ${d} is not in [0, ${h-1}]`)}}let p=g.Wap.segment_util.collectGatherOpShapeInfo(a,o,u,s),f=g.D5U.sizeFromShape(o.shape),m=[],x=nL({inputs:{x:a},backend:n,attrs:{shape:[p.batchSize,p.outerSize,p.dimSize,p.sliceSize]}}),b=nL({inputs:{x:o},backend:n,attrs:{shape:[p.batchSize,f/p.batchSize]}});m.push(x),m.push(b);let y=[p.batchSize,p.outerSize,f/p.batchSize,p.sliceSize];if(n.shouldExecuteOnCPU([a,o])||"string"===a.dtype){let v=n.bufferSync(b),w=n.bufferSync(x),C=tv(w,v,y);return m.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(p.outputShape,C.dtype,C.values)}let I=new oR(x.shape,y),$=n.runWebGLProgram(I,[x,b],x.dtype);m.push($);let E=nL({inputs:{x:$},backend:n,attrs:{shape:p.outputShape}});return m.forEach(e=>n.disposeIntermediateTensorInfo(e)),E}let oA={kernelName:g.qi_,backendName:"webgl",kernelFunc:oN},oD=`
  return vec4(greaterThan(a, b));
`,oO=nR({opSnippet:"return float(a > b);",packedOpSnippet:oD,cpuKernelImpl:tw,dtype:"bool"}),oB={kernelName:g.iZT,backendName:"webgl",kernelFunc:oO},oF=`
  return vec4(greaterThanEqual(a, b));
`,oP=nR({opSnippet:"return float(a >= b);",packedOpSnippet:oF,dtype:"bool",cpuKernelImpl:tC}),oL={kernelName:g.Acj,backendName:"webgl",kernelFunc:oP},oW={kernelName:g.Qg5,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n}=e,{input:r}=t;return ou(r,!0,n)}},oM=n_({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),oU={kernelName:g.avt,backendName:"webgl",kernelFunc:oM},oV=n_({opSnippet:"return float(isinf(x));",dtype:"bool"}),oG={kernelName:g.iWB,backendName:"webgl",kernelFunc:oV},oz=n_({opSnippet:"return float(isnan(x));",dtype:"bool"}),oX={kernelName:g.r7n,backendName:"webgl",kernelFunc:oz},oH=`
  return vec4(lessThan(a, b));
`,oj=nR({opSnippet:"return float(a < b);",packedOpSnippet:oH,cpuKernelImpl:tI,dtype:"bool"}),oK={kernelName:g.vtC,backendName:"webgl",kernelFunc:oj},oq=`
  return vec4(lessThanEqual(a, b));
`,oY=nR({opSnippet:"return float(a <= b);",packedOpSnippet:oq,cpuKernelImpl:t$,dtype:"bool"}),oZ={kernelName:g.CAk,backendName:"webgl",kernelFunc:oY},oQ={kernelName:g.e7N,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{backend:t,attrs:n}=e,{start:r,stop:a,num:o}=n,i=tE(r,a,o);return t.makeTensorInfo([i.length],"float32",i)}},oJ=nT+`
  return x < 0.0 ? 0./0. : log(x);
`,o0=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,o1=n_({opSnippet:oJ,packedOpSnippet:o0,cpuKernelImpl:tk}),o2={kernelName:g.ZbH,backendName:"webgl",kernelFunc:o1},o3=nT+`
  return log(1.0 + x);
`,o4=n_({opSnippet:o3}),o5={kernelName:g.kU,backendName:"webgl",kernelFunc:o4},o6=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,o8=nR({opSnippet:"return float(a >= 1.0 && b >= 1.0);",packedOpSnippet:o6,dtype:"bool"}),o7={kernelName:g.PYm,backendName:"webgl",kernelFunc:o8},o9=n_({opSnippet:"return float(!(x >= 1.0));"}),ie={kernelName:g.VfG,backendName:"webgl",kernelFunc:o9},it=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,ir=nR({opSnippet:"return float(a >= 1.0 || b >= 1.0);",packedOpSnippet:it,dtype:"bool"}),ia={kernelName:g.MZg,backendName:"webgl",kernelFunc:ir};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class io{constructor(e,t,n,r,a){let o;this.variableNames=["x"],this.outputShape=[];let i=e[3]-1;this.outputShape=e;let s=`float(${n}) + float(${r}) * sum`;o=.5===a?`inversesqrt(${s})`:1===a?`1.0/(${s})`:`exp(log(${s}) * float(-${a}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${t}; j <= ${t}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${i}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${o};
        setOutput(val);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class ii{constructor(e,t,n,r,a){let o;this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let i=e[3]-1;this.outputShape=e;let s=`float(${n}) + float(${r}) * sum`;o=.5===a?`inversesqrt(${s})`:1===a?`1.0/(${s})`:`exp(log(${s}) * float(-${a}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${t};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${t}; j <= ${t}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${i}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${o};
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let is=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{depthRadius:o,bias:i,alpha:s,beta:u}=r,l=(0,g.OBj)().getBool("WEBGL_PACK_NORMALIZATION")?new ii(a.shape,o,i,s,u):new io(a.shape,o,i,s,u);return n.runWebGLProgram(l,[a],a.dtype)},iu={kernelName:g.eZ0,backendName:"webgl",kernelFunc:is};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class il{constructor(e,t,n,r,a){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=r,this.beta=a,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${r}) * norm + float(${n});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${r})
                * float(${a})
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${a});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let ih=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:a,y:o,dy:i}=t,{depthRadius:s,bias:u,alpha:l,beta:h}=r,c=new il(a.shape,s,u,l,h);return n.runWebGLProgram(c,[a,o,i],a.dtype)},ic={kernelName:g.Hhh,backendName:"webgl",kernelFunc:ih};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function id(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:o}=n,{reductionIndices:i,keepDims:s}=a,u=o.shape.length,l=g.D5U.parseAxisParam(i,o.shape),h=l,c=g.Wap.getAxesPermutation(h,u),d=null!=c,p=r.shouldExecuteOnCPU([o]),f=o;if(d){if(p){let m=r.texData.get(f.dataId),x=m.values,b=Array(u);for(let y=0;y<b.length;y++)b[y]=o.shape[c[y]];let v=tJ(x,o.shape,o.dtype,c,b);f=r.makeTensorInfo(b,o.dtype);let w=r.texData.get(f.dataId);w.values=v}else f=nX(o,c,r);h=g.Wap.getInnerMostAxes(h.length,u)}g.Wap.assertAxesAreInnerMostDims("max",h,u);let[C,I]=g.Wap.computeOutAndReduceShapes(f.shape,h),$=C;if(s&&($=g.Wap.expandShapeToKeepDim(C,l)),p){let E=r.texData.get(f.dataId),k=E.values,S=tS(k,g.D5U.sizeFromShape(I),$,o.dtype);t=r.makeTensorInfo($,o.dtype);let T=r.texData.get(t.dataId);T.values=S}else t=/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r){let a=g.D5U.sizeFromShape(t),o=g.D5U.sizeFromShape(e.shape),i=nL({inputs:{x:e},attrs:{shape:[o/a,a]},backend:r}),s=nV(i,e.dtype,"max",r),u=nL({inputs:{x:s},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(s),u}(f,I,$,r);return d&&r.disposeIntermediateTensorInfo(f),t}let ip={kernelName:g.YoZ,backendName:"webgl",kernelFunc:id},ig=nf+`
  return max(a, b);
`,im=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+nm+`
  return result;
`,ix=nR({opSnippet:ig,packedOpSnippet:im,cpuKernelImpl:tT}),ib={kernelName:g.BMI,backendName:"webgl",kernelFunc:ix},iy={kernelName:g.mTV,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t;W(a,"maxPool");let{filterSize:o,strides:i,pad:s,dimRoundingMode:u}=r;g.D5U.assert(g.Wap.eitherStridesOrDilationsAreOne(i,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '1'`);let l=g.Wap.computePool2DInfo(a.shape,o,i,1,s,u);if(1===l.filterWidth&&1===l.filterHeight&&g.D5U.arraysEqual(l.inShape,l.outShape))return nb({inputs:{x:a},backend:n});let h=new r$(l,"max",!1);return n.runWebGLProgram(h,[a],a.dtype)}},iv={kernelName:g.OAf,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{filterSize:o,strides:i,pad:s,dataFormat:u,dimRoundingMode:l}=r,h=g.Wap.computePool3DInfo(a.shape,o,i,[1,1,1],s,l,u),c=new rE(h,"max",!1);return n.runWebGLProgram(c,[a],a.dtype)}};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class iw{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;let t=e.strideHeight,n=e.strideWidth,r=e.dilationHeight,a=e.effectiveFilterHeight,o=e.effectiveFilterWidth,i=a-1-e.padInfo.top,s=o-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${a};
          wR += ${r}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${o}; wC++) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${a*o-1} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${o} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class iC{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,a=e.dilationDepth,o=e.dilationHeight,i=e.dilationWidth,s=e.effectiveFilterDepth,u=e.effectiveFilterHeight,l=e.effectiveFilterWidth,h=s-1-e.padInfo.front,c=u-1-e.padInfo.top,d=l-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${h}, ${c}, ${d});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${s};
           wD += ${a}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${u};
              wR += ${o}) {
            float dyR = float(dyRCorner + wR) / ${n}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${l};
                wC += ${i}) {
              float dyC = float(dyCCorner + wC) / ${r}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${s*u*l-1} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${u} * ${l} +
                  wR * ${l} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}let iI={kernelName:g.OU7,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,input:o}=t,{filterSize:i,strides:s,pad:u,dimRoundingMode:l}=r,h=g.Wap.computePool3DInfo(o.shape,i,s,[1,1,1],u,l),c=new rE(h,"max",!0),d=n.runWebGLProgram(c,[o],o.dtype),p=new iC(h),f=n.runWebGLProgram(p,[a,d],o.dtype);return n.disposeIntermediateTensorInfo(d),f}},i$={kernelName:g.OV7,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,input:o,output:i}=t;W([o,i],"maxPoolGrad");let{filterSize:s,strides:u,pad:l,dimRoundingMode:h}=r,c=g.Wap.computePool2DInfo(o.shape,s,u,1,l,h),d=new r$(c,"max",!0),p=n.runWebGLProgram(d,[o],o.dtype),f=new iw(c),m=n.runWebGLProgram(f,[a,p],o.dtype);return n.disposeIntermediateTensorInfo(p),m}},iE={kernelName:g.vFR,backendName:"webgl",kernelFunc({inputs:e,attrs:t,backend:n}){let{x:r}=e,{filterSize:a,strides:o,pad:i,includeBatchInIndex:s}=t;g.D5U.assert(4===r.shape.length,()=>`Error in maxPool: input must be rank 4 but got rank ${r.shape.length}.`);let u=[1,1];g.D5U.assert(g.Wap.eitherStridesOrDilationsAreOne(o,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${u}'`);let l=g.Wap.computePool2DInfo(r.shape,a,o,u,i),[h,c]=/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r){let a=new r$(n,"max",!1),o=r.runWebGLProgram(a,[e],"float32");a=new r$(n,"max",!0,!0,t);let i=r.runWebGLProgram(a,[e],"float32");return[o,i]}(r,s,l,n);return[h,c]}},ik={kernelName:g.q2K,backendName:"webgl",kernelFunc({inputs:e,attrs:t,backend:n}){let{x:r}=e,{keepDims:a,axis:o}=t,i=r.shape.length,s=g.D5U.parseAxisParam(o,r.shape),u=s,l=g.Wap.getAxesPermutation(u,i),h=n.shouldExecuteOnCPU([r]),c=[],d=r;if(null!=l){if(h){let p=n.texData.get(d.dataId),f=p.values,m=Array(i);for(let x=0;x<m.length;x++)m[x]=r.shape[l[x]];let b=tJ(f,r.shape,r.dtype,l,m);d=n.makeTensorInfo(m,r.dtype);let y=n.texData.get(d.dataId);y.values=b}else d=nX(r,l,n);c.push(d),u=g.Wap.getInnerMostAxes(u.length,i)}g.Wap.assertAxesAreInnerMostDims("sum",u,i);let[v,w]=g.Wap.computeOutAndReduceShapes(d.shape,u),C=v;a&&(C=g.Wap.expandShapeToKeepDim(v,s));let I=/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r){let a=g.D5U.sizeFromShape(t),o=g.D5U.sizeFromShape(e.shape),i=nL({inputs:{x:e},attrs:{shape:[o/a,a]},backend:r}),s=nV(i,"float32","mean",r),u=nL({inputs:{x:s},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(s),u}(d,w,C,n);for(let $ of c)n.disposeIntermediateTensorInfo($);return I}},iS={kernelName:g.c17,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:o}=n,{axis:i,keepDims:s}=a,u=o.shape.length,l=g.D5U.parseAxisParam(i,o.shape),h=l,c=g.Wap.getAxesPermutation(h,u),d=o;null!=c&&(d=nK({inputs:{x:o},backend:r,attrs:{perm:c}}),h=g.Wap.getInnerMostAxes(h.length,o.shape.length)),g.Wap.assertAxesAreInnerMostDims("min",h,u);let[p,f]=g.Wap.computeOutAndReduceShapes(d.shape,h),m=g.D5U.sizeFromShape(f),x=nL({inputs:{x:d},backend:r,attrs:{shape:[-1,m]}}),b=nV(x,x.dtype,"min",r);if(s){let y=g.Wap.expandShapeToKeepDim(p,l);t=nL({inputs:{x:b},backend:r,attrs:{shape:y}})}else t=nL({inputs:{x:b},backend:r,attrs:{shape:p}});return r.disposeIntermediateTensorInfo(x),r.disposeIntermediateTensorInfo(b),null!=c&&r.disposeIntermediateTensorInfo(d),t}},iT=nf+`
  return min(a, b);
`,i_=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+nm+`
  return result;
`,iR=nR({opSnippet:iT,packedOpSnippet:i_,cpuKernelImpl:t_}),iN={kernelName:g.q8u,backendName:"webgl",kernelFunc:iR};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class iA{constructor(e,t,n){this.variableNames=["x"],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,a=(0,V.kW)(r),o=t.map(e=>e[0]).join(","),i=t.map((t,n)=>t[0]+e[n]).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r),u="reflect"===n?0:1;if(1===r){this.userCode=`
        int start = ${o};
        int end = ${i};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${u};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${u};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${a} start = ${a}(${o});
      ${a} end = ${a}(${i});

      void main() {
        ${a} outC = getOutputCoords();
        for (int i = 0; i < ${r}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${u};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${u};
          }
        }
        ${a} coords = outC - start;
        setOutput(getX(${s}));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class iD{constructor(e,t,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,a=(0,V.kW)(r),o=t.map(e=>e[0]).join(","),i=t.map((t,n)=>t[0]+e[n]).join(","),s=t2("rc",r),u=t2("source",r),l=`${s[r-1]} < ${this.outputShape[r-1]}`,h=1===r?"source":`vec2(${u.slice(-2).join()})`,c="reflect"===n?0:1,d="";if(1===r){let p=`
        ${a} source = rc;
        if (source < start) {
          source = start * 2 - source - ${c};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${c};
        }
        source -= start;
      `;d=`
        ${a} rc = outputLoc;
        ${p}
        result[0] = getChannel(getX(${u.join()}), ${h});
        ${s[r-1]} += 1;
        if(${l}) {
          ${p}
          result[1] = getChannel(getX(${u.join()}), ${h});
        }
      `}else{let f=`
        ${a} source = rc;
        ${a} lt = ${a}(lessThan(source, start));
        ${a} gte = ${a}(greaterThanEqual(source, end));
        ${a} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${c}) +
                gte * ((end - 1) * 2 - source + ${c});
        source -= start;
      `;d=`
        ${a} rc = outputLoc;
        ${f}
        result[0] = getChannel(getX(${u.join()}), ${h});
        ${s[r-1]} += 1;
        if(${l}) {
          ${f}
          result[1] = getChannel(getX(${u.join()}), ${h});
        }
        rc = outputLoc;
        ${s[r-2]} += 1;
        if(${s[r-2]} < ${this.outputShape[r-2]}) {
          ${f}
          result[2] = getChannel(getX(${u.join()}), ${h});
          ${s[r-1]} += 1;
          if(${l}) {
            ${f}
            result[3] = getChannel(getX(${u.join()}), ${h});
          }
        }
      `}this.userCode=`
      const ${a} start = ${a}(${o});
      const ${a} end = ${a}(${i});

      void main() {
        ${a} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${d}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let iO=({inputs:e,backend:t,attrs:n})=>{let{x:r}=e,{paddings:a,mode:o}=n,i=(0,g.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new iD(r.shape,a,o):new iA(r.shape,a,o),s=t.runWebGLProgram(i,[r],r.dtype);return s},iB={kernelName:g.jQs,backendName:"webgl",kernelFunc:iO},iF=`if (b == 0.0) return NAN;
  return mod(a, b);`,iP=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+nm+`
  return result;
`,iL=nR({opSnippet:iF,packedOpSnippet:iP}),iW={kernelName:g.Vbg,backendName:"webgl",kernelFunc:iL};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class iM{constructor(e,t,n){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let iU=`
if (a == b) {
  return 1.0;
};
return a / b;`,iV=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,iG=nR({opSnippet:iU,packedOpSnippet:iV,checkOutOfBounds:!0}),iz={kernelName:g.oHH,backendName:"webgl",kernelFunc:iG},iX="return a - b;",iH=nR({opSnippet:iX,packedOpSnippet:iX,supportsComplex:!0,cpuKernelImpl:tY}),ij={kernelName:g.Tr8,backendName:"webgl",kernelFunc:iH};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function iK(e){let{inputs:t,backend:n,attrs:r}=e,{logits:a}=t,{dim:o}=r,i=g.D5U.parseAxisParam([o],a.shape),s=id({inputs:{x:a},backend:n,attrs:{reductionIndices:i,keepDims:!1}}),u=g.Wap.expandShapeToKeepDim(s.shape,i),l=nL({inputs:{x:s},backend:n,attrs:{shape:u}}),h=iH({inputs:{a:a,b:l},backend:n}),c=oe({inputs:{x:h},backend:n}),d=nH({inputs:{x:c},backend:n,attrs:{axis:i,keepDims:!1}}),p=nL({inputs:{x:d},backend:n,attrs:{shape:u}}),f=iG({inputs:{a:c,b:p},backend:n});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(p),f}let iq={kernelName:g.Gcp,backendName:"webgl",kernelFunc:iK},iY={kernelName:g.NZg,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{logits:a}=t,{numSamples:o,seed:i,normalized:s}=r,u=s?a:iK({inputs:{logits:a},backend:n,attrs:{dim:a.shape.length-1}}),l=u.shape[0],h=u.shape[1],c=new iM(l,h,o),d=n.runWebGLProgram(c,[u],"int32",[[i]]);return s||n.disposeIntermediateTensorInfo(u),d}},iZ=ne+`
  return -x;
`,iQ=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,iJ={kernelName:g.kuV,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r}=e,{x:a}=n;if(r.shouldExecuteOnCPU([a])){let o=r.texData.get(a.dataId),[i,s]=tN(o.values,a.shape,a.dtype);return r.makeTensorInfo(s,a.dtype,i)}return t=(0,g.OBj)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new nu(a.shape,iQ):new t9(a.shape,iZ),r.runWebGLProgram(t,[a],a.dtype)}},i0=g.GDt.GP,i1={kernelName:g.uv1,backendName:"webgl",kernelFunc:function(e){g.Wap.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:n,attrs:r}=e,{boxes:a,scores:o}=t,{maxOutputSize:i,iouThreshold:s,scoreThreshold:u}=r,l=n.readSync(a.dataId),h=n.readSync(o.dataId),{selectedIndices:c}=i0(l,h,i,s,u);return n.makeTensorInfo([c.length],"int32",new Int32Array(c))}},i2=g.GDt.qP,i3={kernelName:g.cye,backendName:"webgl",kernelFunc:function(e){g.Wap.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:n,attrs:r}=e,{boxes:a,scores:o}=t,{maxOutputSize:i,iouThreshold:s,scoreThreshold:u,padToMaxOutputSize:l}=r,h=n.readSync(a.dataId),c=n.readSync(o.dataId),{selectedIndices:d,validOutputs:p}=i2(h,c,i,s,u,l);return[n.makeTensorInfo([d.length],"int32",new Int32Array(d)),n.makeTensorInfo([],"int32",new Int32Array([p]))]}},i4=g.GDt.pA,i5={kernelName:g.W0H,backendName:"webgl",kernelFunc:function(e){g.Wap.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:n,attrs:r}=e,{boxes:a,scores:o}=t,{maxOutputSize:i,iouThreshold:s,scoreThreshold:u,softNmsSigma:l}=r,h=n.readSync(a.dataId),c=n.readSync(o.dataId),{selectedIndices:d,selectedScores:p}=i4(h,c,i,s,u,l);return[n.makeTensorInfo([d.length],"int32",new Int32Array(d)),n.makeTensorInfo([p.length],"float32",new Float32Array(p))]}};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class i6{constructor(e,t,n,r){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${r}), float(${n}),
                      float(index == coords.y)));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let i8=e=>{let{inputs:t,backend:n,attrs:r}=e,{indices:a}=t,{dtype:o,depth:i,onValue:s,offValue:u}=r,l=g.D5U.sizeFromShape(a.shape),h=new i6(l,i,s,u),c=nL({inputs:{x:a},backend:n,attrs:{shape:[l]}}),d=n.runWebGLProgram(h,[c],o);n.disposeIntermediateTensorInfo(c);let p=[...a.shape,i],f=nL({inputs:{x:d},backend:n,attrs:{shape:p}});return n.disposeIntermediateTensorInfo(d),f},i7={kernelName:g.we_,backendName:"webgl",kernelFunc:i8};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function i9(e){let{inputs:t,backend:n}=e,{x:r}=t;if("complex64"!==r.dtype)return oc({attrs:{shape:r.shape,dtype:r.dtype,value:"string"===r.dtype?"":0},backend:n});{let a=rK({inputs:{input:r},backend:n}),o=i9({inputs:{x:a},backend:n}),i=r9({inputs:{input:r},backend:n}),s=i9({inputs:{x:i},backend:n}),u=nv({inputs:{real:o,imag:s},backend:n});return n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(s),u}}let se={kernelName:g.RuY,backendName:"webgl",kernelFunc:i9},st={kernelName:g.qWM,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function e(t){let{inputs:n,backend:r}=t,{x:a}=n;if("string"===a.dtype)throw Error("onesLike is not supported under string dtype");if("complex64"!==a.dtype)return oc({attrs:{shape:a.shape,dtype:a.dtype,value:1},backend:r});{let o=rK({inputs:{input:a},backend:r}),i=e({inputs:{x:o},backend:r}),s=r9({inputs:{input:a},backend:r}),u=i9({inputs:{x:s},backend:r}),l=nv({inputs:{real:i,imag:u},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(u),l}}},sn={kernelName:g.QiL,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{axis:a}=r;if(1===t.length)return on({inputs:{input:t[0]},backend:n,attrs:{dim:a}});let o=t[0].shape,i=t[0].dtype;t.forEach(e=>{g.D5U.assertShapesMatch(o,e.shape,"All tensors passed to stack must have matching shapes"),g.D5U.assert(i===e.dtype,()=>"All tensors passed to stack must have matching dtypes")});let s=[],u=t.map(e=>{let t=on({inputs:{input:e},backend:n,attrs:{dim:a}});return s.push(t),t}),l=at({inputs:u,backend:n,attrs:{axis:a}});return s.forEach(e=>n.disposeIntermediateTensorInfo(e)),l}};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class sr{constructor(e,t,n){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,a=(0,V.kW)(r),o=t.map(e=>e[0]).join(","),i=t.map((t,n)=>t[0]+e[n]).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);if(1===r){this.userCode=`
        int start = ${o};
        int end = ${i};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${a} start = ${a}(${o});
      ${a} end = ${a}(${i});

      void main() {
        ${a} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${a} coords = outC - start;
          setOutput(getX(${s}));
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class sa{constructor(e,t,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,a=(0,V.kW)(r),o=t.map(e=>e[0]).join(","),i=t.map((t,n)=>t[0]+e[n]).join(","),s=t2("rc",r),u=t2("source",r),l=`${s[r-1]} < ${this.outputShape[r-1]}`,h=1===r?"source":`vec2(${u.slice(-2).join()})`,c=[`${a} rc = outputLoc;`,`${s[r-1]} += 1;
       if(${l}) {
      `,1===r?"":`}
       rc = outputLoc;
       ${s[r-2]} += 1;
       if(${s[r-2]} < ${this.outputShape[r-2]}) {`,1===r?"":`  ${s[r-1]} += 1;
         if(${l}) {`],d=1===r?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",p="";for(let f=0,g=1===r?2:4;f<g;f++)p+=`
        ${c[f]}
        if (${d}) {
          result[${f}] = float(value);
        } else {
          ${a} source = rc - start;
          result[${f}] = getChannel(getX(${u.join()}), ${h});
        }
      `;p+=1===r?"} ":"}}",this.userCode=`
      const ${a} start = ${a}(${o});
      const ${a} end = ${a}(${i});

      void main() {
        ${a} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let so=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{paddings:o,constantValue:i}=r;if(0===g.D5U.sizeFromShape(a.shape)){let s=o.map((e,t)=>e[0]+a.shape[t]+e[1]);return oc({backend:n,attrs:{shape:s,value:i,dtype:a.dtype}})}let u=(0,g.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new sa(a.shape,o,i):new sr(a.shape,o,i);return n.runWebGLProgram(u,[a],a.dtype,[[i]])},si={kernelName:g.lyA,backendName:"webgl",kernelFunc:so},ss=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,su=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+nm+`
  return result;
`,sl=nR({opSnippet:ss,packedOpSnippet:su}),sh={kernelName:g.pe_,backendName:"webgl",kernelFunc:sl},sc={kernelName:g.DlI,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:o}=n,{axis:i,keepDims:s}=a,u=o.shape.length,l=[],h=g.D5U.parseAxisParam(i,o.shape),c=h,d=g.Wap.getAxesPermutation(c,u),p=o;if(null!=d&&(p=nK({inputs:{x:o},backend:r,attrs:{perm:d}}),c=g.Wap.getInnerMostAxes(c.length,u),l.push(p)),g.Wap.assertAxesAreInnerMostDims("prod",c,u),r.shouldExecuteOnCPU([p])){let f=r.texData.get(p.dataId).values,{outVals:m,outShape:x,outDtype:b}=tD(p.shape,p.dtype,f,c);t=r.makeTensorInfo(x,b,m)}else{let[y,v]=g.Wap.computeOutAndReduceShapes(p.shape,c),w=g.D5U.sizeFromShape(v),C=nL({inputs:{x:p},backend:r,attrs:{shape:[-1,w]}}),I=(0,g.z4k)(o.dtype),$=nV(C,I,"prod",r);t=nL({inputs:{x:$},backend:r,attrs:{shape:y}}),l.push(C),l.push($)}if(s){l.push(t);let E=g.Wap.expandShapeToKeepDim(t.shape,h);t=nL({inputs:{x:t},backend:r,attrs:{shape:E}})}return l.forEach(e=>r.disposeIntermediateTensorInfo(e)),t}},sd={kernelName:g.dDz,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{paramsNestedSplits:a,paramsDenseValues:o,indices:i}=t,{outputRaggedRank:s}=r,u=a.map(e=>n.readSync(e.dataId)),l=a.map(e=>e.shape),h=n.readSync(o.dataId),c=n.readSync(i.dataId),[d,p,f]=tO(u,l,h,o.shape,o.dtype,c,i.shape,s),g=d.map(e=>n.makeTensorInfo([e.length],"int32",e)),m=n.makeTensorInfo(f,o.dtype,p);return g.concat([m])}},sp={kernelName:g.BiW,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{shape:a,values:o,defaultValue:i,rowPartitionTensors:s}=t,{rowPartitionTypes:u}=r,l=n.readSync(a.dataId),h=n.readSync(o.dataId),c=n.readSync(i.dataId),d=s.map(e=>n.readSync(e.dataId)),p=s.map(e=>e.shape),[f,g]=tB(l,a.shape,h,o.shape,o.dtype,c,i.shape,d,p,u);return n.makeTensorInfo(f,o.dtype,g)}},sf=e=>{let{backend:t,attrs:n}=e,{start:r,stop:a,step:o,dtype:i}=n,s=tF(r,a,o,i);return t.makeTensorInfo([s.length],i,s)},sg={kernelName:g.e6w,backendName:"webgl",kernelFunc:sf},sm=n_({opSnippet:"return 1.0 / x;"}),sx={kernelName:g.$HU,backendName:"webgl",kernelFunc:sm},sb=ne+`
  return (x < 0.0) ? 0.0 : x;
`,sy=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,sv=n_({opSnippet:sb,packedOpSnippet:sy}),sw={kernelName:g.qkr,backendName:"webgl",kernelFunc:sv},sC=ne+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,sI=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,s$=n_({opSnippet:sC,packedOpSnippet:sI}),sE={kernelName:g.SbG,backendName:"webgl",kernelFunc:s$};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class sk{constructor(e,t,n,r,a){let o;this.variableNames=["A"],this.outputShape=[];let[i,s,u,l]=e;this.outputShape=[i,t,n,l];let h=[r&&t>1?s-1:s,r&&n>1?u-1:u],c=[r&&t>1?t-1:t,r&&n>1?n-1:n];o=a?"(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":"vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${h[0]/c[0]},
          ${h[1]/c[1]});
      const vec2 inputShapeRC = vec2(${s}.0, ${u}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${o};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class sS{constructor(e,t,n,r,a){let o;this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[i,s,u,l]=e;this.outputShape=[i,t,n,l];let h=[r&&t>1?s-1:s,r&&n>1?u-1:u],c=[r&&t>1?t-1:t,r&&n>1?n-1:n];o=a?"(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":"vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${h[0]/c[0]},
          ${h[1]/c[1]},
          ${h[1]/c[1]});
      const vec3 inputShapeRC = vec3(${s}.0, ${u}.0,
                                     ${u}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${o};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${n-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}let sT={kernelName:g._Yw,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{images:a}=t,{alignCorners:o,halfPixelCenters:i,size:s}=r,[u,l]=s,h=(0,g.OBj)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new sS(a.shape,u,l,o,i):new sk(a.shape,u,l,o,i);return n.runWebGLProgram(h,[a],"float32")}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class s_{constructor(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;let[,r,a]=t,[,o,i]=e,s=[n&&o>1?r-1:r,n&&i>1?a-1:a],u=[n&&o>1?o-1:o,n&&i>1?i-1:i],l=s[0]/u[0],h=s[1]/u[1],c=1/l,d=1/h,p=2*Math.ceil(c)+2,f=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${h});

        const float invHeightScale = float(${c});
        const float invWidthScale = float(${d});

        const int winHeight = int(${p});
        const int winWidth = int(${f});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${o}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${i}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${r-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${a-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}let sR={kernelName:g.zbQ,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{images:a,dy:o}=t,{alignCorners:i}=r,s=new s_(o.shape,a.shape,i);return n.runWebGLProgram(s,[o],o.dtype)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class sN{constructor(e,t,n,r,a){let o;this.variableNames=["A"],this.outputShape=[];let[i,s,u,l]=e;this.outputShape=[i,t,n,l];let h=[r&&t>1?s-1:s,r&&n>1?u-1:u],c=[r&&t>1?t-1:t,r&&n>1?n-1:n];o=a?"max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":"vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${h[0]/c[0]},
          ${h[1]/c[1]});
      const vec2 inputShapeRC = vec2(${s}.0, ${u}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${o};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${r?"0.5":"0.0"})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class sA{constructor(e,t,n,r,a){let o;this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[i,s,u,l]=e;this.outputShape=[i,t,n,l];let h=[r&&t>1?s-1:s,r&&n>1?u-1:u],c=[r&&t>1?t-1:t,r&&n>1?n-1:n];o=a?"max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":"vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${h[0]/c[0]},
          ${h[1]/c[1]},
          ${h[1]/c[1]});
      const vec3 inputShapeRC = vec3(${s}.0, ${u}.0,
                                     ${u}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${o};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${r?"0.5":"0.0"})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${n-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}let sD={kernelName:g.dpD,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{images:a}=t,{alignCorners:o,halfPixelCenters:i,size:s}=r,[u,l]=s,h=(0,g.OBj)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new sA(a.shape,u,l,o,i):new sN(a.shape,u,l,o,i);return n.runWebGLProgram(h,[a],a.dtype)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class sO{constructor(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;let[,r,a]=t,[,o,i]=e,s=[n&&o>1?r-1:r,n&&i>1?a-1:a],u=[n&&o>1?o-1:o,n&&i>1?i-1:i],l=s[0]/u[0],h=s[1]/u[1],c=1/l,d=1/h,p=2*Math.ceil(c)+2,f=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${h});

        const float invHeightScale = float(${c});
        const float invWidthScale = float(${d});

        const int winHeight = int(${p});
        const int winWidth = int(${f});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${o}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${i}) {
              continue;
            }

            float sourceFracRow =
              float(${s[0]}) *
                (float(dyR) / float(${u[0]}));

            float sourceFracCol =
                float(${s[1]}) *
                  (float(dyC) / float(${u[1]}));

            int sourceNearestRow = int(min(
                float(int(${r}) - 1),
                ${n} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${a}) - 1),
                ${n} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}let sB={kernelName:g.Hmb,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{images:a,dy:o}=t,{alignCorners:i}=r,s=new sO(o.shape,a.shape,i);return n.runWebGLProgram(s,[o],o.dtype)}};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class sF{constructor(e,t){this.variableNames=["x"];let n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);if(this.outputShape=e,1===n){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}let r=n=>-1!==t.indexOf(n)&&1!==e[n]?`${e[n]} - coords[${n}] - 1`:`coords[${n}]`,a=e.map((e,t)=>r(t)).join(","),o=(0,V.kW)(n);this.userCode=`
      void main() {
        ${o} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class sP{constructor(e,t){var n,r,a;this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;let o=e.length;if(o>4)throw Error(`WebGL backend: Reverse of rank-${o} tensor is not yet supported`);this.outputShape=e;let i=t2("rc",o),s=`${i[o-1]} + 1 < ${this.outputShape[o-1]}`,u=`${i[o-2]} + 1 < ${this.outputShape[o-2]}`,l=(0,V.kW)(o);function h(n){let r=e.map((r,a)=>-1!==t.indexOf(a)&&1!==e[a]?`${e[a]} - ${n[a]} - 1`:`${n[a]}`),a=r.join(","),o=r.slice(-2).join(",");return`getChannel(getX(${a}), vec2(${o}))`}1===o?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${s}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${l} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${h(i.slice())};
          if(${s}){
            result.g = ${(n=i.slice())[o-1]="("+n[o-1]+" + 1)",h(n)};
          }
          if(${u}) {
            result.b = ${(r=i.slice())[o-2]="("+r[o-2]+" + 1)",h(r)};
            if(${s}) {
              result.a = ${(a=i.slice())[o-1]="("+a[o-1]+" + 1)",a[o-2]="("+a[o-2]+" + 1)",h(a)};
            }
          }
          setOutput(result);
        }
    `}}let sL={kernelName:g.mKl,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{dims:o}=r,i=a.shape.length,s=g.D5U.parseAxisParam(o,a.shape);if(0===i)return nb({inputs:{x:a},backend:n});let u=(0,g.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new sP(a.shape,s):new sF(a.shape,s);return n.runWebGLProgram(u,[a],a.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class sW{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];let n=e[1],r=e[2];this.outputShape=e;let a="";a="number"==typeof t?`float outputValue = ${t.toFixed(2)};`:`
        vec3 fill = vec3(${t.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${a}
          if(coordX >= 0 && coordX < ${r} && coordY >= 0 && coordY < ${n}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let sM={kernelName:g.b9H,backendName:"webgl",kernelFunc({inputs:e,attrs:t,backend:n}){let{image:r}=e,{radians:a,fillValue:o,center:i}=t,s=new sW(r.shape,o),[u,l]=g.Wap.getImageCenter(i,r.shape[1],r.shape[2]),h=[[u,l,Math.sin(a),Math.cos(a)]],c=n.runWebGLProgram(s,[r],r.dtype,h);return c}},sU=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,sV=n_({opSnippet:sU}),sG={kernelName:g.e07,backendName:"webgl",kernelFunc:sV},sz=n_({opSnippet:"return inversesqrt(x);",cpuKernelImpl:tP}),sX={kernelName:g.bV0,backendName:"webgl",kernelFunc:sz};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class sH{constructor(e,t,n,r,a,o,i=!0){this.variableNames=["updates","indices","defaultValue"],this.outputShape=o;let s=(0,V.kW)(a.length),u=(0,V.kW)(o.length),l="";1===n?l="i":2===n&&(l="i, j");let h=`getIndices(${l})`,c="";1===r?c="i":2===r&&(c="i, coords[1]");let d=`getUpdates(${c})`;this.userCode=`
        ${s} strides = ${s}(${a});

        void main() {
          ${u} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${h});
              flattenedIndex += index * ${t>1?"strides[j]":"strides"};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${d};
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `}}let sj={kernelName:g.xQA,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{indices:a,updates:o}=t,{shape:i}=r,{sliceRank:s,numUpdates:u,sliceSize:l,strides:h,outputSize:c}=g.Wap.calculateShapes(o,a,i);if(0===c)return n.makeTensorInfo(i,a.dtype);let d=nL({inputs:{x:a},backend:n,attrs:{shape:[u,s]}}),p=nL({inputs:{x:o},backend:n,attrs:{shape:[u,l]}}),f=n.makeTensorInfo([],"float32",new Float32Array([0])),m=new sH(u,s,d.shape.length,p.shape.length,h,[c/l,l]),x=n.runWebGLProgram(m,[p,d,f],p.dtype),b=nL({inputs:{x:x},backend:n,attrs:{shape:i}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(f),b}};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class sK{constructor(e,t,n,r){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,n];let a=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,o=2===(0,g.OBj)().getNumber("WEBGL_VERSION")?"while (left < right) {":a;this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${o}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${"left"===r?"<":"<="} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}let sq={kernelName:g.nr8,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{sortedSequence:a,values:o}=t,{side:i}=r,s=new sK(a.shape[0],a.shape[1],o.shape[1],i),u=[[a.shape[1]]];return n.runWebGLProgram(s,[a,o],"int32",u)}};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class sY{constructor(e,t,n){let r,a;if(this.variableNames=["c","a","b"],this.outputShape=t,n>4)throw Error(`Where for rank ${n} is not yet supported`);if(1===n)a="resRC",r="resRC";else{let o=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[];for(let u=0;u<t.length;u++)s.push(`${o[u]}`),u<e&&i.push(`${o[u]}`);r=i.join(),a=s.join()}let l=(0,V.kW)(n);this.userCode=`
      void main() {
        ${l} resRC = getOutputCoords();
        float cVal = getC(${r});
        if (cVal >= 1.0) {
          setOutput(getA(${a}));
        } else {
          setOutput(getB(${a}));
        }
      }
    `}}let sZ={kernelName:g.PhF,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n}=e,{condition:r,t:a,e:o}=t,i=new sY(r.shape.length,a.shape,a.shape.length);return n.runWebGLProgram(i,[r,a,o],(0,g.x8V)(a.dtype,o.dtype))}},sQ=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${g.Wap.SELU_SCALEALPHA};
  float scale = ${g.Wap.SELU_SCALE};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,sJ=n_({opSnippet:sQ}),s0={kernelName:g.oFR,backendName:"webgl",kernelFunc:sJ},s1=nT+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,s2=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,s3=n_({opSnippet:s1,packedOpSnippet:s2,cpuKernelImpl:tW}),s4={kernelName:g.a5O,backendName:"webgl",kernelFunc:s3},s5=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,s6=n_({opSnippet:s5}),s8={kernelName:g.i5y,backendName:"webgl",kernelFunc:s6},s7=nT+`
  return sin(x);
`,s9=n_({opSnippet:s7}),ue={kernelName:g.RQH,backendName:"webgl",kernelFunc:s9},ut=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,un=n_({opSnippet:ut}),ur={kernelName:g.wYB,backendName:"webgl",kernelFunc:un},ua=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,uo=n_({opSnippet:ua}),ui={kernelName:g.MRv,backendName:"webgl",kernelFunc:uo},us=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{blockShape:o,paddings:i}=r;g.D5U.assert(a.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");let s=o.reduce((e,t)=>e*t),u=[[0,0]];u.push(...i);for(let l=1+o.length;l<a.shape.length;++l)u.push([0,0]);let h=[],c=so({inputs:{x:a},backend:n,attrs:{paddings:u,constantValue:0}}),d=g.Wap.getReshaped(c.shape,o,s,!1),p=g.Wap.getPermuted(d.length,o.length,!1),f=g.Wap.getReshapedPermuted(c.shape,o,s,!1),m=nL({inputs:{x:c},backend:n,attrs:{shape:d}}),x=nK({inputs:{x:m},backend:n,attrs:{perm:p}}),b=nL({inputs:{x:x},backend:n,attrs:{shape:f}});return h.push(c),h.push(m),h.push(x),h.forEach(e=>n.disposeIntermediateTensorInfo(e)),b},uu={kernelName:g.TQc,backendName:"webgl",kernelFunc:us},ul={kernelName:g.O3z,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n}=e,{indices:r,values:a,denseShape:o,defaultValue:i}=t;if(1!==o.shape.length)throw Error(`Dense shape must be a vector, saw:
         ${o.shape}`);if(2!==r.shape.length)throw Error(`Indices must be a matrix, saw:
         ${r.shape}`);if(1!==a.shape.length)throw Error(`Values must be a vector, saw:
         ${a.shape}`);if(0!==i.shape.length)throw Error(`Default value must be a scalar, saw:
        ${i.shape}`);let s=n.readSync(r.dataId),u=n.readSync(a.dataId),l=n.readSync(o.dataId),h=n.readSync(i.dataId)[0],[c,d,p,f,g]=tV(s,r.shape,r.dtype,u,a.dtype,l,h);return[n.makeTensorInfo(d,r.dtype,c),n.makeTensorInfo([d[0]],a.dtype,p),n.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(e=>Number(e)))),n.makeTensorInfo([g.length],r.dtype,new Int32Array(g))]}},uh={kernelName:g.nhH,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n}=e,{inputIndices:r,inputShape:a,newShape:o}=t;if(2!==r.shape.length)throw Error(`Input indices should be a matrix but received shape ${r.shape}`);if(1!==a.shape.length)throw Error(`Input shape should be a vector but received shape ${a.shape}`);if(1!==o.shape.length)throw Error(`Target shape should be a vector but received shape ${o.shape}`);let i=Array.from(n.readSync(a.dataId)),s=n.readSync(r.dataId),u=Array.from(n.readSync(o.dataId)),[l,h,c]=tG(s,r.shape,r.dtype,i,u);return[n.makeTensorInfo(h,r.dtype,l),n.makeTensorInfo([c.length],o.dtype,new Int32Array(c))]}},uc={kernelName:g.w3H,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n}=e,{data:r,indices:a,segmentIds:o}=t;if(r.shape.length<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==a.shape.length)throw Error(`Indices should be a vector but received shape
              ${a.shape}`);if(1!==o.shape.length)throw Error(`Segment ids should be a vector but received shape
              ${o.shape}`);let i=n.readSync(r.dataId),s=n.readSync(a.dataId),u=n.readSync(o.dataId),[l,h]=tz(i,r.shape,r.dtype,s,u,!0);return n.makeTensorInfo(h,r.dtype,l)}},ud={kernelName:g.ZjV,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n}=e,{data:r,indices:a,segmentIds:o}=t;if(r.shape.length<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==a.shape.length)throw Error(`Indices should be a vector but received shape
             ${a.shape}`);if(1!==o.shape.length)throw Error(`Segment ids should be a vector but received shape
             ${o.shape}`);let i=n.readSync(r.dataId),s=n.readSync(a.dataId),u=n.readSync(o.dataId),[l,h]=tz(i,r.shape,r.dtype,s,u);return n.makeTensorInfo(h,r.dtype,l)}},up={kernelName:g.D2d,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{sparseIndices:a,sparseValues:o,defaultValue:i}=t,{outputShape:s}=r,{sliceRank:u,numUpdates:l,sliceSize:h,strides:c,outputSize:d}=g.Wap.calculateShapes(o,a,s);if("string"===o.dtype){let p=n.bufferSync(a),f=n.bufferSync(o),m=g.D5U.decodeString(n.readSync(i.dataId)[0]),x=tL(p,f,s,d,h,l,u,c,m,!1);return n.makeTensorInfo(s,x.dtype,x.values)}let b=new sH(l,u,a.shape.length,o.shape.length,c,[d,1],!1),y=n.runWebGLProgram(b,[o,a,i],o.dtype),v=nL({inputs:{x:y},backend:n,attrs:{shape:s}});return n.disposeIntermediateTensorInfo(y),v}},uf={kernelName:g.L8s,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{numOrSizeSplits:o,axis:i}=r,s=g.D5U.parseAxisParam(i,a.shape)[0],u=g.Wap.prepareSplitSize(a,o,s),l=a.shape.length,h=Array(l).fill(0),c=a.shape.slice();return u.map(e=>{let t=[...c];t[s]=e;let r=rM({inputs:{x:a},backend:n,attrs:{begin:h,size:t}});return h[s]+=e,r})}},ug="return sqrt(x);",um=n_({opSnippet:ug,packedOpSnippet:ug,cpuKernelImpl:tX}),ux={kernelName:g.FKq,backendName:"webgl",kernelFunc:um},ub=n_({opSnippet:"return x * x;"}),uy={kernelName:g.bK0,backendName:"webgl",kernelFunc:ub},uv="return (a - b) * (a - b);",uw=nR({opSnippet:uv,packedOpSnippet:uv}),uC={kernelName:g._tC,backendName:"webgl",kernelFunc:uw},uI={kernelName:g.h8e,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function({inputs:e,attrs:t,backend:n}){let{x:r}=e,a=ne+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,o=new t9(r.shape,a);return n.runWebGLProgram(o,[r],r.dtype)}};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class u${constructor(e,t,n){this.variableNames=["x"],this.outputShape=n;let r=n.length,a=(0,V.kW)(n.length),o=(0,V.kW)(n.length),i="";if(1===r)i="coords * strides + begin";else{let s=0;i=n.map((e,t)=>(s++,1===n.length?`coords * strides[${t}] + begin[${t}]`:`coords[${s-1}] * strides[${t}] + begin[${t}]`)).join(",")}this.userCode=`
      ${a} begin = ${a}(${e});
      ${a} strides = ${a}(${t});

      void main() {
        ${o} coords = getOutputCoords();
        setOutput(getX(${i}));
      }
    `}}let uE={kernelName:g.jQk,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:o}=n,{begin:i,end:s,strides:u,beginMask:l,endMask:h,ellipsisMask:c,newAxisMask:d,shrinkAxisMask:p}=a,{finalShapeSparse:f,finalShape:m,isIdentity:x,sliceDim0:b,isSimpleSlice:y,begin:v,end:w,strides:C}=g.kuN.sliceInfo(o.shape,i,s,u,l,h,c,d,p);if(x)t=nL({inputs:{x:o},backend:r,attrs:{shape:m}});else if(b||y){g.D5U.assert(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);let I=g.kuN.computeOutShape(v,w,C),$=rM({inputs:{x:o},backend:r,attrs:{begin:v,size:I}});t=nL({inputs:{x:$},backend:r,attrs:{shape:m}}),r.disposeIntermediateTensorInfo($)}else{let E=r.shouldExecuteOnCPU([o]);if(E){let k=r.readSync(o.dataId),S=(0,g.f3b)(o.shape,o.dtype,k),T=tH(f,S,C,v);t=r.makeTensorInfo(m,o.dtype,T.values)}else{let _=new u$(v,C,f);t=r.runWebGLProgram(_,[o],o.dtype)}}let R=nL({inputs:{x:t},backend:r,attrs:{shape:m}});return r.disposeIntermediateTensorInfo(t),R}},uk={kernelName:g._JP,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{separator:a,nGramWidths:o,leftPad:i,rightPad:s,padWidth:u,preserveShortSequences:l}=r,{data:h,dataSplits:c}=t,d=n.readSync(h.dataId),p=n.readSync(c.dataId),[f,g]=tj(d,p,a,o,i,s,u,l);return[n.makeTensorInfo([f.length],"string",f),n.makeTensorInfo(c.shape,"int32",g)]}},uS={kernelName:g.s1s,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{skipEmpty:a}=r,{input:o,delimiter:i}=t;if("string"!==o.dtype)throw Error("Input must be of datatype string");if(1!==o.shape.length)throw Error(`Input must be a vector, got shape: ${o.shape}`);if(0!==i.shape.length)throw Error(`Delimiter must be a scalar, got shape: ${i.shape}`);let s=n.readSync(o.dataId),u=n.readSync(i.dataId)[0],[l,h,c]=tK(s,u,a),d=h.length;return[n.makeTensorInfo([d,2],"int32",l),n.makeTensorInfo([d],"string",h),n.makeTensorInfo([2],"int32",new Int32Array(c))]}},uT={kernelName:g.XkS,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{numBuckets:a}=r,{input:o}=t;if("string"!==o.dtype)throw Error("Input must be of datatype string");if(a<=0)throw Error("Number of buckets must be at least 1");let i=n.readSync(o.dataId),s=tq(i,a);return n.makeTensorInfo(o.shape,"int32",s)}},u_=n_({opSnippet:"return tan(x);"}),uR={kernelName:g.sEM,backendName:"webgl",kernelFunc:u_},uN=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,uA=n_({opSnippet:uN}),uD={kernelName:g.MIZ,backendName:"webgl",kernelFunc:uA};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class uO{constructor(e,t){this.variableNames=["A"];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;let a=(0,V.kW)(this.rank),o=function(e){let t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(1===t)return`imod(resRC, ${e[0]})`;let n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],r=[];for(let a=0;a<e.length;a++)r.push(`imod(${n[a]}, ${e[a]})`);return r.join()}(e);this.userCode=`
      void main() {
        ${a} resRC = getOutputCoords();
        setOutput(getA(${o}));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function uB(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{reps:o}=r;if("string"===a.dtype||a.shape.length>5){let i=n.readSync(a.dataId),s="string"===a.dtype?i.map(e=>g.D5U.decodeString(e)):i,u=(0,g.f3b)(a.shape,a.dtype,s),l=tZ(u,o);return n.makeTensorInfo(l.shape,l.dtype,l.values)}let h=new uO(a.shape,o),c=n.runWebGLProgram(h,[a],a.dtype);return c}let uF={kernelName:g.n9L,backendName:"webgl",kernelFunc:uB};class uP{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class uL{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function uW(e,t){null!==t&&e.disposeIntermediateTensorInfo(t)}function uM(e){let t=1;for(;t<e;)t*=2;return t}let uU={kernelName:g.cWu,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{k:o,sorted:i}=r,s=(0,g.OBj)().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),u=(0,g.OBj)().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),l=a.shape,h=l[l.length-1];if(n.shouldExecuteOnCPU([a])||h<s||o>u){let c=n.readSync(a.dataId),[d,p]=tQ(c,l,a.dtype,o,i);return[n.makeTensorInfo(d.shape,d.dtype,d.values),n.makeTensorInfo(p.shape,p.dtype,p.values)]}if(0===o)return l[l.length-1]=0,[n.makeTensorInfo(l,a.dtype,[]),n.makeTensorInfo(l,"int32",[])];if(1===h)return[a,oc({attrs:{shape:l,dtype:"int32",value:0},backend:n})];let f=n.texData.get(a.dataId),m=null!==f&&f.isPacked,x=m?n.unpackTensor(a):a,b=g.D5U.sizeFromShape(l),y=b/h,v=nL({inputs:{x:x},attrs:{shape:[y,h]},backend:n});m&&uW(n,x);let w=uM(o),C=uM(h),I=null,$=()=>null===I?[v,v]:[v,I],E=(e,t,r)=>{let a=$(),o=new uP(r),i=null===I?1:0,s=[[h],[i],[Number.NEGATIVE_INFINITY],[e],[t]],u=I;I=n.runWebGLProgram(o,a,"int32",s),uW(n,u)};for(let k=1;k<w;k*=2){let S=2*k;for(let T=k;T>=1;T/=2)E(S,T,[y,C])}for(let _=C;_>w;_/=2){let R=$(),N=new uL([y,_/2]),A=null===I?1:0,D=[[h],[A],[w]],O=I;I=n.runWebGLProgram(N,R,"int32",D),uW(n,O);let B=w/2,F=2*B;for(let P=B;P>=1;P/=2)E(F,P,I.shape)}let L=I;I=rM({inputs:{x:I},backend:n,attrs:{begin:0,size:[y,o]}}),uW(n,L);let W=oN({inputs:{x:v,indices:I},backend:n,attrs:{axis:1,batchDims:1}});uW(n,v);let M=l.slice(0,-1);M.push(o),L=I,I=nL({inputs:{x:I},attrs:{shape:M},backend:n}),uW(n,L);let U=W;return W=nL({inputs:{x:W},attrs:{shape:M},backend:n}),uW(n,U),[W,I]}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class uV{constructor(e,t,n,r,a,o){let i;switch(this.variableNames=["Image","Transforms"],this.outputShape=o,r){case"constant":default:i=1;break;case"reflect":i=2;break;case"wrap":i=3;break;case"nearest":i=4}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${i} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${i} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${i} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${a});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${a});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${"nearest"===n?1:2} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}let uG={kernelName:g.wx7,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{image:a,transforms:o}=t,{interpolation:i,fillMode:s,fillValue:u,outputShape:l}=r,[h,c,d,p]=a.shape,[f,g]=null!=l?l:[c,d],m=new uV(c,d,i,s,u,[h,f,g,p]);return n.runWebGLProgram(m,[a,o],"float32")}},uz={kernelName:g.kpP,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,attrs:n,backend:r}=e,{axis:a}=n,{x:o}=t;W(o,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");let i=r.readSync(o.dataId),{outputValues:s,outputShape:u,indices:l}=t0(i,a,o.shape,o.dtype);return[r.makeTensorInfo(u,o.dtype,s),r.makeTensorInfo([l.length],"int32",l)]}},uX={kernelName:g.ToN,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{value:a}=t,{axis:o}=r;o<0&&(o+=a.shape.length);let i=a.shape.length,s=a.shape[o],u=Array(i-1),l=0;for(let h=0;h<i;h++)h!==o&&(u[l++]=a.shape[h]);let c=[],d=Array(i).fill(0),p=a.shape.slice();p[o]=1;let f=Array(s);for(let g=0;g<f.length;g++){d[o]=g;let m=rM({inputs:{x:a},backend:n,attrs:{begin:d,size:p}}),x=nL({inputs:{x:m},backend:n,attrs:{shape:u}});f[g]=x,c.push(m)}return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),f}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class uH{constructor(e,t){this.variableNames=["x","segmentIds"];let n=e.windowSize,r=e.batchSize,a=e.inSize,o=e.numSegments,i=o*Math.ceil(a/n);this.outputShape=[r,i];let s=4*Math.floor(n/4),u=n%4,l=`
        sumValue += dot(values, segFilter);
    `,h="";a%n>0&&(h=`
        if (inIdx < 0 || inIdx >= ${a}) {
          return initializationValue;
        }
      `);let c="";a%n>0&&(c=`
        if (inIdx < 0 || inIdx >= ${a}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        ${h}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${c}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${o})) * float(${n}));
        int currentSeg = int(mod(float(outIdx), float(${o})));

        float sumValue = 0.0;

        for (int i = 0; i < ${s}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${l}
        }

        int inIdx = inOffset + ${s};
        if (${1===u}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${l}
        } else if (${2===u}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${l}
        } else if (${3===u}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${l}
        }
        setOutput(sumValue);
      }
    `}}let uj={kernelName:g.Qvg,backendName:"webgl",kernelFunc:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,segmentIds:o}=t,{numSegments:i}=r,s=a.shape.length,u=[],l=0,h=g.Wap.getAxesPermutation([l],s),c=a;null!=h&&(c=nK({inputs:{x:a},backend:n,attrs:{perm:h}}),u.push(c),l=g.Wap.getInnerMostAxes(1,s)[0]);let d=g.Wap.segment_util.computeOutShape(c.shape,l,i),p=g.D5U.sizeFromShape([c.shape[l]]),f=nL({inputs:{x:c},backend:n,attrs:{shape:[-1,p]}});u.push(f);let m=(0,g.z4k)(a.dtype),x=(e,t,r,a,o)=>{let i=e.shape[0],s=e.shape[1],l=g.Wap.segment_util.segOpComputeOptimalWindowSize(s,o),h=new uH({windowSize:l,inSize:s,batchSize:i,numSegments:o},t),c=n.compileAndRun(h,[e,r],a);if(u.push(c),c.shape[1]===o)return c;let d=sf({backend:n,attrs:{start:0,stop:o,step:1,dtype:"float32"}}),p=uB({inputs:{x:d},backend:n,attrs:{reps:[s/l]}});u.push(d),u.push(p);let f=x(c,t,p,a,o);return f},b=x(f,"unsortedSegmentSum",o,m,i),y=nL({inputs:{x:b},backend:n,attrs:{shape:d}}),v=y;if(null!=h){u.push(y);let w=g.Wap.getUndoAxesPermutation(h);v=nK({inputs:{x:v},backend:n,attrs:{perm:w}})}return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),v}};for(let uK of[nZ,nJ,n2,n5,n7,rt,rn,rr,rs,ru,rc,rp,rm,rv,rI,rk,rS,rR,rN,rA,rF,rG,rz,rX,rY,rJ,r2,nw,r5,an,ah,ag,am,ax,ab,ay,aC,aE,aT,aD,aO,aB,aP,aM,aG,az,aH,aK,aq,aQ,a1,a4,a8,ot,or,oi,ol,od,of,ox,ow,o$,ok,oS,o_,oA,oB,oL,ny,oW,ae,oU,oG,oX,n$,oK,oZ,oQ,o2,o5,o7,ie,ia,iu,ic,ip,ib,iy,iv,iI,i$,iE,ik,iS,iN,iB,iW,iY,nP,iJ,i1,i3,i5,rj,i7,st,sn,si,sh,nS,sc,sd,sp,sg,rq,iz,sx,sw,sE,nW,sT,sR,sD,sB,sL,sM,sG,sX,sj,sq,sZ,s0,s4,s8,ue,ur,rU,iq,ui,uu,ul,uh,uc,ud,up,uf,ux,uy,uC,uI,uE,uk,uS,uT,ij,nj,uR,uD,uF,uU,uG,nq,uz,uX,uj,se])(0,g.wCN)(uK);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ },8110:function(e,t,n){"use strict";n.d(t,{Kn:function(){return o},RW:function(){return a},al:function(){return i},ku:function(){return s},nc:function(){return u},ye:function(){return l}});var r=n(5239);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function a(e,t,n="index"){let a=r.D5U.computeStrides(t);return a.map((t,r)=>{let o=`int ${e[r]} = ${n} / ${t}`,i=r===a.length-1?`int ${e[r+1]} = ${n} - ${e[r]} * ${t}`:`index -= ${e[r]} * ${t}`;return`${o}; ${i};`}).join("")}function o(e,t,n="index"){let a=r.D5U.computeStrides(t);return a.map((t,r)=>{let o=`int ${e[r]} = ${n} / outShapeStrides[${r}]`,i=r===a.length-1?`int ${e[r+1]} = ${n} - ${e[r]} * outShapeStrides[${r}]`:`index -= ${e[r]} * outShapeStrides[${r}]`;return`${o}; ${i};`}).join("")}function i(e,t,n="index"){let r=e.map((e,t)=>t),a=function(e,t){let n=e.length,r=e.map(e=>`${t}[${e}]`),a=Array(n-1);a[n-2]=r[n-1];for(let o=n-3;o>=0;--o)a[o]=`(${a[o+1]} * ${r[o+1]})`;return a}(r,t);return a.map((t,r)=>{let o=`int ${e[r]} = ${n} / ${a[r]}`,i=r===a.length-1?`int ${e[r+1]} = ${n} - ${e[r]} * ${a[r]}`:`index -= ${e[r]} * ${a[r]}`;return`${o}; ${i};`}).join("")}function s(e){let t=r.D5U.computeStrides(e).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function u(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}let l=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`},2073:function(e,t,n){"use strict";n.d(t,{JL:function(){return r},Zu:function(){return a}});class r{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class a{refCount(e){return o("refCount")}incRef(e){return o("incRef")}timerAvailable(){return!0}time(e){return o("time")}read(e){return o("read")}readSync(e){return o("readSync")}readToGPU(e,t){return o("readToGPU")}numDataIds(){return o("numDataIds")}disposeData(e,t){return o("disposeData")}write(e,t,n){return o("write")}move(e,t,n,r,a){return o("move")}memory(){return o("memory")}floatPrecision(){return o("floatPrecision")}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}dispose(){return o("dispose")}}function o(e){throw Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}},8329:function(e,t,n){"use strict";function r(e,t){return e>t?1:e<t?-1:0}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function a(e,t,n,r,a){return s(e,t,n,r,a,0)}function o(e,t,n,r,a,o){return s(e,t,n,r,a,0,!1,o,!0)}function i(e,t,n,r,a,o){return s(e,t,n,r,a,o,!0)}function s(e,t,n,a,o,i,s=!1,l=!1,h=!1){let c=[];for(let d=0;d<t.length;d++)t[d]>o&&c.push({score:t[d],boxIndex:d,suppressBeginIndex:0});c.sort(u);let p=i>0?-.5/i:0,f=[],g=[];for(;f.length<n&&c.length>0;){let m=c.pop(),{score:x,boxIndex:b,suppressBeginIndex:y}=m;if(x<o)break;let v=!1;for(let w=f.length-1;w>=y;--w){let C=function(e,t,n){let r=e.subarray(4*t,4*t+4),a=e.subarray(4*n,4*n+4),o=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),l=Math.min(a[0],a[2]),h=Math.min(a[1],a[3]),c=Math.max(a[0],a[2]),d=Math.max(a[1],a[3]),p=(s-o)*(u-i),f=(c-l)*(d-h);if(p<=0||f<=0)return 0;let g=Math.max(o,l),m=Math.max(i,h),x=Math.min(s,c),b=Math.min(u,d),y=Math.max(x-g,0)*Math.max(b-m,0);return y/(p+f-y)}(e,b,f[w]);if(C>=a){v=!0;break}if(m.score=m.score*function(e,t,n){let r=Math.exp(t*n*n);return n<=e?r:0}(a,p,C),m.score<=o)break}m.suppressBeginIndex=f.length,!v&&(m.score===x?(f.push(b),g.push(m.score)):m.score>o&&/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let a=function(e,t,n){let r=0,a=e.length,o=0,i=!1;for(;r<a;){o=r+(a-r>>>1);let s=n(t,e[o]);s>0?r=o+1:(a=o,i=!s)}return i?r:-r-1}(e,t,n||r);e.splice(a<0?-(a+1):a,0,t)}(c,m,u))}let I=f.length,$=n-I;l&&$>0&&(f.push(...Array($).fill(0)),g.push(...Array($).fill(0)));let E={selectedIndices:f};return s&&(E.selectedScores=g),h&&(E.validOutputs=I),E}function u(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}n.d(t,{GP:function(){return a},qP:function(){return o},pA:function(){return i}})},8333:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2657);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function a(e,t){let n=[];for(let a=0;a<t.length;a++)t[a]&&n.push(a);let o=(0,r.f)(e,"int32"),i=(0,r.f)([n.length,e.length],"int32");for(let s=0;s<n.length;s++){let u=o.indexToLoc(n[s]),l=s*e.length;i.values.set(u,l)}return i.toTensor()}},196:function(e,t,n){"use strict";n.d(t,{BV:function(){return y},wv:function(){return b}});var r=n(2073),a=n(2885),o=n(5938),i=n(9121),s=n(6151),u=n(4706),l=n(3418),h=n(569);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class c{constructor(e,t){this.backendTimer=e,this.logger=t,null==t&&(this.logger=new d)}profileKernel(e,t,n){let r,o;let i=()=>{r=n()},s=l.now();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(i);else{for(let u of(i(),r))u.dataSync();o=Promise.resolve({kernelMs:l.now()-s})}if((0,a.OB)().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let h=0;h<r.length;h++){let c=r[h];c.data().then(t=>{!function(e,t,n){if("float32"===t)for(let r=0;r<e.length;r++){let a=e[r];if(isNaN(a)||!isFinite(a))return console.warn(`Found ${a} in the result of '${n}'`),!0}}(t,c.dtype,e)})}let d={kernelName:e,outputs:r,inputs:t,timeMs:o.then(e=>e.kernelMs),extraInfo:o.then(e=>null!=e.getExtraProfileInfo?e.getExtraProfileInfo():"")};return d}logKernelProfile(e){let{kernelName:t,outputs:n,timeMs:r,inputs:a,extraInfo:o}=e;n.forEach(e=>{Promise.all([e.data(),r,o]).then(n=>{this.logger.logKernelProfile(t,e,n[0],n[1],a,n[2])})})}}class d{logKernelProfile(e,t,n,r,a,o){let i="number"==typeof r?h.oj(`${r}ms`,9):r.error,s=h.oj(e,25),u=t.rank,l=t.size,c=h.oj(t.shape.toString(),14),d="";for(let p in a){let f=a[p];if(null!=f){let g=f.shape||t.shape,m=g.length;d+=`${p}: ${m}D ${m>0?g:""} `}}console.log(`%c${s}	%c${i}	%c${u}D ${c}	%c${l}	%c${d}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}var p=n(974),f=n(747);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function g(e){return null!=e.kernelName}class m{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(let e in this.registeredVariables)this.registeredVariables[e].dispose()}}class x{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new m}async ready(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then(()=>{});if(null!=this.backendInstance)return;let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t],r=await this.initializeBackend(n).success;if(r){await this.setBackend(n);return}}throw Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(null!=this.pendingBackendInit)throw Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){let{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry)){if(!(e in this.registryFactory))return null;{let{asyncInit:t}=this.initializeBackend(e);if(t)return null}}return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,n=1){return e in this.registryFactory?(u.Z(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)}async setBackend(e){if(null==this.registryFactory[e])throw Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,null==this.registry[e]){this.backendInstance=null;let{success:t,asyncInit:n}=this.initializeBackend(e),r=n?await t:t;if(!r)return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new c(this.backendInstance),!0}setupRegisteredKernels(){let e=(0,s.tr)(this.backendName);e.forEach(e=>{null!=e.setupFunc&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){let t=(0,s.tr)(e);t.forEach(t=>{null!=t.disposeFunc&&t.disposeFunc(this.registry[e])})}initializeBackend(e){let t=this.registryFactory[e];if(null==t)throw Error(`Cannot initialize backend ${e}, no registration found.`);try{let n=t.factory();if(!n||n instanceof r.Zu||"function"!=typeof n.then)return this.registry[e]=n,{success:!0,asyncInit:!1};{let a=++this.pendingBackendInitId,o=n.then(t=>!(a<this.pendingBackendInitId)&&(this.registry[e]=t,this.pendingBackendInit=null,!0)).catch(t=>!(a<this.pendingBackendInitId)&&(this.pendingBackendInit=null,u.Z(`Initialization of backend ${e} failed`),u.Z(t.stack||t.message),!1));return this.pendingBackendInit=o,{success:o,asyncInit:!0}}}catch(i){return u.Z(`Initialization of backend ${e} failed`),u.Z(i.stack||i.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw Error(`${e} backend not found in registry`);this.backendName===e&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t],{success:r,asyncInit:a}=this.initializeBackend(n);if(a||r)return{name:n,asyncInit:a}}throw Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){let n=this.state.tensorInfo.get(t),r=n.backend,a=this.readSync(t),o=r.refCount(t);r.disposeData(t,!0),n.backend=e,e.move(t,a,n.shape,n.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let n,r=null;if(null==t){if("function"!=typeof e)throw Error("Please provide a function to tidy()");t=e}else{if("string"!=typeof e&&!(e instanceof String))throw Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof t)throw Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}return this.scopedRun(()=>this.startScope(r),()=>this.endScope(n),()=>((n=t())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n))}scopedRun(e,t,n){e();try{let r=n();return t(),r}catch(a){throw t(),a}}nextTensorId(){return x.nextTensorId++}nextVariableId(){return x.nextVariableId++}clone(e){let t=y.runKernel(i.iJz,{x:e}),n=e=>({x:()=>y.runKernel(i.RFZ,{x:e},{dtype:"float32"})});return this.addTapeNode(this.state.activeScope.name,{x:e},[t],n,[],{}),t}runKernel(e,t,n){null==this.backendName&&this.backend;let r=null!=(0,s.pI)(e,this.backendName);if(!r)throw Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,n){let r=this.backend.numDataIds(),a=0;n.forEach(e=>{a+="complex64"===e.dtype?3:1});let o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=r-t-a-o;if(i>0)throw Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${e}'`)}runKernelFunc(e){let t,n,r,a;let o=[],i=this.isTapeOn(),u=this.state.numBytes,l=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;let c=g(e)?e.kernelName:null!=this.state.activeScope?this.state.activeScope.name:"";if(g(e)){let{kernelName:d,inputs:p,attrs:f}=e;null==this.backendName&&this.backend;let m=(0,s.pI)(d,this.backendName);h.hu(null!=m,()=>`Cannot find registered kernel '${d}' for backend '${this.backendName}'`),n=()=>{let e=this.backend.numDataIds();r=m.kernelFunc({inputs:p,attrs:f,backend:this.backend});let t=Array.isArray(r)?r:[r];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(d,e,t);let n=t.map(e=>null!=e.rank?e:this.makeTensorFromTensorInfo(e));if(i){let a=this.getTensorsForGradient(d,p,n);o=this.saveTensorsForBackwardMode(a)}return n}}else{let{forwardFunc:x}=e,b=e=>{i&&(o=e.map(e=>this.keep(this.clone(e))))};n=()=>{let e=this.backend.numDataIds();r=this.tidy(()=>x(this.backend,b));let t=Array.isArray(r)?r:[r];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,e,t),t}}let{inputs:y,attrs:v}=e,w=g(e)?null:e.backwardsFunc;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(a=this.profiler.profileKernel(c,y,()=>n()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(a),t=a.outputs):t=n()}),i&&this.addTapeNode(c,y,t,w,o,v),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-u,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-l,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(y).map(e=>null!=y[e]?y[e].shape:null),outputShapes:t.map(e=>e.shape),kernelTimeMs:a.timeMs,extraInfo:a.extraInfo}),Array.isArray(r)?t:t[0]}saveTensorsForBackwardMode(e){let t=e.map(e=>this.keep(this.clone(e)));return t}getTensorsForGradient(e,t,n){let r=(0,s.uk)(e);if(null!=r){let a;let o=r.inputsToSave||[],i=r.outputsToSave||[];r.saveAllInputs?(h.hu(Array.isArray(t),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(t).map(e=>t[e])):a=o.map(e=>t[e]);let u=n.filter((e,t)=>i[t]);return a.concat(u)}return[]}makeTensor(e,t,n,r){if(null==e)throw Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;let a=e;"string"===n&&h.HD(e[0])&&(a=e.map(e=>l.encodeString(e)));let o=r.write(a,t,n),i=new p.es(t,n,o,this.nextTensorId());if(this.trackTensor(i,r),"string"===n){let s=this.state.tensorInfo.get(o),u=(0,h.Ub)(a);this.state.numBytes+=u-s.bytes,s.bytes=u}return i}makeTensorFromDataId(e,t,n,r){n=n||"float32";let a={dataId:e,shape:t,dtype:n};return this.makeTensorFromTensorInfo(a,r)}makeTensorFromTensorInfo(e,t){let{dataId:n,shape:r,dtype:a}=e,o=new p.es(r,a,n,this.nextTensorId());return this.trackTensor(o,t),o}makeVariable(e,t=!0,n,r){n=n||this.nextVariableId().toString(),null!=r&&r!==e.dtype&&(e=e.cast(r));let a=new p._w(e,t,n,this.nextTensorId());if(null!=this.state.registeredVariables[a.name])throw Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(e,t){this.state.numTensors++,"string"===e.dtype&&this.state.numStringTensors++;let n=0;"complex64"!==e.dtype&&"string"!==e.dtype&&(n=e.size*h.bT(e.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:n})),e instanceof p._w||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;let t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,"string"===e.dtype&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),"complex64"!==e.dtype&&"string"!==e.dtype){let n=e.size*h.bT(e.dtype);this.state.numBytes-=n}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(let e in this.state.registeredVariables){let t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),null!=this.state.registeredVariables[e.name]&&delete this.state.registeredVariables[e.name]}memory(){let e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,null==e.reasons&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;let t=this.state.numBytes,n=this.state.numTensors;for(let r of(this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(e=>e.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n,this.state.activeProfile.kernels))r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(e,t,n,r,a,o){let i={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:a},u=(0,s.uk)(e);null!=u&&(r=u.gradFunc),null!=r&&(i.gradient=e=>r((e=e.map((e,t)=>{if(null==e){let r=n[t],a=h.wT(r.size,r.dtype);return this.makeTensor(a,r.shape,r.dtype)}return e})).length>1?e:e[0],a,o)),this.state.activeTape.push(i)}keep(e){return e.kept=!0,e}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){let t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){let t=(0,f.Vu)(e),n=new Set(t.map(e=>e.id));for(let r=0;r<this.state.activeScope.track.length;r++){let a=this.state.activeScope.track[r];a.kept||n.has(a.id)||a.dispose()}let o=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(e=>{e.kept||e.scopeId!==o.id||this.track(e)})}gradients(e,t,n,r=!1){if(h.hu(t.length>0,()=>"gradients() received an empty list of xs."),null!=n&&"float32"!==n.dtype)throw Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);let a=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));h.hu(a instanceof p.es,()=>"The result y returned by f() must be a tensor.");let o=/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r={},a={};for(let o=0;o<t.length;o++)r[t[o].id]=!0;for(let i=0;i<e.length;i++){let s=e[i],u=s.inputs;for(let l in u){let h=u[l],c=!1;for(let d=0;d<t.length;d++)if(r[h.id]){s.outputs.forEach(e=>r[e.id]=!0),c=!0,a[s.id]=!0;break}if(c)break}}let p={};p[n.id]=!0;let f={};for(let g=e.length-1;g>=0;g--){let m=e[g],x=m.inputs;for(let b=0;b<m.outputs.length;b++)if(p[m.outputs[b].id]){for(let y in x)p[x[y].id]=!0,f[m.id]=!0;break}}let v=[];for(let w=0;w<e.length;w++){let C=e[w];if(a[C.id]&&f[C.id]){let I={};for(let $ in C.inputs){let E=C.inputs[$];r[E.id]&&(I[$]=E)}let k=Object.assign({},C);k.inputs=I,k.outputs=C.outputs,v.push(k)}}return v}(this.state.activeTape,t,a);if(!r&&0===o.length&&t.length>0)throw Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{let e={};e[a.id]=null==n?function(e){let t=(0,h.p8)((0,h.NA)(e),"float32");return y.makeTensor(t,e,"float32")}(a.shape):n,function(e,t,n,r){for(let a=t.length-1;a>=0;a--){let o=t[a],i=[];if(o.outputs.forEach(t=>{let n=e[t.id];null!=n?i.push(n):i.push(null)}),null==o.gradient)throw Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);let s=o.gradient(i);for(let u in o.inputs){if(!(u in s))throw Error(`Cannot backprop through input ${u}. Available gradients found: ${Object.keys(s)}.`);let l=n(()=>s[u]());if("float32"!==l.dtype)throw Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${u} must have 'float32' dtype, but has '${l.dtype}'`);let c=o.inputs[u];if(!h.cO(l.shape,c.shape))throw Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${u}' has shape '${l.shape}', which does not match the shape of the input '${c.shape}'`);if(null==e[c.id])e[c.id]=l;else{let d=e[c.id];e[c.id]=r(d,l),d.dispose()}}}}(e,o,e=>this.tidy(e),v);let r=t.map(t=>e[t.id]);return 0===this.state.gradientDepth&&(this.state.activeTape.forEach(e=>{for(let t of e.saved)t.dispose()}),this.state.activeTape=null),{value:a,grads:r}})}customGrad(e){return h.hu(h.mf(e),()=>"The f passed in customGrad(f) must be a function."),(...t)=>{let n;h.hu(t.every(e=>e instanceof p.es),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r={};t.forEach((e,t)=>{r[t]=e});let a=(r,a)=>(n=e(...[...t,a]),h.hu(n.value instanceof p.es,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),h.hu(h.mf(n.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n.value),o=(e,r)=>{let a=n.gradFunc(e,r),o=Array.isArray(a)?a:[a];h.hu(o.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),h.hu(o.every(e=>e instanceof p.es),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let i={};return o.forEach((e,t)=>{i[t]=()=>e}),i};return this.runKernelFunc({forwardFunc:a,backwardsFunc:o,inputs:r})}}readSync(e){let t=this.state.tensorInfo.get(e);return t.backend.readSync(e)}read(e){let t=this.state.tensorInfo.get(e);return t.backend.read(e)}readToGPU(e,t){let n=this.state.tensorInfo.get(e);return n.backend.readToGPU(e,t)}async time(e){let t=(0,l.now)(),n=await this.backend.time(e);return n.wallMs=(0,l.now)()-t,n}track(e){return null!=this.state.activeScope&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){for(let e in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new m,this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}function b(){let e=(0,o.D)();if(null==e._tfengine){let t=new a.qA(e);e._tfengine=new x(t)}return(0,a.iG)(e._tfengine.ENV),(0,p.Vi)(()=>e._tfengine),e._tfengine}x.nextTensorId=0,x.nextVariableId=0;let y=b();function v(e,t){return y.runKernel(i.mm_,{a:e,b:t})}},2885:function(e,t,n){"use strict";n.d(t,{OB:function(){return s},iG:function(){return l},qA:function(){return o}});var r=n(569);/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let a="tfjsflags";class o{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=i,this.populateURLFlags()}setPlatform(e,t){null==this.platform||u.getBool("IS_TEST")||u.getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`),this.platformName=e,this.platform=t}registerFlag(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},null!=this.urlFlags[e]){let r=this.urlFlags[e];u.getBool("IS_TEST")||u.getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${r}.`),this.set(e,r)}}async getAsync(e){return e in this.flags||(this.flags[e]=await this.evaluateFlag(e)),this.flags[e]}get(e){if(e in this.flags)return this.flags[e];let t=this.evaluateFlag(e);if((0,r.tI)(t))throw Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(null==this.flagRegistry[e])throw Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,null!=this.flagRegistry[e].setHook&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(null==this.flagRegistry[e])throw Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(void 0===this.global||void 0===this.global.location||void 0===this.global.location.search)return;let e=this.getQueryParams(this.global.location.search);if(a in e){let t=e[a].split(",");t.forEach(e=>{let[t,n]=e.split(":");this.urlFlags[t]=function(e,t){if("true"===(t=t.toLowerCase())||"false"===t)return"true"===t;if(`${+t}`===t)return+t;throw Error(`Could not parse value flag value ${t} for flag ${e}.`)}(t,n)})}}}function i(e){let t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...n)=>{var r,a,o;return r=t,a=n[0],o=n[1],r[decodeURIComponent(a)]=decodeURIComponent(o||""),n.join("=")}),t}function s(){return u}let u=null;function l(e){u=e}},5938:function(e,t,n){"use strict";let r;n.d(t,{D:function(){return o},R:function(){return i}});var a=n(3454);function o(){if(null==r){let e;if("undefined"!=typeof window)e=window;else if(void 0!==n.g)e=n.g;else if(void 0!==a)e=a;else if("undefined"!=typeof self)e=self;else throw Error("Could not find a global object");r=e}return r}function i(e,t){let n=function(){let e=o();return null==e._tfGlobals&&(e._tfGlobals=new Map),e._tfGlobals}();if(n.has(e))return n.get(e);{let r=t();return n.set(e,r),n.get(e)}}},4368:function(e,t,n){"use strict";n.d(t,{B9:function(){return l},Cn:function(){return h},SR:function(){return s},jq:function(){return c},lu:function(){return u}});var r=n(196),a=n(2885),o=n(974),i=n(747);function s(){return r.BV}function u(e,t){return r.BV.tidy(e,t)}function l(e){let t=(0,i.Vu)(e);t.forEach(e=>e.dispose())}function h(e){return r.BV.keep(e)}function c(e,t,n=1){return r.BV.registerBackend(e,t,n)}(0,o.FZ)(function(e){(0,a.OB)().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")})},5239:function(e,t,n){"use strict";let r,a,o;n.d(t,{SYM:function(){return eU.SYM},VGw:function(){return eU.VGw},SpW:function(){return eU.SpW},mm_:function(){return eU.mm_},Xze:function(){return eU.Xze},oT6:function(){return eU.oT6},IKK:function(){return eU.IKK},sJF:function(){return eU.sJF},aJk:function(){return eU.aJk},M2y:function(){return eU.M2y},qw7:function(){return eU.qw7},jMg:function(){return eU.jMg},QCc:function(){return eU.QCc},Oyi:function(){return eU.Oyi},JhU:function(){return eU.JhU},_k9:function(){return eU._k9},IMb:function(){return eU.IMb},ROF:function(){return eU.ROF},XLW:function(){return eU.XLW},zws:function(){return eU.zws},zvY:function(){return eU.zvY},eEB:function(){return eU.eEB},RFZ:function(){return eU.RFZ},gJX:function(){return eU.gJX},xnO:function(){return eU.xnO},Zz9:function(){return eU.Zz9},yj2:function(){return eU.yj2},Eh3:function(){return eU.Eh3},mhS:function(){return eU.mhS},wUP:function(){return eU.wUP},wm:function(){return eU.wm},x12:function(){return eU.x12},o2y:function(){return eU.o2y},ik2:function(){return eU.ik2},mc4:function(){return eU.mc4},TR1:function(){return eU.TR1},VcC:function(){return eU.VcC},Byc:function(){return eU.Byc},iHb:function(){return eU.iHb},JLz:function(){return ni.JL},QRR:function(){return eU.QRR},T0n:function(){return eU.T0n},cie:function(){return eU.cie},sL$:function(){return eU.sL$},y7R:function(){return eU.y7R},$w:function(){return eU.$w},p4S:function(){return eU.p4S},$g6:function(){return eU.$g6},SX0:function(){return eU.SX0},HEU:function(){return eU.HEU},hdR:function(){return eU.hdR},Omj:function(){return eU.Omj},NEP:function(){return eU.NEP},YFo:function(){return eU.YFo},Y0y:function(){return eU.Y0y},vwp:function(){return eU.vwp},deh:function(){return eU.deh},Uyb:function(){return eU.Uyb},OR:function(){return eU.OR},jeX:function(){return eU.jeX},eBW:function(){return eU.eBW},sHE:function(){return eU.sHE},_V0:function(){return eU._V0},luS:function(){return eU.luS},q1x:function(){return eU.q1x},qi_:function(){return eU.qi_},iZT:function(){return eU.iZT},Acj:function(){return eU.Acj},Qg5:function(){return eU.Qg5},iJz:function(){return eU.iJz},J_u:function(){return eU.J_u},avt:function(){return eU.avt},iWB:function(){return eU.iWB},r7n:function(){return eU.r7n},Zuw:function(){return ni.Zu},eZ0:function(){return eU.eZ0},Hhh:function(){return eU.Hhh},J$2:function(){return eU.J$2},vtC:function(){return eU.vtC},CAk:function(){return eU.CAk},e7N:function(){return eU.e7N},ZbH:function(){return eU.ZbH},kU:function(){return eU.kU},PYm:function(){return eU.PYm},VfG:function(){return eU.VfG},MZg:function(){return eU.MZg},YoZ:function(){return eU.YoZ},mTV:function(){return eU.mTV},OAf:function(){return eU.OAf},OU7:function(){return eU.OU7},OV7:function(){return eU.OV7},vFR:function(){return eU.vFR},BMI:function(){return eU.BMI},q2K:function(){return eU.q2K},c17:function(){return eU.c17},q8u:function(){return eU.q8u},jQs:function(){return eU.jQs},Vbg:function(){return eU.Vbg},NZg:function(){return eU.NZg},wYn:function(){return eU.wYn},kuV:function(){return eU.kuV},uv1:function(){return eU.uv1},cye:function(){return eU.cye},W0H:function(){return eU.W0H},yQU:function(){return eU.yQU},we_:function(){return eU.we_},qWM:function(){return eU.qWM},QiL:function(){return eU.QiL},lyA:function(){return eU.lyA},pe_:function(){return eU.pe_},o0g:function(){return eU.o0g},DlI:function(){return eU.DlI},dDz:function(){return eU.dDz},BiW:function(){return eU.BiW},e6w:function(){return eU.e6w},xJR:function(){return eU.xJR},oHH:function(){return eU.oHH},$HU:function(){return eU.$HU},qkr:function(){return eU.qkr},SbG:function(){return eU.SbG},HZH:function(){return eU.HZH},_Yw:function(){return eU._Yw},zbQ:function(){return eU.zbQ},dpD:function(){return eU.dpD},Hmb:function(){return eU.Hmb},mKl:function(){return eU.mKl},b9H:function(){return eU.b9H},e07:function(){return eU.e07},bV0:function(){return eU.bV0},xQA:function(){return eU.xQA},nr8:function(){return eU.nr8},PhF:function(){return eU.PhF},oFR:function(){return eU.oFR},a5O:function(){return eU.a5O},i5y:function(){return eU.i5y},RQH:function(){return eU.RQH},wYB:function(){return eU.wYB},p2w:function(){return eU.p2w},Gcp:function(){return eU.Gcp},MRv:function(){return eU.MRv},TQc:function(){return eU.TQc},O3z:function(){return eU.O3z},nhH:function(){return eU.nhH},w3H:function(){return eU.w3H},ZjV:function(){return eU.ZjV},D2d:function(){return eU.D2d},L8s:function(){return eU.L8s},FKq:function(){return eU.FKq},bK0:function(){return eU.bK0},_tC:function(){return eU._tC},h8e:function(){return eU.h8e},jQk:function(){return eU.jQk},_JP:function(){return eU._JP},s1s:function(){return eU.s1s},XkS:function(){return eU.XkS},Tr8:function(){return eU.Tr8},GBy:function(){return eU.GBy},sEM:function(){return eU.sEM},MIZ:function(){return eU.MIZ},esB:function(){return ex.es},YDk:function(){return ex.YD},n9L:function(){return eU.n9L},cWu:function(){return eU.cWu},wx7:function(){return eU.wx7},G3Y:function(){return eU.G3Y},kpP:function(){return eU.kpP},ToN:function(){return eU.ToN},Qvg:function(){return eU.Qvg},RuY:function(){return eU.RuY},usg:function(){return eU.usg},IHx:function(){return ta.IHx},Wap:function(){return p},UFq:function(){return ta.UFq},Jyw:function(){return eM},Xhn:function(){return h},f3b:function(){return ta.f3b},pju:function(){return ta.pju},iUl:function(){return ta.iUl},d9v:function(){return ta.d9v},zoF:function(){return ta.zoF},C2$:function(){return u},B90:function(){return to.B9},hiC:function(){return ta.hiC},SRH:function(){return to.SR},OBj:function(){return y.OB},Qqt:function(){return ta.Qqt},dt4:function(){return ta.dt4},BHj:function(){return ta.BHj},io:function(){return l},CnY:function(){return to.Cn},GDt:function(){return f},dC7:function(){return ta.dC7},glt:function(){return ts},jqO:function(){return to.jq},wCN:function(){return eV.wC},XLQ:function(){return ta.XLQ},iD$:function(){return ta.iD$},XD2:function(){return ta.XD2},tPi:function(){return ta.tPi},kuN:function(){return c},L9e:function(){return ta.L9e},knu:function(){return ta.knu},luU:function(){return ta.luU},z4k:function(){return tr.z4},XeE:function(){return ta.XeE},RRF:function(){return ta.RRF},odF:function(){return ta.odF},lub:function(){return to.lu},HHK:function(){return ta.HHK},x8V:function(){return tr.x8},D5U:function(){return tn},lls:function(){return ta.lls}});var i,s,u={};n.r(u),n.d(u,{isBrowser:function(){return b},isMobile:function(){return x},mockIsMobile:function(){return m}});var l={};n.r(l),n.d(l,{browserFiles:function(){return eI},browserHTTPRequest:function(){return eA},concatenateArrayBuffers:function(){return N},copyModel:function(){return es},decodeWeights:function(){return T},encodeWeights:function(){return S},fromMemory:function(){return eF},fromMemorySync:function(){return eP},getLoadHandlers:function(){return V},getModelArtifactsForJSON:function(){return B},getModelArtifactsForJSONSync:function(){return O},getModelArtifactsInfoForJSON:function(){return F},getSaveHandlers:function(){return U},getWeightSpecs:function(){return P},http:function(){return eN},isHTTPScheme:function(){return e_},listModels:function(){return eo},loadWeights:function(){return ek},moveModel:function(){return eu},registerLoadRouter:function(){return M},registerSaveRouter:function(){return W},removeModel:function(){return ei},weightsLoaderFactory:function(){return eS},withSaveHandler:function(){return eL},withSaveHandlerSync:function(){return eW}});var h={};n.r(h),n.d(h,{fromPixels:function(){return eq},fromPixelsAsync:function(){return ej},toPixels:function(){return eK}});var c={};n.r(c),n.d(c,{assertParamsValid:function(){return eY},computeFlatOffset:function(){return e7},computeOutShape:function(){return eQ},getNormalizedAxes:function(){return e1},isSliceContinous:function(){return e8},maskToAxes:function(){return eZ},parseSliceParams:function(){return e9},sliceInfo:function(){return te},startForAxis:function(){return e5},startIndicesWithElidedDims:function(){return e2},stopForAxis:function(){return e6},stopIndicesWithElidedDims:function(){return e3},stridesForAxis:function(){return e4},stridesWithElidedDims:function(){return eJ}});var d={};n.r(d),n.d(d,{collectGatherOpShapeInfo:function(){return nt},computeOutShape:function(){return ne},segOpComputeOptimalWindowSize:function(){return t9}});var p={};n.r(p),n.d(p,{ERF_A1:function(){return tR},ERF_A2:function(){return tN},ERF_A3:function(){return tA},ERF_A4:function(){return tD},ERF_A5:function(){return tO},ERF_P:function(){return t_},PARALLELIZE_THRESHOLD:function(){return tx},RowPartitionType:function(){return s},SELU_SCALE:function(){return tT},SELU_SCALEALPHA:function(){return tS},applyActivation:function(){return td.QH},assertAndGetBroadcastShape:function(){return eM.assertAndGetBroadcastShape},assertAxesAreInnerMostDims:function(){return tu.lB},assertParamsConsistent:function(){return tl},assignToTypedArray:function(){return tU},axesAreInnerMostDims:function(){return tu.YB},calculateShapes:function(){return tk.SU},checkEinsumDimSizes:function(){return tj},checkPadOnDimRoundingMode:function(){return tc.m},combineLocations:function(){return tu.Vh},combineRaggedTensorToTensorShapes:function(){return tp},complexWithEvenIndex:function(){return tL},complexWithOddIndex:function(){return tW},computeConv2DInfo:function(){return tc.Ix},computeConv3DInfo:function(){return tc.jw},computeDefaultPad:function(){return tc.aO},computeDilation2DInfo:function(){return tc.Rf},computeOptimalWindowSize:function(){return tb},computeOutAndReduceShapes:function(){return tu.kz},computeOutShape:function(){return th},computePool2DInfo:function(){return tc.Xw},computePool3DInfo:function(){return tc.pl},convertConv2DDataFormat:function(){return tc.sl},decodeEinsumEquation:function(){return tX},eitherStridesOrDilationsAreOne:function(){return tc.jT},expandShapeToKeepDim:function(){return tu.rv},exponent:function(){return tG},exponents:function(){return tV},fromStringArrayToUint8:function(){return nr},fromUint8ToStringArray:function(){return nn},getAxesPermutation:function(){return tu.Q3},getBroadcastDims:function(){return eM.getBroadcastDims},getComplexWithIndex:function(){return tM},getEinsumComputePath:function(){return tK},getEinsumPermutation:function(){return tH},getFusedBiasGradient:function(){return td.pf},getFusedDyActivation:function(){return td.Fr},getImageCenter:function(){return ty},getInnerMostAxes:function(){return tu.sY},getPermuted:function(){return tw},getRaggedRank:function(){return tg},getReductionAxes:function(){return eM.getReductionAxes},getReshaped:function(){return tv},getReshapedPermuted:function(){return tC},getRowPartitionTypesHelper:function(){return tf},getSliceBeginCoords:function(){return tI},getSliceSize:function(){return t$},getSparseFillEmptyRowsIndicesDenseShapeMismatch:function(){return tZ},getSparseFillEmptyRowsNegativeIndexErrorMessage:function(){return tQ},getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:function(){return tJ},getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:function(){return t2},getSparseReshapeInputOutputMismatchErrorMessage:function(){return t4},getSparseReshapeInputOutputMultipleErrorMessage:function(){return t3},getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:function(){return t0},getSparseReshapeNegativeOutputDimErrorMessage:function(){return t1},getSparseSegmentReductionIndicesOutOfRangeErrorMessage:function(){return t7},getSparseSegmentReductionNegativeSegmentIdsErrorMessage:function(){return t5},getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:function(){return t6},getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:function(){return t8},getUndoAxesPermutation:function(){return tu.LJ},isIdentityPermutation:function(){return tq},log:function(){return tB.c},mergeRealAndImagArrays:function(){return tF},prepareAndValidate:function(){return tE},prepareSplitSize:function(){return tY},segment_util:function(){return d},shouldFuse:function(){return td.uy},slice_util:function(){return c},splitRealAndImagArrays:function(){return tP},tupleValuesAreOne:function(){return tc.I0},upcastType:function(){return tr.x8},validateDefaultValueShape:function(){return tm},validateInput:function(){return tk.b0},validateUpdateShape:function(){return tk.l5},warn:function(){return tB.Z}});var f={};n.r(f),n.d(f,{GP:function(){return na.GP},qP:function(){return na.qP},pA:function(){return na.pA},ZA:function(){return no.Z}});var g=n(196);function m(e){r=e}function x(e){if(void 0!==r)return r;if(e||"undefined"!=typeof navigator&&null!=navigator){if(e||(e=navigator),"ReactNative"===e.product)return!0;let t=e.userAgent||e.vendor||("undefined"!=typeof window?window.opera:"");if(!t){let n=e;return n.userAgentData&&n.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function b(){return"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}var y=n(2885),v=n(3454);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let w=(0,y.OB)();w.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),w.registerFlag("IS_BROWSER",()=>b()),w.registerFlag("IS_NODE",()=>void 0!==v&&void 0!==v.versions&&void 0!==v.versions.node),w.registerFlag("IS_CHROME",()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),w.registerFlag("PROD",()=>!1),w.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>w.getBool("DEBUG")),w.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),w.registerFlag("IS_TEST",()=>!1),w.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0),w.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1),w.registerFlag("ENGINE_COMPILE_ONLY",()=>!1),w.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1),w.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);var C=n(1661),I=n(701),$=n(569);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let E={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};var k=n(1876).Buffer;async function S(e,t){let n=[],r=[],a=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);for(let o=0;o<a.length;++o){let i=a[o],s=Array.isArray(e)?e[o].tensor:e[i];if("float32"!==s.dtype&&"int32"!==s.dtype&&"bool"!==s.dtype&&"string"!==s.dtype&&"complex64"!==s.dtype)throw Error(`Unsupported dtype in weight '${i}': ${s.dtype}`);let u={name:i,shape:s.shape,dtype:s.dtype};if("string"===s.dtype){let l=new Promise(async e=>{let t=await s.bytes(),n=t.reduce((e,t)=>e+t.length,0)+4*t.length,r=new Uint8Array(n),a=0;for(let o=0;o<t.length;o++){let i=t[o],u=new Uint8Array(new Uint32Array([i.length]).buffer);r.set(u,a),a+=4,r.set(i,a),a+=i.length}e(r)});r.push(l)}else r.push(s.data());null!=t&&(u.group=t),n.push(u)}let h=await Promise.all(r);return{data:function(e){if(null===e)throw Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0,n=[];e.forEach(e=>{if(t+=e.byteLength,n.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw Error(`Unsupported TypedArray subtype: ${e.constructor.name}`)});let r=new Uint8Array(t),a=0;return n.forEach(e=>{r.set(new Uint8Array(e.buffer),a),a+=e.byteLength}),r.buffer}(h),specs:n}}function T(e,t){let n;let r={},a=0;for(let o of t){let i;let s=o.name,u=o.dtype,l=o.shape,h=(0,$.NA)(l);if("quantization"in o){let c=o.quantization;if("uint8"===c.dtype||"uint16"===c.dtype){if(!("min"in c&&"scale"in c))throw Error(`Weight ${o.name} with quantization ${c.dtype} doesn't have corresponding metadata min and scale.`)}else if("float16"===c.dtype){if("float32"!==u)throw Error(`Weight ${o.name} is quantized with ${c.dtype} which only supports weights of type float32 not ${u}.`)}else throw Error(`Weight ${o.name} has unknown quantization dtype ${c.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);let d=E[c.dtype],p=e.slice(a,a+h*d),f="uint8"===c.dtype?new Uint8Array(p):new Uint16Array(p);if("float32"===u){if("uint8"===c.dtype||"uint16"===c.dtype){i=new Float32Array(f.length);for(let g=0;g<f.length;g++){let m=f[g];i[g]=m*c.scale+c.min}}else if("float16"===c.dtype)void 0===n&&(n=function(){let e=function(){let e=e=>{let t=e<<13,n=0;for(;(8388608&t)==0;)n-=8388608,t<<=1;return(t&=-8388609)|(n+=947912704)},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let r=1024;r<2048;r++)t[r]=939524096+(r-1024<<13);return t}(),t=function(){let e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let n=33;n<63;n++)e[n]=2147483648+(n-32<<23);return e}(),n=function(){let e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}();return r=>{let a=new ArrayBuffer(4*r.length),o=new Uint32Array(a);for(let i=0;i<r.length;i++){let s=r[i],u=e[n[s>>10]+(1023&s)]+t[s>>10];o[i]=u}return new Float32Array(a)}}()),i=n(f);else throw Error(`Unsupported quantization type ${c.dtype} for weight type float32.`)}else if("int32"===u){if("uint8"!==c.dtype&&"uint16"!==c.dtype)throw Error(`Unsupported quantization type ${c.dtype} for weight type int32.`);i=new Int32Array(f.length);for(let x=0;x<f.length;x++){let b=f[x];i[x]=Math.round(b*c.scale+c.min)}}else throw Error(`Unsupported dtype in weight '${s}': ${u}`);a+=h*d}else if("string"===u){let y=(0,$.NA)(o.shape);i=[];for(let v=0;v<y;v++){let w=new Uint32Array(e.slice(a,a+4))[0];a+=4;let k=new Uint8Array(e.slice(a,a+w));i.push(k),a+=w}}else{let S=E[u],T=e.slice(a,a+h*S);if("float32"===u)i=new Float32Array(T);else if("int32"===u)i=new Int32Array(T);else if("bool"===u)i=new Uint8Array(T);else if("complex64"===u){i=new Float32Array(T);let _=new Float32Array(i.length/2),R=new Float32Array(i.length/2);for(let N=0;N<_.length;N++)_[N]=i[2*N],R[N]=i[2*N+1];let A=(0,I.X)(_,l,"float32"),D=(0,I.X)(R,l,"float32");r[s]=(0,C.P)(A,D),A.dispose(),D.dispose()}else throw Error(`Unsupported dtype in weight '${s}': ${u}`);a+=h*S}"complex64"!==u&&(r[s]=(0,I.X)(i,l,u))}return r}let _=void 0!==k&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function R(e){return _?k.byteLength(e):new Blob([e]).size}function N(e){if(1===e.length)return e[0];let t=0;e.forEach(e=>{t+=e.byteLength});let n=new Uint8Array(t),r=0;return e.forEach(e=>{n.set(new Uint8Array(e),r),r+=e.byteLength}),n.buffer}function A(e){for(e=e.trim();e.endsWith("/");)e=e.slice(0,e.length-1);let t=e.split("/");return t[t.length-1]}function D(e,t){let n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return null!=e.signature&&(n.signature=e.signature),null!=e.userDefinedMetadata&&(n.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(n.modelInitializer=e.modelInitializer),null!=e.trainingConfig&&(n.trainingConfig=e.trainingConfig),n}function O(e,t,n){let r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(null!=e.trainingConfig&&(r.trainingConfig=e.trainingConfig),null!=e.weightsManifest){if(!t)throw Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=t,r.weightData=n}return null!=e.signature&&(r.signature=e.signature),null!=e.userDefinedMetadata&&(r.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(r.modelInitializer=e.modelInitializer),r}async function B(e,t){let n,r;return null!=e.weightsManifest&&([n,r]=await t(e.weightsManifest)),O(e,n,r)}function F(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==e.modelTopology?0:R(JSON.stringify(e.modelTopology)),weightSpecsBytes:null==e.weightSpecs?0:R(JSON.stringify(e.weightSpecs)),weightDataBytes:null==e.weightData?0:e.weightData.byteLength}}function P(e){let t=[];for(let n of e)t.push(...n.weights);return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class L{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==L.instance&&(L.instance=new L),L.instance}static registerSaveRouter(e){L.getInstance().saveRouters.push(e)}static registerLoadRouter(e){L.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return L.getHandlers(e,"save")}static getLoadHandlers(e,t){return L.getHandlers(e,"load",t)}static getHandlers(e,t,n){let r=[],a="load"===t?L.getInstance().loadRouters:L.getInstance().saveRouters;return a.forEach(t=>{let a=t(e,n);null!==a&&r.push(a)}),r}}let W=e=>L.registerSaveRouter(e),M=e=>L.registerLoadRouter(e),U=e=>L.getSaveHandlers(e),V=(e,t)=>L.getLoadHandlers(e,t),G="tensorflowjs",z="models_store",X="model_info_store";function H(){if(!(0,y.OB)().getBool("IS_BROWSER"))throw Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");let e="undefined"==typeof window?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(null==t)throw Error("The current browser does not appear to support IndexedDB.");return t}function j(e){let t=e.result;t.createObjectStore(z,{keyPath:"modelPath"}),t.createObjectStore(X,{keyPath:"modelPath"})}class K{constructor(e){if(this.indexedDB=H(),null==e||!e)throw Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((e,n)=>{let r=this.indexedDB.open(G,1);r.onupgradeneeded=()=>j(r),r.onsuccess=()=>{let a=r.result;if(null==t){let o=a.transaction(z,"readonly"),i=o.objectStore(z),s=i.get(this.modelPath);s.onsuccess=()=>{if(null==s.result)return a.close(),n(Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(s.result.modelArtifacts)},s.onerror=e=>(a.close(),n(s.error)),o.oncomplete=()=>a.close()}else{let u;let l=F(t),h=a.transaction(X,"readwrite"),c=h.objectStore(X),d=c.put({modelPath:this.modelPath,modelArtifactsInfo:l});d.onsuccess=()=>{u=a.transaction(z,"readwrite");let r=u.objectStore(z),o=r.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:l});o.onsuccess=()=>e({modelArtifactsInfo:l}),o.onerror=e=>{c=h.objectStore(X);let t=c.delete(this.modelPath);t.onsuccess=()=>(a.close(),n(o.error)),t.onerror=e=>(a.close(),n(o.error))}},d.onerror=e=>(a.close(),n(d.error)),h.oncomplete=()=>{null==u?a.close():u.oncomplete=()=>a.close()}}},r.onerror=e=>n(r.error)})}}K.URL_SCHEME="indexeddb://";let q=e=>{var t;return(0,y.OB)().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(K.URL_SCHEME)?(t=e.slice(K.URL_SCHEME.length),new K(t)):null};L.registerSaveRouter(q),L.registerLoadRouter(q);let Y="tensorflowjs_models",Z="info";function Q(e){return{info:[Y,e,Z].join("/"),topology:[Y,e,"model_topology"].join("/"),weightSpecs:[Y,e,"weight_specs"].join("/"),weightData:[Y,e,"weight_data"].join("/"),modelMetadata:[Y,e,"model_metadata"].join("/")}}function J(e){for(let t of Object.values(e))window.localStorage.removeItem(t)}class ee{constructor(e){if(!(0,y.OB)().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==e||!e)throw Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Q(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{let t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=F(e);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(e){if(_)return k.from(e).toString("base64");let t=new Uint8Array(e),n="";for(let r=0,a=t.length;r<a;r++)n+=String.fromCharCode(t[r]);return btoa(n)}(e.weightData));let a={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:null!=e.signature?e.signature:void 0,userDefinedMetadata:null!=e.userDefinedMetadata?e.userDefinedMetadata:void 0,modelInitializer:null!=e.modelInitializer?e.modelInitializer:void 0,trainingConfig:null!=e.trainingConfig?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:r}}catch(o){throw J(this.keys),Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){let e=JSON.parse(this.LS.getItem(this.keys.info));if(null==e)throw Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==e.modelTopologyType)throw Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");let t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(null==n)throw Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;let r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==r)throw Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;let a=this.LS.getItem(this.keys.modelMetadata);if(null!=a){let o=JSON.parse(a);t.format=o.format,t.generatedBy=o.generatedBy,t.convertedBy=o.convertedBy,null!=o.signature&&(t.signature=o.signature),null!=o.userDefinedMetadata&&(t.userDefinedMetadata=o.userDefinedMetadata),null!=o.modelInitializer&&(t.modelInitializer=o.modelInitializer),null!=o.trainingConfig&&(t.trainingConfig=o.trainingConfig)}let i=this.LS.getItem(this.keys.weightData);if(null==i)throw Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=function(e){if(_){let t=k.from(e,"base64");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}let n=atob(e),r=new Uint8Array(n.length);for(let a=0;a<n.length;++a)r.set([n.charCodeAt(a)],a);return r.buffer}(i),t}}ee.URL_SCHEME="localstorage://";let et=e=>{var t;return(0,y.OB)().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(ee.URL_SCHEME)?(t=e.slice(ee.URL_SCHEME.length),new ee(t)):null};L.registerSaveRouter(et),L.registerLoadRouter(et);class en{constructor(){this.managers={}}static getInstance(){return null==en.instance&&(en.instance=new en),en.instance}static registerManager(e,t){(0,$.hu)(null!=e,()=>"scheme must not be undefined or null."),e.endsWith("://")&&(e=e.slice(0,e.indexOf("://"))),(0,$.hu)(e.length>0,()=>"scheme must not be an empty string.");let n=en.getInstance();(0,$.hu)(null==n.managers[e],()=>`A model store manager is already registered for scheme '${e}'.`),n.managers[e]=t}static getManager(e){let t=en.getInstance().managers[e];if(null==t)throw Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(en.getInstance().managers)}}function er(e){if(-1===e.indexOf("://"))throw Error(`The url string provided does not contain a scheme. Supported schemes are: ${en.getSchemes().join(",")}`);return{scheme:e.split("://")[0],path:e.split("://")[1]}}async function ea(e,t,n=!1){(0,$.hu)(e!==t,()=>`Old path and new path are the same: '${e}'`);let r=L.getLoadHandlers(e);(0,$.hu)(r.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),(0,$.hu)(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${e}.`);let a=r[0],o=L.getSaveHandlers(t);(0,$.hu)(o.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),(0,$.hu)(o.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`);let i=o[0],s=er(e).scheme,u=er(e).path,l=s===er(e).scheme,h=await a.load();n&&l&&await en.getManager(s).removeModel(u);let c=await i.save(h);return n&&!l&&await en.getManager(s).removeModel(u),c.modelArtifactsInfo}async function eo(){let e=en.getSchemes(),t={};for(let n of e){let r=await en.getManager(n).listModels();for(let a in r){let o=n+"://"+a;t[o]=r[a]}}return t}async function ei(e){let t=er(e),n=en.getManager(t.scheme);return n.removeModel(t.path)}async function es(e,t){return ea(e,t,!1)}async function eu(e,t){return ea(e,t,!0)}if((0,y.OB)().get("IS_BROWSER")){(0,y.OB)().setPlatform("browser",new /**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw Error(`Browser's encoder only supports utf-8, but got ${t}`);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(!window||!(0,y.OB)().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",e=>{if(e.source===window&&e.data.name===this.messageName){e.stopPropagation();let t=this.functionRefs[e.data.index];t(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}});try{en.registerManager(ee.URL_SCHEME,new class{constructor(){(0,$.hu)((0,y.OB)().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),(0,$.hu)("undefined"==typeof window||void 0!==window.localStorage,()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){let e={},t=Y+"/",n="/"+Z;for(let r=0;r<this.LS.length;++r){let a=this.LS.key(r);if(a.startsWith(t)&&a.endsWith(n)){let o=function(e){let t=e.split("/");if(t.length<3)throw Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join("/")}(a);e[o]=JSON.parse(this.LS.getItem(a))}}return e}async removeModel(e){var t;e=(t=e).startsWith(ee.URL_SCHEME)?t.slice(ee.URL_SCHEME.length):t;let n=Q(e);if(null==this.LS.getItem(n.info))throw Error(`Cannot find model at path '${e}'`);let r=JSON.parse(this.LS.getItem(n.info));return J(n),r}})}catch(el){}try{en.registerManager(K.URL_SCHEME,new class{constructor(){this.indexedDB=H()}async listModels(){return new Promise((e,t)=>{let n=this.indexedDB.open(G,1);n.onupgradeneeded=()=>j(n),n.onsuccess=()=>{let r=n.result,a=r.transaction(X,"readonly"),o=a.objectStore(X),i=o.getAll();i.onsuccess=()=>{let t={};for(let n of i.result)t[n.modelPath]=n.modelArtifactsInfo;e(t)},i.onerror=e=>(r.close(),t(i.error)),a.oncomplete=()=>r.close()},n.onerror=e=>t(n.error)})}async removeModel(e){var t;return e=(t=e).startsWith(K.URL_SCHEME)?t.slice(K.URL_SCHEME.length):t,new Promise((t,n)=>{let r=this.indexedDB.open(G,1);r.onupgradeneeded=()=>j(r),r.onsuccess=()=>{let a;let o=r.result,i=o.transaction(X,"readwrite"),s=i.objectStore(X),u=s.get(e);u.onsuccess=()=>{if(null==u.result)return o.close(),n(Error(`Cannot find model with path '${e}' in IndexedDB.`));{let r=s.delete(e),i=()=>{a=o.transaction(z,"readwrite");let r=a.objectStore(z),i=r.delete(e);i.onsuccess=()=>t(u.result.modelArtifactsInfo),i.onerror=e=>n(u.error)};r.onsuccess=i,r.onerror=e=>(i(),o.close(),n(u.error))}},u.onerror=e=>(o.close(),n(u.error)),i.oncomplete=()=>{null==a?o.close():a.oncomplete=()=>o.close()}},r.onerror=e=>n(r.error)})}})}catch(eh){}}var ec=n(3454);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let ed={importFetch:()=>n(5410)};(0,y.OB)().get("IS_NODE")&&!(0,y.OB)().get("IS_BROWSER")&&(0,y.OB)().setPlatform("node",new class{constructor(){this.util=n(8628),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return null!=(0,y.OB)().global.fetch?(0,y.OB)().global.fetch(e,t):(null==a&&(a=ed.importFetch()),a(e,t))}now(){let e=ec.hrtime();return 1e3*e[0]+e[1]/1e6}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return 0===e.length?"":new this.util.TextDecoder(t).decode(e)}});var ep=n(2657),ef=n(2271),eg=n(8723),em=n(9798),ex=n(974);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ (0,g.wv)();let eb={buffer:ep.f,cast:ef.p,clone:eg.d,print:em.S};function ey(e){return new Promise(e=>setTimeout(e)).then(e)}(0,ex.Vp)(eb);class ev{constructor(e){if(!(0,y.OB)().getBool("IS_BROWSER"))throw Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(ev.URL_SCHEME)&&(e=e.slice(ev.URL_SCHEME.length)),(null==e||0===e.length)&&(e="model"),this.modelJsonFileName=e+".json",this.weightDataFileName=e+".weights.bin"}async save(e){if("undefined"==typeof document)throw Error("Browser downloads are not supported in this environment since `document` is not present");let t=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{let n=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],r=D(e,n),a=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),o=null==this.modelJsonAnchor?document.createElement("a"):this.modelJsonAnchor;if(o.download=this.modelJsonFileName,o.href=a,await ey(()=>o.dispatchEvent(new MouseEvent("click"))),null!=e.weightData){let i=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;i.download=this.weightDataFileName,i.href=t,await ey(()=>i.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:F(e)}}}}ev.URL_SCHEME="downloads://";class ew{constructor(e){if(null==e||e.length<1)throw Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,t)=>{let n=new FileReader;n.onload=n=>{let r=JSON.parse(n.target.result),a=r.modelTopology;if(null==a){t(Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}let o=r.weightsManifest;if(null==o){t(Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(0===this.weightsFiles.length){e({modelTopology:a});return}let i=B(r,e=>this.loadWeights(e));e(i)},n.onerror=e=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),n.readAsText(this.jsonFile)})}loadWeights(e){let t=[],n=[];for(let r of e)t.push(...r.weights),n.push(...r.paths);let a=this.checkManifestAndWeightFiles(e),o=n.map(e=>this.loadWeightsFile(e,a[e]));return Promise.all(o).then(e=>[t,N(e)])}loadWeightsFile(e,t){return new Promise((n,r)=>{let a=new FileReader;a.onload=e=>{let t=e.target.result;n(t)},a.onerror=t=>r(`Failed to weights data from file of path '${e}'.`),a.readAsArrayBuffer(t)})}checkManifestAndWeightFiles(e){let t=[],n=this.weightsFiles.map(e=>A(e.name)),r={};for(let a of e)a.paths.forEach(e=>{let a=A(e);if(-1!==t.indexOf(a))throw Error(`Duplicate file basename found in weights manifest: '${a}'`);if(t.push(a),-1===n.indexOf(a))throw Error(`Weight file with basename '${a}' is not provided.`);r[e]=this.weightsFiles[n.indexOf(a)]});if(t.length!==this.weightsFiles.length)throw Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}let eC=e=>(0,y.OB)().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(ev.URL_SCHEME)?function(e="model"){return new ev(e)}(e.slice(ev.URL_SCHEME.length)):null;function eI(e){return new ew(e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function e$(e,t,n,r){var a,o;(0,$.hu)(null!=e&&Array.isArray(e)&&e.length>0,()=>"promises must be a none empty array"),a=n=null==n?0:n,o=r=null==r?1:r,(0,$.hu)(a>=0&&a<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${a}`),(0,$.hu)(o>=0&&o<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${o}`),(0,$.hu)(o>=a,()=>`startFraction must be no more than endFraction, but got startFraction ${a} and endFraction ${o}`);let i=0,s=a=>(a.then(a=>{let o=n+ ++i/e.length*(r-n);return t(o),a}),a);return Promise.all(e.map(s))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ async function eE(e,t){null==t&&(t={});let n=null==t.fetchFunc?(0,y.OB)().platform.fetch:t.fetchFunc,r=e.map(e=>n(e,t.requestInit,{isBinary:!0})),a=null==t.onProgress?await Promise.all(r):await e$(r,t.onProgress,0,.5),o=a.map(e=>e.arrayBuffer()),i=null==t.onProgress?await Promise.all(o):await e$(o,t.onProgress,.5,1);return i}async function ek(e,t="",n,r){let a=e=>eE(e,{requestInit:r}),o=eS(a);return o(e,t,n)}function eS(e){return async(t,n="",r)=>{let a=t.map(()=>!1),o={},i=null!=r?r.map(()=>!1):[],s=[];if(t.forEach((e,t)=>{let n=0;e.weights.forEach(e=>{let u="quantization"in e?e.quantization.dtype:e.dtype,l=E[u]*$.NA(e.shape),h=()=>{a[t]=!0,null==o[t]&&(o[t]=[]),o[t].push({manifestEntry:e,groupOffset:n,sizeBytes:l})};null!=r?r.forEach((t,n)=>{t===e.name&&(h(),i[n]=!0)}):h(),s.push(e.name),n+=l})}),!i.every(e=>e)){let u=r.filter((e,t)=>!i[t]);throw Error(`Could not find weights in manifest with names: ${u.join(", ")}. 
Manifest JSON has weights with names: ${s.join(", ")}.`)}let l=a.reduce((e,t,n)=>(t&&e.push(n),e),[]),h=[];l.forEach(e=>{t[e].paths.forEach(e=>{let t=n+(n.endsWith("/")?"":"/")+e;h.push(t)})});let c=await e(h),d={},p=0;return l.forEach(e=>{let n=t[e].paths.length,r=0;for(let a=0;a<n;a++)r+=c[p+a].byteLength;let i=new ArrayBuffer(r),s=new Uint8Array(i),u=0;for(let l=0;l<n;l++){let h=new Uint8Array(c[p+l]);s.set(h,u),u+=h.byteLength}let f=o[e];f.forEach(e=>{let t=i.slice(e.groupOffset,e.groupOffset+e.sizeBytes),n=T(t,[e.manifestEntry]);for(let r in n)d[r]=n[r]}),p+=n}),d}}L.registerSaveRouter(eC);class eT{constructor(e,t){if(this.DEFAULT_METHOD="POST",null==t&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,this.weightUrlConverter=t.weightUrlConverter,null!=t.fetchFunc?((0,$.hu)("function"==typeof t.fetchFunc,()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc):this.fetch=(0,y.OB)().platform.fetch,(0,$.hu)(null!=e&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&(0,$.hu)(2===e.length,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,null!=t.requestInit&&null!=t.requestInit.body)throw Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{}}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");let t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;let n=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],r=D(e,n);t.body.append("model.json",new Blob([JSON.stringify(r)],{type:"application/json"}),"model.json"),null!=e.weightData&&t.body.append("model.weights.bin",new Blob([e.weightData],{type:"application/octet-stream"}),"model.weights.bin");let a=await this.fetch(this.path,t);if(a.ok)return{modelArtifactsInfo:F(e),responses:[a]};throw Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${a.status}.`)}async load(){let e;let t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);try{e=await t.json()}catch(r){let n=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",Error(n)}let a=e.modelTopology,o=e.weightsManifest;if(null==a&&null==o)throw Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return B(e,e=>this.loadWeights(e))}async loadWeights(e){let t=Array.isArray(this.path)?this.path[1]:this.path,[n,r]=function(e){let t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),r=e.substring(0,t),a=n>t?e.substring(n):"";return[r+"/",a]}(t),a=this.weightPathPrefix||n,o=P(e),i=[],s=[];for(let u of e)for(let l of u.paths)null!=this.weightUrlConverter?s.push(this.weightUrlConverter(l)):i.push(a+l+r);this.weightUrlConverter&&i.push(...await Promise.all(s));let h=await eE(i,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[o,N(h)]}}function e_(e){return null!=e.match(eT.URL_SCHEME_REGEX)}eT.URL_SCHEME_REGEX=/^https?:\/\//;let eR=(e,t)=>{if("undefined"==typeof fetch&&(null==t||null==t.fetchFunc));else if(Array.isArray(e)?e.every(e=>e_(e)):e_(e))return eN(e,t);return null};function eN(e,t){return new eT(e,t)}function eA(e,t){return eN(e,t)}L.registerSaveRouter(eR),L.registerLoadRouter(eR);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class eD{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class eO{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class eB{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}}function eF(e,t,n,r){let a=arguments;return new eB(eP(...a))}function eP(e,t,n,r){if(1!=arguments.length)return console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new eD({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r});{let a=null!=e.modelTopology||null!=e.weightSpecs;return a?new eD(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new eD({modelTopology:e}))}}function eL(e){return new eO(e)}function eW(e){return new eO(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ var eM=n(2200),eU=n(9121),eV=n(6151),eG=n(3740),ez=n(2668),eX=n(9906);function eH(e,t=3){let n,r;if(t>4)throw Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==e)throw Error("pixels passed to tf.browser.fromPixels() can not be null");let a=!1,i=!1,s=!1,u=!1,l=!1,h=!1;if(e.data instanceof Uint8Array)a=!0;else if("undefined"!=typeof ImageData&&e instanceof ImageData)i=!0;else if("undefined"!=typeof HTMLVideoElement&&e instanceof HTMLVideoElement)s=!0;else if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement)u=!0;else if(null!=e.getContext)l=!0;else if("undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap)h=!0;else throw Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);let c=(0,eV.pI)(eU.eBW,g.BV.backendName);if(null!=c)return g.BV.runKernel(eU.eBW,{pixels:e},{numChannels:t});let[d,p]=s?[e.videoWidth,e.videoHeight]:[e.width,e.height];if(l)n=e.getContext("2d").getImageData(0,0,d,p).data;else if(i||a)n=e.data;else if(u||s||h){if(null==o){if("undefined"==typeof document){if("undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof OffscreenCanvasRenderingContext2D)o=new OffscreenCanvas(1,1).getContext("2d");else throw Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.")}else o=document.createElement("canvas").getContext("2d",{willReadFrequently:!0})}o.canvas.width=d,o.canvas.height=p,o.drawImage(e,0,0,d,p),n=o.getImageData(0,0,d,p).data}if(4===t)r=new Int32Array(n);else{let f=d*p;r=new Int32Array(f*t);for(let m=0;m<f;m++)for(let x=0;x<t;++x)r[m*t+x]=n[4*m+x]}return(0,eX.w)(r,[p,d,t],"int32")}async function ej(e,t=3){var n;let r=null;if((0,y.OB)().getBool("WRAP_TO_IMAGEBITMAP")&&"undefined"!=typeof window&&"undefined"!=typeof ImageBitmap&&window.hasOwnProperty("createImageBitmap")&&!(e instanceof ImageBitmap)&&null!=(n=e)&&0!==n.width&&0!==n.height&&!(null!=e&&e.data instanceof Uint8Array)){let a;try{a=await createImageBitmap(e,{premultiplyAlpha:"none"})}catch(o){a=null}r=null!=a&&a.width===e.width&&a.height===e.height?a:e}else r=e;return eH(r,t)}async function eK(e,t){let n=(0,eG._1)(e,"img","toPixels");if(!(e instanceof ex.es)){let r=n;n=(0,ef.p)(r,"int32"),r.dispose()}if(2!==n.rank&&3!==n.rank)throw Error(`toPixels only supports rank 2 or 3 tensors, got rank ${n.rank}.`);let[a,o]=n.shape.slice(0,2),i=2===n.rank?1:n.shape[2];if(i>4||2===i)throw Error(`toPixels only supports depth of size 1, 3 or 4 but got ${i}`);if("float32"!==n.dtype&&"int32"!==n.dtype)throw Error(`Unsupported type for toPixels: ${n.dtype}. Please use float32 or int32 tensors.`);let s=await n.data(),u="float32"===n.dtype?255:1,l=new Uint8ClampedArray(o*a*4);for(let h=0;h<a*o;++h){let c=[0,0,0,255];for(let d=0;d<i;d++){let p=s[h*i+d];if("float32"===n.dtype){if(p<0||p>1)throw Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${p}.`)}else if("int32"===n.dtype&&(p<0||p>255))throw Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${p}.`);1===i?(c[0]=p*u,c[1]=p*u,c[2]=p*u):c[d]=p*u}let f=4*h;l[f+0]=Math.round(c[0]),l[f+1]=Math.round(c[1]),l[f+2]=Math.round(c[2]),l[f+3]=Math.round(c[3])}if(null!=t){t.width=o,t.height=a;let g=t.getContext("2d"),m=new ImageData(l,o,a);g.putImageData(m,0,0)}return n!==e&&n.dispose(),l}let eq=(0,ez.op)({fromPixels_:eH});function eY(e,t,n){let r=e.shape.length;$.hu(r===t.length,()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`),$.hu(r===n.length,()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`);for(let a=0;a<r;++a)$.hu(t[a]+n[a]<=e.shape[a],()=>`Error in slice${r}D: begin[${a}] + size[${a}] (${t[a]+n[a]}) would overflow input.shape[${a}] (${e.shape[a]})`)}function eZ(e){let t=[],n=0;for(;e>0;)1&e&&t.push(n),e/=2,n++;return t}function eQ(e,t,n){let r=[];for(let a=0;a<e.length;a++)r[a]=Math.ceil((t[a]-e[a])/n[a]);return r}function eJ(e,t,n,r){let a=[...e];for(let o=a.length;o<r.length;o++)a.push(1);for(let i=0;i<n;i++)0===i?a[t]=1:(a.splice(t,0,1),a.pop());return a}function e0(e,t){let n=[];for(let r=0;r<e;r++)n.push(t+r);return n}function e1(e,t,n,r,a,o,i,s,u){let l=e.length,h=Array(l),c=Array(l),d=Array(l);if(t.length&&n>0){let p=t[0],f=n+1;h=e2(i,p,f,r,e),c=e3(s,p,f,a,e),d=eJ(o,p,f,e)}else for(let g=0;g<l;g++)h[g]=e5(i,r,o,e,g,u),c[g]=e6(s,a,o,e,g,u),d[g]=e4(o,g,u);return{begin:h,end:c,strides:d}}function e2(e,t,n,r,a){let o=[...a],i=e0(n,t);for(let s=0;s<o.length;s++)if(i.indexOf(s)>-1)o[s]=0;else{var u;let l=(u=s)<=t?u:u-(n-1),h=r[l];e&1<<l&&(h=0),o[s]=h}return o}function e3(e,t,n,r,a){let o=[...a],i=e0(n,t);for(let s=0;s<o.length;s++)if(i.indexOf(s)>-1)o[s]=Number.MAX_SAFE_INTEGER;else{var u;let l=(u=s)<=t?u:u-(n-1),h=r[l];e&1<<l&&(h=Number.MAX_SAFE_INTEGER),o[s]=h}for(let c=0;c<o.length;c++){let d=a[c];o[c]<0&&(o[c]+=d),o[c]=$.uZ(0,o[c],a[c])}return o}function e4(e,t,n){let r=e[t];return(n&1<<t||null==r)&&(r=1),r}function e5(e,t,n,r,a,o){let i=t[a],s=n[a]||1;(e&1<<a||o&1<<a||null==i)&&(i=s>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);let u=r[a];return i<0&&(i+=u),i=$.uZ(0,i,u-1)}function e6(e,t,n,r,a,o){let i=t[a],s=n[a]||1;(e&1<<a||o&1<<a||null==i)&&(i=s>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);let u=r[a];return i<0&&(i+=u),i=s>0?$.uZ(0,i,u):$.uZ(-1,i,u-1)}function e8(e,t,n){let r=n.length;for(let a=0;a<n.length;a++)if(n[a]>1){r=a;break}for(let o=r+1;o<n.length;o++)if(t[o]>0||n[o]!==e[o])return!1;return!0}function e7(e,t){let n=e.length>0?e[e.length-1]:1;for(let r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function e9(e,t,n){let r,a;let o=e.shape.length;return(r="number"==typeof t?[t,...Array(o-1).fill(0)]:t.length<o?t.concat(Array(o-t.length).fill(0)):t.slice()).forEach(e=>{$.hu(-1!==e,()=>"slice() does not support negative begin indexing.")}),a=(a=null==n?Array(o).fill(-1):"number"==typeof n?[n,...Array(o-1).fill(-1)]:n.length<o?n.concat(Array(o-n.length).fill(-1)):n).map((t,n)=>t>=0?t:($.hu(-1===t,()=>`Negative size values should be exactly -1 but got ${t} for the slice() size at index ${n}.`),e.shape[n]-r[n])),[r,a]}function te(e,t,n,r,a,o,i,s,u){let l;if(null==r?(l=Array(t.length)).fill(1):l=r,null!=i&&(i&i-1)!=0)throw Error("Multiple ellipses in slice is not allowed.");let h=!1,c={dims:l.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:n.slice(),strides:l.slice(),beginMask:a,endMask:o,ellipsisMask:i,newAxisMask:s,shrinkAxisMask:u};for(let d=0;d<c.dims;d++)h&&(1<<d&s)!=0&&c.numAddAxisAfterEllipsis++,1<<d&i&&(h=!0);!h&&(c.ellipsisMask|=1<<c.dims,c.dims++);let p={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};!function(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let n=0;t.beginValid=null!=e.begin,t.endValid=null!=e.end,t.begin=Array(t.dims),t.end=Array(t.dims),t.strides=Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=Array(t.dims);for(let r=0;r<e.dims;r++)if(1<<r&e.ellipsisMask){let a=Math.min(t.dims-(e.dims-r)+1+e.numAddAxisAfterEllipsis,t.dims);for(;n<a;n++)t.begin[n]=0,t.end[n]=0,t.strides[n]=1,t.beginMask|=1<<n,t.endMask|=1<<n,t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[n]=r}else if(1<<r&e.newAxisMask)t.finalShapeGatherIndices.push(-2),t.finalShapeGatherIndicesSparse.push(-1);else{if(n===t.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${t.dims} dims, ${t.begin.length}.`);null!=e.begin&&(t.begin[n]=e.begin[r]),null!=e.end&&(t.end[n]=e.end[r]),t.strides[n]=e.strides[r],e.beginMask&1<<r&&(t.beginMask|=1<<n),e.endMask&1<<r&&(t.endMask|=1<<n),e.shrinkAxisMask&1<<r?(t.finalShapeGatherIndices.push(-1),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<n):(t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(r)),t.inputShapeGatherIndicesSparse[n]=r,n++}}(c,p);let f=!0,g=!0,m=!0,x=[],b=[];for(let y=0;y<e.length;++y){let v;if(0===p.strides[y])throw Error(`strides[${y}] must be non-zero`);let w=!!(p.shrinkAxisMask&1<<y),C=e[y];if(-1===C){x.push(w?1:-1);continue}let I=[p.beginMask&1<<y,p.endMask&1<<y],$=[p.strides[y]>0?0:-1,p.strides[y]>0?C:C-1];if(w&&p.strides[y]<=0)throw Error("only stride 1 allowed on non-range indexing.");m=m&&1===p.strides[y];let E=!!(p.beginMask&1<<y&&p.endMask&1<<y);if(p.beginValid&&p.endValid){if(w){let k=p.begin[y]<0?C+p.begin[y]:p.begin[y];if(p.begin[y]=k,p.end[y]=p.begin[y]+1,k<0||k>=C)throw Error(`slice index ${p.begin[y]} of dimension ${y} out of bounds.`)}else p.begin[y]=tt(p.begin[y],0,p.strides[y],C,I,$),p.end[y]=tt(p.end[y],1,p.strides[y],C,I,$);let S=1===p.strides[y]&&0===p.begin[y]&&p.end[y]===C;f=f&&S,g=g&&(0===y&&1===p.strides[y]||S)}else f=f&&1===p.strides[y]&&E,g=g&&(0===y&&1===p.strides[y]||E);let T=!1;if(p.beginValid&&p.endValid?(v=p.end[y]-p.begin[y],T=!0):w?(v=1,T=!0):E&&C>=0&&(v=p.strides[y]<0?-C:C,T=!0),T){let _;_=0===v||v<0!=p.strides[y]<0?0:Math.trunc(v/p.strides[y])+(v%p.strides[y]!=0?1:0),x.push(_)}else x.push(-1)}for(let R=0;R<p.finalShapeGatherIndices.length;++R){let N=p.finalShapeGatherIndices[R];N>=0?b.push(x[N]):-2===N&&b.push(1)}let A=b.filter((e,t)=>-2!==p.finalShapeGatherIndices[t]);return{finalShapeSparse:A,finalShape:b,isIdentity:f,sliceDim0:g,isSimpleSlice:m,begin:p.begin,end:p.end,strides:p.strides}}function tt(e,t,n,r,a,o){if(a[t])return n>0?o[t]:o[t+1&1];{let i=e<0?r+e:e;return i<o[0]?o[0]:i>o[1]?o[1]:i}}var tn=n(3418),tr=n(1221),ta=n(1822),to=n(4368);/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let ti="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setImmediate?setImmediate:e=>e();function ts(){return new Promise(e=>ti(()=>e()))}var tu=n(3591);/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function tl(e,t){let n=e[0].length;e.forEach((e,t)=>{$.hu(e.length===n,()=>`Error in concat${n}D: rank of tensors[${t}] must be the same as the rank of the rest (${n})`)}),$.hu(t>=0&&t<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);let r=e[0];e.forEach((e,a)=>{for(let o=0;o<n;o++)$.hu(o===t||e[o]===r[o],()=>`Error in concat${n}D: Shape of tensors[${a}] (${e}) does not match the shape of the rest (${r}) along the non-concatenated axis ${a}.`)})}function th(e,t){let n=e[0].slice();for(let r=1;r<e.length;r++)n[t]+=e[r][t];return n}var tc=n(2582),td=n(9323);function tp(e,t,n){let r=[];if(null==n&&null==t)return r;if(null==t)for(;r.length<e+n.length;)r.push(-1);else r=t.slice();if(null==n)return r;if(e+n.length!==r.length)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+n.length}, but shape.rank = ${r.length}`);for(let a=1;a<n.length;++a){let o=n[a],i=r[r.length-n.length+a],s=r[i];if(o>=0){if(s>=0){if(s!==o)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${a+e}] = ${o} but shape[${a+e}] = ${s}`)}else r[i]=o}}return r}function tf(e){let t={FIRST_DIM_SIZE:s.FIRST_DIM_SIZE,VALUE_ROWIDS:s.VALUE_ROWIDS,ROW_LENGTHS:s.ROW_LENGTHS,ROW_SPLITS:s.ROW_SPLITS,ROW_LIMITS:s.ROW_LIMITS,ROW_STARTS:s.ROW_STARTS},n=[];for(let r of e)if(r in t)n.push(t[r]);else break;return n}function tg(e){return 0===e.length?0:e[0]===s.FIRST_DIM_SIZE?e.length-1:e.length}function tm(e,t){if(null==e||null==t)return;let n=e.length,r=t.length;if(n>=r)throw Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${r})`);for(let a=0;a<Math.min(n,r-1);++a){let o=e[a],i=t[a+1];if(o>=0&&i>=0&&1!==o&&o!==i)throw Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${a-e.length}] = ${o} but ragged tensor input.flatValues.shape[${a-e.length}] = ${i}`)}}(i=s||(s={}))[i.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",i[i.VALUE_ROWIDS=1]="VALUE_ROWIDS",i[i.ROW_LENGTHS=2]="ROW_LENGTHS",i[i.ROW_SPLITS=3]="ROW_SPLITS",i[i.ROW_LIMITS=4]="ROW_LIMITS",i[i.ROW_STARTS=5]="ROW_STARTS";/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let tx=30;function tb(e){return e<=tx?e:(0,$.jP)(e,Math.floor(Math.sqrt(e)))}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function ty(e,t,n){let r=n*("number"==typeof e?e:e[0]),a=t*("number"==typeof e?e:e[1]);return[r,a]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function tv(e,t,n,r=!0){let a=[];if(r)(a=a.concat(t.slice(0))).push(e[0]/n),a=a.concat(e.slice(1));else{a=a.concat(e[0]);let o=t.length;for(let i=0;i<o;++i)a=a.concat([e[i+1]/t[i],t[i]]);a=a.concat(e.slice(o+1))}return a}function tw(e,t,n=!0){let r=[];if(n){r.push(t);for(let a=t+1;a<e;++a)a<=2*t?(r.push(a),r.push(a-(t+1))):r.push(a)}else{let o=[],i=[];for(let s=1;s<e;++s)s>=2*t+1||s%2==1?i.push(s):o.push(s);r.push(...o),r.push(0),r.push(...i)}return r}function tC(e,t,n,r=!0){let a=[];r?a.push(e[0]/n):a.push(e[0]*n);for(let o=1;o<e.length;++o)o<=t.length?r?a.push(t[o-1]*e[o]):a.push(e[o]/t[o-1]):a.push(e[o]);return a}function tI(e,t){let n=[0];for(let r=0;r<t;++r)n.push(e[r][0]);return n}function t$(e,t,n){let r=e.slice(0,1);for(let a=0;a<n;++a)r.push(e[a+1]-t[a][0]-t[a][1]);return r}function tE(e,t){let n=e.shape.length,r=t.shape.length;if(n<1)throw Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if("int32"!==t.dtype)throw Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>n)throw Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${n}`);if(0===(0,$.NA)(e.shape))throw Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);let a=t.shape,o=a[a.length-1],i=1;for(let s=0;s<a.length-1;++s)i*=a[s];let u=e.shape,l=a.slice();l.pop();let h=1;for(let c=o;c<n;++c)h*=u[c],l.push(u[c]);let d=[...(0,$.e3)(e.shape).map(e=>e/h),1].slice(0,o);return[l,i,h,d]}var tk=n(3028);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let tS=1.7580993408473768,tT=1.0507009873554805,t_=.3275911,tR=.254829592,tN=-.284496736,tA=1.421413741,tD=-1.453152027,tO=1.061405429;var tB=n(4706);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function tF(e,t){if(e.length!==t.length)throw Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);let n=new Float32Array(2*e.length);for(let r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function tP(e){let t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}function tL(e){let t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let a=0;a<e.length;a+=4)n[Math.floor(a/4)]=e[a],r[Math.floor(a/4)]=e[a+1];return{real:n,imag:r}}function tW(e){let t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let a=2;a<e.length;a+=4)n[Math.floor(a/4)]=e[a],r[Math.floor(a/4)]=e[a+1];return{real:n,imag:r}}function tM(e,t){let n=e[2*t],r=e[2*t+1];return{real:n,imag:r}}function tU(e,t,n,r){e[2*r]=t,e[2*r+1]=n}function tV(e,t){let n=new Float32Array(e/2),r=new Float32Array(e/2);for(let a=0;a<Math.ceil(e/2);a++){let o=(t?2:-2)*Math.PI*(a/e);n[a]=Math.cos(o),r[a]=Math.sin(o)}return{real:n,imag:r}}function tG(e,t,n){let r=(n?2:-2)*Math.PI*(e/t),a=Math.cos(r),o=Math.sin(r);return{real:a,imag:o}}let tz=/->/g;function tX(e,t){e=e.replace(/\s/g,"");let n=(e.length-e.replace(tz,"").length)/2;if(n<1)throw Error("Equations without an arrow are not supported.");if(n>1)throw Error('Equation must contain exactly one arrow ("->").');let[r,a]=e.split("->");(0,$.hu)(-1===r.indexOf("..."),()=>'The ellipsis notation ("...") is not supported yet.');let o=r.split(","),i=o.length;if(t!==i)throw Error(`Expected ${i} input tensors, received ${t}`);if(i>2)throw Error("Support for more than 2 input tensors is not implemented yet.");let s=[];for(let u=0;u<a.length;++u){let l=a[u];if(!o.some(e=>-1!==e.indexOf(l)))throw Error(`Output subscripts contain the label ${l} not present in the input subscripts.`);-1===s.indexOf(l)&&s.push(l)}for(let h=0;h<r.length;++h){let c=r[h];-1===s.indexOf(c)&&","!==c&&s.push(c)}let d=Array(o.length);for(let p=0;p<i;++p){if(new Set(o[p].split("")).size!==o[p].length)throw Error(`Found duplicate axes in input component ${o[p]}. Support for duplicate axes in input is not implemented yet.`);d[p]=[];for(let f=0;f<o[p].length;++f)d[p].push(s.indexOf(o[p][f]))}let g=s.length,m=a.length,x=[];for(let b=m;b<g;++b)x.push(b);return{allDims:s,summedDims:x,idDims:d}}function tH(e,t){let n=Array(e);n.fill(-1);for(let r=0;r<t.length;++r)n[t[r]]=r;let a=[];for(let o=0;o<e;++o)-1===n[o]&&a.push(o);return n=n.filter(e=>-1!==e),{permutationIndices:n,expandDims:a}}function tj(e,t,n){let r=Array(e);for(let a=0;a<n.length;++a){let o=n[a].shape;for(let i=0;i<t[a].length;++i)void 0===r[t[a][i]]?r[t[a][i]]=o[i]:(0,$.hu)(r[t[a][i]]===o[i],()=>`Expected dimension ${r[t[a][i]]} at axis ${i} of input shaped ${JSON.stringify(o)}, but got dimension ${o[i]}`)}}function tK(e,t){let n=[],r=0;0===e.length&&e.push(-1),r=e.length+1;for(let a=0;a<r;++a)n.push([]);let o=[];for(let i=0;i<e.length;++i){let s=e[i],u=function(e,t){let n=[];for(let r=0;r<e.length;++r)(0===e[r].length||-1!==e[r].indexOf(t)||-1===t)&&n.push(r);return n}(t,s);for(let l of u)-1===o.indexOf(l)&&(n[i].push(l),o.push(l))}return{path:e,steps:n}}function tq(e){return e.every((e,t)=>e===t)}function tY(e,t,n=0){let r=[];if("number"==typeof t)(0,$.hu)(e.shape[n]%t==0,()=>"Number of splits must evenly divide the axis."),r=Array(t).fill(e.shape[n]/t);else{let a=t.reduce((e,t)=>(-1===t&&(e+=1),e),0);(0,$.hu)(a<=1,()=>"There should be only one negative value in split array.");let o=t.indexOf(-1);if(-1!==o){let i=t.reduce((e,t)=>t>0?e+t:e);t[o]=e.shape[n]-i}(0,$.hu)(e.shape[n]===t.reduce((e,t)=>e+t),()=>"The sum of sizes must match the size of the axis dimension."),r=t}return r}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function tZ(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function tQ(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function tJ(e,t,n){return`indices(${e}, 0) is invalid: ${t} >= ${n}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function t0(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function t1(e,t){return`size ${e} must be non-negative, not ${t}`}function t2(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function t3(e,t){let n=(0,$.NA)(e),r=(0,$.NA)(t);return`Input to reshape is a SparseTensor with ${n}
  dense values, but the requested shape requires a multiple of ${r}. inputShape=${e} outputShape= ${t}`}function t4(e,t){let n=(0,$.NA)(e),r=(0,$.NA)(t);return`Input to reshape is a tensor with ${n} dense values, but the requested shape has ${r}. inputShape=${e} outputShape=${t}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function t5(){return"segment ids must be >= 0"}function t6(){return"segment ids are not increasing"}function t8(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function t7(e,t,n){return`Bad: indices[${e}] == ${t} out of range [0, ${n})`}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function t9(e,t){let n,r=!1;for(e<=tx?(n=e,r=!0):n=(0,$.jP)(e,Math.floor(Math.sqrt(e)));!r;)n>t||n===e?r=!0:n=(0,$.jP)(e,n+1);return n}function ne(e,t,n){let r=[],a=e.length;for(let o=0;o<a;o++)o!==t?r.push(e[o]):r.push(n);return r}function nt(e,t,n,r){let a=t.shape.length,o=e.shape.length;if(0!==r&&(r<-a||r>a))throw Error(`Expect batchDims in the range of [-${a}, ${a}], but got ${r}`);if(r<0&&(r+=a),r>o)throw Error(`batchDims (${r}) must be less than rank(x) (
    ${o}).`);if(n<r)throw Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let i=0;i<r;++i)if(e.shape[i]!==t.shape[i])throw Error(`x.shape[${i}]: ${e.shape[i]} should be equal to indices.shape[${i}]: ${t.shape[i]}.`);let s=e.shape[n],u=[],l=1,h=1,c=1;for(let d=0;d<r;++d)u.push(e.shape[d]),l*=e.shape[d];for(let p=r;p<n;p++)u.push(e.shape[p]),h*=e.shape[p];for(let f=r;f<a;f++)u.push(t.shape[f]);for(let g=n+1;g<o;g++)u.push(e.shape[g]),c*=e.shape[g];return{batchSize:l,sliceSize:c,outerSize:h,dimSize:s,outputShape:u}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function nn(e){try{return e.map(e=>(0,tn.decodeString)(e))}catch(t){throw Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function nr(e){return e.map(e=>(0,tn.encodeString)(e))}var na=n(8329),no=n(8333),ni=n(2073);/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ },9121:function(e,t,n){"use strict";n.d(t,{$HU:function(){return e8},$g6:function(){return Y},$w:function(){return j},Acj:function(){return ep},BMI:function(){return eA},BiW:function(){return e4},Byc:function(){return W},CAk:function(){return eC},D2d:function(){return tS},DlI:function(){return e2},Eh3:function(){return R},FKq:function(){return tb},G3Y:function(){return tM},GBy:function(){return ty},Gcp:function(){return tC},HEU:function(){return Q},HZH:function(){return e9},Hhh:function(){return eR},Hmb:function(){return tt},IKK:function(){return l},IMb:function(){return v},J$2:function(){return ev},J_u:function(){return em},JhU:function(){return x},L8s:function(){return tw},M2y:function(){return d},MIZ:function(){return tF},MRv:function(){return tx},MZg:function(){return eT},NEP:function(){return et},NZg:function(){return eG},O3z:function(){return tI},OAf:function(){return eB},OR:function(){return es},OU7:function(){return eF},OV7:function(){return eO},Omj:function(){return J},Oyi:function(){return g},PYm:function(){return ek},PhF:function(){return th},QCc:function(){return m},QRR:function(){return V},Qg5:function(){return eg},QiL:function(){return eQ},Qvg:function(){return tG},RFZ:function(){return E},ROF:function(){return b},RQH:function(){return tp},RuY:function(){return tz},SX0:function(){return Z},SYM:function(){return r},SbG:function(){return ta},SpW:function(){return o},T0n:function(){return G},TQc:function(){return tv},TR1:function(){return L},ToN:function(){return tV},Tr8:function(){return tO},Uyb:function(){return ei},VGw:function(){return a},Vbg:function(){return eV},VcC:function(){return U},VfG:function(){return eS},W0H:function(){return eq},XLW:function(){return w},XkS:function(){return tD},Xze:function(){return s},Y0y:function(){return er},YFo:function(){return en},YoZ:function(){return eN},ZbH:function(){return e$},ZjV:function(){return tk},Zz9:function(){return T},_JP:function(){return tN},_V0:function(){return tq},_Yw:function(){return tn},_k9:function(){return y},_tC:function(){return tT},a5O:function(){return tm},aJk:function(){return c},avt:function(){return ex},b9H:function(){return tj},bK0:function(){return t_},bV0:function(){return ts},c17:function(){return eW},cWu:function(){return tL},cie:function(){return z},cye:function(){return eK},dDz:function(){return e3},deh:function(){return eo},dpD:function(){return te},e07:function(){return ti},e6w:function(){return e5},e7N:function(){return eI},eBW:function(){return tH},eEB:function(){return $},eZ0:function(){return e_},gJX:function(){return k},h8e:function(){return tX},hdR:function(){return ee},i5y:function(){return tg},iHb:function(){return M},iJz:function(){return ef},iWB:function(){return eb},iZT:function(){return ed},ik2:function(){return F},jMg:function(){return f},jQk:function(){return tR},jQs:function(){return eU},jeX:function(){return eu},kU:function(){return eE},kpP:function(){return tU},kuV:function(){return eX},luS:function(){return tY},lyA:function(){return eJ},mKl:function(){return to},mTV:function(){return eD},mc4:function(){return P},mhS:function(){return N},mm_:function(){return i},n9L:function(){return tP},nhH:function(){return t$},nr8:function(){return tl},o0g:function(){return e1},o2y:function(){return B},oFR:function(){return tc},oHH:function(){return q},oT6:function(){return u},p2w:function(){return td},p4S:function(){return K},pe_:function(){return e0},q1x:function(){return ec},q2K:function(){return eL},q8u:function(){return eM},qWM:function(){return eY},qi_:function(){return eh},qkr:function(){return e7},qw7:function(){return p},r7n:function(){return ey},s1s:function(){return tA},sEM:function(){return tB},sHE:function(){return el},sJF:function(){return h},sL$:function(){return X},usg:function(){return tK},uv1:function(){return ej},vFR:function(){return eP},vtC:function(){return ew},vwp:function(){return ea},w3H:function(){return tE},wUP:function(){return A},wYB:function(){return tf},wYn:function(){return ez},we_:function(){return eZ},wm:function(){return D},wx7:function(){return tW},x12:function(){return O},xJR:function(){return e6},xQA:function(){return tu},xnO:function(){return S},y7R:function(){return H},yQU:function(){return eH},yj2:function(){return _},zbQ:function(){return tr},zvY:function(){return I},zws:function(){return C}});let r="Abs",a="Acos",o="Acosh",i="Add",s="AddN",u="All",l="Any",h="ArgMax",c="ArgMin",d="Asin",p="Asinh",f="Atan",g="Atanh",m="Atan2",x="AvgPool",b="AvgPoolGrad",y="AvgPool3D",v="AvgPool3DGrad",w="BatchMatMul",C="BatchToSpaceND",I="Bincount",$="BroadcastArgs",E="Cast",k="Ceil",S="ClipByValue",T="Complex",_="ComplexAbs",R="Concat",N="Conv2D",A="Conv2DBackpropFilter",D="Conv2DBackpropInput",O="Conv3D",B="Conv3DBackpropFilterV2",F="Conv3DBackpropInputV2",P="Cos",L="Cosh",W="Cumprod",M="Cumsum",U="CropAndResize",V="DenseBincount",G="DepthToSpace",z="DepthwiseConv2dNative",X="DepthwiseConv2dNativeBackpropFilter",H="DepthwiseConv2dNativeBackpropInput",j="Diag",K="Dilation2D",q="RealDiv",Y="Einsum",Z="Elu",Q="EluGrad",J="Erf",ee="Equal",et="Exp",en="ExpandDims",er="Expm1",ea="FFT",eo="Fill",ei="FlipLeftRight",es="Floor",eu="FloorDiv",el="FusedBatchNorm",eh="GatherV2",ec="GatherNd",ed="Greater",ep="GreaterEqual",ef="Identity",eg="IFFT",em="Imag",ex="IsFinite",eb="IsInf",ey="IsNan",ev="LeakyRelu",ew="Less",eC="LessEqual",eI="LinSpace",e$="Log",eE="Log1p",ek="LogicalAnd",eS="LogicalNot",eT="LogicalOr",e_="LRN",eR="LRNGrad",eN="Max",eA="Maximum",eD="MaxPool",eO="MaxPoolGrad",eB="MaxPool3D",eF="MaxPool3DGrad",eP="MaxPoolWithArgmax",eL="Mean",eW="Min",eM="Minimum",eU="MirrorPad",eV="Mod",eG="Multinomial",ez="Multiply",eX="Neg",eH="NotEqual",ej="NonMaxSuppressionV3",eK="NonMaxSuppressionV4",eq="NonMaxSuppressionV5",eY="OnesLike",eZ="OneHot",eQ="Pack",eJ="PadV2",e0="Pow",e1="Prelu",e2="Prod",e3="RaggedGather",e4="RaggedTensorToTensor",e5="Range",e6="Real",e8="Reciprocal",e7="Relu",e9="Reshape",te="ResizeNearestNeighbor",tt="ResizeNearestNeighborGrad",tn="ResizeBilinear",tr="ResizeBilinearGrad",ta="Relu6",to="Reverse",ti="Round",ts="Rsqrt",tu="ScatterNd",tl="SearchSorted",th="Select",tc="Selu",td="Slice",tp="Sin",tf="Sinh",tg="Sign",tm="Sigmoid",tx="Softplus",tb="Sqrt",ty="Sum",tv="SpaceToBatchND",tw="SplitV",tC="Softmax",tI="SparseFillEmptyRows",t$="SparseReshape",tE="SparseSegmentMean",tk="SparseSegmentSum",tS="SparseToDense",tT="SquaredDifference",t_="Square",tR="StridedSlice",tN="StringNGrams",tA="StringSplit",tD="StringToHashBucketFast",tO="Sub",tB="Tan",tF="Tanh",tP="Tile",tL="TopK",tW="Transform",tM="Transpose",tU="Unique",tV="Unpack",tG="UnsortedSegmentSum",tz="ZerosLike",tX="Step",tH="FromPixels",tj="RotateWithOffset",tK="_FusedMatMul",tq="FusedConv2D",tY="FusedDepthwiseConv2D"},6151:function(e,t,n){"use strict";n.d(t,{pI:function(){return s},tr:function(){return l},uk:function(){return u},wC:function(){return h}});var r=n(5938),a=n(4706);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let o=(0,r.R)("kernelRegistry",()=>new Map),i=(0,r.R)("gradRegistry",()=>new Map);function s(e,t){let n=`${t}_${e}`;return o.get(n)}function u(e){return i.get(e)}function l(e){let t=o.entries(),n=[];for(;;){let{done:r,value:a}=t.next();if(r)break;let[i,s]=a,[u]=i.split("_");u===e&&n.push(s)}return n}function h(e){let{kernelName:t,backendName:n}=e,r=`${n}_${t}`;o.has(r)&&a.Z(`The kernel '${t}' for backend '${n}' is already registered`),o.set(r,e)}},4706:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},c:function(){return o}});var r=n(2885);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function a(...e){(0,r.OB)().getBool("IS_TEST")||(0,r.OB)().getBool("PROD")||console.warn(...e)}function o(...e){(0,r.OB)().getBool("IS_TEST")||(0,r.OB)().getBool("PROD")||console.log(...e)}},3591:function(e,t,n){"use strict";n.d(t,{LJ:function(){return h},Q3:function(){return l},Vh:function(){return o},YB:function(){return a},kz:function(){return i},lB:function(){return u},rv:function(){return s},sY:function(){return c}});var r=n(569);/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function a(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function o(e,t,n){let r=e.length+t.length,a=[],o=0,i=0;for(let s=0;s<r;s++)-1===n.indexOf(s)?a.push(e[o++]):a.push(t[i++]);return a}function i(e,t){let n=[],r=e.length;for(let a=0;a<r;a++)-1===t.indexOf(a)&&n.push(e[a]);let o=t.map(t=>e[t]);return[n,o]}function s(e,t){let n=t.map(e=>1);return o(e,n,t)}function u(e,t,n){r.hu(a(t,n),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`)}function l(e,t){if(a(e,t))return null;let n=[];for(let r=0;r<t;++r)-1===e.indexOf(r)&&n.push(r);return e.forEach(e=>n.push(e)),n}function h(e){return e.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function c(e,t){let n=[];for(let r=t-e;r<t;++r)n.push(r);return n}},2200:function(e,t,n){"use strict";/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function r(e,t){let n=e.length,r=[];for(let a=0;a<n;a++){let o=n-1-a,i=e[o]||1,s=t[t.length-1-a]||1;s>1&&1===i&&r.unshift(o)}return r}function a(e,t){let n=[];for(let r=0;r<t.length;r++){let a=e[e.length-r-1],o=t.length-r-1,i=t[o];(null==a||1===a&&i>1)&&n.unshift(o)}return n}function o(e,t){let n=[],r=Math.max(e.length,t.length);for(let a=0;a<r;a++){let o=e[e.length-a-1];null==o&&(o=1);let i=t[t.length-a-1];if(null==i&&(i=1),1===o)n.unshift(i);else if(1===i)n.unshift(o);else if(o!==i){let s=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(s)}else n.unshift(o)}return n}n.r(t),n.d(t,{assertAndGetBroadcastShape:function(){return o},getBroadcastDims:function(){return r},getReductionAxes:function(){return a}})},2657:function(e,t,n){"use strict";n.d(t,{f:function(){return o}});var r=n(974),a=n(569);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function o(e,t="float32",n){return t=t||"float32",a.Mu(e),new r.YD(e,t,n)}},2271:function(e,t,n){"use strict";n.d(t,{p:function(){return u}});var r=n(196),a=n(9121),o=n(3740),i=n(569),s=n(2668);let u=(0,s.op)({cast_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,o._1)(e,"x","cast");if(!i.LP(t))throw Error(`Failed to cast to unknown dtype ${t}`);if("string"===t&&"string"!==n.dtype||"string"!==t&&"string"===n.dtype)throw Error("Only strings can be casted to strings");return r.BV.runKernel(a.RFZ,{x:n},{dtype:t})}})},8723:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var r=n(196),a=n(9121),o=n(3740),i=n(2668);let s=(0,i.op)({clone_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,o._1)(e,"x","clone","string_or_numeric");return r.BV.runKernel(a.iJz,{x:t})}})},1661:function(e,t,n){"use strict";n.d(t,{P:function(){return u}});var r=n(196),a=n(9121),o=n(3740),i=n(569),s=n(2668);let u=(0,s.op)({complex_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,o._1)(e,"real","complex"),s=(0,o._1)(t,"imag","complex");return i.k5(n.shape,s.shape,`real and imag shapes, ${n.shape} and ${s.shape}, must match in call to tf.complex().`),r.BV.runKernel(a.Zz9,{real:n,imag:s})}})},2582:function(e,t,n){"use strict";n.d(t,{I0:function(){return f},Ix:function(){return s},Rf:function(){return a},Xw:function(){return o},aO:function(){return l},jT:function(){return g},jw:function(){return u},m:function(){return x},pl:function(){return i},sl:function(){return m}});var r=n(569);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function a(e,t,n,r,a="NHWC",o){let i=e[3],u=[...t,i],l=m(a);return s(e,u,n,o,r,null,null,l)}function o(e,t,n,r,a,o,i="channelsLast"){let u;let[l,c]=h(t);if("channelsLast"===i)u=[l,c,e[3],e[3]];else if("channelsFirst"===i)u=[l,c,e[1],e[1]];else throw Error(`Unknown dataFormat ${i}`);return s(e,u,n,r,a,o,!1,i)}function i(e,t,n,r,a,o,i="NDHWC"){let s,l;let[h,d,p]=c(t);if("NDHWC"===i)l="channelsLast",s=[h,d,p,e[4],e[4]];else if("NCDHW"===i)l="channelsFirst",s=[h,d,p,e[1],e[1]];else throw Error(`Unknown dataFormat ${i}`);return u(e,s,n,r,a,!1,l,o)}function s(e,t,n,r,a,o,i=!1,s="channelsLast"){let u,[c,f,g,m]=[-1,-1,-1,-1];if("channelsLast"===s)[c,f,g,m]=e;else if("channelsFirst"===s)[c,m,f,g]=e;else throw Error(`Unknown dataFormat ${s}`);let[x,b,,y]=t,[v,w]=h(n),[C,I]=h(r),$=d(x,C),E=d(b,I),{padInfo:k,outHeight:S,outWidth:T}=function(e,t,n,r,a,o,i,s,u){let h,c,d;if("number"==typeof e){h={top:e,bottom:e,left:e,right:e,type:0===e?"VALID":"NUMBER"};let f=function(e,t,n,r,a){null==r&&(r=l(e,t,n));let o=e[0],i=e[1],s=p((o-t+2*r)/n+1,a),u=p((i-t+2*r)/n+1,a);return[s,u]}([t,n],o,r,e,s);c=f[0],d=f[1]}else if("same"===e){c=Math.ceil(t/r),d=Math.ceil(n/a);let g=Math.max(0,(c-1)*r+o-t),m=Math.max(0,(d-1)*a+i-n),x=Math.floor(g/2),b=Math.floor(m/2);h={top:x,bottom:g-x,left:b,right:m-b,type:"SAME"}}else if("valid"===e)h={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((t-o+1)/r),d=Math.ceil((n-i+1)/a);else if("object"==typeof e){let y="channelsLast"===u?e[1][0]:e[2][0],v="channelsLast"===u?e[1][1]:e[2][1],w="channelsLast"===u?e[2][0]:e[3][0],C="channelsLast"===u?e[2][1]:e[3][1];h={top:y,bottom:v,left:w,right:C,type:0===y&&0===v&&0===w&&0===C?"VALID":"EXPLICIT"},c=p((t-o+y+v)/r+1,s),d=p((n-i+w+C)/a+1,s)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outHeight:c,outWidth:d}}(a,f,g,v,w,$,E,o,s),_=i?y*m:y;return"channelsFirst"===s?u=[c,_,S,T]:"channelsLast"===s&&(u=[c,S,T,_]),{batchSize:c,dataFormat:s,inHeight:f,inWidth:g,inChannels:m,outHeight:S,outWidth:T,outChannels:_,padInfo:k,strideHeight:v,strideWidth:w,filterHeight:x,filterWidth:b,effectiveFilterHeight:$,effectiveFilterWidth:E,dilationHeight:C,dilationWidth:I,inShape:e,outShape:u,filterShape:t}}function u(e,t,n,r,a,o=!1,i="channelsLast",s){let u,[h,f,g,m,x]=[-1,-1,-1,-1,-1];if("channelsLast"===i)[h,f,g,m,x]=e;else if("channelsFirst"===i)[h,x,f,g,m]=e;else throw Error(`Unknown dataFormat ${i}`);let[b,y,v,,w]=t,[C,I,$]=c(n),[E,k,S]=c(r),T=d(b,E),_=d(y,k),R=d(v,S),{padInfo:N,outDepth:A,outHeight:D,outWidth:O}=function(e,t,n,r,a,o,i,s,u,h,c){let d,f,g,m;if("number"==typeof e){d={top:e,bottom:e,left:e,right:e,front:e,back:e,type:0===e?"VALID":"NUMBER"};let x=function(e,t,n,r,a,o){null==a&&(a=l(e,t,r));let i=e[0],s=e[1],u=e[2],h=p((i-t+2*a)/r+1,o),c=p((s-t+2*a)/r+1,o),d=p((u-t+2*a)/r+1,o);return[h,c,d,1]}([t,n,r,1],s,0,a,e,c);f=x[0],g=x[1],m=x[2]}else if("same"===e){f=Math.ceil(t/a),g=Math.ceil(n/o),m=Math.ceil(r/i);let b=(f-1)*a+s-t,y=(g-1)*o+u-n,v=(m-1)*i+h-r,w=Math.floor(b/2),C=Math.floor(y/2),I=Math.floor(v/2);d={top:C,bottom:y-C,left:I,right:v-I,front:w,back:b-w,type:"SAME"}}else if("valid"===e)d={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},f=Math.ceil((t-s+1)/a),g=Math.ceil((n-u+1)/o),m=Math.ceil((r-h+1)/i);else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:f,outHeight:g,outWidth:m}}(a,f,g,m,C,I,$,T,_,R,s),B=o?w*x:w;return"channelsFirst"===i?u=[h,B,A,D,O]:"channelsLast"===i&&(u=[h,A,D,O,B]),{batchSize:h,dataFormat:i,inDepth:f,inHeight:g,inWidth:m,inChannels:x,outDepth:A,outHeight:D,outWidth:O,outChannels:B,padInfo:N,strideDepth:C,strideHeight:I,strideWidth:$,filterDepth:b,filterHeight:y,filterWidth:v,effectiveFilterDepth:T,effectiveFilterHeight:_,effectiveFilterWidth:R,dilationDepth:E,dilationHeight:k,dilationWidth:S,inShape:e,outShape:u,filterShape:t}}function l(e,t,n,r=1){let a=d(t,r);return Math.floor((e[0]*(n-1)-n+a)/2)}function h(e){return"number"==typeof e?[e,e,e]:2===e.length?[e[0],e[1],1]:e}function c(e){return"number"==typeof e?[e,e,e]:e}function d(e,t){return t<=1?e:e+(e-1)*(t-1)}function p(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw Error(`Unknown roundingMode ${t}`)}}function f(e){let[t,n,r]=h(e);return 1===t&&1===n&&1===r}function g(e,t){return f(e)||f(t)}function m(e){if("NHWC"===e)return"channelsLast";if("NCHW"===e)return"channelsFirst";throw Error(`Unknown dataFormat ${e}`)}function x(e,t,n){if(null!=n){if("string"==typeof t)throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if("number"==typeof t)r.hu(r.GN(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if("object"==typeof t)t.forEach(t=>{t.forEach(t=>{r.hu(r.GN(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}},3233:function(e,t,n){"use strict";n.d(t,{p:function(){return s}});var r=n(196),a=n(9121),o=n(3740),i=n(2668);let s=(0,i.op)({elu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,o._1)(e,"x","elu","float32");return r.BV.runKernel(a.SX0,{x:t})}})},9323:function(e,t,n){"use strict";n.d(t,{Fr:function(){return f},QH:function(){return m},pf:function(){return g},uy:function(){return x}});var r=n(2200),a=n(3233),o=n(9133),i=n(4841),s=n(8151),u=n(7409),l=n(3582),h=n(4968),c=n(625),d=n(1901),p=n(5475);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function f(e,t,n){if(null==n||"linear"===n)return e;if("relu"===n)return(0,i.d)(e,(0,d.N)(t));throw Error(`Cannot compute gradient for fused activation ${n}.`)}function g(e,t){let n=t,a=r.getReductionAxes(e.shape,t.shape);return a.length>0&&(n=(0,p.S)(n,a)),(0,h.X)(n,e.shape)}function m(e,t,n,r){if("linear"===t)return e;if("relu"===t)return(0,u.U)(e);if("elu"===t)return(0,a.p)(e);if("relu6"===t)return(0,l.b)(e);if("prelu"===t)return(0,s.A)(e,n);if("leakyrelu"===t)return(0,o.h)(e,r);if("sigmoid"===t)return(0,c.X)(e);throw Error(`Unknown fused activation ${t}.`)}let x=(e,t)=>!(e>0)||"linear"===t},9133:function(e,t,n){"use strict";n.d(t,{h:function(){return s}});var r=n(196),a=n(9121),o=n(3740),i=n(2668);let s=(0,i.op)({leakyRelu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=.2){let n=(0,o._1)(e,"x","leakyRelu");return r.BV.runKernel(a.J$2,{x:n},{alpha:t})}})},4841:function(e,t,n){"use strict";n.d(t,{d:function(){return u}});var r=n(196),a=n(9121),o=n(747),i=n(3740),s=n(2668);let u=(0,s.op)({mul_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,i._1)(e,"a","mul"),s=(0,i._1)(t,"b","mul");[n,s]=(0,o.T_)(n,s);let u={a:n,b:s};return r.BV.runKernel(a.wYn,u)}})},2668:function(e,t,n){"use strict";n.d(t,{op:function(){return i},z:function(){return o}});var r=n(196),a=n(569);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let o="__op";function i(e){let t=Object.keys(e);if(1!==t.length)throw Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0],i=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n+=o;let s=(...e)=>{r.BV.startScope(n);try{let t=i(...e);return(0,a.tI)(t)&&console.error("Cannot return a Promise inside of tidy."),r.BV.endScope(t),t}catch(o){throw r.BV.endScope(null),o}};return Object.defineProperty(s,"name",{value:n,configurable:!0}),s}},1822:function(e,t,n){"use strict";n.d(t,{zvA:function(){return l.z},WnP:function(){return h},Khb:function(){return c},__u:function(){return d},IHx:function(){return f},QBD:function(){return m},$6P:function(){return x},YjB:function(){return b},NqF:function(){return y},vHJ:function(){return v},ZRM:function(){return w},VfV:function(){return C},z4N:function(){return I},fvJ:function(){return $},C80:function(){return E},wS1:function(){return _},uR5:function(){return R},zEQ:function(){return L},tgs:function(){return M},Dxk:function(){return U},JY5:function(){return V},p3b:function(){return G},E4h:function(){return W},yE8:function(){return z},anm:function(){return nL},XsQ:function(){return X},UFq:function(){return H},f3b:function(){return j.f},pju:function(){return k.p},mDi:function(){return K},iUl:function(){return Y},d9v:function(){return N.d},PYB:function(){return Z.P},zoF:function(){return A},gME:function(){return Q},Izb:function(){return J},MNy:function(){return ee},ZaL:function(){return et},PAt:function(){return er},Tek:function(){return en},bc:function(){return eo},pdZ:function(){return ei},$QV:function(){return eu},mCk:function(){return el},f9Y:function(){return eh},mew:function(){return nK},$Gn:function(){return ec},zbp:function(){return ed},ppE:function(){return ep},nTT:function(){return ef},B10:function(){return eg},Ka3:function(){return em},WmZ:function(){return ex},hiC:function(){return ey},NTj:function(){return e$},AKD:function(){return eE},rvX:function(){return nH},WYO:function(){return ek},pyx:function(){return eS.p},GRh:function(){return nj},DgJ:function(){return ew},qNN:function(){return eT},d2q:function(){return eL},Qqt:function(){return eW},dt4:function(){return eM},t$B:function(){return eU},iyy:function(){return eG},kp_:function(){return nu},hlL:function(){return q},GWj:function(){return ez},qPi:function(){return eb},imm:function(){return o},Iqj:function(){return eX},dbB:function(){return nX},pjt:function(){return eH},brS:function(){return ej},Sxn:function(){return nl},asL:function(){return eK},BHj:function(){return rF},V3u:function(){return nY},wx0:function(){return nh},xVT:function(){return eq},UWc:function(){return eY},i2d:function(){return eZ},hi7:function(){return eQ.h},d9m:function(){return eJ},zN1:function(){return e0},$r2:function(){return rP},SX3:function(){return e1},G9k:function(){return e2},cM7:function(){return e3},Krr:function(){return e4},e_t:function(){return e9},CmS:function(){return tt},l_t:function(){return tn},HvI:function(){return tr},hJK:function(){return ta},K5V:function(){return to},egP:function(){return ti},MB5:function(){return rL},eab:function(){return tu},OI3:function(){return D},Fp7:function(){return eR},_sB:function(){return tl},YQQ:function(){return th},Ip$:function(){return tc},gWQ:function(){return td},J69:function(){return tp},ry_:function(){return tm},VV$:function(){return eN},LTh:function(){return tx},VdP:function(){return tb},wQq:function(){return ty},Gi7:function(){return tv},p_:function(){return nU},dC7:function(){return O.d},rq4:function(){return tw},SJ_:function(){return tC},W76:function(){return e8},KOy:function(){return eP},Quu:function(){return tI},lfX:function(){return t$},iUs:function(){return tg},JpU:function(){return tE},op:function(){return l.op},N2O:function(){return tk},vku:function(){return tS},pNR:function(){return tT},koy:function(){return t_},t1L:function(){return tR},lGY:function(){return tN},d_R:function(){return tD},sQ3:function(){return eA},AL3:function(){return tO.A},S0v:function(){return tB.S},WVs:function(){return tF},$gW:function(){return tP},N89:function(){return tL},TN_:function(){return tW},wzB:function(){return tz},nGf:function(){return tX},ruB:function(){return tH},LGj:function(){return tj},w6H:function(){return tK},kwC:function(){return tq},M25:function(){return tY},UYe:function(){return tZ.U},btT:function(){return tQ.b},XLQ:function(){return T.X},GYS:function(){return tJ},SDf:function(){return t0},diP:function(){return t1},sx7:function(){return t2},mG2:function(){return t3},QEs:function(){return nd},NMM:function(){return t4},bp0:function(){return t5},iD$:function(){return eD.i},snQ:function(){return nG},zcT:function(){return ts},U8D:function(){return t6},U_I:function(){return t8},ODp:function(){return t9},XD2:function(){return B.X},Xxe:function(){return ne},tdS:function(){return rB},O$l:function(){return nt},R_K:function(){return nn},tPi:function(){return F},jZU:function(){return nr},SmN:function(){return na},CnO:function(){return no},p0P:function(){return ni},XAC:function(){return ns},Wvh:function(){return e7},fBT:function(){return tA},rVs:function(){return rW},ers:function(){return nz},uN7:function(){return rO},Vl2:function(){return nc},_b3:function(){return eO},h62:function(){return eB},$i:function(){return np},L9e:function(){return nf},knu:function(){return ng},Nbs:function(){return nm.N},NXj:function(){return nx},Z_8:function(){return rM},luU:function(){return te},Smz:function(){return eF.S},ORZ:function(){return nb},AEp:function(){return P},XeE:function(){return ny.X},RRF:function(){return nw},odF:function(){return nC},wOQ:function(){return nI.w},yXz:function(){return n$},Bfx:function(){return nE},xZs:function(){return nk},Gg6:function(){return eV},hg7:function(){return nS},p4s:function(){return nM},Xu6:function(){return nT},Two:function(){return n_},pUJ:function(){return nR},HHK:function(){return nN},GaM:function(){return nA},VD$:function(){return nD},arb:function(){return eC},itS:function(){return nF},lls:function(){return tf},P84:function(){return eI}});var r,a,o={};n.r(o),n.d(o,{conv2d:function(){return nJ},depthwiseConv2d:function(){return n2},matMul:function(){return n3}});var i=n(196),s=n(9121),u=n(3740),l=n(2668);let h=(0,l.op)({abs_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","abs");return"complex64"===t.dtype?i.BV.runKernel(s.yj2,{x:t}):i.BV.runKernel(s.SYM,{x:t})}}),c=(0,l.op)({acos_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","acos");return i.BV.runKernel(s.VGw,{x:t})}}),d=(0,l.op)({acosh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","acosh");return i.BV.runKernel(s.SpW,{x:t})}});var p=n(747);let f=(0,l.op)({add_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","add"),r=(0,u._1)(t,"b","add");[n,r]=(0,p.T_)(n,r);let a={a:n,b:r};return i.BV.runKernel(s.mm_,a)}});var g=n(569);let m=(0,l.op)({addN_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){g.hu(Array.isArray(e),()=>"The argument passed to tf.addN() must be a list of tensors"),g.hu(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);let t=e.map((e,t)=>(0,u._1)(e,`tensors${t}`,"addN")),n=t[0];return t.forEach(e=>{if(e.dtype!==n.dtype)throw Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(e=>{if(!g.cO(e.shape,n.shape))throw Error("All tensors passed to tf.addN() must have the same shape")}),i.BV.runKernel(s.Xze,t)}}),x=(0,l.op)({all_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=null,n=!1){let r=(0,u._1)(e,"x","all","bool");return i.BV.runKernel(s.oT6,{x:r},{axis:t,keepDims:n})}}),b=(0,l.op)({any_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=null,n=!1){let r=(0,u._1)(e,"x","any","bool");return i.BV.runKernel(s.IKK,{x:r},{axis:t,keepDims:n})}}),y=(0,l.op)({argMax_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=0){let n=(0,u._1)(e,"x","argMax");return i.BV.runKernel(s.sJF,{x:n},{axis:t})}}),v=(0,l.op)({argMin_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=0){let n=(0,u._1)(e,"x","argMin");return i.BV.runKernel(s.aJk,{x:n},{axis:t})}}),w=(0,l.op)({asin_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","asin");return i.BV.runKernel(s.M2y,{x:t})}}),C=(0,l.op)({asinh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","asinh");return i.BV.runKernel(s.qw7,{x:t})}}),I=(0,l.op)({atan_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","atan");return i.BV.runKernel(s.jMg,{x:t})}}),$=(0,l.op)({atan2_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","atan2"),r=(0,u._1)(t,"b","atan2");[n,r]=(0,p.T_)(n,r);let a={a:n,b:r};return i.BV.runKernel(s.QCc,a)}}),E=(0,l.op)({atanh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","atanh");return i.BV.runKernel(s.Oyi,{x:t})}});var k=n(2271),S=n(2582),T=n(4968);let _=(0,l.op)({avgPool_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a){let o=(0,u._1)(e,"x","avgPool","float32");g.hu(S.jT(n,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`);let l=o,h=!1;3===o.rank&&(h=!0,l=(0,T.X)(o,[1,o.shape[0],o.shape[1],o.shape[2]])),g.hu(4===l.rank,()=>`Error in avgPool: x must be rank 4 but got rank ${l.rank}.`),S.m("avgPool",r,a);let c={x:l},d=i.BV.runKernel(s.JhU,c,{filterSize:t,strides:n,pad:r,dimRoundingMode:a});return(d=(0,k.p)(d,o.dtype),h)?(0,T.X)(d,[d.shape[1],d.shape[2],d.shape[3]]):d}}),R=(0,l.op)({avgPool3d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a,o="NDHWC"){let l=(0,u._1)(e,"x","avgPool3d","float32"),h=l,c=!1;4===l.rank&&(c=!0,h=(0,T.X)(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]])),g.hu(5===h.rank,()=>`Error in avgPool3d: x must be rank 5 but got rank ${h.rank}.`),g.hu("NDHWC"===o,()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),(0,S.m)("avgPool3d",r,a);let d={x:h},p=i.BV.runKernel(s._k9,d,{filterSize:t,strides:n,pad:r,dimRoundingMode:a,dataFormat:o});return(p=(0,k.p)(p,h.dtype),c)?(0,T.X)(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}});var N=n(8723);let A=(0,l.op)({concat_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=0){(0,g.hu)(e.length>=1,()=>"Pass at least one tensor to concat");let n=(0,u.sI)(e,"tensors","concat","string_or_numeric");return("complex64"===n[0].dtype&&n.forEach(e=>{if("complex64"!==e.dtype)throw Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${e.dtype}. `)}),1===n.length)?(0,N.d)(n[0]):i.BV.runKernel(s.Eh3,n,{axis:t})}}),D=(0,l.op)({matMul_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n=!1,r=!1){let a=(0,u._1)(e,"a","matMul"),o=(0,u._1)(t,"b","matMul");[a,o]=(0,p.T_)(a,o);let l={a:a,b:o};return i.BV.runKernel(s.XLW,l,{transposeA:n,transposeB:r})}});var O=n(4841),B=n(625);let F=(0,l.op)({slice_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,u._1)(e,"x","slice","string_or_numeric");if(0===r.rank)throw Error("Slicing scalar is not possible");return i.BV.runKernel(s.p2w,{x:r},{begin:t,size:n})}}),P=(0,l.op)({tanh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","tanh","float32");return i.BV.runKernel(s.MIZ,{x:t})}}),L=(0,l.op)({basicLSTMCell_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a,o){let i=(0,u._1)(e,"forgetBias","basicLSTMCell"),s=(0,u._1)(t,"lstmKernel","basicLSTMCell"),l=(0,u._1)(n,"lstmBias","basicLSTMCell"),h=(0,u._1)(r,"data","basicLSTMCell"),c=(0,u._1)(a,"c","basicLSTMCell"),d=(0,u._1)(o,"h","basicLSTMCell"),p=A([h,d],1),g=D(p,s),m=f(g,l),x=m.shape[0],b=m.shape[1]/4,y=[x,b],v=F(m,[0,0],y),w=F(m,[0,b],y),C=F(m,[0,2*b],y),I=F(m,[0,3*b],y),$=f((0,O.d)((0,B.X)(v),P(w)),(0,O.d)(c,(0,B.X)(f(i,C)))),E=(0,O.d)(P($),(0,B.X)(I));return[$,E]}}),W=(0,l.op)({batchToSpaceND_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,u._1)(e,"x","batchToSpaceND"),a=t.reduce((e,t)=>e*t);return g.hu(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),g.hu(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),g.hu(r.shape[0]%a==0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${a}`),i.BV.runKernel(s.zws,{x:r},{blockShape:t,crops:n})}}),M=(0,l.op)({batchNorm_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a,o){let l,h;null==o&&(o=.001);let c=(0,u._1)(e,"x","batchNorm"),d=(0,u._1)(t,"mean","batchNorm"),p=(0,u._1)(n,"variance","batchNorm");null!=a&&(l=(0,u._1)(a,"scale","batchNorm")),null!=r&&(h=(0,u._1)(r,"offset","batchNorm")),g.hu(d.rank===p.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),g.hu(null==h||d.rank===h.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),g.hu(null==l||d.rank===l.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let f=0===c.rank||1===c.rank?(0,T.X)(c,[1,1,1,c.size]):2===c.rank?(0,T.X)(c,[1,1,c.shape[0],c.shape[1]]):3===c.rank?(0,T.X)(c,[1,c.shape[0],c.shape[1],c.shape[2]]):c,m={x:f,scale:l,offset:h,mean:d,variance:p},x={varianceEpsilon:o},b=i.BV.runKernel(s.sHE,m,x);return(0,T.X)(b,c.shape)}}),U=(0,l.op)({batchNorm2d_:function(e,t,n,r,a,o){let i,s;let l=(0,u._1)(e,"x","batchNorm"),h=(0,u._1)(t,"mean","batchNorm"),c=(0,u._1)(n,"variance","batchNorm");return null!=a&&(i=(0,u._1)(a,"scale","batchNorm")),null!=r&&(s=(0,u._1)(r,"offset","batchNorm")),g.hu(2===l.rank,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${l.rank}.`),g.hu(2===h.rank||1===h.rank,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${h.rank}.`),g.hu(2===c.rank||1===c.rank,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),null!=i&&g.hu(2===i.rank||1===i.rank,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${i.rank}.`),null!=s&&g.hu(2===s.rank||1===s.rank,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${s.rank}.`),M(l,h,c,s,i,o)}}),V=(0,l.op)({batchNorm3d_:function(e,t,n,r,a,o){let i,s;let l=(0,u._1)(e,"x","batchNorm"),h=(0,u._1)(t,"mean","batchNorm"),c=(0,u._1)(n,"variance","batchNorm");return null!=a&&(i=(0,u._1)(a,"scale","batchNorm")),null!=r&&(s=(0,u._1)(r,"offset","batchNorm")),g.hu(3===l.rank,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${l.rank}.`),g.hu(3===h.rank||1===h.rank,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${h.rank}.`),g.hu(3===c.rank||1===c.rank,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),null!=i&&g.hu(3===i.rank||1===i.rank,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${i.rank}.`),null!=s&&g.hu(3===s.rank||1===s.rank,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${s.rank}.`),M(l,h,c,s,i,o)}}),G=(0,l.op)({batchNorm4d_:function(e,t,n,r,a,o){let i,s;let l=(0,u._1)(e,"x","batchNorm"),h=(0,u._1)(t,"mean","batchNorm"),c=(0,u._1)(n,"variance","batchNorm");return null!=a&&(i=(0,u._1)(a,"scale","batchNorm")),null!=r&&(s=(0,u._1)(r,"offset","batchNorm")),g.hu(4===l.rank,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${l.rank}.`),g.hu(4===h.rank||1===h.rank,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${h.rank}.`),g.hu(4===c.rank||1===c.rank,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),null!=i&&g.hu(4===i.rank||1===i.rank,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${i.rank}.`),null!=s&&g.hu(4===s.rank||1===s.rank,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${s.rank}.`),M(l,h,c,s,i,o)}}),z=(0,l.op)({bincount_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,u._1)(e,"x","bincount"),a=(0,u._1)(t,"weights","bincount");return g.hu("int32"===r.dtype,()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),g.hu(n>=0,()=>`size must be non-negative, but got ${n}.`),g.hu(a.size===r.size||0===a.size,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${a.shape}.`),i.BV.runKernel(s.zvY,{x:r,weights:a},{size:n})}}),X=(0,l.op)({broadcastArgs_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"s0","broadcastArgs","int32"),r=(0,u._1)(t,"s1","broadcastArgs","int32");if(1!==n.rank)throw Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(1!==r.rank)throw Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);return i.BV.runKernel(s.eEB,{s0:n,s1:r})}}),H=(0,l.op)({broadcastTo_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"broadcastTo","x"),r=n.shape;if(t.some(e=>!(e>0)||e%1!=0))throw Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<n.rank)throw Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){let a=n.shape.slice();for(;a.length<t.length;)a.unshift(1);n=(0,T.X)(n,a)}let o=n.shape,l=Array.from(t);for(let h=t.length-1;h>=0;h--)if(o[h]===t[h])l[h]=1;else if(1!==n.shape[h])throw Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);let c=l.map((e,t)=>e>1?t:-1).filter(e=>e>=0);if(0===c.length)return(0,N.d)(n);let d={x:n};return i.BV.runKernel(s.n9L,d,{reps:l})}});var j=n(2657);let K=(0,l.op)({ceil_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","ceil","float32");return i.BV.runKernel(s.gJX,{x:t})}});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function q(e,t,n){return i.BV.runKernel(s.deh,{},{shape:e,value:t,dtype:n})}let Y=(0,l.op)({clipByValue_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,u._1)(e,"x","clipByValue");return(g.hu(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)?q(r.shape,t,r.dtype):i.BV.runKernel(s.xnO,{x:r},{clipValueMin:t,clipValueMax:n})}});var Z=n(1661);let Q=(0,l.op)({concat1d_:function(e){return A(e,0)}}),J=(0,l.op)({concat2d_:function(e,t){return A(e,t)}}),ee=(0,l.op)({concat3d_:function(e,t){return A(e,t)}}),et=(0,l.op)({concat4d_:function(e,t){return A(e,t)}}),en=(0,l.op)({conv2d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a="NHWC",o=[1,1],l){let h=(0,u._1)(e,"x","conv2d","float32"),c=(0,u._1)(t,"filter","conv2d","float32"),d=h,p=!1;3===h.rank&&(p=!0,d=(0,T.X)(h,[1,h.shape[0],h.shape[1],h.shape[2]])),g.hu(4===d.rank,()=>`Error in conv2d: input must be rank 4, but got rank ${d.rank}.`),g.hu(4===c.rank,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),S.m("conv2d",r,l);let f="NHWC"===a?d.shape[3]:d.shape[1];g.hu(f===c.shape[2],()=>`Error in conv2d: depth of input (${f}) must match input depth for filter ${c.shape[2]}.`),g.hu(S.jT(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);let m={x:d,filter:c},x=i.BV.runKernel(s.mhS,m,{strides:n,pad:r,dataFormat:a,dilations:o,dimRoundingMode:l});return p?(0,T.X)(x,[x.shape[1],x.shape[2],x.shape[3]]):x}}),er=(0,l.op)({conv1d_:function(e,t,n,r,a="NWC",o=1,i){let s=(0,u._1)(e,"x","conv1d"),l=(0,u._1)(t,"filter","conv1d"),h=s,c=!1;2===s.rank&&(c=!0,h=(0,T.X)(s,[1,s.shape[0],s.shape[1]])),g.hu(3===h.rank,()=>`Error in conv1d: input must be rank 3, but got rank ${h.rank}.`),g.hu(3===l.rank,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),S.m("conv1d",r,i),g.hu(h.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${h.shape[2]}) must match input depth for filter ${l.shape[1]}.`),g.hu(S.jT(n,o),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${o}'`),g.hu("NWC"===a,()=>`Error in conv1d: got dataFormat of ${a} but only NWC is currently supported.`);let d=(0,T.X)(l,[1,l.shape[0],l.shape[1],l.shape[2]]),p=(0,T.X)(h,[h.shape[0],1,h.shape[1],h.shape[2]]),f=en(p,d,[1,n],r,"NHWC",[1,o],i);return c?(0,T.X)(f,[f.shape[2],f.shape[3]]):(0,T.X)(f,[f.shape[0],f.shape[2],f.shape[3]])}}),ea=(0,l.op)({conv2DBackpropInput_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a,o="NHWC",u){g.hu(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let l=e,h=t,c=!1;3===t.rank&&(c=!0,h=(0,T.X)(t,[1,t.shape[0],t.shape[1],t.shape[2]]),l=[1,e[0],e[1],e[2]]),g.hu(4===l.length,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${l.length}.`),g.hu(4===h.rank,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${h.rank}`),g.hu(4===n.rank,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);let d="NHWC"===o?l[3]:l[1],p="NHWC"===o?h.shape[3]:h.shape[1];g.hu(d===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${d}) must match input depth for filter ${n.shape[2]}.`),g.hu(p===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${n.shape[3]}.`),S.m("conv2dDerInput",a,u);let f={dy:h,filter:n},m={strides:r,pad:a,dataFormat:o,dimRoundingMode:u,inputShape:l},x=i.BV.runKernel(s.wm,f,m);return c?(0,T.X)(x,[x.shape[1],x.shape[2],x.shape[3]]):x}}),eo=(0,l.op)({conv2dTranspose_:function(e,t,n,r,a,o){let i=(0,u._1)(e,"x","conv2dTranspose"),s=(0,u._1)(t,"filter","conv2dTranspose");return ea(n,i,s,r,a,"NHWC",o)}}),ei=(0,l.op)({conv3d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a="NDHWC",o=[1,1,1]){let l=(0,u._1)(e,"x","conv3d"),h=(0,u._1)(t,"filter","conv3d"),c=l,d=!1;4===l.rank&&(d=!0,c=(0,T.X)(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]])),g.hu(5===c.rank,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),g.hu(5===h.rank,()=>`Error in conv3d: filter must be rank 5, but got rank ${h.rank}.`),g.hu(c.shape[4]===h.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${h.shape[3]}.`),g.hu((0,S.jT)(n,o),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),g.hu("NDHWC"===a,()=>`Error in conv3d: got dataFormat of ${a} but only NDHWC is currently supported.`);let p={x:c,filter:h},f=i.BV.runKernel(s.x12,p,{strides:n,pad:r,dataFormat:a,dilations:o});return d?(0,T.X)(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}}),es=(0,l.op)({conv3DBackpropInput_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a){g.hu(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let o=e,u=t,l=!1;4===t.rank&&(l=!0,u=(0,T.X)(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),o=[1,e[0],e[1],e[2],e[3]]);let h=o[4],c=u.shape[4];g.hu(5===o.length,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${o.length}.`),g.hu(5===u.rank,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${u.rank}`),g.hu(5===n.rank,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),g.hu(h===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${h}) must match input depth for filter ${n.shape[3]}.`),g.hu(c===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${n.shape[4]}.`);let d={dy:u,filter:n},p={pad:a,strides:r,inputShape:o},f=i.BV.runKernel(s.ik2,d,p);return l?(0,T.X)(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}}),eu=(0,l.op)({conv3dTranspose_:function(e,t,n,r,a){let o=(0,u._1)(e,"x","conv3dTranspose"),i=(0,u._1)(t,"filter","conv3dTranspose");return es(n,o,i,r,a)}}),el=(0,l.op)({cos_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","cos","float32");return i.BV.runKernel(s.mc4,{x:t})}}),eh=(0,l.op)({cosh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","cosh","float32");return i.BV.runKernel(s.TR1,{x:t})}}),ec=(0,l.op)({cumprod_:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=0,n=!1,r=!1){let a=(0,u._1)(e,"x","cumprod");return i.BV.runKernel(s.Byc,{x:a},{axis:t,exclusive:n,reverse:r})}}),ed=(0,l.op)({cumsum_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=0,n=!1,r=!1){let a=(0,u._1)(e,"x","cumsum");return i.BV.runKernel(s.iHb,{x:a},{axis:t,exclusive:n,reverse:r})}}),ep=(0,l.op)({denseBincount_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r=!1){let a=(0,u._1)(e,"x","denseBincount"),o=(0,u._1)(t,"weights","denseBincount");return g.hu("int32"===a.dtype,()=>`Error in denseBincount: input dtype must be int32, but got ${a.dtype}`),g.hu(a.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${a.rank}.`),g.hu(n>=0,()=>`size must be non-negative, but got ${n}.`),g.hu(o.size===a.size||0===o.size,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${a.shape}, weights shape: ${o.shape}.`),i.BV.runKernel(s.QRR,{x:a,weights:o},{size:n,binaryOutput:r})}}),ef=(0,l.op)({depthToSpace_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n="NHWC"){let r=(0,u._1)(e,"x","depthToSpace","float32"),a="NHWC"===n?r.shape[1]:r.shape[2],o="NHWC"===n?r.shape[2]:r.shape[3],l="NHWC"===n?r.shape[3]:r.shape[1];return g.hu(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),g.hu(a*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${t}  for depthToSpace with input shape
    ${r.shape}`),g.hu(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t} for depthToSpace with input shape
        ${r.shape}`),g.hu(l%(t*t)==0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${l} for depthToSpace with input shape ${r.shape}`),i.BV.runKernel(s.T0n,{x:r},{blockSize:t,dataFormat:n})}}),eg=(0,l.op)({depthwiseConv2d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a="NHWC",o=[1,1],l){let h=(0,u._1)(e,"x","depthwiseConv2d","float32"),c=(0,u._1)(t,"filter","depthwiseConv2d","float32"),d=h,p=!1;3===h.rank&&(p=!0,d=(0,T.X)(h,[1,h.shape[0],h.shape[1],h.shape[2]])),g.hu(4===d.rank,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${d.rank}.`),g.hu(4===c.rank,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);let f="NHWC"===a?d.shape[3]:d.shape[1];g.hu(f===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${f}) must match the inChannels dimension in filter ${c.shape[2]}.`),S.m("depthwiseConv2d",r,l);let m={x:d,filter:c},x=i.BV.runKernel(s.cie,m,{strides:n,pad:r,dataFormat:a,dilations:o,dimRoundingMode:l});return p?(0,T.X)(x,[x.shape[1],x.shape[2],x.shape[3]]):x}}),em=(0,l.op)({diag_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","diag");return i.BV.runKernel(s.$w,{x:t})}}),ex=(0,l.op)({dilation2d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a=[1,1],o="NHWC"){let l=(0,u._1)(e,"x","dilation2d"),h=(0,u._1)(t,"filter","dilation2d");g.hu(3===l.rank||4===l.rank,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${l.rank}.`),g.hu(3===h.rank,()=>`Error in dilation2d: filter must be rank 3, but got rank ${h.rank}.`),g.hu("NHWC"===o,()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${o}`);let c=l,d=!1;3===l.rank&&(c=(0,T.X)(l,[1,l.shape[0],l.shape[1],l.shape[2]]),d=!0);let p={x:c,filter:h},f=i.BV.runKernel(s.p4S,p,{strides:n,pad:r,dilations:a});return d?(0,T.X)(f,[f.shape[1],f.shape[2],f.shape[3]]):f}}),eb=(0,l.op)({floorDiv_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","floorDiv"),r=(0,u._1)(t,"b","floorDiv");[n,r]=(0,p.T_)(n,r);let a={a:n,b:r};return i.BV.runKernel(s.jeX,a)}}),ey=(0,l.op)({div_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","div"),r=(0,u._1)(t,"b","div");if([n,r]=(0,p.T_)(n,r),"int32"===n.dtype&&"int32"===r.dtype)return eb(n,r);let a={a:n,b:r};return i.BV.runKernel(s.oHH,a,{})}});var ev=n(2200);let ew=(0,l.op)({equal_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","equal","string_or_numeric"),r=(0,u._1)(t,"b","equal","string_or_numeric");[n,r]=(0,p.T_)(n,r),(0,ev.assertAndGetBroadcastShape)(n.shape,r.shape);let a={a:n,b:r};return i.BV.runKernel(s.hdR,a)}}),eC=(0,l.op)({where_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,u._1)(t,"a","where"),a=(0,u._1)(n,"b","where"),o=(0,u._1)(e,"condition","where","bool"),l=(0,ev.assertAndGetBroadcastShape)((0,ev.assertAndGetBroadcastShape)(o.shape,r.shape),a.shape),h=H(o,l),c=H(r,l),d=H(a,l);return i.BV.runKernel(s.PhF,{condition:h,t:c,e:d})}}),eI=(0,l.op)({zerosLike_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","zerosLike");return i.BV.runKernel(s.RuY,{x:t})}}),e$=(0,l.op)({divNoNan_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","div"),r=(0,u._1)(t,"b","div");[n,r]=(0,p.T_)(n,r);let a=ey(n,r),o=eI(a),i=ew(r,o);return eC(i,o,a)}}),eE=(0,l.op)({dot_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"t1","dot"),r=(0,u._1)(t,"t2","dot");g.hu((1===n.rank||2===n.rank)&&(1===r.rank||2===r.rank),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);let a=1===n.rank?n.size:n.shape[1],o=1===r.rank?r.size:r.shape[0];if(g.hu(a===o,()=>`Error in dot: inner dimensions of inputs must match, but got ${a} and ${o}.`),1===n.rank&&1===r.rank){let i=(0,T.X)(n,[1,-1]),s=(0,T.X)(r,[-1,1]),l=D(i,s);return(0,T.X)(l,[])}if(1===n.rank&&2===r.rank){let h=(0,T.X)(n,[1,-1]),c=(0,T.X)(r,[r.shape[0],r.shape[1]]),d=D(h,c);return(0,T.X)(d,[d.size])}if(2===n.rank&&1===r.rank){let p=(0,T.X)(r,[-1,1]),f=D(n,p);return(0,T.X)(f,[f.size])}{let m=(0,T.X)(r,[r.shape[0],r.shape[1]]),x=D(n,m);return x}}}),ek=(0,l.op)({einsum_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,...t){let n=t.map((e,t)=>(0,u._1)(e,`tensors${t}`,"einsum"));return i.BV.runKernel(s.$g6,n,{equation:e})}});var eS=n(3233);let eT=(0,l.op)({erf_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","erf");g.hu("int32"===t.dtype||"float32"===t.dtype,()=>"Input dtype must be `int32` or `float32`."),"int32"===t.dtype&&(t=(0,k.p)(t,"float32"));let n={x:t};return i.BV.runKernel(s.Omj,n)}});var e_=n(3591);let eR=(0,l.op)({max_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=null,n=!1){let r=(0,u._1)(e,"x","max");return i.BV.runKernel(s.YoZ,{x:r},{reductionIndices:t,keepDims:n})}}),eN=(0,l.op)({min_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=null,n=!1){let r=(0,u._1)(e,"x","min");return i.BV.runKernel(s.c17,{x:r},{axis:t,keepDims:n})}}),eA=(0,l.op)({pow_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"base","pow"),r=(0,u._1)(t,"exp","pow");[n,r]=(0,p.T_)(n,r);let a={a:n,b:r};return i.BV.runKernel(s.pe_,a)}});var eD=n(9494);let eO=(0,l.op)({sqrt_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","sqrt","float32");return i.BV.runKernel(s.FKq,{x:t})}}),eB=(0,l.op)({square_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","square");return i.BV.runKernel("Square",{x:t},{})}});var eF=n(5475);let eP=(0,l.op)({norm_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t="euclidean",n=null,r=!1){e=(0,u._1)(e,"x","norm");let a=function e(t,n,r=null){if(0===t.rank)return h(t);if(1!==t.rank&&null===r)return e((0,T.X)(t,[-1]),n,r);if(1===t.rank||"number"==typeof r||Array.isArray(r)&&1===r.length){if(1===n)return(0,eF.S)(h(t),r);if(n===1/0)return eR(h(t),r);if(n===-1/0)return eN(h(t),r);if("euclidean"===n||2===n)return eO((0,eF.S)(eA(h(t),(0,eD.i)(2,"int32")),r));throw Error(`Error in norm: invalid ord value: ${n}`)}if(Array.isArray(r)&&2===r.length){if(1===n)return eR((0,eF.S)(h(t),r[0]),r[1]-1);if(n===1/0)return eR((0,eF.S)(h(t),r[1]),r[0]);if(n===-1/0)return eN((0,eF.S)(h(t),r[1]),r[0]);if("fro"===n||"euclidean"===n)return eO((0,eF.S)(eB(t),r));throw Error(`Error in norm: invalid ord value: ${n}`)}throw Error(`Error in norm: invalid axis: ${r}`)}(e,t,n),o=a.shape;if(r){let i=(0,g.EC)(n,e.shape);o=e_.rv(a.shape,i)}return(0,T.X)(a,o)}}),eL=(0,l.op)({euclideanNorm_:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=null,n=!1){return eP(e,"euclidean",t,n)}}),eW=(0,l.op)({exp_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","exp");return i.BV.runKernel(s.NEP,{x:t})}}),eM=(0,l.op)({expandDims_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=0){let n=(0,u._1)(e,"x","expandDims","string_or_numeric");return g.hu(t<=n.rank,()=>"Axis must be <= rank of the tensor"),i.BV.runKernel(s.YFo,{input:n},{dim:t})}}),eU=(0,l.op)({expm1_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","expm1");return i.BV.runKernel(s.Y0y,{x:t})}}),eV=(0,l.op)({tile_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"x","tile","string_or_numeric");return g.hu(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`),i.BV.runKernel(s.n9L,{x:n},{reps:t})}}),eG=(0,l.op)({eye_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r="float32"){null==t&&(t=e);let a=(0,j.f)([e,t],r),o=e<=t?e:t;for(let i=0;i<o;++i)a.set(1,i,i);let s=(0,T.X)(a.toTensor(),[e,t]);if(null==n)return s;if(1===n.length)return eV(eM(s,0),[n[0],1,1]);if(2===n.length)return eV(eM(eM(s,0),0),[n[0],n[1],1,1]);if(3===n.length)return eV(eM(eM(eM(s,0),0),0),[n[0],n[1],n[2],1,1]);throw Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}}),ez=(0,l.op)({floor_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","floor","float32");return i.BV.runKernel(s.OR,{x:t})}}),eX=(0,l.op)({gather_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n=0,r=0){let a=(0,u._1)(e,"x","gather"),o=(0,u._1)(t,"indices","gather","int32");return i.BV.runKernel(s.qi_,{x:a,indices:o},{axis:n,batchDims:r})}}),eH=(0,l.op)({greater_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","greater","string_or_numeric"),r=(0,u._1)(t,"b","greater","string_or_numeric");[n,r]=(0,p.T_)(n,r),(0,ev.assertAndGetBroadcastShape)(n.shape,r.shape);let a={a:n,b:r};return i.BV.runKernel(s.iZT,a)}}),ej=(0,l.op)({greaterEqual_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","greaterEqual","string_or_numeric"),r=(0,u._1)(t,"b","greaterEqual","string_or_numeric");[n,r]=(0,p.T_)(n,r),(0,ev.assertAndGetBroadcastShape)(n.shape,r.shape);let a={a:n,b:r};return i.BV.runKernel(s.Acj,a)}}),eK=(0,l.op)({imag_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"input","imag");return i.BV.runKernel(s.J_u,{input:t})}}),eq=(0,l.op)({isFinite_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","isFinite");return i.BV.runKernel(s.avt,{x:t})}}),eY=(0,l.op)({isInf_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","isInf");return i.BV.runKernel(s.iWB,{x:t})}}),eZ=(0,l.op)({isNaN_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","isNaN");return i.BV.runKernel(s.r7n,{x:t})}});var eQ=n(9133);let eJ=(0,l.op)({less_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","less","string_or_numeric"),r=(0,u._1)(t,"b","less","string_or_numeric");[n,r]=(0,p.T_)(n,r),(0,ev.assertAndGetBroadcastShape)(n.shape,r.shape);let a={a:n,b:r};return i.BV.runKernel(s.vtC,a)}}),e0=(0,l.op)({lessEqual_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","lessEqual","string_or_numeric"),r=(0,u._1)(t,"b","lessEqual","string_or_numeric");[n,r]=(0,p.T_)(n,r),(0,ev.assertAndGetBroadcastShape)(n.shape,r.shape);let a={a:n,b:r};return i.BV.runKernel(s.CAk,a)}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function e1(e,t,n){if(n<=0)throw Error("The number of values should be positive.");return i.BV.runKernel(s.e7N,{},{start:e,stop:t,num:n})}let e2=(0,l.op)({localResponseNormalization_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=5,n=1,r=1,a=.5){let o=(0,u._1)(e,"x","localResponseNormalization");g.hu(4===o.rank||3===o.rank,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${o.rank}.`),g.hu(g.GN(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let l=o,h=!1;3===o.rank&&(h=!0,l=(0,T.X)(o,[1,o.shape[0],o.shape[1],o.shape[2]]));let c={x:l},d=i.BV.runKernel(s.eZ0,c,{depthRadius:t,bias:n,alpha:r,beta:a});return h?(0,T.X)(d,[d.shape[1],d.shape[2],d.shape[3]]):d}}),e3=(0,l.op)({log_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","log","float32");return i.BV.runKernel(s.ZbH,{x:t})}}),e4=(0,l.op)({log1p_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","log1p");return i.BV.runKernel(s.kU,{x:t})}});var e5=n(974);function e6(e){return i.BV.customGrad(e)}let e8=(0,l.op)({neg_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","neg");return i.BV.runKernel(s.kuV,{x:t})}}),e7=(0,l.op)({softplus_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","softplus");return i.BV.runKernel(s.MRv,{x:t})}}),e9=(0,l.op)({logSigmoid_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","logSigmoid"),n=e6(e=>{let t=e8(e7(e8(e))),n=t=>{let n=(0,O.d)(t,(0,B.X)(e8(e)));return n};return{value:t,gradFunc:n}});return n(t)}}),te=(0,l.op)({sub_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","sub"),r=(0,u._1)(t,"b","sub");[n,r]=(0,p.T_)(n,r);let a={a:n,b:r};return i.BV.runKernel(s.Tr8,a)}}),tt=(0,l.op)({logSoftmax_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=-1){let n=(0,u._1)(e,"logits","logSoftmax");if(-1===t&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);let r=e6((e,n)=>{let r=eR(e,t,!0),a=te(e,r),o=te((0,k.p)(a,"float32"),e3((0,eF.S)(eW(a),t,!0)));n([o]);let i=(e,n)=>{let[r]=n,a=eW(r);return te(e,(0,O.d)((0,eF.S)(e,t,!0),a))};return{value:o,gradFunc:i}});return r(n)}}),tn=(0,l.op)({logSumExp_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=null,n=!1){let r=(0,u._1)(e,"x","logSumExp"),a=(0,g.EC)(t,r.shape),o=eR(r,a,!0),i=te(r,o),s=eW(i),l=(0,eF.S)(s,a),h=e3(l),c=f((0,T.X)(o,h.shape),h);if(n){let d=(0,e_.rv)(c.shape,a);return(0,T.X)(c,d)}return c}}),tr=(0,l.op)({logicalAnd_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","logicalAnd","bool"),r=(0,u._1)(t,"b","logicalAnd","bool");return(0,ev.assertAndGetBroadcastShape)(n.shape,r.shape),i.BV.runKernel(s.PYm,{a:n,b:r})}}),ta=(0,l.op)({logicalNot_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","logicalNot","bool");return i.BV.runKernel(s.VfG,{x:t})}}),to=(0,l.op)({logicalOr_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","logicalOr","bool"),r=(0,u._1)(t,"b","logicalOr","bool");return(0,ev.assertAndGetBroadcastShape)(n.shape,r.shape),i.BV.runKernel(s.MZg,{a:n,b:r})}}),ti=(0,l.op)({logicalXor_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","logicalXor","bool"),r=(0,u._1)(t,"b","logicalXor","bool");return(0,ev.assertAndGetBroadcastShape)(n.shape,r.shape),tr(to(e,t),ta(tr(e,t)))}}),ts=(0,l.op)({searchSorted_:function(e,t,n="left"){let r=(0,u._1)(e,"sortedSequence","searchSorted"),a=(0,u._1)(t,"values","searchSorted"),o=r.shape[r.shape.length-1],l=a.shape[a.shape.length-1],h=(0,T.X)(r,[-1,o]),c=(0,T.X)(a,[-1,l]);if(h.rank<2)throw Error("Sorted input argument must be at least 2-dimensional");if(h.shape[0]!==c.shape[0])throw Error("Leading dimension of 'sortedSequence' and 'values' must match.");if((0,g.NA)(c.shape)>=2147483648)throw Error("values tensor size must less than 2147483648");if(h.shape[1]>=2147483648)throw Error(`trailing dim_size must less than 2147483648 for int32 output type, was ${h.shape[1]}`);return i.BV.runKernel(s.nr8,{sortedSequence:h,values:c},{side:n})}});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function tu(e,t){return ts(e,t,"left")}let tl=(0,l.op)({maxPool_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a){let o=(0,u._1)(e,"x","maxPool"),l=o,h=!1;3===o.rank&&(h=!0,l=(0,T.X)(o,[1,o.shape[0],o.shape[1],o.shape[2]])),g.hu(4===l.rank,()=>`Error in maxPool: input must be rank 4 but got rank ${l.rank}.`),g.hu(S.jT(n,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`),S.m("maxPool",r,a);let c={x:l},d=i.BV.runKernel(s.mTV,c,{filterSize:t,strides:n,pad:r,dimRoundingMode:a});return h?(0,T.X)(d,[d.shape[1],d.shape[2],d.shape[3]]):d}}),th=(0,l.op)({maxPool3d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=[1,1,1],n,r,a,o="NDHWC"){let l=(0,u._1)(e,"x","maxPool3d"),h=l,c=!1;4===l.rank&&(c=!0,h=(0,T.X)(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]])),g.hu(5===h.rank,()=>`Error in maxPool3d: x must be rank 5 but got rank ${h.rank}.`),g.hu("NDHWC"===o,()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),(0,S.m)("maxPool3d",r,a);let d={x:h},p=i.BV.runKernel(s.OAf,d,{filterSize:t,strides:n,pad:r,dimRoundingMode:a,dataFormat:o});return c?(0,T.X)(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}}),tc=(0,l.op)({maxPoolWithArgmax_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a=!1){let o=(0,u._1)(e,"x","maxPoolWithArgmax"),l=i.BV.runKernel(s.vFR,{x:o},{filterSize:t,strides:n,pad:r,includeBatchInIndex:a});return{result:l[0],indexes:l[1]}}}),td=(0,l.op)({maximum_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","maximum"),r=(0,u._1)(t,"b","maximum");[n,r]=(0,p.T_)(n,r),"bool"===n.dtype&&(n=(0,k.p)(n,"int32"),r=(0,k.p)(r,"int32")),(0,ev.assertAndGetBroadcastShape)(n.shape,r.shape);let a={a:n,b:r};return i.BV.runKernel(s.BMI,a)}}),tp=(0,l.op)({mean_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=null,n=!1){let r=(0,u._1)(e,"x","mean");return i.BV.runKernel(s.q2K,{x:r},{axis:t,keepDims:n})}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function tf(e,t="float32"){if("complex64"===t){let n=tf(e,"float32"),r=tf(e,"float32");return(0,Z.P)(n,r)}let a=(0,g.wT)((0,g.NA)(e),t);return i.BV.makeTensor(a,e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function tg(e,t="float32"){if("complex64"===t){let n=tg(e,"float32"),r=tf(e,"float32");return(0,Z.P)(n,r)}let a=(0,g.p8)((0,g.NA)(e),t);return i.BV.makeTensor(a,e,t)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function tm(e,t,{indexing:n="xy"}={}){if("xy"!==n&&"ij"!==n)throw TypeError(`${n} is not a valid third argument to meshgrid`);if(void 0===e)return[];let r=(0,u._1)(e,"x","meshgrid",e instanceof e5.es?e.dtype:"float32");if(void 0===t)return[r];let a=(0,u._1)(t,"y","meshgrid",t instanceof e5.es?t.dtype:"float32"),o=(0,g.NA)(r.shape),i=(0,g.NA)(a.shape);return"xy"===n?(r=(0,T.X)(r,[1,-1]),a=(0,T.X)(a,[-1,1]),[D(tg([i,1],r.dtype),r),D(a,tg([1,o],a.dtype))]):(r=(0,T.X)(r,[-1,1]),a=(0,T.X)(a,[1,-1]),[D(r,tg([1,i],r.dtype)),D(tg([o,1],a.dtype),a)])}let tx=(0,l.op)({minimum_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","minimum"),r=(0,u._1)(t,"b","minimum");[n,r]=(0,p.T_)(n,r),"bool"===n.dtype&&(n=(0,k.p)(n,"int32"),r=(0,k.p)(r,"int32")),(0,ev.assertAndGetBroadcastShape)(n.shape,r.shape);let a={a:n,b:r};return i.BV.runKernel(s.q8u,a)}}),tb=(0,l.op)({mirrorPad_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){g.hu("reflect"===n||"symmetric"===n,()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);let r=(0,u._1)(e,"x","mirrorPad");if(0===r.rank)throw Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");g.hu(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);let a="reflect"===n?1:0;for(let o=0;o<r.rank;o++)g.hu(2===t[o].length,()=>"Invalid number of paddings. Must be length of 2 each."),g.hu(t[o][0]>=0&&t[o][0]<=r.shape[o]-a&&t[o][1]>=0&&t[o][1]<=r.shape[o]-a,()=>`Padding in dimension ${o} cannot be greater than or equal to ${r.shape[o]-a} or less than 0 for input of shape ${r.shape}`);return i.BV.runKernel(s.jQs,{x:r},{paddings:t,mode:n})}}),ty=(0,l.op)({mod_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","mod"),r=(0,u._1)(t,"b","mod");[n,r]=(0,p.T_)(n,r);let a={a:n,b:r};return i.BV.runKernel(s.Vbg,a)}}),tv=(0,l.op)({moments_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=null,n=!1){e=(0,u._1)(e,"x","moments");let r=(0,g.EC)(t,e.shape),a=tp(e,r,n),o=a.shape;n||(o=(0,e_.rv)(a.shape,r));let i=eB(te((0,k.p)(e,"float32"),(0,T.X)(a,o))),s=tp(i,r,n);return{mean:a,variance:s}}}),tw=(0,l.op)({multiRNNCell_:function(e,t,n,r){let a=(0,u._1)(t,"data","multiRNNCell"),o=(0,u.sI)(n,"c","multiRNNCell"),i=(0,u.sI)(r,"h","multiRNNCell"),s=a,l=[];for(let h=0;h<e.length;h++){let c=e[h](s,o[h],i[h]);l.push(c[0]),l.push(c[1]),s=c[1]}let d=[],p=[];for(let f=0;f<l.length;f+=2)d.push(l[f]),p.push(l[f+1]);return[d,p]}}),tC=(0,l.op)({multinomial_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r=!1){let a=(0,u._1)(e,"logits","multinomial"),o=a.size,l=a.rank;if(o<2)throw Error(`Error in multinomial: you need at least 2 outcomes, but got ${o}.`);if(l>2)throw Error(`Rank of probabilities must be 1 or 2, but is ${l}`);n=n||Math.random();let h=1===l?(0,T.X)(a,[1,-1]):a,c={numSamples:t,seed:n,normalized:r},d=i.BV.runKernel(s.NZg,{logits:h},c);return 1===l?(0,T.X)(d,[d.size]):d}}),tI=(0,l.op)({notEqual_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","notEqual","string_or_numeric"),r=(0,u._1)(t,"b","notEqual","string_or_numeric");[n,r]=(0,p.T_)(n,r),(0,ev.assertAndGetBroadcastShape)(n.shape,r.shape);let a={a:n,b:r};return i.BV.runKernel(s.yQU,a)}}),t$=(0,l.op)({oneHot_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n=1,r=0,a="int32"){if(t<2)throw Error(`Error in oneHot: depth must be >=2, but it is ${t}`);let o=(0,u._1)(e,"indices","oneHot","int32");return i.BV.runKernel(s.we_,{indices:o},{dtype:a,depth:t,onValue:n,offValue:r})}}),tE=(0,l.op)({onesLike_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","onesLike");return i.BV.runKernel(s.qWM,{x:t})}}),tk=(0,l.op)({outerProduct_:function(e,t){let n=(0,u._1)(e,"v1","outerProduct"),r=(0,u._1)(t,"v2","outerProduct");g.hu(1===n.rank&&1===r.rank,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`);let a=(0,T.X)(n,[-1,1]),o=(0,T.X)(r,[1,-1]);return D(a,o)}}),tS=(0,l.op)({pad_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n=0){let r=(0,u._1)(e,"x","pad");if(0===r.rank)throw Error("pad(scalar) is not defined. Pass non-scalar to pad");return i.BV.runKernel(s.lyA,{x:r},{paddings:t,constantValue:n})}}),tT=(0,l.op)({pad1d_:function(e,t,n=0){return(0,g.hu)(2===t.length,()=>"Invalid number of paddings. Must be length of 2."),tS(e,[t],n)}}),t_=(0,l.op)({pad2d_:function(e,t,n=0){return(0,g.hu)(2===t.length&&2===t[0].length&&2===t[1].length,()=>"Invalid number of paddings. Must be length of 2 each."),tS(e,t,n)}}),tR=(0,l.op)({pad3d_:function(e,t,n=0){return(0,g.hu)(3===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length,()=>"Invalid number of paddings. Must be length of 2 each."),tS(e,t,n)}}),tN=(0,l.op)({pad4d_:function(e,t,n=0){return(0,g.hu)(4===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length&&2===t[3].length,()=>"Invalid number of paddings. Must be length of 2 each."),tS(e,t,n)}}),tA=(0,l.op)({spaceToBatchND_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,u._1)(e,"x","spaceToBatchND");return g.hu(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),g.hu(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),g.hu(r.shape.reduce((e,r,a)=>a>0&&a<=t.length?e&&(r+n[a-1][0]+n[a-1][1])%t[a-1]==0:e,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`),i.BV.runKernel(s.TQc,{x:r},{blockShape:t,paddings:n})}}),tD=(0,l.op)({pool_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a,o,i){let s;null==a&&(a=[1,1]),null==o&&(o=1),0===r&&(r="valid");let l=(0,u._1)(e,"x","maxPool"),h=l,c=!1;3===l.rank&&(c=!0,h=(0,T.X)(l,[1,l.shape[0],l.shape[1],l.shape[2]])),g.hu(S.jT(o,a),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${o} and dilations '${a}'`);let d=S.Xw(h.shape,t,o,a,r),p=[d.dilationHeight,d.dilationWidth];s="same"===r?function(e,t){let n=e.map((e,n)=>e+(e-1)*(t[n]-1)),r=n.map(e=>e-1),a=r.map(e=>Math.floor(e/2)),o=r.map((e,t)=>e-a[t]);return r.map((e,t)=>[a[t],o[t]])}([d.filterHeight,d.filterWidth],p):[[0,0],[0,0]];let f=1===p[0]&&1===p[1],[m,x]=function(e,t,n){let r=n.map(e=>e[0]),a=n.map(e=>e[1]),o=e.concat(r,a),i=t.map((e,t)=>(e-o[t]%e)%e),s=a.map((e,t)=>e+i[t]),u=t.map((e,t)=>[r[t],s[t]]),l=t.map((e,t)=>[0,i[t]]);return[u,l]}([d.inHeight,d.inWidth],p,s),b=f?r:"valid",y=f?h:tA(h,p,m),v="avg"===n?()=>_(y,t,o,b,i):()=>tl(y,t,o,b,i),w=v(),C=f?w:W(w,p,x);return c?(0,T.X)(C,[C.shape[1],C.shape[2],C.shape[3]]):C}});var tO=n(8151),tB=n(9798);let tF=(0,l.op)({prod_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=null,n=!1){let r=(0,u._1)(e,"x","prod");"bool"===r.dtype&&(r=(0,k.p)(r,"int32"));let a={x:r};return i.BV.runKernel(s.DlI,a,{axis:t,keepDims:n})}}),tP=(0,l.op)({raggedGather_:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r){let a=e.map((e,t)=>(0,u._1)(e,`tensors${t}`,"raggedGather","int32")),o=(0,u._1)(t,"paramsDenseValues","raggedGather"),l=(0,u._1)(n,"indices","raggedGather","int32"),h=i.BV.runKernel(s.dDz,{paramsNestedSplits:a,paramsDenseValues:o,indices:l},{outputRaggedRank:r});return{outputNestedSplits:h.slice(0,h.length-1),outputDenseValues:h[h.length-1]}}}),tL=(0,l.op)({raggedTensorToTensor_:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a){let o=(0,u._1)(e,"shape","raggedTensorToTensor","int32"),l=(0,u._1)(t,"values","raggedTensorToTensor"),h=(0,u._1)(n,"defaultValue","raggedTensorToTensor",l.dtype),c=r.map((e,t)=>(0,u._1)(e,`tensors${t}`,"raggedTensorToTensor","int32"));return i.BV.runKernel(s.BiW,{shape:o,values:l,defaultValue:h,rowPartitionTensors:c},{rowPartitionTypes:a})}}),tW=(0,l.op)({rand_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,g.NA)(e),a=null;if(null==n||"float32"===n)a=new Float32Array(r);else if("int32"===n)a=new Int32Array(r);else if("bool"===n)a=new Uint8Array(r);else throw Error(`Unknown data type ${n}`);for(let o=0;o<r;o++)a[o]=t();return i.BV.makeTensor(a,e,n)}});var tM=n(6377);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class tU{constructor(e,t,n,r,a){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);let o=a||Math.random();this.random=tM.alea(o.toString())}nextValue(){let e,t;if(!isNaN(this.nextVal)){let n=this.nextVal;return this.nextVal=NaN,n}let r=!1;for(;!r;){let a,o,i;do i=(a=2*this.random()-1)*a+(o=2*this.random()-1)*o;while(i>=1||0===i);let s=Math.sqrt(-2*Math.log(i)/i);e=this.mean+this.stdDev*a*s,t=this.mean+this.stdDev*o*s,(!this.truncated||this.isValidTruncated(e))&&(r=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return null==this.dtype||"float32"===this.dtype?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class tV{constructor(e,t,n,r){this.alpha=e,this.beta=1/t,this.dtype=n;let a=r||Math.random();this.randu=tM.alea(a.toString()),this.randn=new tU(0,1,n,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,t,n,r,a,o;for(;;){do r=this.randn.nextValue(),o=1+this.c*r;while(o<=0);if(o*=o*o,t=1-.331*(e=r*r)*e,n=.5*e+this.d*(1-o+Math.log(o)),(a=this.randu())<t||Math.log(a)<n)break}return o=1/this.beta*this.d*o,this.alpha<1&&(o*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(o)}convertValue(e){return"float32"===this.dtype?e:Math.round(e)}}class tG{constructor(e=0,t=1,n,r){if(this.canReturnFloat=()=>null==this.dtype||"float32"===this.dtype,this.min=e,this.range=t-e,this.dtype=n,null==r&&(r=Math.random()),"number"==typeof r&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=tM.alea(r)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}let tz=(0,l.op)({randomGamma_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n=1,r="float32",a){if(null==n&&(n=1),null==r&&(r="float32"),"float32"!==r&&"int32"!==r)throw Error(`Unsupported data type ${r}`);let o=new tV(t,n,r,a),i=(0,j.f)(e,r);for(let s=0;s<i.values.length;s++)i.values[s]=o.nextValue();return i.toTensor()}}),tX=(0,l.op)({randomNormal_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=0,n=1,r,a){if(null!=r&&"bool"===r)throw Error(`Unsupported data type ${r}`);let o=new tU(t,n,r,!1,a),i=(0,j.f)(e,r);for(let s=0;s<i.values.length;s++)i.values[s]=o.nextValue();return i.toTensor()}}),tH=(0,l.op)({randomStandardNormal_:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){if(null!=t&&"bool"===t)throw Error(`Unsupported data type ${t}`);return tX(e,0,1,t,n)}}),tj=(0,l.op)({randomUniform_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=0,n=1,r="float32",a){let o=(0,j.f)(e,r),i=new tG(t,n,null,a);for(let s=0;s<o.values.length;s++)o.values[s]=i.nextValue();return o.toTensor()}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function tK(e,t,n=1,r="float32"){if(0===n)throw Error("Cannot have a step of zero");return i.BV.runKernel(s.e6w,{},{start:e,stop:t,step:n,dtype:r})}let tq=(0,l.op)({real_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"input","real");return i.BV.runKernel(s.xJR,{input:t})}}),tY=(0,l.op)({reciprocal_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","reciprocal");return i.BV.runKernel(s.$HU,{x:t})}});var tZ=n(7409),tQ=n(3582);let tJ=(0,l.op)({reverse_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"x","reverse");return i.BV.runKernel(s.mKl,{x:n},{dims:t})}}),t0=(0,l.op)({reverse1d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","reverse");return g.hu(1===t.rank,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),tJ(t,0)}}),t1=(0,l.op)({reverse2d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"x","reverse");return g.hu(2===n.rank,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),tJ(n,t)}}),t2=(0,l.op)({reverse3d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"x","reverse");return g.hu(3===n.rank,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),tJ(n,t)}}),t3=(0,l.op)({reverse4d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"x","reverse");return g.hu(4===n.rank,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),tJ(n,t)}}),t4=(0,l.op)({round_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","round");return i.BV.runKernel(s.e07,{x:t})}}),t5=(0,l.op)({rsqrt_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","rsqrt","float32");return i.BV.runKernel(s.bV0,{x:t})}}),t6=(0,l.op)({selu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","selu");return i.BV.runKernel(s.oFR,{x:t})}}),t8=(0,l.op)({separableConv2d_:function(e,t,n,r,a,o=[1,1],i="NHWC"){let s=(0,u._1)(e,"x","separableConv2d"),l=(0,u._1)(t,"depthwiseFilter","separableConv2d"),h=(0,u._1)(n,"pointwiseFilter","separableConv2d"),c=s,d=!1;if(3===s.rank&&(d=!0,c=(0,T.X)(s,[1,s.shape[0],s.shape[1],s.shape[2]])),"NCHW"===i)throw Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");g.hu(4===c.rank,()=>`Error in separableConv2d: input must be rank 4, but got rank ${c.rank}.`),g.hu(4===l.rank,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),g.hu(4===h.rank,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),g.hu(1===h.shape[0],()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${h.shape[0]}.`),g.hu(1===h.shape[1],()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${h.shape[1]}.`);let p=l.shape[2],f=l.shape[3];g.hu(h.shape[2]===p*f,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${p*f}, but got ${h.shape[2]}.`);let m=eg(c,l,r,a,i,o),x=en(m,h,1,"valid",i);return d?(0,T.X)(x,[x.shape[1],x.shape[2],x.shape[3]]):x}});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ async function t7(e,t){let n=(0,u._1)(e,"x","setdiff1d"),r=(0,u._1)(t,"y","setdiff1d");g.hu(n.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`),g.hu(1===n.rank,()=>`x should be 1D tensor, but got x (${n.shape}).`),g.hu(1===r.rank,()=>`y should be 1D tensor, but got y (${r.shape}).`);let a=await n.data(),o=await r.data(),i=new Set(o),s=0;for(let l=0;l<a.length;l++)!i.has(a[l])&&s++;let h=new e5.YD([s],n.dtype),c=new e5.YD([s],"int32");for(let d=0,p=0;d<a.length;d++)!i.has(a[d])&&(h.values[p]=a[d],c.values[p]=d,p++);return[h.toTensor(),c.toTensor()]}let t9=t7,ne=(0,l.op)({sign_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","sign");return i.BV.runKernel(s.i5y,{x:t})}}),nt=(0,l.op)({sin_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","sin","float32");return i.BV.runKernel(s.RQH,{x:t})}}),nn=(0,l.op)({sinh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","sinh");return i.BV.runKernel(s.wYB,{x:t})}}),nr=(0,l.op)({slice1d_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,u._1)(e,"x","slice1d");return g.hu(1===r.rank,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),F(r,[t],[n])}}),na=(0,l.op)({slice2d_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,u._1)(e,"x","slice2d");return g.hu(2===r.rank,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),F(r,t,n)}}),no=(0,l.op)({slice3d_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,u._1)(e,"x","slice3d");return g.hu(3===r.rank,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),F(r,t,n)}}),ni=(0,l.op)({slice4d_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,u._1)(e,"x","slice4d");return g.hu(4===r.rank,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),F(r,t,n)}}),ns=(0,l.op)({softmax_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=-1){let n=(0,u._1)(e,"logits","softmax","float32");if(-1===t&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);let r={dim:t};return i.BV.runKernel(s.Gcp,{logits:n},r)}}),nu=(0,l.op)({fft_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){return(0,g.hu)("complex64"===e.dtype,()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`),i.BV.runKernel(s.vwp,{input:e})}}),nl=(0,l.op)({ifft_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){return(0,g.hu)("complex64"===e.dtype,()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`),i.BV.runKernel(s.Qg5,{input:e})}}),nh=(0,l.op)({irfft_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t;let n=e.shape[e.shape.length-1],r=e.size/n;if(n<=2){let a=(0,T.X)(e,[r,n]);t=nl(a)}else{let o=[r,2*(n-1)],i=(0,T.X)(tq(e),[r,n]),s=(0,T.X)(eK(e),[r,n]),u=tJ(F(i,[0,1],[r,n-2]),1),l=(0,O.d)(tJ(F(s,[0,1],[r,n-2]),1),(0,eD.i)(-1)),h=A([i,u],1),c=A([s,l],1),d=(0,T.X)((0,Z.P)(h,c),[o[0],o[1]]);t=nl(d)}if(t=tq(t),3===e.rank&&0!==e.shape[0]){let p=t,f=e.shape[0];t=(0,T.X)(t,[f,t.shape[0]/f,t.shape[1]]),p.dispose()}return t}}),nc=(0,l.op)({split_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n=0){let r=(0,u._1)(e,"x","split");return i.BV.runKernel(s.L8s,{x:r},{numOrSizeSplits:t,axis:n})}}),nd=(0,l.op)({rfft_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n;(0,g.hu)("float32"===e.dtype,()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let r=e.shape[e.shape.length-1],a=e.size/r;if(null!=t&&t<r){let o=e.shape.map(e=>0),i=e.shape.map(e=>e);i[e.shape.length-1]=t,n=F(e,o,i),r=t}else if(null!=t&&t>r){let s=e.shape.map(e=>e);s[e.shape.length-1]=t-r,n=A([e,tf(s)],e.shape.length-1),r=t}else n=e;let u=eI(n),l=(0,T.X)((0,Z.P)(n,u),[a,r]),h=nu(l),c=Math.floor(r/2)+1,d=tq(h),p=eK(h),f=nc(d,[c,r-c],d.shape.length-1),m=nc(p,[c,r-c],p.shape.length-1),x=n.shape.slice();return x[n.shape.length-1]=c,(0,T.X)((0,Z.P)(f[0],m[0]),x)}}),np=(0,l.op)({squaredDifference_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"a","squaredDifference"),r=(0,u._1)(t,"b","squaredDifference");[n,r]=(0,p.T_)(n,r),(0,ev.assertAndGetBroadcastShape)(n.shape,r.shape);let a={a:n,b:r};return i.BV.runKernel(s._tC,a,{})}}),nf=(0,l.op)({squeeze_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"x","squeeze","string_or_numeric");return(0,T.X)(n,(0,g.bp)(n.shape,t).newShape)}}),ng=(0,l.op)({stack_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=0){let n=(0,u.sI)(e,"tensors","stack","string_or_numeric");return g.hu(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&g.hu(t<=n[0].rank,()=>"Axis must be <= rank of the tensor"),i.BV.runKernel(s.QiL,n,{axis:t})}});var nm=n(1901);let nx=(0,l.op)({stridedSlice_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a=0,o=0,l=0,h=0,c=0){let d=(0,u._1)(e,"x","stridedSlice","string_or_numeric");return i.BV.runKernel(s.jQk,{x:d},{begin:t,end:n,strides:r,beginMask:a,endMask:o,ellipsisMask:l,newAxisMask:h,shrinkAxisMask:c})}}),nb=(0,l.op)({tan_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"x","tan","float32");return i.BV.runKernel(s.sEM,{x:t})}});var ny=n(701),nv=n(7852);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function nw(e,t){(0,g.Cq)(e);let n=(0,u.C)(e,t);if(1!==n.length)throw Error("tensor1d() requires values to be a flat/TypedArray");return(0,nv.H)(e,null,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function nC(e,t,n){if((0,g.Cq)(e),null!=t&&2!==t.length)throw Error("tensor2d() requires shape to have two numbers");let r=(0,u.C)(e,n);if(2!==r.length&&1!==r.length)throw Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==t)throw Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return(0,nv.H)(e,t,r,n)}var nI=n(9906);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function n$(e,t,n){if((0,g.Cq)(e),null!=t&&4!==t.length)throw Error("tensor4d() requires shape to have four numbers");let r=(0,u.C)(e,n);if(4!==r.length&&1!==r.length)throw Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==t)throw Error("tensor4d() requires shape to be provided when `values` are a flat array");return(0,nv.H)(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function nE(e,t,n){if((0,g.Cq)(e),null!=t&&5!==t.length)throw Error("tensor5d() requires shape to have five numbers");let r=(0,u.C)(e,n);if(5!==r.length&&1!==r.length)throw Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==t)throw Error("tensor5d() requires shape to be provided when `values` are a flat array");return(0,nv.H)(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function nk(e,t,n){if((0,g.Cq)(e),null!=t&&6!==t.length)throw Error("tensor6d() requires shape to have six numbers");let r=(0,u.C)(e,n);if(6!==r.length&&1!==r.length)throw Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===r.length&&null==t)throw Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||r,(0,nv.H)(e,t,r,n)}let nS=(0,l.op)({topk_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=1,n=!0){let r=(0,u._1)(e,"x","topk");if(0===r.rank)throw Error("topk() expects the input to be of rank 1 or higher");let a=r.shape[r.shape.length-1];if(t<0)throw Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>a)throw Error(`'k' passed to topk() must be <= the last dimension (${a}) but got ${t}`);let[o,l]=i.BV.runKernel(s.cWu,{x:r},{k:t,sorted:n});return{values:o,indices:l}}}),nT=(0,l.op)({truncatedNormal_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=0,n=1,r,a){if(null!=r&&"bool"===r)throw Error("Unsupported data type $ { dtype }");let o=new tU(t,n,r,!0,a),i=(0,j.f)(e,r);for(let s=0;s<i.values.length;s++)i.values[s]=o.nextValue();return i.toTensor()}}),n_=(0,l.op)({unique_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=0){let n=(0,u._1)(e,"x","unique","string_or_numeric");(0,g.hu)(n.rank>0,()=>"The input tensor must be at least 1D");let[r,a]=i.BV.runKernel(s.kpP,{x:n},{axis:t});return{values:r,indices:a}}}),nR=(0,l.op)({unsortedSegmentSum_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,u._1)(e,"x","unsortedSegmentSum"),a=(0,u._1)(t,"segmentIds","unsortedSegmentSum","int32");return(0,g.hu)((0,g.GN)(n),()=>"numSegments must be of dtype int"),i.BV.runKernel(s.Qvg,{x:r,segmentIds:a},{numSegments:n})}}),nN=(0,l.op)({unstack_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=0){let n=(0,u._1)(e,"x","unstack","string_or_numeric");return g.hu(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`),i.BV.runKernel(s.ToN,{value:n},{axis:t})}});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function nA(e,t){return ts(e,t,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function nD(e,t=!0,n,r){return i.BV.makeVariable(e,t,n,r)}var nO=n(8333);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ async function nB(e){let t=(0,u._1)(e,"condition","whereAsync","bool"),n=await t.data(),r=(0,nO.Z)(t.shape,n);return e!==t&&t.dispose(),r}let nF=nB;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ async function nP(e,t,n){let r=(0,u._1)(e,"tensor","boolMask"),a=(0,u._1)(t,"mask","boolMask","bool"),o=null==n?0:n,i=a.rank,s=r.shape;g.hu(i>0,()=>"mask cannot be scalar"),g.k5(s.slice(o,o+i),a.shape,"mask's shape must match the first K dimensions of tensor's shape,");let l=1;for(let h=o;h<o+i;h++)l*=s[h];let c=s.slice(0,o).concat([l],s.slice(o+i)),d=(0,T.X)(r,c),p=(0,T.X)(a,[-1]),f=await nF(p),m=nf(f,[1]),x=eX(d,m,o);return e!==r&&r.dispose(),t!==a&&a.dispose(),m.dispose(),d.dispose(),p.dispose(),f.dispose(),x}let nL=nP;var nW=n(4368);let nM=(0,l.op)({transpose_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,u._1)(e,"x","transpose");if(null==t&&(t=r.shape.map((e,t)=>t).reverse()),g.hu(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(e=>{g.hu(e>=0&&e<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();let a={perm:t};return"complex64"===r.dtype?(0,nW.lu)(()=>{let e=tq(r),t=eK(r);return e=i.BV.runKernel(s.G3Y,{x:e},a),t=i.BV.runKernel(s.G3Y,{x:t},a),n&&(t=e8(t)),(0,Z.P)(e,t)}):i.BV.runKernel(s.G3Y,{x:r},a)}}),nU=(0,l.op)({movingAverage_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a=!0){let o=(0,u._1)(e,"v","movingAverage"),i=(0,u._1)(t,"x","movingAverage"),s=(0,u._1)(n,"decay","movingAverage");(0,p.xg)(o,i),g.hu(g.cO(o.shape,i.shape),()=>"Shape mismatch in v and x");let l=(0,eD.i)(1),h=te(l,s),c=(0,O.d)(te(i,o),h);if(a){g.hu(null!=r,()=>"When using zeroDebias: true, step is required.");let d=(0,u._1)(r,"step","movingAverage");c=ey(c,te(l,eA(s,d)))}return f(o,c)}});var nV=n(3028);let nG=(0,l.op)({scatterND_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,u._1)(e,"indices","scatterND","int32"),a=(0,u._1)(t,"updates","scatterND");return nV.b0(a,r,n),i.BV.runKernel(s.xQA,{indices:r,updates:a},{shape:n})}}),nz=(0,l.op)({sparseToDense_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r=0){let a=(0,u._1)(e,"sparseIndices","sparseToDense","int32"),o=(0,u._1)(t,"sparseValues","sparseToDense","string_or_numeric"),l=(0,u._1)(r,"defaultValue","sparseToDense",o.dtype);return!function(e,t,n,r){if("int32"!==e.dtype)throw Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);let a=e.rank>0?e.shape[0]:1,o=e.rank>1?e.shape[1]:1;if(n.length!==o)throw Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${o}.`);let i=t.size;if(!(0===t.rank||1===t.rank&&i===a))throw Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${a}]`);if(t.dtype!==r.dtype)throw Error("sparseValues.dtype must match defaultValues.dtype")}(a,o,n,l),i.BV.runKernel(s.D2d,{sparseIndices:a,sparseValues:o,defaultValue:l},{outputShape:n})}}),nX=(0,l.op)({gatherND_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(t,"indices","gatherND","int32"),r=(0,u._1)(e,"x","gatherND","string_or_numeric");return i.BV.runKernel(s.q1x,{params:r,indices:n})}}),nH=(0,l.op)({dropout_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r){let a=(0,u._1)(e,"x","dropout");if(g.hu("float32"===a.dtype,()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${a.dtype} tensor instead.`),g.hu(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),0===t)return e instanceof e5.es?a.clone():a;let o=/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){if(null==t)return e.shape.slice();if(g.cO(e.shape,t))return t;if(e.shape.length===t.length){let n=[];for(let r=0;r<e.shape.length;r++)null==t[r]&&null!=e.shape[r]?n.push(e.shape[r]):n.push(t[r]);return n}return t}(a,n),i=1-t,s=ey(ez(f(tj(o,0,1,"float32",r),i)),i);return(0,O.d)(a,s)}});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function nj(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function nK(e,t,n){let r=1-e%2,a=new Float32Array(e);for(let o=0;o<e;++o){let i=2*Math.PI*o/(e+r-1);a[o]=t-n*Math.cos(i)}return nw(a,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ async function nq(e,t,n=1){let r=(0,u._1)(e,"predictions","inTopK"),a=(0,u._1)(t,"targets","inTopK");(0,g.hu)(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),(0,g.hu)(r.rank-1===a.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${a.rank}`),(0,g.k5)(r.shape.slice(0,r.shape.length-1),a.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");let o=r.shape[r.shape.length-1];(0,g.hu)(n>0&&n<=o,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${o}), but got ${n}`);let i=await r.data(),s=await a.data(),[l,h]=[i.length/o,o],c=(0,g.WP)("bool",l);for(let d=0;d<l;d++){let p=d*h,f=i.subarray(p,p+h),m=[];for(let x=0;x<f.length;x++)m.push({value:f[x],index:x});m.sort((e,t)=>t.value-e.value),c[d]=0;for(let b=0;b<n;b++)if(m[b].index===s[d]){c[d]=1;break}}return e!==r&&r.dispose(),t!==a&&a.dispose(),(0,ny.X)(c,a.shape,"bool")}let nY=nq,nZ=(0,l.op)({conv2DBackpropFilter_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a,o="NHWC",u){let l=e;3===e.rank&&(l=(0,T.X)(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let h=t;3===h.rank&&(h=(0,T.X)(t,[1,t.shape[0],t.shape[1],t.shape[2]])),g.hu(4===l.rank,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${l.shape}.`),g.hu(4===h.rank,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${h.shape}.`),g.hu(4===n.length,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);let c="NHWC"===o?l.shape[3]:l.shape[1],d="NHWC"===o?h.shape[3]:h.shape[1];g.hu(c===n[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${n[2]}.`),g.hu(d===n[3],()=>`Error in conv2dDerFilter: depth of dy (${d}) must match output depth for filter (${n[3]}).`),S.m("conv2dDerFilter",a,u);let p={x:l,dy:h};return i.BV.runKernel(s.wUP,p,{strides:r,pad:a,dataFormat:o,dimRoundingMode:u,filterShape:n})}});var nQ=n(9323);let nJ=(0,l.op)({fusedConv2d_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function({x:e,filter:t,strides:n,pad:r,dataFormat:a="NHWC",dilations:o=[1,1],dimRoundingMode:l,bias:h,activation:c="linear",preluActivationWeights:d,leakyreluAlpha:m}){let x,b;if(c=c||"linear",!1===(0,nQ.uy)(i.BV.state.gradientDepth,c)){g.hu("NHWC"===a,()=>`Error in fused conv2d: got dataFormat of ${a} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let y=en(e,t,n,r,a,o,l);return null!=h&&(y=f(y,h)),(0,nQ.QH)(y,c,d,m)}let v=(0,u._1)(e,"x","conv2d","float32"),w=(0,u._1)(t,"filter","conv2d","float32"),C=v,I=!1;3===v.rank&&(I=!0,C=(0,T.X)(v,[1,v.shape[0],v.shape[1],v.shape[2]])),g.hu(4===C.rank,()=>`Error in fused conv2d: input must be rank 4, but got rank ${C.rank}.`),g.hu(4===w.rank,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${w.rank}.`),S.m("fused conv2d",r,l);let $="NHWC"===a?C.shape[3]:C.shape[1];g.hu(w.shape[2]===$,()=>`Error in conv2d: depth of input (${$}) must match input depth for filter ${w.shape[2]}.`),g.hu(S.jT(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);let E=S.Ix(C.shape,w.shape,n,o,r,l);if(null!=h&&(x=(0,u._1)(h,"bias","fused conv2d"),[x]=(0,p.T_)(x,v),"NHWC"===a?ev.assertAndGetBroadcastShape(E.outShape,x.shape):(g.hu(x.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${x.shape.length}.`),g.hu(0===x.shape.length||x.shape[0]===E.outChannels||1===x.shape[0],()=>`Error in fused conv2d: bias shape (${x.shape}) is not compatible with the number of output channels (${E.outChannels})`))),null!=d){let k=d.shape;if(g.hu(k.length<=1||3===k.length,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${k.length}.`),1===k.length)g.hu(1===k[0]||k[0]===E.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${k}) is not compatible with the number of output channels (${E.outChannels}).`);else if(3===k.length)try{ev.assertAndGetBroadcastShape(k,E.outShape)}catch(R){let _=`Error in fused conv2d: PReLU activation weights (${k}) is not compatible with the output shape of the conv2d (${E.outShape}).`;throw Error(_)}b=(0,u._1)(d,"prelu weights","fused conv2d")}let N=(e,t)=>{g.hu("NHWC"===a,()=>`Error in gradient of fused conv2D: got dataFormat of ${a} but only NHWC is currently supported.`);let[i,s,u,l]=t,h=(0,nQ.Fr)(e,u,c);g.hu(S.I0(o),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`);let d=ea(s.shape,h,i,n,r),p=nZ(s,h,i.shape,n,r),f=[d,p];if(null!=l){let m=(0,nQ.pf)(l,h);f.push(m)}return f},A={x:C,filter:w,bias:x,preluActivationWeights:b},D={strides:n,pad:r,dataFormat:a,dilations:o,dimRoundingMode:l,activation:c,leakyreluAlpha:m};if(null==h){let O=e6((e,t,n)=>{let r=i.BV.runKernel(s._V0,A,D);return n([t,e,r]),I&&(r=(0,T.X)(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:N}});return O(C,w)}{let B=e6((e,t,n,r)=>{let a=i.BV.runKernel(s._V0,A,D);return r([t,e,a,n]),I&&(a=(0,T.X)(a,[a.shape[1],a.shape[2],a.shape[3]])),{value:a,gradFunc:N}});return B(C,w,x)}}}),n0=(0,l.op)({depthwiseConv2dNativeBackpropFilter_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a,o=[1,1],u){let l=e;3===e.rank&&(l=(0,T.X)(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let h=t;3===h.rank&&(h=(0,T.X)(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let c={x:l,dy:h};return i.BV.runKernel(s.sL$,c,{strides:r,pad:a,dimRoundingMode:u,dilations:o,filterShape:n})}}),n1=(0,l.op)({depthwiseConv2dNativeBackpropInput_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a,o=[1,1],u){let l=t,h=!1;3===t.rank&&(h=!0,l=(0,T.X)(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let c={dy:l,filter:n},d=i.BV.runKernel(s.y7R,c,{strides:r,pad:a,dimRoundingMode:u,dilations:o,inputShape:e});return h?(0,T.X)(d,[d.shape[1],d.shape[2],d.shape[3]]):d}}),n2=(0,l.op)({fusedDepthwiseConv2d_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function({x:e,filter:t,strides:n,pad:r,dataFormat:a="NHWC",dilations:o=[1,1],dimRoundingMode:l,bias:h,activation:c="linear",preluActivationWeights:d,leakyreluAlpha:m}){let x,b;if(!1===(0,nQ.uy)(i.BV.state.gradientDepth,c)){let y=eg(e,t,n,r,a,o,l);return null!=h&&(y=f(y,h)),(0,nQ.QH)(y,c,d,m)}let v=(0,u._1)(e,"x","depthwiseConv2d","float32"),w=(0,u._1)(t,"filter","depthwiseConv2d","float32"),C=v,I=!1;3===v.rank&&(I=!0,C=(0,T.X)(v,[1,v.shape[0],v.shape[1],v.shape[2]])),g.hu(4===C.rank,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${C.rank}.`),g.hu(4===w.rank,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${w.rank}.`),g.hu(C.shape[3]===w.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${C.shape[3]}) must match the inChannels dimension in filter ${w.shape[2]}.`),null==o&&(o=[1,1]),g.hu(S.jT(n,o),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),S.m("fused depthwiseConv2d",r,l);let $=S.Ix(C.shape,w.shape,n,o,r,l,!0);null!=h&&(x=(0,u._1)(h,"bias","fused conv2d"),[x]=(0,p.T_)(x,v),ev.assertAndGetBroadcastShape($.outShape,x.shape)),null!=d&&(b=(0,u._1)(d,"prelu weights","fused depthwiseConv2d"));let E=(e,t)=>{g.hu(S.I0(o),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${o}'`);let[a,i,s,u]=t,h=(0,nQ.Fr)(e,s,c),d=n1(i.shape,h,a,n,r,o,l),p=n0(i,h,a.shape,n,r,o,l);if(null!=u){let f=(0,nQ.pf)(x,h);return[d,p,f]}return[d,p]},k={x:C,filter:w,bias:x,preluActivationWeights:b},_={strides:n,pad:r,dataFormat:a,dilations:o,dimRoundingMode:l,activation:c,leakyreluAlpha:m};if(null==h){let R=e6((e,t,n)=>{let r=i.BV.runKernel(s.luS,k,_);return n([t,e,r]),I&&(r=(0,T.X)(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:E}});return R(C,w)}{let N=e6((e,t,n,r)=>{let a=i.BV.runKernel(s.luS,k,_);return r([t,e,a,n]),I&&(a=(0,T.X)(a,[a.shape[1],a.shape[2],a.shape[3]])),{value:a,gradFunc:E}});return N(C,w,x)}}}),n3=(0,l.op)({fusedMatMul_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:a,activation:o="linear",preluActivationWeights:l,leakyreluAlpha:h=.2}){let c,d;if(!1===(0,nQ.uy)(i.BV.state.gradientDepth,o)){let m=D(e,t,n,r);return null!=a&&(m=f(m,a)),(0,nQ.QH)(m,o,l,h)}let x=(0,u._1)(e,"a","fused matMul"),b=(0,u._1)(t,"b","fused matMul");[x,b]=(0,p.T_)(x,b);let y=n?x.shape[x.rank-2]:x.shape[x.rank-1],v=r?b.shape[b.rank-1]:b.shape[b.rank-2],w=n?x.shape[x.rank-1]:x.shape[x.rank-2],C=r?b.shape[b.rank-2]:b.shape[b.rank-1],I=x.shape.slice(0,-2),$=b.shape.slice(0,-2),E=g.NA(I),k=g.NA($);g.hu(y===v,()=>`Error in fused matMul: inner shapes (${y}) and (${v}) of Tensors with shapes ${x.shape} and ${b.shape} and transposeA=${n} and transposeB=${r} must match.`);let S=ev.assertAndGetBroadcastShape(x.shape.slice(0,-2),b.shape.slice(0,-2)),_=S.concat([w,C]),R=n?(0,T.X)(x,[E,y,w]):(0,T.X)(x,[E,w,y]),N=r?(0,T.X)(b,[k,C,v]):(0,T.X)(b,[k,v,C]);null!=a&&(c=(0,u._1)(a,"bias","fused matMul"),[c]=(0,p.T_)(c,x),ev.assertAndGetBroadcastShape(_,c.shape)),null!=l&&(d=(0,u._1)(l,"prelu weights","fused matMul"));let A=(e,t)=>{let i,s;let[u,l,h,c]=t,d=(0,nQ.Fr)((0,T.X)(e,h.shape),h,o);if(n||r?!n&&r?(i=D(d,l,!1,!1),s=D(d,u,!0,!1)):n&&!r?(i=D(l,d,!1,!0),s=D(u,d,!1,!1)):(i=D(l,d,!0,!0),s=D(d,u,!0,!0)):(i=D(d,l,!1,!0),s=D(u,d,!0,!1)),null==a)return[i,s];{let p=(0,nQ.pf)(c,d);return[i,s,p]}},O={a:R,b:N,bias:c,preluActivationWeights:d},B={transposeA:n,transposeB:r,activation:o,leakyreluAlpha:h};if(null==a){let F=e6((e,t,n)=>{let r=i.BV.runKernel(s.usg,O,B);return n([e,t,r]),{value:(0,T.X)(r,_),gradFunc:A}});return F(R,N)}{let P=e6((e,t,n,r)=>{let a=i.BV.runKernel(s.usg,O,B);return r([e,t,a,n]),{value:(0,T.X)(a,_),gradFunc:A}});return P(R,N,c)}}}),n4=(0,l.op)({hammingWindow_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){return nK(e,.54,.46)}}),n5=(0,l.op)({hannWindow_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){return nK(e,.5,.5)}}),n6=(0,l.op)({frame_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r=!1,a=0){let o=0,i=[];for(;o+t<=e.size;)i.push(F(e,o,t)),o+=n;if(r)for(;o<e.size;){let s=o+t-e.size,u=A([F(e,o,t-s),q([s],a)]);i.push(u),o+=n}return 0===i.length?nC([],[0,t]):(0,T.X)(A(i),[i.length,t])}}),n8=(0,l.op)({stft_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a=n5){null==r&&(r=nj(t));let o=n6(e,t,n),i=(0,O.d)(o,a(t));return nd(i,r)}}),n7=(0,l.op)({cropAndResize_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a="bilinear",o=0){let l=(0,u._1)(e,"image","cropAndResize"),h=(0,u._1)(t,"boxes","cropAndResize","float32"),c=(0,u._1)(n,"boxInd","cropAndResize","int32"),d=h.shape[0];g.hu(4===l.rank,()=>`Error in cropAndResize: image must be rank 4,but got rank ${l.rank}.`),g.hu(2===h.rank&&4===h.shape[1],()=>`Error in cropAndResize: boxes must be have size [${d},4] but had shape ${h.shape}.`),g.hu(1===c.rank&&c.shape[0]===d,()=>`Error in cropAndResize: boxInd must be have size [${d}] but had shape ${h.shape}.`),g.hu(2===r.length,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),g.hu(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),g.hu("bilinear"===a||"nearest"===a,()=>`method must be bilinear or nearest, but was ${a}`);let p=i.BV.runKernel(s.VcC,{image:l,boxes:h,boxInd:c},{method:a,extrapolationValue:o,cropSize:r});return p}}),n9=(0,l.op)({flipLeftRight_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"image","flipLeftRight","float32");g.hu(4===t.rank,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);let n=i.BV.runKernel(s.Uyb,{image:t},{});return n}}),re=(0,l.op)({grayscaleToRGB_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,u._1)(e,"image","grayscaleToRGB"),n=t.rank-1,r=t.shape[n];g.hu(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),g.hu(1===r,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);let a=Array(t.rank);return a.fill(1,0,n),a[n]=3,eV(t,a)}}),rt=(0,l.op)({rotateWithOffset_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n=0,r=.5){let a=(0,u._1)(e,"image","rotateWithOffset","float32");g.hu(4===a.rank,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${a.rank}.`);let o=i.BV.runKernel(s.b9H,{image:a},{radians:t,fillValue:n,center:r});return o}});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function rn(e,t,n,r,a,o){null==r&&(r=.5),null==a&&(a=Number.NEGATIVE_INFINITY),null==o&&(o=0);let i=e.shape[0];return n=Math.min(n,i),g.hu(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),g.hu(2===e.rank,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),g.hu(4===e.shape[1],()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),g.hu(1===t.rank,()=>"scores must be a 1D tensor"),g.hu(t.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${t.shape[0]}`),g.hu(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:a,softNmsSigma:o}}let rr=(0,l.op)({nonMaxSuppression_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY){let o=(0,u._1)(e,"boxes","nonMaxSuppression","float32"),l=(0,u._1)(t,"scores","nonMaxSuppression","float32"),h=rn(o,l,n,r,a);n=h.maxOutputSize,r=h.iouThreshold,a=h.scoreThreshold;let c={maxOutputSize:n,iouThreshold:r,scoreThreshold:a};return i.BV.runKernel(s.uv1,{boxes:o,scores:l},c)}});var ra=n(8329);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ async function ro(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY){let o=(0,u._1)(e,"boxes","nonMaxSuppressionAsync"),i=(0,u._1)(t,"scores","nonMaxSuppressionAsync"),s=rn(o,i,n,r,a);n=s.maxOutputSize,r=s.iouThreshold,a=s.scoreThreshold;let l=await Promise.all([o.data(),i.data()]),h=l[0],c=l[1],{selectedIndices:d}=(0,ra.GP)(h,c,n,r,a);return o!==e&&o.dispose(),i!==t&&i.dispose(),nw(d,"int32")}let ri=(0,l.op)({nonMaxSuppressionWithScore_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,o=0){let l=(0,u._1)(e,"boxes","nonMaxSuppression"),h=(0,u._1)(t,"scores","nonMaxSuppression"),c=rn(l,h,n,r,a,o);n=c.maxOutputSize,r=c.iouThreshold,a=c.scoreThreshold,o=c.softNmsSigma;let d={maxOutputSize:n,iouThreshold:r,scoreThreshold:a,softNmsSigma:o},p=i.BV.runKernel(s.W0H,{boxes:l,scores:h},d);return{selectedIndices:p[0],selectedScores:p[1]}}});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ async function rs(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,o=0){let i=(0,u._1)(e,"boxes","nonMaxSuppressionAsync"),s=(0,u._1)(t,"scores","nonMaxSuppressionAsync"),l=rn(i,s,n,r,a,o);n=l.maxOutputSize,r=l.iouThreshold,a=l.scoreThreshold,o=l.softNmsSigma;let h=await Promise.all([i.data(),s.data()]),c=h[0],d=h[1],{selectedIndices:p,selectedScores:f}=(0,ra.pA)(c,d,n,r,a,o);return i!==e&&i.dispose(),s!==t&&s.dispose(),{selectedIndices:nw(p,"int32"),selectedScores:nw(f)}}let ru=(0,l.op)({nonMaxSuppressionPadded_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,o=!1){let l=(0,u._1)(e,"boxes","nonMaxSuppression"),h=(0,u._1)(t,"scores","nonMaxSuppression"),c=rn(l,h,n,r,a,null),d=c.maxOutputSize,p=c.iouThreshold,f=c.scoreThreshold,g=i.BV.runKernel(s.cye,{boxes:l,scores:h},{maxOutputSize:d,iouThreshold:p,scoreThreshold:f,padToMaxOutputSize:o});return{selectedIndices:g[0],validOutputs:g[1]}}});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ async function rl(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,o=!1){let i=(0,u._1)(e,"boxes","nonMaxSuppressionAsync"),s=(0,u._1)(t,"scores","nonMaxSuppressionAsync"),l=rn(i,s,n,r,a,null),h=l.maxOutputSize,c=l.iouThreshold,d=l.scoreThreshold,[p,f]=await Promise.all([i.data(),s.data()]),{selectedIndices:g,validOutputs:m}=(0,ra.qP)(p,f,h,c,d,o);return i!==e&&i.dispose(),s!==t&&s.dispose(),{selectedIndices:nw(g,"int32"),validOutputs:(0,eD.i)(m,"int32")}}let rh=(0,l.op)({resizeBilinear_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n=!1,r=!1){let a=(0,u._1)(e,"images","resizeBilinear");g.hu(3===a.rank||4===a.rank,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${a.rank}.`),g.hu(2===t.length,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),g.hu(!1===r||!1===n,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let o=a,l=!1;3===a.rank&&(l=!0,o=(0,T.X)(a,[1,a.shape[0],a.shape[1],a.shape[2]]));let[]=t,h={images:o},c=i.BV.runKernel(s._Yw,h,{alignCorners:n,halfPixelCenters:r,size:t});return l?(0,T.X)(c,[c.shape[1],c.shape[2],c.shape[3]]):c}}),rc=(0,l.op)({resizeNearestNeighbor_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n=!1,r=!1){let a=(0,u._1)(e,"images","resizeNearestNeighbor");g.hu(3===a.rank||4===a.rank,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${a.rank}.`),g.hu(2===t.length,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),g.hu("float32"===a.dtype||"int32"===a.dtype,()=>"`images` must have `int32` or `float32` as dtype"),g.hu(!1===r||!1===n,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let o=a,l=!1;3===a.rank&&(l=!0,o=(0,T.X)(a,[1,a.shape[0],a.shape[1],a.shape[2]]));let[]=t,h={images:o},c=i.BV.runKernel(s.dpD,h,{alignCorners:n,halfPixelCenters:r,size:t});return l?(0,T.X)(c,[c.shape[1],c.shape[2],c.shape[3]]):c}}),rd=(0,l.op)({threshold_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t="binary",n=!1,r=.5){let a,o,i,s;let l=(0,u._1)(e,"image","threshold"),h=l.shape[0]*l.shape[1],c=(0,O.d)(nw([r]),255);if(g.hu(3===l.rank,()=>`Error in threshold: image must be rank 3,but got rank ${l.rank}.`),g.hu(3===l.shape[2]||1===l.shape[2],()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${l.shape[2]}.`),g.hu("int32"===l.dtype||"float32"===l.dtype,()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${l.dtype}.`),g.hu("otsu"===t||"binary"===t,()=>`Method must be binary or otsu, but was ${t}`),3===l.shape[2]){[a,o,i]=nc(l,[1,1,1],-1);let d=(0,O.d)(a,.2989),p=(0,O.d)(o,.587),m=(0,O.d)(i,.114);s=f(f(d,p),m)}else s=e;if("otsu"===t){let x=z((0,k.p)(t4(s),"int32"),(0,ny.X)([]),256);c=function(e,t){let n,r,a,o,i,s,u=nw([-1]),l=nw([0]),h=nw([0]);for(let c=0;c<e.size-1;c++){n=F(e,0,c+1),r=F(e,c+1),i=ey((0,eF.S)(n),t),s=ey((0,eF.S)(r),t);let d=(0,eF.S)((0,O.d)(n,tK(0,n.size)));a=ey(d,(0,eF.S)(n));let p=q(r.shape,n.size),g=f(tK(0,r.size),p),m=(0,O.d)(r,g);o=ey((0,eF.S)(m),(0,eF.S)(r));let x=te(a,o),b=te(a,o),y=(0,O.d)(i,s);h=(0,O.d)((0,O.d)(y,x),b);let v=eH(h,l);l=eC(v,h,l),u=eC(v,nw([c]),u)}return u}(x,h)}let b=n?e0(s,c):eH(s,c),y=(0,k.p)((0,O.d)(b,255),"int32");return y}}),rp=(0,l.op)({transform_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n="nearest",r="constant",a=0,o){let l=(0,u._1)(e,"image","transform","float32"),h=(0,u._1)(t,"transforms","transform","float32");return g.hu(4===l.rank,()=>`Error in transform: image must be rank 4,but got rank ${l.rank}.`),g.hu(2===h.rank&&(h.shape[0]===l.shape[0]||1===h.shape[0])&&8===h.shape[1],()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),g.hu(null==o||2===o.length,()=>`Error in transform: outputShape must be [height, width] or null, but got ${o}.`),i.BV.runKernel(s.wx7,{image:l,transforms:h},{interpolation:n,fillMode:r,fillValue:a,outputShape:o})}}),rf=(0,l.op)({bandPart_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){(0,g.hu)(t%1==0,()=>`bandPart(): numLower must be an integer, got ${t}.`),(0,g.hu)(n%1==0,()=>`bandPart(): numUpper must be an integer, got ${n}.`);let r=(0,u._1)(e,"a","bandPart");(0,g.hu)(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);let a=r.shape,[o,i]=r.shape.slice(-2);if(!(t<=o))throw Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${o}).`);if(!(n<=i))throw Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${i}).`);t<0&&(t=o),n<0&&(n=i);let s=(0,T.X)(tK(0,o,1,"int32"),[-1,1]),l=tK(0,i,1,"int32"),h=te(s,l),c=tr(e0(h,(0,eD.i)(+t,"int32")),ej(h,(0,eD.i)(-n,"int32"))),d=tf([o,i],r.dtype);return(0,T.X)(ng(nN((0,T.X)(r,[-1,o,i])).map(e=>eC(c,e,d))),a)}}),rg=(0,l.op)({gramSchmidt_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t;if(Array.isArray(e)){t=!1,(0,g.hu)(null!=e&&e.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");let n=e[0].shape[0];for(let r=1;r<e.length;++r)(0,g.hu)(e[r].shape[0]===n,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[r].shape[0]} vs. ${n})`)}else t=!0,e=nc(e,e.shape[0],0).map(e=>nf(e,[0]));(0,g.hu)(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);let a=[],o=e;for(let s=0;s<e.length;++s)a.push(i.BV.tidy(()=>{let e=o[s];if(s>0)for(let t=0;t<s;++t){let n=(0,O.d)((0,eF.S)((0,O.d)(a[t],e)),a[t]);e=te(e,n)}return ey(e,eP(e,"euclidean"))}));return t?ng(a,0):a}});function rm(e,t=!1){return i.BV.tidy(()=>{(0,g.hu)(2===e.shape.length,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);let n=e.shape[0],r=e.shape[1],a=eG(n),o=(0,N.d)(e),s=nC([[1]],[1,1]),u=(0,N.d)(s),l=n>=r?r:n;for(let h=0;h<l;++h){let c=o,d=u,p=a;[u,o,a]=i.BV.tidy(()=>{let e=F(o,[h,h],[n-h,1]),t=eP(e),i=F(o,[h,h],[1,1]),l=eC(eH(i,0),nC([[-1]]),nC([[1]])),c=te(i,(0,O.d)(l,t)),d=ey(e,c);u=1===d.shape[0]?(0,N.d)(s):A([s,F(d,[1,0],[d.shape[0]-1,d.shape[1]])],0);let p=e8(ey(D(l,c),t)),f=F(o,[h,0],[n-h,r]),g=(0,O.d)(p,u),m=nM(u);if(0===h)o=te(f,D(g,D(m,f)));else{let x=te(f,D(g,D(m,f)));o=A([F(o,[0,0],[h,r]),x],0)}let b=nM(g),y=F(a,[0,h],[n,a.shape[1]-h]);if(0===h)a=te(y,D(D(y,u),b));else{let v=te(y,D(D(y,u),b));a=A([F(a,[0,0],[n,h]),v],1)}return[u,o,a]}),(0,nW.B9)([c,d,p])}return!t&&n>r&&(a=F(a,[0,0],[n,r]),o=F(o,[0,0],[r,r])),[a,o]})}let rx=(0,l.op)({qr_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=!1){if((0,g.hu)(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),2===e.rank)return rm(e,t);{let n=e.shape.slice(0,e.shape.length-2).reduce((e,t)=>e*t),r=nN((0,T.X)(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),a=[],o=[];r.forEach(e=>{let[n,r]=rm(e,t);a.push(n),o.push(r)});let i=(0,T.X)(ng(a,0),e.shape),s=(0,T.X)(ng(o,0),e.shape);return[i,s]}}});(r=a||(a={}))[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS";let rb=(0,l.op)({computeWeightedLoss_:function(e,t,n=a.SUM_BY_NONZERO_WEIGHTS){let r=(0,u._1)(e,"losses","computeWeightedLoss"),o=null;null!=t&&(o=(0,u._1)(t,"weights","computeWeightedLoss"));let i=null==o?r:(0,O.d)(r,o);if(n===a.NONE)return i;if(n===a.SUM)return(0,eF.S)(i);if(n===a.MEAN){if(null==o)return tp(i);{let s=r.size/o.size,l=ey((0,eF.S)(i),(0,eF.S)(o));return s>1?ey(l,(0,eD.i)(s)):l}}if(n===a.SUM_BY_NONZERO_WEIGHTS){if(null==o)return ey((0,eF.S)(i),(0,eD.i)(r.size));{let h=(0,O.d)(o,tg(r.shape)),c=(0,k.p)((0,eF.S)(tI(h,(0,eD.i)(0))),"float32");return ey((0,eF.S)(i),c)}}throw Error(`Unknown reduction: ${n}`)}}),ry=(0,l.op)({absoluteDifference_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r=a.SUM_BY_NONZERO_WEIGHTS){let o=(0,u._1)(e,"labels","absoluteDifference"),i=(0,u._1)(t,"predictions","absoluteDifference"),s=null;null!=n&&(s=(0,u._1)(n,"weights","absoluteDifference")),(0,g.k5)(o.shape,i.shape,"Error in absoluteDifference: ");let l=h(te(o,i));return rb(l,s,r)}}),rv=(0,l.op)({cosineDistance_:function(e,t,n,r,o=a.SUM_BY_NONZERO_WEIGHTS){let i=(0,u._1)(e,"labels","cosineDistance"),s=(0,u._1)(t,"predictions","cosineDistance"),l=null;null!=r&&(l=(0,u._1)(r,"weights","cosineDistance")),(0,g.k5)(i.shape,s.shape,"Error in cosineDistance: ");let h=(0,eD.i)(1),c=te(h,(0,eF.S)((0,O.d)(i,s),n,!0));return rb(c,l,o)}}),rw=(0,l.op)({hingeLoss_:function(e,t,n,r=a.SUM_BY_NONZERO_WEIGHTS){let o=(0,u._1)(e,"labels","hingeLoss"),i=(0,u._1)(t,"predictions","hingeLoss"),s=null;null!=n&&(s=(0,u._1)(n,"weights","hingeLoss")),(0,g.k5)(o.shape,i.shape,"Error in hingeLoss: ");let l=(0,eD.i)(1);o=te((0,O.d)((0,eD.i)(2),o),l);let h=(0,tZ.U)(te(l,(0,O.d)(o,i)));return rb(h,s,r)}}),rC=(0,l.op)({huberLoss_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r=1,o=a.SUM_BY_NONZERO_WEIGHTS){let i=(0,u._1)(e,"labels","huberLoss"),s=(0,u._1)(t,"predictions","huberLoss"),l=null;null!=n&&(l=(0,u._1)(n,"weights","huberLoss")),(0,g.k5)(i.shape,s.shape,"Error in huberLoss: ");let c=(0,eD.i)(r),d=h(te(s,i)),p=tx(d,c),m=te(d,p),x=f((0,O.d)((0,eD.i)(.5),eB(p)),(0,O.d)(c,m));return rb(x,l,o)}}),rI=(0,l.op)({logLoss_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r=1e-7,o=a.SUM_BY_NONZERO_WEIGHTS){let i=(0,u._1)(e,"labels","logLoss"),s=(0,u._1)(t,"predictions","logLoss"),l=null;null!=n&&(l=(0,u._1)(n,"weights","logLoss")),(0,g.k5)(i.shape,s.shape,"Error in logLoss: ");let h=(0,eD.i)(1),c=(0,eD.i)(r),d=e8((0,O.d)(i,e3(f(s,c)))),p=(0,O.d)(te(h,i),e3(f(te(h,s),c))),m=te(d,p);return rb(m,l,o)}}),r$=(0,l.op)({meanSquaredError_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r=a.SUM_BY_NONZERO_WEIGHTS){let o=(0,u._1)(e,"labels","meanSquaredError"),i=(0,u._1)(t,"predictions","meanSquaredError"),s=null;null!=n&&(s=(0,u._1)(n,"weights","meanSquaredError")),(0,g.k5)(o.shape,i.shape,"Error in meanSquaredError: ");let l=np(o,i);return rb(l,s,r)}}),rE=(0,l.op)({sigmoidCrossEntropy_:function(e,t,n,r=0,o=a.SUM_BY_NONZERO_WEIGHTS){let i=(0,u._1)(e,"multiClassLabels","sigmoidCrossEntropy"),s=(0,u._1)(t,"logits","sigmoidCrossEntropy"),l=null;if(null!=n&&(l=(0,u._1)(n,"weights","sigmoidCrossEntropy")),(0,g.k5)(i.shape,s.shape,"Error in sigmoidCrossEntropy: "),r>0){let c=(0,eD.i)(r),d=(0,eD.i)(1),p=(0,eD.i)(.5);i=f((0,O.d)(i,te(d,c)),(0,O.d)(p,c))}let m=/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"labels","sigmoidCrossEntropyWithLogits"),r=(0,u._1)(t,"logits","sigmoidCrossEntropyWithLogits");(0,g.k5)(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");let a=(0,tZ.U)(r),o=(0,O.d)(r,n),i=e4(eW(e8(h(r))));return f(te(a,o),i)}(i,s);return rb(m,l,o)}}),rk=(0,l.op)({softmaxCrossEntropy_:function(e,t,n,r=0,o=a.SUM_BY_NONZERO_WEIGHTS){let i=(0,u._1)(e,"onehotLabels","softmaxCrossEntropy"),s=(0,u._1)(t,"logits","softmaxCrossEntropy"),l=null;if(null!=n&&(l=(0,u._1)(n,"weights","softmaxCrossEntropy")),(0,g.k5)(i.shape,s.shape,"Error in softmaxCrossEntropy: "),r>0){let h=(0,eD.i)(r),c=(0,eD.i)(1),d=(0,eD.i)(i.shape[1]);i=f((0,O.d)(i,te(c,h)),ey(h,d))}let p=/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n=-1){if(-1===n&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);let r=e6((e,t,r)=>{let a=tn(t,[n],!0),o=te((0,k.p)(t,"float32"),a);r([e,o]);let i=e8((0,O.d)(o,e)),s=(0,eF.S)(i,[n]),u=(e,t)=>{let[r,a]=t,o=(0,e_.rv)(e.shape,[n]);return[(0,O.d)((0,T.X)(e,o),te((0,k.p)(r,"float32"),eW(a))),(0,O.d)((0,T.X)(e,o),te(eW(a),(0,k.p)(r,"float32")))]};return{value:s,gradFunc:u}});return r(e,t)}(i,s);return rb(p,l,o)}}),rS=(0,l.op)({sparseFillEmptyRows_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r){let a=(0,u._1)(e,"indices","sparseFillEmptyRows","int32"),o=(0,u._1)(t,"values","sparseFillEmptyRows"),l=(0,u._1)(n,"denseShape","sparseFillEmptyRows","int32"),h=(0,u._1)(r,"defaultValue","sparseFillEmptyRows",o.dtype);if(2!==a.rank)throw Error(`Indices should be Tensor2D but received shape
        ${a.shape}`);if(1!==o.rank)throw Error(`Values should be Tensor1D but received shape ${o.shape}`);if(1!==l.rank)throw Error(`Dense shape should be Tensor1D but received shape ${l.shape}`);if(0!==h.rank)throw Error(`Default value should be a scalar but received shape ${h.shape}`);let c=i.BV.runKernel(s.O3z,{indices:a,values:o,denseShape:l,defaultValue:h});return{outputIndices:c[0],outputValues:c[1],emptyRowIndicator:c[2],reverseIndexMap:c[3]}}}),rT=(0,l.op)({sparseReshape_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,u._1)(e,"inputIndices","sparseReshape","int32"),a=(0,u._1)(t,"inputShape","sparseReshape","int32"),o=(0,u._1)(n,"newShape","sparseReshape","int32");if(2!==r.rank)throw Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(1!==a.rank)throw Error(`Input shape should be Tensor1D but received shape ${a.shape}`);if(1!==o.rank)throw Error(`New shape should be Tensor1D but received shape ${o.shape}`);let l=i.BV.runKernel(s.nhH,{inputIndices:r,inputShape:a,newShape:o});return{outputIndices:l[0],outputShape:l[1]}}}),r_=(0,l.op)({sparseSegmentMean_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,u._1)(e,"data","sparseSegmentMean"),a=(0,u._1)(t,"indices","sparseSegmentMean","int32"),o=(0,u._1)(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==a.rank)throw Error(`Indices should be Tensor1D but received shape
          ${a.shape}`);if(1!==o.rank)throw Error(`Segment ids should be Tensor1D but received shape
          ${o.shape}`);return i.BV.runKernel(s.w3H,{data:r,indices:a,segmentIds:o})}}),rR=(0,l.op)({sparseSegmentSum_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n){let r=(0,u._1)(e,"data","sparseSegmentSum"),a=(0,u._1)(t,"indices","sparseSegmentSum","int32"),o=(0,u._1)(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==a.rank)throw Error(`Indices should be Tensor1D but received shape
         ${a.shape}`);if(1!==o.rank)throw Error(`Segment ids should be Tensor1D but received shape
         ${o.shape}`);return i.BV.runKernel(s.ZjV,{data:r,indices:a,segmentIds:o})}}),rN=(0,l.op)({stringNGrams_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n,r,a,o,l,h){let c=(0,u._1)(e,"data","stringNGrams","string");if("string"!==c.dtype)throw Error("Data must be of datatype string");if(1!==c.shape.length)throw Error(`Data must be a vector, saw: ${c.shape}`);let d=(0,u._1)(t,"dataSplits","stringNGrams");if("int32"!==d.dtype)throw Error("Data splits must be of datatype int32");let p=i.BV.runKernel(s._JP,{data:c,dataSplits:d},{separator:n,nGramWidths:r,leftPad:a,rightPad:o,padWidth:l,preserveShortSequences:h});return{nGrams:p[0],nGramsSplits:p[1]}}}),rA=(0,l.op)({stringSplit_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t,n=!0){let r=(0,u._1)(e,"input","stringSplit","string"),a=(0,u._1)(t,"delimiter","stringSplit","string");if(1!==r.rank)throw Error(`Input should be Tensor1D but received shape ${r.shape}`);if(0!==a.rank)throw Error(`Delimiter should be a scalar but received shape ${a.shape}`);let o=i.BV.runKernel(s.s1s,{input:r,delimiter:a},{skipEmpty:n});return{indices:o[0],values:o[1],shape:o[2]}}}),rD=(0,l.op)({stringToHashBucketFast_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,u._1)(e,"input","stringToHashBucketFast","string");if(t<=0)throw Error("Number of buckets must be at least 1");return i.BV.runKernel(s.XkS,{input:n},{numBuckets:t})}}),rO={fft:nu,ifft:nl,rfft:nd,irfft:nh},rB={hammingWindow:n4,hannWindow:n5,frame:n6,stft:n8},rF={flipLeftRight:n9,grayscaleToRGB:re,resizeNearestNeighbor:rc,resizeBilinear:rh,rotateWithOffset:rt,cropAndResize:n7,nonMaxSuppression:rr,nonMaxSuppressionAsync:ro,nonMaxSuppressionWithScore:ri,nonMaxSuppressionWithScoreAsync:rs,nonMaxSuppressionPadded:ru,nonMaxSuppressionPaddedAsync:rl,threshold:rd,transform:rp},rP={bandPart:rf,gramSchmidt:rg,qr:rx},rL={absoluteDifference:ry,computeWeightedLoss:rb,cosineDistance:rv,hingeLoss:rw,huberLoss:rC,logLoss:rI,meanSquaredError:r$,sigmoidCrossEntropy:rE,softmaxCrossEntropy:rk},rW={sparseFillEmptyRows:rS,sparseReshape:rT,sparseSegmentMean:r_,sparseSegmentSum:rR},rM={stringNGrams:rN,stringSplit:rA,stringToHashBucketFast:rD}},8151:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var r=n(196),a=n(9121),o=n(3740),i=n(2668);let s=(0,i.op)({prelu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,o._1)(e,"x","prelu"),i=(0,o._1)(t,"alpha","prelu");return r.BV.runKernel(a.o0g,{x:n,alpha:i})}})},9798:function(e,t,n){"use strict";/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function r(e,t=!1){console.log(e.toString(t))}n.d(t,{S:function(){return r}})},7409:function(e,t,n){"use strict";n.d(t,{U:function(){return s}});var r=n(196),a=n(9121),o=n(3740),i=n(2668);let s=(0,i.op)({relu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,o._1)(e,"x","relu");return r.BV.runKernel(a.qkr,{x:t})}})},3582:function(e,t,n){"use strict";n.d(t,{b:function(){return s}});var r=n(196),a=n(9121),o=n(3740),i=n(2668);let s=(0,i.op)({relu6_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,o._1)(e,"x","relu6");return r.BV.runKernel(a.SbG,{x:t})}})},4968:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(196),a=n(9121),o=n(3740),i=n(2668);let s=(0,i.op)({reshape_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t){let n=(0,o._1)(e,"x","reshape","string_or_numeric");return r.BV.runKernel(a.HZH,{x:n},{shape:t})}})},9494:function(e,t,n){"use strict";n.d(t,{i:function(){return o}});var r=n(569),a=n(7852);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function o(e,t){if(((0,r.fU)(e)&&"string"!==t||Array.isArray(e))&&"complex64"!==t)throw Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===t&&(0,r.fU)(e)&&!(e instanceof Uint8Array))throw Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return(0,a.H)(e,[],[],t)}},3028:function(e,t,n){"use strict";n.d(t,{SU:function(){return i},b0:function(){return o},l5:function(){return a}});var r=n(569);function a(e,t,n){let r=t.rank>1?t.shape[t.rank-1]:1,a=t.rank>1?t.rank-1:1,o=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${a}.`;if(n.rank<a)throw Error(o+` update.rank < ${a}. `);if(e.length<r+(n.rank-a))throw Error(o+` Output shape length < ${r+(n.rank-a)}`);if(n.rank!==a+e.length-r)throw Error(o+` update.rank != ${a+e.length-r}`);for(let i=0;i<a;++i)if(n.shape[i]!==t.shape[i])throw Error(o+` updates.shape[${i}] (${n.shape[i]}) != indices.shape[${i}] (${t.shape[i]}).`);for(let s=0;s<n.rank-a;++s)if(n.shape[s+a]!==e[s+r])throw Error(o+` updates.shape[${s+a}] (${n.shape[s+a]}) != shape[${s+a}] (${e[s+a]})`)}function o(e,t,n){if(t.rank<1)throw Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if("int32"!==t.dtype)throw Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(0===n.length){if(0===t.size)throw Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(0===e.size)throw Error(`Updates specified for empty output. updates shape: ${e.shape}`)}a(n,t,e)}function i(e,t,n){let a=t.shape.length,o=a>1?t.shape[a-1]:1,i=n.length,s=1;for(let u=o;u<i;++u)s*=n[u];let l=(0,r.NA)(t.shape)/(o<1?1:o),h=[...(0,r.e3)(n.slice(0,o)),1],c=(0,r.NA)(n);return{sliceRank:o,numUpdates:l,sliceSize:s,strides:h,outputSize:c}}},625:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(196),a=n(9121),o=n(3740),i=n(2668);let s=(0,i.op)({sigmoid_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e){let t=(0,o._1)(e,"x","sigmoid","float32");return r.BV.runKernel(a.a5O,{x:t})}})},1901:function(e,t,n){"use strict";n.d(t,{N:function(){return s}});var r=n(196),a=n(9121),o=n(3740),i=n(2668);let s=(0,i.op)({step_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=0){let n=(0,o._1)(e,"x","step");return r.BV.runKernel(a.h8e,{x:n},{alpha:t})}})},5475:function(e,t,n){"use strict";n.d(t,{S:function(){return u}});var r=n(196),a=n(9121),o=n(3740),i=n(2271),s=n(2668);let u=(0,s.op)({sum_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function(e,t=null,n=!1){let s=(0,o._1)(e,"x","sum");"bool"===s.dtype&&(s=(0,i.p)(s,"int32"));let u={x:s};return r.BV.runKernel(a.GBy,u,{axis:t,keepDims:n})}})},701:function(e,t,n){"use strict";n.d(t,{X:function(){return o}});var r=n(3740),a=n(7852);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function o(e,t,n){let o=(0,r.C)(e,n);return(0,a.H)(e,t,o,n)}},9906:function(e,t,n){"use strict";n.d(t,{w:function(){return i}});var r=n(3740),a=n(569),o=n(7852);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function i(e,t,n){if((0,a.Cq)(e),null!=t&&3!==t.length)throw Error("tensor3d() requires shape to have three numbers");let i=(0,r.C)(e,n);if(3!==i.length&&1!==i.length)throw Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===i.length&&null==t)throw Error("tensor3d() requires shape to be provided when `values` are a flat array");return(0,o.H)(e,t,i,n)}},7852:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});var r=n(196),a=n(569),o=n(3418);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function i(e,t,n,i){if(null==i&&(i=(0,a.D2)(e)),"complex64"===i)throw Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!(0,a.fU)(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e)throw Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=t){(0,a.Mu)(t);let s=(0,a.NA)(t),u=(0,a.NA)(n);(0,a.hu)(s===u,()=>`Based on the provided shape, [${t}], the tensor should have ${s} values but has ${u}`);for(let l=0;l<n.length;++l){let h=n[l],c=l!==n.length-1||h!==(0,a.NA)(t.slice(l));(0,a.hu)(n[l]===t[l]||!c,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return(0,a.fU)(e)||Array.isArray(e)||(e=[e]),t=t||n,e="string"!==i?(0,o.toTypedArray)(e,i):(0,a.xH)(e,[],!0),r.BV.makeTensor(e,t,i)}},974:function(e,t,n){"use strict";n.d(t,{es:function(){return g},YD:function(){return l},_w:function(){return m},FZ:function(){return f},Vp:function(){return p},Vi:function(){return d}});var r=n(5938),a=n(569);function o(e,t,n){let r;return r=Array.isArray(e)?`${parseFloat(e[0].toFixed(7))} + ${parseFloat(e[1].toFixed(7))}j`:(0,a.HD)(e)?`'${e}'`:"bool"===n?i(e):parseFloat(e.toFixed(7)).toString(),(0,a.oj)(r,t)}function i(e){return 0===e?"false":"true"}function s(e){let t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}var u=n(3418);/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ class l{constructor(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=a.NA(e),null!=n){let r=n.length;a.hu(r===this.size,()=>`Length of values '${r}' does not match the size inferred by the shape '${this.size}'.`)}if("complex64"===t)throw Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||a.rQ(t,this.size),this.strides=(0,a.e3)(e)}set(e,...t){0===t.length&&(t=[0]),a.hu(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);let n=this.locToIndex(t);this.values[n]=e}get(...e){0===e.length&&(e=[0]);let t=0;for(let n of e){if(n<0||n>=this.shape[t]){let r=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw Error(r)}t++}let a=e[e.length-1];for(let o=0;o<e.length-1;++o)a+=this.strides[o]*e[o];return this.values[a]}locToIndex(e){if(0===this.rank)return 0;if(1===this.rank)return e[0];let t=e[e.length-1];for(let n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t}indexToLoc(e){if(0===this.rank)return[];if(1===this.rank)return[e];let t=Array(this.shape.length);for(let n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return h().makeTensor(this.values,this.shape,this.dtype)}}let h=null,c=null;function d(e){h=e}function p(e){c=e}function f(e){}class g{constructor(e,t,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=a.NA(e),this.strides=(0,a.e3)(e),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){let e=await this.data();return c.buffer(this.shape,this.dtype,e)}bufferSync(){return c.buffer(this.shape,this.dtype,this.dataSync())}async array(){let e=await this.data();return(0,a.GX)(this.shape,e,"complex64"===this.dtype)}arraySync(){return(0,a.GX)(this.shape,this.dataSync(),"complex64"===this.dtype)}async data(){this.throwIfDisposed();let e=h().read(this.dataId);if("string"===this.dtype){let t=await e;try{return t.map(e=>u.decodeString(e))}catch(n){throw Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),h().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();let e=h().readSync(this.dataId);if("string"===this.dtype)try{return e.map(e=>u.decodeString(e))}catch(t){throw Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();let e=await h().read(this.dataId);return"string"===this.dtype?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(h().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw Error("Tensor is disposed.")}print(e=!1){return c.print(this,e)}clone(){return this.throwIfDisposed(),c.clone(this)}toString(e=!1){let t=this.dataSync();return function(e,t,n,r){let u=(0,a.e3)(t),l=function(e,t,n,r){let i=(0,a.NA)(t),u=r[r.length-1],l=Array(u).fill(0),h=t.length,c="complex64"===n?s(e):e;if(h>1)for(let d=0;d<i/u;d++){let p=d*u;for(let f=0;f<u;f++)l[f]=Math.max(l[f],o(c[p+f],0,n).length)}return l}(e,t,n,u),h=t.length,c=function e(t,n,r,a,u,l=!0){let h="complex64"===r?2:1,c=n[0],d=n.length;if(0===d){if("complex64"===r){let p=s(t);return[o(p[0],0,r)]}return"bool"===r?[i(t[0])]:[t[0].toString()]}if(1===d){if(c>20){let f=Array.from(t.slice(0,3*h)),g=Array.from(t.slice((c-3)*h,c*h));return"complex64"===r&&(f=s(f),g=s(g)),["["+f.map((e,t)=>o(e,u[t],r)).join(", ")+", ..., "+g.map((e,t)=>o(e,u[c-3+t],r)).join(", ")+"]"]}let m="complex64"===r?s(t):Array.from(t);return["["+m.map((e,t)=>o(e,u[t],r)).join(", ")+"]"]}let x=n.slice(1),b=a.slice(1),y=a[0]*h,v=[];if(c>20){for(let w=0;w<3;w++){let C=w*y,I=C+y;v.push(...e(t.slice(C,I),x,r,b,u,!1))}v.push("...");for(let $=c-3;$<c;$++){let E=$*y,k=E+y;v.push(...e(t.slice(E,k),x,r,b,u,$===c-1))}}else for(let S=0;S<c;S++){let T=S*y,_=T+y;v.push(...e(t.slice(T,_),x,r,b,u,S===c-1))}let R=2===d?",":"";v[0]="["+v[0]+R;for(let N=1;N<v.length-1;N++)v[N]=" "+v[N]+R;let A=",\n";for(let D=2;D<d;D++)A+="\n";return v[v.length-1]=" "+v[v.length-1]+"]"+(l?"":A),v}(e,t,n,u,l),d=["Tensor"];return r&&(d.push(`  dtype: ${n}`),d.push(`  rank: ${h}`),d.push(`  shape: [${t}]`),d.push("  values:")),d.push(c.map(e=>"    "+e).join("\n")),d.join("\n")}(t,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),c.cast(this,e)}variable(e=!0,t,n){return this.throwIfDisposed(),h().makeVariable(this,e,t,n)}}Object.defineProperty(g,Symbol.hasInstance,{value:e=>!!e&&null!=e.data&&null!=e.dataSync&&null!=e.throwIfDisposed}),(0,r.R)("Tensor",()=>g);class m extends g{constructor(e,t,n,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=n}assign(e){if(e.dtype!==this.dtype)throw Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!a.cO(e.shape,this.shape))throw Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);h().disposeTensor(this),this.dataId=e.dataId,h().incRef(this,null)}dispose(){h().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(m,Symbol.hasInstance,{value:e=>e instanceof g&&null!=e.assign&&e.assign instanceof Function})},747:function(e,t,n){"use strict";n.d(t,{T_:function(){return i},Vu:function(){return u},xg:function(){return s}});var r=n(974),a=n(1221),o=n(569);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function i(e,t){if(e.dtype===t.dtype)return[e,t];let n=(0,a.x8)(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function s(e,t){(0,o.hu)(e.dtype===t.dtype,()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`)}function u(e){let t=[],n=new Set;return function e(t,n,a){if(null!=t){if(t instanceof r.es){n.push(t);return}if(Array.isArray(t)||"object"==typeof t)for(let o in t){let i=t[o];a.has(i)||(a.add(i),e(i,n,a))}}}(e,t,n),t}},3740:function(e,t,n){"use strict";n.d(t,{C:function(){return u},_1:function(){return h},sI:function(){return c}});var r=n(196),a=n(2885),o=n(974),i=n(569),s=n(3418);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function u(e,t){let n=e;if((0,i.fU)(e))return"string"===t?[]:[e.length];if(!Array.isArray(e))return[];let r=[];for(;Array.isArray(n)||(0,i.fU)(n)&&"string"!==t;)r.push(n.length),n=n[0];return Array.isArray(e)&&(0,a.OB)().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function e(t,n,r){if(r=r||[],!Array.isArray(t)&&!(0,i.fU)(t)){(0,i.hu)(0===n.length,()=>`Element arr[${r.join("][")}] is a primitive, but should be an array/TypedArray of ${n[0]} elements`);return}(0,i.hu)(n.length>0,()=>`Element arr[${r.join("][")}] should be a primitive, but is an array of ${t.length} elements`),(0,i.hu)(t.length===n[0],()=>`Element arr[${r.join("][")}] should have ${n[0]} elements, but has ${t.length} elements`);let a=n.slice(1);for(let o=0;o<t.length;++o)e(t[o],a,r.concat(o))}(e,r,[]),r}function l(e,t,n,r){if("string_or_numeric"!==e){if(null==e)throw Error("Expected dtype cannot be null.");if("numeric"!==e&&e!==t||"numeric"===e&&"string"===t)throw Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function h(e,t,n,a="numeric"){if(e instanceof o.es)return l(a,e.dtype,t,n),e;let h=(0,i.D2)(e);if("string"!==h&&["bool","int32","float32"].indexOf(a)>=0&&(h=a),l(a,h,t,n),null==e||!(0,i.fU)(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e){let c=null==e?"null":e.constructor.name;throw Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${c}'`)}let d=u(e,h);(0,i.fU)(e)||Array.isArray(e)||(e=[e]);let p="string"!==h?(0,s.toTypedArray)(e,h):(0,i.xH)(e,[],!0);return r.BV.makeTensor(p,d,h)}function c(e,t,n,r="numeric"){if(!Array.isArray(e))throw Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((e,a)=>h(e,`${t}[${a}]`,n,r))}},1221:function(e,t,n){"use strict";var r,a,o,i,s,u,l,h,c,d;n.d(t,{x8:function(){return f},z4:function(){return g}}),(u=r||(r={})).R0="R0",u.R1="R1",u.R2="R2",u.R3="R3",u.R4="R4",u.R5="R5",u.R6="R6",(l=a||(a={})).float32="float32",l.int32="int32",l.bool="int32",l.complex64="complex64",(h=o||(o={})).float32="float32",h.int32="int32",h.bool="bool",h.complex64="complex64",(c=i||(i={})).float32="float32",c.int32="float32",c.bool="float32",c.complex64="complex64",(d=s||(s={})).float32="complex64",d.int32="complex64",d.bool="complex64",d.complex64="complex64";let p={float32:i,int32:a,bool:o,complex64:s};function f(e,t){if("string"===e||"string"===t){if("string"===e&&"string"===t)return"string";throw Error(`Can not upcast ${e} with ${t}`)}return p[e][t]}function g(e){return f(e,"int32")}},3418:function(e,t,n){"use strict";n.r(t),n.d(t,{arraysEqual:function(){return a.cO},assert:function(){return a.hu},assertNonNegativeIntegerDimensions:function(){return a.Mu},assertNonNull:function(){return a.Cq},assertShapesMatch:function(){return a.k5},bytesFromStringArray:function(){return a.Ub},bytesPerElement:function(){return a.bT},checkConversionForErrors:function(){return a.D5},clamp:function(){return a.uZ},computeStrides:function(){return a.e3},createScalarValue:function(){return y},createShuffledIndices:function(){return a.U$},decodeString:function(){return $},distSquared:function(){return a.E7},encodeString:function(){return I},fetch:function(){return C},fingerPrint64:function(){return b},flatten:function(){return a.xH},getArrayFromDType:function(){return a.rQ},getTypedArrayFromDType:function(){return a.WP},hasEncodingLoss:function(){return a.QB},hexToLong:function(){return u},indexToLoc:function(){return a.NE},inferDtype:function(){return a.D2},inferFromImplicitShape:function(){return a.JZ},isBoolean:function(){return a.jn},isFunction:function(){return a.mf},isInt:function(){return a.GN},isNumber:function(){return a.hj},isPromise:function(){return a.tI},isScalarShape:function(){return a.N9},isString:function(){return a.HD},isTypedArray:function(){return a.fU},isValidDtype:function(){return a.LP},locToIndex:function(){return a.qy},makeOnesTypedArray:function(){return a.p8},makeZerosNestedTypedArray:function(){return a.l6},makeZerosTypedArray:function(){return a.wT},nearestDivisor:function(){return a.jP},nearestLargerEven:function(){return a.nY},now:function(){return w},parseAxisParam:function(){return a.EC},randUniform:function(){return a.bj},repeatedTry:function(){return a.WD},rightPad:function(){return a.oj},shuffle:function(){return a.TV},shuffleCombo:function(){return a.d7},sizeFromShape:function(){return a.NA},sizeToSquarishShape:function(){return a.YP},squeezeShape:function(){return a.bp},sum:function(){return a.Sm},swap:function(){return a.LF},tanh:function(){return a.AE},toNestedArray:function(){return a.GX},toTypedArray:function(){return v}});var r=n(2885),a=n(569),o=n(3720),i=n.n(o);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ let s=i()||o;function u(e){return s.fromString(e,!0,16)}let l=u("c3a5c85c97cb3127"),h=u("b492b66fbe98f273"),c=u("9ae16a3b2f90404f");function d(e){return e.xor(e.shru(47))}function p(e,t,n){let r=e.slice(t,t+n);return s.fromBytes(Array.from(r),!0,!0)}function f(e,t){return p(e,t,8)}function g(e,t){return 0===t?e:e.shru(t).or(e.shl(64-t))}function m(e,t,n=u("9ddfea08eb382d69")){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let a=t.xor(r).mul(n);return(a=a.xor(a.shru(47))).mul(n)}function x(e,t,n,r){return function(e,t,n,r,a,o){a=a.add(e),o=g(o.add(a).add(r),21);let i=a;return a=(a=a.add(t)).add(n),o=o.add(g(a,44)),[a.add(r),o.add(i)]}(f(e,t),f(e,t+8),f(e,t+16),f(e,t+24),n,r)}function b(e,t=e.length){let n=s.fromNumber(81,!0);if(t<=32)return t<=16?function(e,t=e.length){if(t>=8){let n=c.add(2*t),r=f(e,0).add(c),a=f(e,t-8),o=g(a,37).mul(n).add(r),i=g(r,25).add(a).mul(n);return m(o,i,n)}if(t>=4){let s=c.add(2*t),u=p(e,0,4);return m(u.shl(3).add(t),p(e,t-4,4),s)}if(t>0){let h=e[0],x=e[t>>1],b=e[t-1];return d(c.mul(h+(x<<8)).xor(l.mul(t+(b<<2)))).mul(c)}return c}(e,t):function(e,t=e.length){let n=c.add(2*t),r=f(e,0).mul(h),a=f(e,8),o=f(e,t-8).mul(n),i=f(e,t-16).mul(c);return m(g(r.add(a),43).add(g(o,30)).add(i),r.add(g(a.add(c),18)).add(o),n)}(e,t);if(t<=64)return function(e,t=e.length){let n=c.add(2*t),r=f(e,0).mul(c),a=f(e,8),o=f(e,t-8).mul(n),i=f(e,t-16).mul(c),s=g(r.add(a),43).add(g(o,30)).add(i),u=m(s,r.add(g(a.add(c),18)).add(o),n),l=f(e,16).mul(n),h=f(e,24),d=s.add(f(e,t-32)).mul(n),p=u.add(f(e,t-24)).mul(n);return m(g(l.add(h),43).add(g(d,30)).add(p),l.add(g(h.add(r),18)).add(d),n)}(e,t);let r=n,a=n.mul(h).add(113),o=d(a.mul(c).add(113)).mul(c),i=[s.UZERO,s.UZERO],u=[s.UZERO,s.UZERO];r=r.mul(c).add(f(e,0));let b=0,y=(t-1>>6)*64,v=y+(t-1&63)-63;do r=g(r.add(a).add(i[0]).add(f(e,b+8)),37).mul(h),a=g(a.add(i[1]).add(f(e,b+48)),42).mul(h),r=r.xor(u[1]),a=a.add(i[0]).add(f(e,b+40)),o=g(o.add(u[0]),33).mul(h),i=x(e,b,i[1].mul(h),r.add(u[0])),u=x(e,b+32,o.add(u[1]),a.add(f(e,b+16))),[o,r]=[r,o],b+=64;while(b!==y);let w=h.add(o.and(255).shl(1));return b=v,u[0]=u[0].add(t-1&63),i[0]=i[0].add(u[0]),u[0]=u[0].add(i[0]),r=g(r.add(a).add(i[0]).add(f(e,b+8)),37).mul(w),a=g(a.add(i[1]).add(f(e,b+48)),42).mul(w),r=r.xor(u[1].mul(9)),a=a.add(i[0].mul(9).add(f(e,b+40))),o=g(o.add(u[0]),33).mul(w),i=x(e,b,i[1].mul(w),r.add(u[0])),u=x(e,b+32,o.add(u[1]),a.add(f(e,b+16))),[o,r]=[r,o],m(m(i[0],u[0],w).add(d(a).mul(l)).add(o),m(i[1],u[1],w).add(r),w)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function y(e,t){return"string"===t?I(e):v([e],t)}function v(e,t){var n;if("string"===t)throw Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=a.xH(e)),(0,r.OB)().getBool("DEBUG")&&a.D5(e,t),(n=e)instanceof Float32Array&&"float32"===t||n instanceof Int32Array&&"int32"===t||n instanceof Uint8Array&&"bool"===t)return e;if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t){let o=new Uint8Array(e.length);for(let i=0;i<o.length;++i)0!==Math.round(e[i])&&(o[i]=1);return o}throw Error(`Unknown data type ${t}`)}function w(){return(0,r.OB)().platform.now()}function C(e,t){return(0,r.OB)().platform.fetch(e,t)}function I(e,t="utf-8"){return t=t||"utf-8",(0,r.OB)().platform.encode(e,t)}function $(e,t="utf-8"){return t=t||"utf-8",(0,r.OB)().platform.decode(e,t)}},569:function(e,t,n){"use strict";/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ function r(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,s(e,--t,n)}function a(e,t){if(e.length!==t.length)throw Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let n=e.length,r=0;for(;n>0;)r=Math.random()*n|0,s(e,--n,r),s(t,n,r)}function o(e,t,n){return Math.max(e,Math.min(t,n))}function i(e){return e%2==0?e:e+1}function s(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function u(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function l(e,t){let n=Math.random();return t*n+(1-n)*e}function h(e,t){let n=0;for(let r=0;r<e.length;r++){let a=Number(e[r])-Number(t[r]);n+=a*a}return n}function c(e,t){if(!e)throw Error("string"==typeof t?t:t())}function d(e,t,n=""){c(m(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function p(e){c(null!=e,()=>"The input to the tensor constructor must be a non-null value.")}function f(e){if(0===e.length)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function g(e){return 0===e.length}function m(e,t){if(e===t)return!0;if(null==e||null==t||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function x(e){return e%1==0}function b(e){if(null!=Math.tanh)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return -1;{let t=Math.exp(2*e);return(t-1)/(t+1)}}function y(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function v(e){let t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return r(t),t}function w(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function C(e,t=e=>0,n,r=setTimeout){return new Promise((a,o)=>{let i=0,s=()=>{if(e()){a();return}i++;let u=t(i);if(null!=n&&i>=n){o();return}r(s,u)};s()})}function I(e,t){let n=1,r=-1;for(let a=0;a<e.length;++a)if(e[a]>=0)n*=e[a];else if(-1===e[a]){if(-1!==r)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${a}`);r=a}else if(e[a]<0)throw Error(`Shapes can not be < 0. Found ${e[a]} at dim ${a}`);if(-1===r){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(0===n)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!=0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);let o=e.slice();return o[r]=t/n,o}function $(e,t){let n=t.length;return c((e=null==e?t.map((e,t)=>t):[].concat(e)).every(e=>e>=-n&&e<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),c(e.every(e=>x(e)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(e=>e<0?n+e:e)}function E(e,t){let n=[],r=[],a=null!=t&&Array.isArray(t)&&0===t.length,o=null==t||a?null:$(t,e).sort(),i=0;for(let s=0;s<e.length;++s){if(null!=o){if(o[i]===s&&1!==e[s])throw Error(`Can't squeeze axis ${s} since its dim '${e[s]}' is not 1`);(null==o[i]||o[i]>s)&&1===e[s]&&(n.push(e[s]),r.push(s)),o[i]<=s&&i++}1!==e[s]&&(n.push(e[s]),r.push(s))}return{newShape:n,keptDims:r}}function k(e,t){let n=null;if(null==e||"float32"===e)n=new Float32Array(t);else if("int32"===e)n=new Int32Array(t);else if("bool"===e)n=new Uint8Array(t);else throw Error(`Unknown data type ${e}`);return n}function S(e,t){let n=null;if(null==e||"float32"===e)n=new Float32Array(t);else if("int32"===e)n=new Int32Array(t);else if("bool"===e)n=new Uint8Array(t);else if("string"===e)n=Array(t);else throw Error(`Unknown data type ${e}`);return n}function T(e,t){for(let n=0;n<e.length;n++){let r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function _(e){return"bool"===e||"complex64"===e||"float32"===e||"int32"===e||"string"===e}function R(e,t){return"complex64"!==t&&("float32"!==t||"complex64"===e)&&("int32"!==t||"float32"===e||"complex64"===e)&&("bool"!==t||"bool"!==e)}function N(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}function A(e){if("float32"===e||"int32"===e)return 4;if("complex64"===e)return 8;if("bool"===e)return 1;throw Error(`Unknown dtype ${e}`)}function D(e){if(null==e)return 0;let t=0;return e.forEach(e=>t+=e.length),t}function O(e){return"string"==typeof e||e instanceof String}function B(e){return"boolean"==typeof e}function F(e){return"number"==typeof e}function P(e){return!!(e&&e.constructor&&e.call&&e.apply)}function L(e,t){for(let n=t;n<e;++n)if(e%n==0)return n;return e}function W(e){let t=e.length;if(t<2)return[];let n=Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function M(e,t,n=!1){if(0===e.length)return t[0];let r=e.reduce((e,t)=>e*t)*(n?2:1);if(0===r)return[];if(r!==t.length)throw Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return function e(t,n,r,a=!1){let o=[];if(1===n.length){let i=n[0]*(a?2:1);for(let s=0;s<i;s++)o[s]=r[t+s]}else{let u=n[0],l=n.slice(1),h=l.reduce((e,t)=>e*t)*(a?2:1);for(let c=0;c<u;c++)o[c]=e(t+c*h,l,r,a)}return o}(0,e,t,n)}function U(e,t){let n=V(e,t);for(let r=0;r<n.length;r++)n[r]=1;return n}function V(e,t){if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t)return new Uint8Array(e);throw Error(`Unknown data type ${t}`)}function G(e,t){let n=e.reduce((e,t)=>e*t,1);if(null==t||"float32"===t)return M(e,new Float32Array(n));if("int32"===t)return M(e,new Int32Array(n));if("bool"===t)return M(e,new Uint8Array(n));throw Error(`Unknown data type ${t}`)}function z(e){e.forEach(t=>{c(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function X(e,t,n){if(0===t)return 0;if(1===t)return e[0];let r=e[e.length-1];for(let a=0;a<e.length-1;++a)r+=n[a]*e[a];return r}function H(e,t,n){if(0===t)return[];if(1===t)return[e];let r=Array(t);for(let a=0;a<r.length-1;++a)r[a]=Math.floor(e/n[a]),e-=r[a]*n[a];return r[r.length-1]=e,r}function j(e){return e&&e.then&&"function"==typeof e.then}n.d(t,{AE:function(){return b},Cq:function(){return p},D2:function(){return function e(t){if(Array.isArray(t))return e(t[0]);if(t instanceof Float32Array);else if(t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray)return"int32";else if(F(t));else if(O(t))return"string";else if(B(t))return"bool";return"float32"}},D5:function(){return T},E7:function(){return h},EC:function(){return $},GN:function(){return x},GX:function(){return M},HD:function(){return O},JZ:function(){return I},LF:function(){return s},LP:function(){return _},Mu:function(){return z},N9:function(){return g},NA:function(){return f},NE:function(){return H},QB:function(){return R},Sm:function(){return u},TV:function(){return r},U$:function(){return v},Ub:function(){return D},WD:function(){return C},WP:function(){return k},YP:function(){return y},bT:function(){return A},bj:function(){return l},bp:function(){return E},cO:function(){return m},d7:function(){return a},e3:function(){return W},fU:function(){return N},hj:function(){return F},hu:function(){return c},jP:function(){return L},jn:function(){return B},k5:function(){return d},l6:function(){return G},mf:function(){return P},nY:function(){return i},oj:function(){return w},p8:function(){return U},qy:function(){return X},rQ:function(){return S},tI:function(){return j},uZ:function(){return o},wT:function(){return V},xH:function(){return function e(t,n=[],r=!1){if(null==n&&(n=[]),Array.isArray(t)||N(t)&&!r)for(let a=0;a<t.length;++a)e(t[a],n,r);else n.push(t);return n}}})},3720:function(e){e.exports=r;var t=null;try{t=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(n){}function r(e,t,n){this.low=0|e,this.high=0|t,this.unsigned=!!n}function a(e){return!0===(e&&e.__isLong__)}r.prototype.__isLong__,Object.defineProperty(r.prototype,"__isLong__",{value:!0}),r.isLong=a;var o={},i={};function s(e,t){var n,r,a;return t?(e>>>=0,(a=0<=e&&e<256)&&(r=i[e]))?r:(n=l(e,(0|e)<0?-1:0,!0),a&&(i[e]=n),n):(e|=0,(a=-128<=e&&e<128)&&(r=o[e]))?r:(n=l(e,e<0?-1:0,!1),a&&(o[e]=n),n)}function u(e,t){if(isNaN(e))return t?b:x;if(t){if(e<0)return b;if(e>=f)return I}else{if(e<=-g)return $;if(e+1>=g)return C}return e<0?u(-e,t).neg():l(e%p|0,e/p|0,t)}function l(e,t,n){return new r(e,t,n)}r.fromInt=s,r.fromNumber=u,r.fromBits=l;var h=Math.pow;function c(e,t,n){if(0===e.length)throw Error("empty string");if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return x;if("number"==typeof t?(n=t,t=!1):t=!!t,(n=n||10)<2||36<n)throw RangeError("radix");if((r=e.indexOf("-"))>0)throw Error("interior hyphen");if(0===r)return c(e.substring(1),t,n).neg();for(var r,a=u(h(n,8)),o=x,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),l=parseInt(e.substring(i,i+s),n);if(s<8){var d=u(h(n,s));o=o.mul(d).add(u(l))}else o=(o=o.mul(a)).add(u(l))}return o.unsigned=t,o}function d(e,t){return"number"==typeof e?u(e,t):"string"==typeof e?c(e,t):l(e.low,e.high,"boolean"==typeof t?t:e.unsigned)}r.fromString=c,r.fromValue=d;var p=4294967296,f=18446744073709552e3,g=0x7fffffffffffffff,m=s(16777216),x=s(0);r.ZERO=x;var b=s(0,!0);r.UZERO=b;var y=s(1);r.ONE=y;var v=s(1,!0);r.UONE=v;var w=s(-1);r.NEG_ONE=w;var C=l(-1,2147483647,!1);r.MAX_VALUE=C;var I=l(-1,-1,!0);r.MAX_UNSIGNED_VALUE=I;var $=l(0,-2147483648,!1);r.MIN_VALUE=$;var E=r.prototype;E.toInt=function(){return this.unsigned?this.low>>>0:this.low},E.toNumber=function(){return this.unsigned?(this.high>>>0)*p+(this.low>>>0):this.high*p+(this.low>>>0)},E.toString=function(e){if((e=e||10)<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(!this.eq($))return"-"+this.neg().toString(e);var t=u(e),n=this.div(t),r=n.mul(t).sub(this);return n.toString(e)+r.toInt().toString(e)}for(var a=u(h(e,6),this.unsigned),o=this,i="";;){var s=o.div(a),l=(o.sub(s.mul(a)).toInt()>>>0).toString(e);if((o=s).isZero())return l+i;for(;l.length<6;)l="0"+l;i=""+l+i}},E.getHighBits=function(){return this.high},E.getHighBitsUnsigned=function(){return this.high>>>0},E.getLowBits=function(){return this.low},E.getLowBitsUnsigned=function(){return this.low>>>0},E.getNumBitsAbs=function(){if(this.isNegative())return this.eq($)?64:this.neg().getNumBitsAbs();for(var e=0!=this.high?this.high:this.low,t=31;t>0&&(e&1<<t)==0;t--);return 0!=this.high?t+33:t+1},E.isZero=function(){return 0===this.high&&0===this.low},E.eqz=E.isZero,E.isNegative=function(){return!this.unsigned&&this.high<0},E.isPositive=function(){return this.unsigned||this.high>=0},E.isOdd=function(){return(1&this.low)==1},E.isEven=function(){return(1&this.low)==0},E.equals=function(e){return a(e)||(e=d(e)),(this.unsigned===e.unsigned||this.high>>>31!=1||e.high>>>31!=1)&&this.high===e.high&&this.low===e.low},E.eq=E.equals,E.notEquals=function(e){return!this.eq(e)},E.neq=E.notEquals,E.ne=E.notEquals,E.lessThan=function(e){return 0>this.comp(e)},E.lt=E.lessThan,E.lessThanOrEqual=function(e){return 0>=this.comp(e)},E.lte=E.lessThanOrEqual,E.le=E.lessThanOrEqual,E.greaterThan=function(e){return this.comp(e)>0},E.gt=E.greaterThan,E.greaterThanOrEqual=function(e){return this.comp(e)>=0},E.gte=E.greaterThanOrEqual,E.ge=E.greaterThanOrEqual,E.compare=function(e){if(a(e)||(e=d(e)),this.eq(e))return 0;var t=this.isNegative(),n=e.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},E.comp=E.compare,E.negate=function(){return!this.unsigned&&this.eq($)?$:this.not().add(y)},E.neg=E.negate,E.add=function(e){a(e)||(e=d(e));var t,n,r=this.high>>>16,o=65535&this.high,i=this.low>>>16,s=65535&this.low,u=e.high>>>16,h=65535&e.high,c=e.low>>>16,p=65535&e.low,f=0,g=0;return t=0+((n=0+(s+p))>>>16),n&=65535,t+=i+c,g+=t>>>16,t&=65535,g+=o+h,f+=g>>>16,g&=65535,f+=r+u,l(t<<16|n,(f&=65535)<<16|g,this.unsigned)},E.subtract=function(e){return a(e)||(e=d(e)),this.add(e.neg())},E.sub=E.subtract,E.multiply=function(e){if(this.isZero())return x;if(a(e)||(e=d(e)),t)return l(t.mul(this.low,this.high,e.low,e.high),t.get_high(),this.unsigned);if(e.isZero())return x;if(this.eq($))return e.isOdd()?$:x;if(e.eq($))return this.isOdd()?$:x;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(m)&&e.lt(m))return u(this.toNumber()*e.toNumber(),this.unsigned);var n,r,o=this.high>>>16,i=65535&this.high,s=this.low>>>16,h=65535&this.low,c=e.high>>>16,p=65535&e.high,f=e.low>>>16,g=65535&e.low,b=0,y=0;return n=0+((r=0+h*g)>>>16),r&=65535,n+=s*g,y+=n>>>16,n&=65535,n+=h*f,y+=n>>>16,n&=65535,y+=i*g,b+=y>>>16,y&=65535,y+=s*f,b+=y>>>16,y&=65535,y+=h*p,b+=y>>>16,y&=65535,b+=o*g+i*f+s*p+h*c,l(n<<16|r,(b&=65535)<<16|y,this.unsigned)},E.mul=E.multiply,E.divide=function(e){if(a(e)||(e=d(e)),e.isZero())throw Error("division by zero");if(t){var n,r,o;return this.unsigned||-2147483648!==this.high||-1!==e.low||-1!==e.high?l((this.unsigned?t.div_u:t.div_s)(this.low,this.high,e.low,e.high),t.get_high(),this.unsigned):this}if(this.isZero())return this.unsigned?b:x;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return b;if(e.gt(this.shru(1)))return v;o=b}else{if(this.eq($))return e.eq(y)||e.eq(w)?$:e.eq($)?y:(n=this.shr(1).div(e).shl(1)).eq(x)?e.isNegative()?y:w:(r=this.sub(e.mul(n)),o=n.add(r.div(e)));if(e.eq($))return this.unsigned?b:x;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();o=x}for(r=this;r.gte(e);){for(var i=Math.ceil(Math.log(n=Math.max(1,Math.floor(r.toNumber()/e.toNumber())))/Math.LN2),s=i<=48?1:h(2,i-48),c=u(n),p=c.mul(e);p.isNegative()||p.gt(r);)n-=s,p=(c=u(n,this.unsigned)).mul(e);c.isZero()&&(c=y),o=o.add(c),r=r.sub(p)}return o},E.div=E.divide,E.modulo=function(e){return(a(e)||(e=d(e)),t)?l((this.unsigned?t.rem_u:t.rem_s)(this.low,this.high,e.low,e.high),t.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},E.mod=E.modulo,E.rem=E.modulo,E.not=function(){return l(~this.low,~this.high,this.unsigned)},E.and=function(e){return a(e)||(e=d(e)),l(this.low&e.low,this.high&e.high,this.unsigned)},E.or=function(e){return a(e)||(e=d(e)),l(this.low|e.low,this.high|e.high,this.unsigned)},E.xor=function(e){return a(e)||(e=d(e)),l(this.low^e.low,this.high^e.high,this.unsigned)},E.shiftLeft=function(e){return(a(e)&&(e=e.toInt()),0==(e&=63))?this:e<32?l(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):l(0,this.low<<e-32,this.unsigned)},E.shl=E.shiftLeft,E.shiftRight=function(e){return(a(e)&&(e=e.toInt()),0==(e&=63))?this:e<32?l(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):l(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},E.shr=E.shiftRight,E.shiftRightUnsigned=function(e){if(a(e)&&(e=e.toInt()),0==(e&=63))return this;var t=this.high;return e<32?l(this.low>>>e|t<<32-e,t>>>e,this.unsigned):32===e?l(t,0,this.unsigned):l(t>>>e-32,0,this.unsigned)},E.shru=E.shiftRightUnsigned,E.shr_u=E.shiftRightUnsigned,E.toSigned=function(){return this.unsigned?l(this.low,this.high,!1):this},E.toUnsigned=function(){return this.unsigned?this:l(this.low,this.high,!0)},E.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},E.toBytesLE=function(){var e=this.high,t=this.low;return[255&t,t>>>8&255,t>>>16&255,t>>>24,255&e,e>>>8&255,e>>>16&255,e>>>24]},E.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,255&e,t>>>24,t>>>16&255,t>>>8&255,255&t]},r.fromBytes=function(e,t,n){return n?r.fromBytesLE(e,t):r.fromBytesBE(e,t)},r.fromBytesLE=function(e,t){return new r(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},r.fromBytesBE=function(e,t){return new r(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function u(e){return function(t){return r.createElement(l,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,i({key:n},t.attr),e(t.child))})}(e.child))}}function l(e){var t=function(t){var n,a=e.attr,o=e.size,u=e.title,l=s(e,["attr","size","title"]),h=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,l,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==o?r.createElement(o.Consumer,null,function(e){return t(e)}):t(a)}},804:function(e,t,n){"use strict";var r,a,o=n(7294),i=function(e,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},s=(r=a={path:void 0,exports:{},require:function(e,t){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&a.path)}},a.exports,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var o=typeof a;if("string"===o||"number"===o)n.push(a);else if(Array.isArray(a)&&a.length){var i=t.apply(null,a);i&&n.push(i)}else if("object"===o)for(var s in a)e.call(a,s)&&a[s]&&n.push(s)}}return n.join(" ")}r.exports?(t.default=t,r.exports=t):window.classNames=t}(),a.exports);function u(e,t,n){function r(){var l=Date.now()-s;l<t&&l>=0?a=setTimeout(r,t-l):(a=null,n||(u=e.apply(i,o),i=o=null))}null==t&&(t=100);var a,o,i,s,u,l=function(){i=this,o=arguments,s=Date.now();var l=n&&!a;return a||(a=setTimeout(r,t)),l&&(u=e.apply(i,o),i=o=null),u};return l.clear=function(){a&&(clearTimeout(a),a=null)},l.flush=function(){a&&(u=e.apply(i,o),i=o=null,clearTimeout(a),a=null)},l}u.debounce=u,function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".indiana-scroll-container {\n  overflow: auto; }\n  .indiana-scroll-container--dragging {\n    scroll-behavior: auto !important; }\n    .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab; }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important; }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto; }\n\n.indiana-dragging {\n  cursor: -webkit-grab;\n  cursor: grab; }\n");var l,h=(l="indiana-scroll-container",function(e,t){if(!e)return l;"string"==typeof e?n=e:t=e;var n,r=l;return n&&(r+="__"+n),r+(t?Object.keys(t).reduce(function(e,n){var a=t[n];return a&&(e+=" "+("boolean"==typeof a?r+"--"+n:r+"--"+n+"_"+a)),e},""):"")}),c=function(e){function t(t){var n=e.call(this,t)||this;return n.onEndScroll=function(){n.scrolling=!1,!n.pressed&&n.started&&n.processEnd()},n.onScroll=function(e){var t=n.container.current;t.scrollLeft===n.scrollLeft&&t.scrollTop===n.scrollTop||(n.scrolling=!0,n.processScroll(e),n.onEndScroll())},n.onTouchStart=function(e){var t=n.props.nativeMobileScroll;if(n.isDraggable(e.target)){if(n.internal=!0,t&&n.scrolling)n.pressed=!0;else{var r=e.touches[0];n.processClick(e,r.clientX,r.clientY),!t&&n.props.stopPropagation&&e.stopPropagation()}}},n.onTouchEnd=function(e){var t=n.props.nativeMobileScroll;n.pressed&&(!n.started||n.scrolling&&t?n.pressed=!1:n.processEnd(),n.forceUpdate())},n.onTouchMove=function(e){var t=n.props.nativeMobileScroll;if(n.pressed&&(!t||!n.isMobile)){var r=e.touches[0];r&&n.processMove(e,r.clientX,r.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation()}},n.onMouseDown=function(e){n.isDraggable(e.target)&&n.isScrollable()&&(n.internal=!0,-1!==n.props.buttons.indexOf(e.button)&&(n.processClick(e,e.clientX,e.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation()))},n.onMouseMove=function(e){n.pressed&&(n.processMove(e,e.clientX,e.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation())},n.onMouseUp=function(e){n.pressed&&(n.started?n.processEnd():(n.internal=!1,n.pressed=!1,n.forceUpdate(),n.props.onClick&&n.props.onClick(e)),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation())},n.container=o.createRef(),n.onEndScroll=u(n.onEndScroll,300),n.scrolling=!1,n.started=!1,n.pressed=!1,n.internal=!1,n.getRef=n.getRef.bind(n),n}return function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){var e=this.props.nativeMobileScroll,t=this.container.current;window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd),t.addEventListener("touchstart",this.onTouchStart,{passive:!1}),t.addEventListener("mousedown",this.onMouseDown,{passive:!1}),e&&(this.isMobile=this.isMobileDevice(),this.isMobile&&this.forceUpdate())},t.prototype.componentWillUnmount=function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},t.prototype.getElement=function(){return this.container.current},t.prototype.isMobileDevice=function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},t.prototype.isDraggable=function(e){var t=this.props.ignoreElements;if(t){var n=e.closest(t);return null===n||n.contains(this.getElement())}return!0},t.prototype.isScrollable=function(){var e=this.container.current;return e&&(e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight)},t.prototype.processClick=function(e,t,n){var r=this.container.current;this.scrollLeft=r.scrollLeft,this.scrollTop=r.scrollTop,this.clientX=t,this.clientY=n,this.pressed=!0},t.prototype.processStart=function(e){void 0===e&&(e=!0);var t=this.props.onStartScroll;this.started=!0,e&&document.body.classList.add("indiana-dragging"),t&&t({external:!this.internal}),this.forceUpdate()},t.prototype.processScroll=function(e){if(this.started){var t=this.props.onScroll;t&&t({external:!this.internal})}else this.processStart(!1)},t.prototype.processMove=function(e,t,n){var r=this.props,a=r.horizontal,o=r.vertical,i=r.activationDistance,s=r.onScroll,u=this.container.current;this.started?(a&&(u.scrollLeft-=t-this.clientX),o&&(u.scrollTop-=n-this.clientY),s&&s({external:!this.internal}),this.clientX=t,this.clientY=n,this.scrollLeft=u.scrollLeft,this.scrollTop=u.scrollTop):(a&&Math.abs(t-this.clientX)>i||o&&Math.abs(n-this.clientY)>i)&&(this.clientX=t,this.clientY=n,this.processStart())},t.prototype.processEnd=function(){var e=this.props.onEndScroll;this.container.current&&e&&e({external:!this.internal}),this.pressed=!1,this.started=!1,this.scrolling=!1,this.internal=!1,document.body.classList.remove("indiana-dragging"),this.forceUpdate()},t.prototype.getRef=function(e){[this.container,this.props.innerRef].forEach(function(t){t&&("function"==typeof t?t(e):t.current=e)})},t.prototype.render=function(){var e=this.props,t=e.children,n=e.draggingClassName,r=e.className,a=e.style,i=e.hideScrollbars,u=e.component;return o.createElement(u,{className:s(r,this.pressed&&n,h({dragging:this.pressed,"hide-scrollbars":i,"native-scroll":this.isMobile})),style:a,ref:this.getRef,onScroll:this.onScroll},t)},t.defaultProps={nativeMobileScroll:!0,hideScrollbars:!0,activationDistance:10,vertical:!0,horizontal:!0,stopPropagation:!1,style:{},component:"div",buttons:[0]},t}(o.PureComponent);t.Z=c},6377:function(e,t,n){var r=n(4832),a=n(8652),o=n(801),i=n(2030),s=n(3618),u=n(9049),l=n(1971);l.alea=r,l.xor128=a,l.xorwow=o,l.xorshift7=i,l.xor4096=s,l.tychei=u,e.exports=l},4832:function(e,t,n){var r;!function(e,a,o){function i(e){var t,n=this,r=(t=4022871197,function(e){e=String(e);for(var n=0;n<e.length;n++){var r=.02519603282416938*(t+=e.charCodeAt(n));t=r>>>0,r-=t,r*=t,t=r>>>0,r-=t,t+=4294967296*r}return(t>>>0)*23283064365386963e-26});n.next=function(){var e=2091639*n.s0+23283064365386963e-26*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=e-(n.c=0|e)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(e),n.s0<0&&(n.s0+=1),n.s1-=r(e),n.s1<0&&(n.s1+=1),n.s2-=r(e),n.s2<0&&(n.s2+=1),r=null}function s(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function u(e,t){var n=new i(e),r=t&&t.state,a=n.next;return a.int32=function(){return 4294967296*n.next()|0},a.double=function(){return a()+(2097152*a()|0)*11102230246251565e-32},a.quick=a,r&&("object"==typeof r&&s(r,n),a.state=function(){return s(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0!==(r=(function(){return u}).call(t,n,t,a))&&(a.exports=r):this.alea=u}(0,e=n.nmd(e),n.amdD)},9049:function(e,t,n){var r;!function(e,a,o){function i(e){var t=this,n="";t.next=function(){var e=t.b,n=t.c,r=t.d,a=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^a,a=a-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^a,t.a=a-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):n+=e;for(var r=0;r<n.length+20;r++)t.b^=0|n.charCodeAt(r),t.next()}function s(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function u(e,t){var n=new i(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152;while(0===e);return e},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&s(r,n),a.state=function(){return s(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0!==(r=(function(){return u}).call(t,n,t,a))&&(a.exports=r):this.tychei=u}(0,e=n.nmd(e),n.amdD)},8652:function(e,t,n){var r;!function(e,a,o){function i(e){var t=this,n="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),t.next()}function s(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function u(e,t){var n=new i(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152;while(0===e);return e},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&s(r,n),a.state=function(){return s(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0!==(r=(function(){return u}).call(t,n,t,a))&&(a.exports=r):this.xor128=u}(0,e=n.nmd(e),n.amdD)},3618:function(e,t,n){var r;!function(e,a,o){function i(e){var t=this;t.next=function(){var e,n,r=t.w,a=t.X,o=t.i;return t.w=r=r+1640531527|0,n=a[o+34&127],e=a[o=o+1&127],n^=n<<13,e^=e<<17,n^=n>>>15,e^=e>>>12,n=a[o]=n^e,t.i=o,n+(r^r>>>16)|0},function(e,t){var n,r,a,o,i,s=[],u=128;for(t===(0|t)?(r=t,t=null):(t+="\0",r=0,u=Math.max(u,t.length)),a=0,o=-32;o<u;++o)t&&(r^=t.charCodeAt((o+32)%t.length)),0===o&&(i=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,o>=0&&(i=i+1640531527|0,a=0==(n=s[127&o]^=r+i)?a+1:0);for(a>=128&&(s[127&(t&&t.length||0)]=-1),a=127,o=512;o>0;--o)r=s[a+34&127],n=s[a=a+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,s[a]=r^n;e.w=i,e.X=s,e.i=a}(t,e)}function s(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function u(e,t){null==e&&(e=+new Date);var n=new i(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152;while(0===e);return e},a.int32=n.next,a.quick=a,r&&(r.X&&s(r,n),a.state=function(){return s(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0!==(r=(function(){return u}).call(t,n,t,a))&&(a.exports=r):this.xor4096=u}(0,e=n.nmd(e),n.amdD)},2030:function(e,t,n){var r;!function(e,a,o){function i(e){var t=this;t.next=function(){var e,n,r=t.x,a=t.i;return e=r[a],e^=e>>>7,n=e^e<<24,e=r[a+1&7],n^=e^e>>>10,e=r[a+3&7],n^=e^e>>>3,e=r[a+4&7],n^=e^e<<7,e=r[a+7&7],e^=e<<13,n^=e^e<<9,r[a]=n,t.i=a+1&7,n},function(e,t){var n,r=[];if(t===(0|t))r[0]=t;else for(n=0,t=""+t;n<t.length;++n)r[7&n]=r[7&n]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}(t,e)}function s(e,t){return t.x=e.x.slice(),t.i=e.i,t}function u(e,t){null==e&&(e=+new Date);var n=new i(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152;while(0===e);return e},a.int32=n.next,a.quick=a,r&&(r.x&&s(r,n),a.state=function(){return s(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0!==(r=(function(){return u}).call(t,n,t,a))&&(a.exports=r):this.xorshift7=u}(0,e=n.nmd(e),n.amdD)},801:function(e,t,n){var r;!function(e,a,o){function i(e){var t=this,n="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(e^e<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function s(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function u(e,t){var n=new i(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152;while(0===e);return e},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&s(r,n),a.state=function(){return s(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0!==(r=(function(){return u}).call(t,n,t,a))&&(a.exports=r):this.xorwow=u}(0,e=n.nmd(e),n.amdD)},1971:function(e,t,n){var r;!function(a,o,i){var s,u=i.pow(256,6),l=i.pow(2,52),h=2*l;function c(e,t,n){var r=[],c=f(function e(t,n){var r,a=[],o=typeof t;if(n&&"object"==o)for(r in t)try{a.push(e(t[r],n-1))}catch(i){}return a.length?a:"string"==o?t:t+"\0"}((t=!0==t?{entropy:!0}:t||{}).entropy?[e,g(o)]:null==e?function(){try{var e;return s&&(e=s.randomBytes)?e=e(256):(e=new Uint8Array(256),(a.crypto||a.msCrypto).getRandomValues(e)),g(e)}catch(r){var t=a.navigator,n=t&&t.plugins;return[+new Date,a,n,a.screen,g(o)]}}():e,3),r),m=new d(r),x=function(){for(var e=m.g(6),t=u,n=0;e<l;)e=(e+n)*256,t*=256,n=m.g(1);for(;e>=h;)e/=2,t/=2,n>>>=1;return(e+n)/t};return x.int32=function(){return 0|m.g(4)},x.quick=function(){return m.g(4)/4294967296},x.double=x,f(g(m.S),o),(t.pass||n||function(e,t,n,r){return(r&&(r.S&&p(r,m),e.state=function(){return p(m,{})}),n)?(i.random=e,t):e})(x,c,"global"in t?t.global:this==i,t.state)}function d(e){var t,n=e.length,r=this,a=0,o=r.i=r.j=0,i=r.S=[];for(n||(e=[n++]);a<256;)i[a]=a++;for(a=0;a<256;a++)i[a]=i[o=255&o+e[a%n]+(t=i[a])],i[o]=t;(r.g=function(e){for(var t,n=0,a=r.i,o=r.j,i=r.S;e--;)t=i[a=255&a+1],n=256*n+i[255&(i[a]=i[o=255&o+t])+(i[o]=t)];return r.i=a,r.j=o,n})(256)}function p(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function f(e,t){for(var n,r=e+"",a=0;a<r.length;)t[255&a]=255&(n^=19*t[255&a])+r.charCodeAt(a++);return g(t)}function g(e){return String.fromCharCode.apply(0,e)}if(f(i.random(),o),e.exports){e.exports=c;try{s=n(5042)}catch(m){}}else void 0!==(r=(function(){return c}).call(t,n,t,e))&&(e.exports=r)}("undefined"!=typeof self?self:this,[],Math)}}]);