(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[353],{6591:function(e,t,n){"use strict";n.d(t,{a8:function(){return rq},zD:function(){return rX}});var r={};n.r(r),n.d(r,{json:function(){return _}});var a={};n.r(a),n.d(a,{json:function(){return F}});var s={};n.r(s),n.d(s,{json:function(){return M}});var o={};n.r(o),n.d(o,{json:function(){return A}});var i={};n.r(i),n.d(i,{json:function(){return $}});var u={};n.r(u),n.d(u,{json:function(){return O}});var l={};n.r(l),n.d(l,{json:function(){return B}});var p={};n.r(p),n.d(p,{json:function(){return C}});var h={};n.r(h),n.d(h,{json:function(){return P}});var c={};n.r(c),n.d(c,{json:function(){return V}});var d={};n.r(d),n.d(d,{json:function(){return R}});var f={};n.r(f),n.d(f,{json:function(){return z}});var m={};n.r(m),n.d(m,{json:function(){return U}});var y={};n.r(y),n.d(y,{json:function(){return L}});var g={};n.r(g),n.d(g,{json:function(){return W}});var b={};n.r(b),n.d(b,{json:function(){return H}});var k={};n.r(k),n.d(k,{json:function(){return q}});var v=n(7825);(rz=rW||(rW={}))[rz.DT_INVALID=0]="DT_INVALID",rz[rz.DT_FLOAT=1]="DT_FLOAT",rz[rz.DT_DOUBLE=2]="DT_DOUBLE",rz[rz.DT_INT32=3]="DT_INT32",rz[rz.DT_UINT8=4]="DT_UINT8",rz[rz.DT_INT16=5]="DT_INT16",rz[rz.DT_INT8=6]="DT_INT8",rz[rz.DT_STRING=7]="DT_STRING",rz[rz.DT_COMPLEX64=8]="DT_COMPLEX64",rz[rz.DT_INT64=9]="DT_INT64",rz[rz.DT_BOOL=10]="DT_BOOL",rz[rz.DT_QINT8=11]="DT_QINT8",rz[rz.DT_QUINT8=12]="DT_QUINT8",rz[rz.DT_QINT32=13]="DT_QINT32",rz[rz.DT_BFLOAT16=14]="DT_BFLOAT16",rz[rz.DT_FLOAT_REF=101]="DT_FLOAT_REF",rz[rz.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",rz[rz.DT_INT32_REF=103]="DT_INT32_REF",rz[rz.DT_UINT8_REF=104]="DT_UINT8_REF",rz[rz.DT_INT16_REF=105]="DT_INT16_REF",rz[rz.DT_INT8_REF=106]="DT_INT8_REF",rz[rz.DT_STRING_REF=107]="DT_STRING_REF",rz[rz.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",rz[rz.DT_INT64_REF=109]="DT_INT64_REF",rz[rz.DT_BOOL_REF=110]="DT_BOOL_REF",rz[rz.DT_QINT8_REF=111]="DT_QINT8_REF",rz[rz.DT_QUINT8_REF=112]="DT_QUINT8_REF",rz[rz.DT_QINT32_REF=113]="DT_QINT32_REF",rz[rz.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",(rL=(rU=rH||(rH={})).CheckpointFormatVersion||(rU.CheckpointFormatVersion={}))[rL.LEGACY=0]="LEGACY",rL[rL.V1=1]="V1",rL[rL.V2=2]="V2";/**
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
 */ let x={};/**
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
 */ function N(e,t,n,r,a){let s=t.inputParams[e];if(s&&void 0!==s.inputIndexStart){let o=s.inputIndexStart,i=0===s.inputIndexEnd?void 0:void 0===s.inputIndexEnd?o+1:s.inputIndexEnd;if("tensor"===s.type)return w(t.inputNames[s.inputIndexStart],n,r,a);if("tensors"===s.type){let u=t.inputNames.slice(o,i);return u.map(e=>w(e,n,r,a))}let l=w(t.inputNames.slice(o)[0],n,r,a),p=l.dataSync();return"number"===s.type?p[0]:v.D5U.toNestedArray(l.shape,p)}let h=t.attrParams[e];return h&&h.value}function w(e,t,n,r){let[a,s]=S(e);if(null!=r){let o=r.getHashTableHandleByName(a);if(null!=o)return o}let i=n.currentContextIds.find(e=>!!t[T(a,e)]);return void 0!==i?t[T(a,i)][s]:void 0}function I(e,t){let[n,r]=S(e);return[T(n,t&&t.currentContextId),r]}function T(e,t){return t?`${e}-${t}`:e}function S(e){let t=e.split(":");if(1===t.length)return[e,0];let n=t[0];return[n,Number(t[t.length-1])]}function D(e,t,n){let r=N("pad",e,t,n);if("explicit"===r){r=N("explicitPaddings",e,t,n);let a=[[0,0],[0,0],[0,0],[0,0]];for(let s=0;s<4;s++)a[s][0]=r[2*s],a[s][1]=r[2*s+1];return a}return r}function E(e){return e.kept?e:(0,v.d9v)(e)}/**
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
 */ let _=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],F=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],M=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]}],A=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number"}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],$=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],O=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],B=[{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],C=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],P=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]}],V=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]}],R=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],z=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],U=[{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}],L=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],W=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}],H=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],q=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]}];var j=n(1876).Buffer;/**
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
 */ class X{static get Instance(){return this._instance||(this._instance=new this)}constructor(){let e=[].concat(...[r,a,s,o,i,u,l,d,c,p,f,m,y,g,b,k,h].map(e=>e.json));this.opMappers=e.reduce((e,t)=>(e[t.tfOpName]=t,e),{})}transformGraph(e,t={}){let n=e.node,r=[],a=[],s=[],o=n.reduce((e,t)=>(e[t.name]=this.mapNode(t),t.op.startsWith("Placeholder")?r.push(e[t.name]):"Const"===t.op?a.push(e[t.name]):(null==t.input||0===t.input.length)&&s.push(e[t.name]),e),{}),i=[],u=[],l={},p={};null!=t&&(l=this.mapSignatureEntries(t.inputs),p=this.mapSignatureEntries(t.outputs));let h=Object.keys(o);h.forEach(e=>{let t=o[e];t.inputNames.forEach(e=>{let[n]=I(e);t.inputs.push(o[n]),o[n].children.push(t)})}),0===Object.keys(p).length?h.forEach(e=>{let t=o[e];0===t.children.length&&u.push(t)}):Object.keys(p).forEach(e=>{let[t]=I(e),n=o[t];null!=n&&(n.signatureKey=p[e],u.push(n))}),Object.keys(l).length>0?Object.keys(l).forEach(e=>{let[t]=I(e),n=o[t];n&&(n.signatureKey=l[e],i.push(n))}):i=r;let c={};null!=e.library&&null!=e.library.function&&(c=e.library.function.reduce((e,t)=>(e[t.signature.name]=this.mapFunction(t),e),{}));let d={nodes:o,inputs:i,outputs:u,weights:a,placeholders:r,signature:t,functions:c};return s.length>0&&(d.initNodes=s),d}mapSignatureEntries(e){return Object.keys(e||{}).reduce((t,n)=>(t[e[n].name]=n,t),{})}mapNode(e){let t=x[e.op]||this.opMappers[e.op]||{};null==e.attr&&(e.attr={});let n={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map(e=>e.startsWith("^")?e.substr(1):e),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr};return null!=t.inputs&&(n.inputParams=t.inputs.reduce((e,t)=>(e[t.name]={type:t.type,inputIndexStart:t.start,inputIndexEnd:t.end},e),{})),null!=t.attrs&&(n.attrParams=t.attrs.reduce((t,n)=>{let r;let a=n.type;switch(n.type){case"string":void 0===(r=K(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=K(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"string[]":void 0===(r=es(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=es(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"number":void 0===(r=Q(e.attr,n.tfName,n.defaultValue||0))&&n.tfDeprecatedName&&(r=Q(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"number[]":void 0===(r=ea(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=ea(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool":void 0===(r=Y(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=Y(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool[]":void 0===(r=ei(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=ei(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape":void 0===(r=er(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=er(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape[]":void 0===(r=eo(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=eo(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype":void 0===(r=ee(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=ee(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype[]":void 0===(r=et(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=et(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"func":void 0===(r=J(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=J(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"tensor":case"tensors":break;default:throw Error(`Unsupported param type: ${n.type} for op: ${e.op}`)}return t[n.name]={value:r,type:a},t},{})),n}mapFunction(e){let t=e.nodeDef,n=[],r={};null!=t&&(r=t.reduce((e,t)=>(e[t.name]=this.mapNode(t),"Const"===t.op&&n.push(e[t.name]),e),{}));let a=[],s=[];e.signature.inputArg.forEach(e=>{let[t]=I(e.name),n={name:t,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:Z(e.type),type:"dtype"}},children:[]};n.signatureKey=e.name,a.push(n),r[t]=n});let o=Object.keys(r);o.forEach(e=>{let t=r[e];t.inputNames.forEach(e=>{let[n]=I(e);t.inputs.push(r[n]),r[n].children.push(t)})});let i=e.ret;e.signature.outputArg.forEach(e=>{let[t,n]=I(i[e.name]),a=r[t];null!=a&&(a.defaultOutput=n,s.push(a))});let u=this.mapArgsToSignature(e);return{nodes:r,inputs:a,outputs:s,weights:n,placeholders:[],signature:u}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((e,t)=>(e[t.name]=this.mapArgToTensorInfo(t),e),{}),outputs:e.signature.outputArg.reduce((t,n)=>(t[n.name]=this.mapArgToTensorInfo(n,e.ret),t),{})}}mapArgToTensorInfo(e,t){let n=e.name;return null!=t&&(n=t[n]),{name:n,dtype:e.type}}}function G(e,t){let n=Array.isArray(e)?String.fromCharCode.apply(null,e):function(e){let t=(0,v.OBj)().global;if(void 0!==t.atob)return t.atob(e);if(void 0!==j)return new j(e,"base64").toString();throw Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}(e);return t?n:n.toLowerCase()}function K(e,t,n,r=!1){let a=e[t];return null!=a?G(a.s,r):n}function Y(e,t,n){let r=e[t];return r?r.b:n}function Q(e,t,n){let r=e[t]||{},a=null!=r.i?r.i:null!=r.f?r.f:n;return"number"==typeof a?a:parseInt(a,10)}function Z(e){switch("string"==typeof e&&(e=rW[e]),e){case rW.DT_FLOAT:return"float32";case rW.DT_INT32:case rW.DT_INT64:case rW.DT_INT8:case rW.DT_UINT8:return"int32";case rW.DT_BOOL:return"bool";case rW.DT_DOUBLE:return"float32";case rW.DT_STRING:return"string";default:return null}}function J(e,t,n){let r=e[t];return r&&r.func?r.func.name:n}function ee(e,t,n){let r=e[t];return r&&r.type?Z(r.type):n}function et(e,t,n){let r=e[t];return r&&r.list&&r.list.type?r.list.type.map(e=>Z(e)):n}function en(e){return e.unknownRank?void 0:null!=e.dim?e.dim.map(e=>"number"==typeof e.size?e.size:parseInt(e.size,10)):[]}function er(e,t,n){let r=e[t];return r&&r.shape?en(r.shape):n}function ea(e,t,n){let r=e[t];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(e=>"number"==typeof e?e:parseInt(e,10)):n}function es(e,t,n,r=!1){let a=e[t];return a&&a.list&&a.list.s?a.list.s.map(e=>G(e,r)):n}function eo(e,t,n){let r=e[t];return r&&r.list&&r.list.shape?r.list.shape.map(e=>en(e)):n}function ei(e,t,n){let r=e[t];return r&&r.list&&r.list.b?r.list.b:n}/**
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
 */ class eu{constructor(e,t,n){this.node=e,this.tensorMap=t,this.context=n,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(e=>this.getInput(e)),null!=e.rawAttrs&&(this.attrs=Object.keys(e.rawAttrs).reduce((e,t)=>(e[t]=this.getAttr(t),e),{}))}getInput(e){return w(e,this.tensorMap,this.context)}getAttr(e,t){let n=this.node.rawAttrs[e];if(null!=n.tensor)return w(e,this.tensorMap,this.context);if(null!=n.i||null!=n.f)return Q(this.node.rawAttrs,e,t);if(null!=n.s)return K(this.node.rawAttrs,e,t);if(null!=n.b)return Y(this.node.rawAttrs,e,t);if(null!=n.shape)return er(this.node.rawAttrs,e,t);if(null!=n.type)return ee(this.node.rawAttrs,e,t);if(null!=n.list){if(null!=n.list.i||null!=n.list.f)return ea(this.node.rawAttrs,e,t);if(null!=n.list.s)return es(this.node.rawAttrs,e,t);if(null!=n.list.shape)return eo(this.node.rawAttrs,e,t);if(null!=n.list.b)return ei(this.node.rawAttrs,e,t);if(null!=n.list.type)return et(this.node.rawAttrs,e,t)}return t}}var el=n(6407),ep=n(196),eh=n(9121),ec=n(3740),ed=n(569),ef=n(2668);let em=(0,ef.op)({addN_:/**
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
 */ function(e){ed.hu(Array.isArray(e),()=>"The argument passed to tf.addN() must be a list of tensors"),ed.hu(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);let t=e.map((e,t)=>(0,ec._1)(e,`tensors${t}`,"addN")),n=t[0];return t.forEach(e=>{if(e.dtype!==n.dtype)throw Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(e=>{if(!ed.cO(e.shape,n.shape))throw Error("All tensors passed to tf.addN() must have the same shape")}),ep.BV.runKernel(eh.Xz,t)}});var ey=n(5228),eg=n(4841),eb=n(1274),ek=n(9322),ev=n(9165),ex=n(827),eN=n(4513),ew=n(632),eI=n(3453),eT=n(5265);/**
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
 */ let eS=(e,t,n)=>{switch(e.op){case"BiasAdd":case"AddV2":case"Add":return[el.I(N("a",e,t,n),N("b",e,t,n))];case"AddN":return[em(N("tensors",e,t,n))];case"FloorMod":case"Mod":return[ey.w(N("a",e,t,n),N("b",e,t,n))];case"Mul":return[eg.d(N("a",e,t,n),N("b",e,t,n))];case"RealDiv":case"Div":return[eb.h(N("a",e,t,n),N("b",e,t,n))];case"DivNoNan":return[ek.N(N("a",e,t,n),N("b",e,t,n))];case"FloorDiv":return[ev.q(N("a",e,t,n),N("b",e,t,n))];case"Sub":return[ex.l(N("a",e,t,n),N("b",e,t,n))];case"Minimum":return[eN.L(N("a",e,t,n),N("b",e,t,n))];case"Maximum":return[ew.g(N("a",e,t,n),N("b",e,t,n))];case"Pow":return[eI.s(N("a",e,t,n),N("b",e,t,n))];case"SquaredDifference":return[eT.$(N("a",e,t,n),N("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var eD=n(6235),eE=n(7839),e_=n(1470),eF=n(2421),eM=n(1891),eA=n(7037),e$=n(9812),eO=n(369),eB=n(6825),eC=n(1661),eP=n(173),eV=n(2699),eR=n(3233),ez=n(4650),eU=n(4842),eL=n(3426),eW=n(6943),eH=n(2597),eq=n(7474),ej=n(4386),eX=n(7370),eG=n(9036),eK=n(766),eY=n(7409),eQ=n(7809),eZ=n(5503),eJ=n(625),e0=n(9331),e1=n(4434),e2=n(3254),e3=n(3694),e9=n(3261),e6=n(248),e5=n(1869),e4=n(1173),e7=n(2279),e8=n(3582),te=n(2634),tt=n(9451),tn=n(9133),tr=n(8151);/**
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
 */ let ta=(e,t,n)=>{switch(e.op){case"Abs":case"ComplexAbs":return[eD.W(N("x",e,t,n))];case"Acos":return[eE.K(N("x",e,t,n))];case"Acosh":return[e_._(N("x",e,t,n))];case"Asin":return[eF.Z(N("x",e,t,n))];case"Asinh":return[eM.V(N("x",e,t,n))];case"Atan":return[eA.z(N("x",e,t,n))];case"Atan2":return[e$.f(N("x",e,t,n),N("y",e,t,n))];case"Atanh":return[eO.C(N("x",e,t,n))];case"Ceil":return[eB.m(N("x",e,t,n))];case"Complex":return[eC.P(N("real",e,t,n),N("imag",e,t,n))];case"Cos":return[eP.m(N("x",e,t,n))];case"Cosh":return[eV.f(N("x",e,t,n))];case"Elu":return[eR.p(N("x",e,t,n))];case"Erf":return[ez.q(N("x",e,t,n))];case"Exp":return[eU.Q(N("x",e,t,n))];case"Expm1":return[eL.t(N("x",e,t,n))];case"Floor":return[eW.G(N("x",e,t,n))];case"Log":return[eH.c(N("x",e,t,n))];case"Log1p":return[eq.K(N("x",e,t,n))];case"Imag":return[ej.a(N("x",e,t,n))];case"Neg":return[eX.W(N("x",e,t,n))];case"Reciprocal":return[eG.M(N("x",e,t,n))];case"Real":return[eK.k(N("x",e,t,n))];case"Relu":return[eY.U(N("x",e,t,n))];case"Round":return[eQ.N(N("x",e,t,n))];case"Selu":return[eZ.U(N("x",e,t,n))];case"Sigmoid":return[eJ.X(N("x",e,t,n))];case"Sin":return[e0.O(N("x",e,t,n))];case"Sign":return[e1.X(N("x",e,t,n))];case"Sinh":return[e2.R(N("x",e,t,n))];case"Softplus":return[e3.W(N("x",e,t,n))];case"Sqrt":return[e9._(N("x",e,t,n))];case"Square":return[e6.h(N("x",e,t,n))];case"Tanh":return[e5.A(N("x",e,t,n))];case"Tan":return[e4.O(N("x",e,t,n))];case"ClipByValue":return[e7.i(N("x",e,t,n),N("clipValueMin",e,t,n),N("clipValueMax",e,t,n))];case"Relu6":return[e8.b(N("x",e,t,n))];case"Rsqrt":return[te.b(w(e.inputNames[0],t,n))];case"Prod":return[tt.W(N("x",e,t,n),N("axes",e,t,n))];case"LeakyRelu":return[tn.h(N("x",e,t,n),N("alpha",e,t,n))];case"Prelu":return[tr.A(N("x",e,t,n),N("alpha",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */ function ts(e,t,n=""){v.D5U.assert(function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(-1!==e[n]&&-1!==t[n]&&e[n]!==t[n])return!1;return!0}(e,t),()=>n+` Shapes ${e} and ${t} must match`)}/**
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
 */ class to{constructor(e,t,n,r,a,s,o){this.name=e,this.dtype=t,this.maxSize=n,this.elementShape=r,this.identicalElementShapes=a,this.dynamicSize=s,this.clearAfterRead=o,this.tensors=[],this.closed_=!1,this.idTensor=(0,v.iD$)(0),(0,v.CnY)(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(t=>{null!=e&&e.has(t.tensor.id)||t.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);let t=this.tensors[e];if(t.cleared)throw Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map(e=>this.read(e))}write(e,t){if(this.closed_)throw Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);let n=this.tensors[e]||{};if(t.dtype!==this.dtype)throw Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(0===this.size()&&(null==this.elementShape||0===this.elementShape.length)&&(this.elementShape=t.shape),ts(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),n.read)throw Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(n.written)throw Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);n.tensor=t,(0,v.CnY)(t),n.written=!0,this.tensors[e]=n}writeMany(e,t){if(e.length!==t.length)throw Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach((e,n)=>this.write(e,t[n]))}gather(e,t){if(t&&t!==this.dtype)throw Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let n=0;n<this.size();n++)e.push(n)}if(0===e.length)return(0,v.XeE)([],[0].concat(this.elementShape));let r=this.readMany(e);return ts(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),(0,v.knu)(r,0)}concat(e){if(e&&e!==this.dtype)throw Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(0===this.size())return(0,v.XeE)([],[0].concat(this.elementShape));let t=[];for(let n=0;n<this.size();n++)t.push(n);let r=this.readMany(t);return ts(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),(0,v.zoF)(r,0)}scatter(e,t){if(t.dtype!==this.dtype)throw Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);let n=Math.max(...e);if(!this.dynamicSize&&n>=this.maxSize)throw Error(`Max index must be < array size (${n}  vs. ${this.maxSize})`);this.writeMany(e,(0,v.HHK)(t,0))}split(e,t){if(t.dtype!==this.dtype)throw Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let n=0,r=e.map(e=>n+=e);if(n!==t.shape[0])throw Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${n}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);let a=0===n?0:t.size/n,s=[];(0,v.lub)(()=>{t=(0,v.XLQ)(t,[1,n,a]);for(let o=0;o<e.length;++o){let i=0===o?0:r[o-1],u=[0,i,0],l=[1,e[o],a];s[o]=(0,v.XLQ)((0,v.tPi)(t,u,l),this.elementShape)}return s});let o=[];for(let i=0;i<e.length;i++)o[i]=i;this.writeMany(o,s)}}/**
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
 */ class ti{constructor(e,t,n,r=-1){this.tensors=e,this.elementShape=t,this.elementDtype=n,null!=e&&e.forEach(e=>{if(n!==e.dtype)throw Error(`Invalid data types; op elements ${n}, but list elements ${e.dtype}`);ts(t,e.shape,"TensorList shape mismatch: "),(0,v.CnY)(e)}),this.idTensor=(0,v.iD$)(0),this.maxNumElements=r,(0,v.CnY)(this.idTensor)}get id(){return this.idTensor.id}copy(){return new ti([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(t=>{null!=e&&e.has(t.id)||t.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,n=-1){if(t!==this.elementDtype)throw Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(-1!==n&&this.tensors.length!==n)throw Error(`Operation expected a list with ${n} elements but got a list with ${this.tensors.length} elements.`);return ts(e,this.elementShape,"TensorList shape mismatch: "),(0,v.lub)(()=>{let t=this.tensors.map(t=>(0,v.XLQ)(t,e));return(0,v.knu)(t,0)})}popBack(e,t){if(t!==this.elementDtype)throw Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(0===this.size())throw Error("Trying to pop from an empty list.");let n=this.tensors.pop();return ts(n.shape,e,"TensorList shape mismatch: "),(0,v.XLQ)(n,e)}pushBack(e){if(e.dtype!==this.elementDtype)throw Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(ts(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw Error("Trying to push element into a full list.");(0,v.CnY)(e),this.tensors.push(e)}resize(e){if(e<0)throw Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(-1!==this.maxNumElements&&e>this.maxNumElements)throw Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);this.tensors.length=e}getItem(e,t,n){if(n!==this.elementDtype)throw Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(null==this.tensors[e])throw Error(`element at index ${e} is null.`);return ts(this.tensors[e].shape,t,"TensorList shape mismatch: "),this.tensors[e]}setItem(e,t){if(t.dtype!==this.elementDtype)throw Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||-1!==this.maxNumElements&&e>=this.maxNumElements)throw Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);ts(this.elementShape,t.shape,"TensorList shape mismatch: "),(0,v.CnY)(t),this.tensors[e]=t}gather(e,t,n){if(t!==this.elementDtype)throw Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);return(ts(this.elementShape,n,"TensorList shape mismatch: "),0===(e=e.slice(0,this.size())).length)?(0,v.XeE)([],[0].concat(this.elementShape)):(0,v.lub)(()=>{let t=e.map(e=>(0,v.XLQ)(this.tensors[e],n));return(0,v.knu)(t,0)})}concat(e,t){if(e&&e!==this.elementDtype)throw Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);return(ts(this.elementShape,t,"TensorList shape mismatch: "),0===this.size())?(0,v.XeE)([],[0].concat(this.elementShape)):(0,v.lub)(()=>{let e=this.tensors.map(e=>(0,v.XLQ)(e,t));return(0,v.zoF)(e,0)})}}/**
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
 */ let tu=async(e,t,n)=>{switch(e.op){case"If":case"StatelessIf":{let r=N("thenBranch",e,t,n),a=N("elseBranch",e,t,n),s=N("cond",e,t,n),o=N("args",e,t,n),i=await s.data();if(i[0])return n.functionMap[r].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap);return n.functionMap[a].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{let u=N("body",e,t,n),l=N("cond",e,t,n),p=N("args",e,t,n),h=await n.functionMap[l].executeFunctionAsync(p,n.tensorArrayMap,n.tensorListMap),c=p.map(e=>e.id),d=await h[0].data();h.forEach(e=>{e.kept||-1!==c.indexOf(e.id)||e.dispose()});let f=p;for(;d[0];){let m=f;f=await n.functionMap[u].executeFunctionAsync(f,n.tensorArrayMap,n.tensorListMap);let y=f.map(e=>e.id);m.forEach(e=>{e.kept||-1!==c.indexOf(e.id)||-1!==y.indexOf(e.id)||e.dispose()});let g=await n.functionMap[l].executeFunctionAsync(f,n.tensorArrayMap,n.tensorListMap);d=await g[0].data(),g.forEach(e=>{e.kept||-1!==c.indexOf(e.id)||-1!==y.indexOf(e.id)||e.dispose()})}return f}case"LoopCond":{let b=N("pred",e,t,n);return[E(b)]}case"Switch":{let k=N("pred",e,t,n),x=N("data",e,t,n);return x.kept||(x=E(x)),(await k.data())[0]?[void 0,x]:[x,void 0]}case"Merge":{let I=e.inputNames.find(e=>void 0!==w(e,t,n));if(I){let T=w(I,t,n);return[E(T)]}return}case"Enter":{let S=N("frameName",e,t,n),D=N("tensor",e,t,n);return n.enterFrame(S),[E(D)]}case"Exit":{let _=N("tensor",e,t,n);return n.exitFrame(),[E(_)]}case"NextIteration":{let F=N("tensor",e,t,n);return n.nextIteration(),[E(F)]}case"TensorArrayV3":{let M=N("size",e,t,n),A=N("dtype",e,t,n),$=N("elementShape",e,t,n),O=N("dynamicSize",e,t,n),B=N("clearAfterRead",e,t,n),C=N("identicalElementShapes",e,t,n),P=N("name",e,t,n),V=new to(P,A,M,$,C,O,B);return n.addTensorArray(V),[V.idTensor,(0,v.iD$)(1)]}case"TensorArrayWriteV3":{let R=N("tensorArrayId",e,t,n),z=N("index",e,t,n),U=N("tensor",e,t,n),L=n.getTensorArray(R.id);return L.write(z,U),[L.idTensor]}case"TensorArrayReadV3":{let W=N("tensorArrayId",e,t,n),H=N("index",e,t,n),q=n.getTensorArray(W.id);return[q.read(H)]}case"TensorArrayGatherV3":{let j=N("tensorArrayId",e,t,n),X=N("indices",e,t,n),G=N("dtype",e,t,n),K=n.getTensorArray(j.id);return[K.gather(X,G)]}case"TensorArrayScatterV3":{let Y=N("tensorArrayId",e,t,n),Q=N("indices",e,t,n),Z=N("tensor",e,t,n),J=n.getTensorArray(Y.id);return J.scatter(Q,Z),[J.idTensor]}case"TensorArrayConcatV3":{let ee=N("tensorArrayId",e,t,n),et=n.getTensorArray(ee.id),en=N("dtype",e,t,n);return[et.concat(en)]}case"TensorArraySplitV3":{let er=N("tensorArrayId",e,t,n),ea=N("tensor",e,t,n),es=N("lengths",e,t,n),eo=n.getTensorArray(er.id);return eo.split(es,ea),[eo.idTensor]}case"TensorArraySizeV3":{let ei=N("tensorArrayId",e,t,n),eu=n.getTensorArray(ei.id);return[(0,v.iD$)(eu.size(),"int32")]}case"TensorArrayCloseV3":{let el=N("tensorArrayId",e,t,n),ep=n.getTensorArray(el.id);return ep.clearAndClose(),[ep.idTensor]}case"TensorListSetItem":{let eh=N("tensorListId",e,t,n),ec=N("index",e,t,n),ed=N("tensor",e,t,n),ef=n.getTensorList(eh.id);return ef.setItem(ec,ed),[ef.idTensor]}case"TensorListGetItem":{let em=N("tensorListId",e,t,n),ey=N("index",e,t,n),eg=N("elementShape",e,t,n),eb=N("elementDType",e,t,n),ek=n.getTensorList(em.id);return[ek.getItem(ey,eg,eb)]}case"TensorListScatterV2":case"TensorListScatter":{let ev=N("indices",e,t,n),ex=N("tensor",e,t,n),eN=N("elementShape",e,t,n),ew=N("numElements",e,t,n),eI=function(e,t,n,r){if(t.length!==e.shape[0])throw Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);let a=Math.max(...t);if(null!=r&&-1!==r&&a>=r)throw Error(`Max index must be < array size (${a}  vs. ${r})`);let s=new ti([],n,e.dtype,r),o=(0,v.HHK)(e,0);return t.forEach((e,t)=>{s.setItem(e,o[t])}),s}(ex,ev,eN,ew);return n.addTensorList(eI),[eI.idTensor]}case"TensorListReserve":case"EmptyTensorList":{let eT;let eS=N("elementShape",e,t,n),eD=N("elementDType",e,t,n);eT="TensorListReserve"===e.op?"numElements":"maxNumElements";let eE=N(eT,e,t,n),e_=new ti([],eS,eD,eE);return n.addTensorList(e_),[e_.idTensor]}case"TensorListGather":{let eF=N("tensorListId",e,t,n),eM=N("indices",e,t,n),eA=N("elementShape",e,t,n),e$=N("elementDType",e,t,n),eO=n.getTensorList(eF.id);return[eO.gather(eM,e$,eA)]}case"TensorListStack":{let eB=N("tensorListId",e,t,n),eC=N("elementShape",e,t,n),eP=N("elementDType",e,t,n),eV=N("numElements",e,t,n),eR=n.getTensorList(eB.id);return[eR.stack(eC,eP,eV)]}case"TensorListFromTensor":{let ez=N("tensor",e,t,n),eU=N("elementShape",e,t,n),eL=N("elementDType",e,t,n),eW=function(e,t,n){let r=e.dtype;if(e.shape.length<1)throw Error(`Tensor must be at least a vector, but saw shape: ${e.shape}`);if(e.dtype!==n)throw Error(`Invalid data types; op elements ${e.dtype}, but list elements ${n}`);let a=e.shape.slice(1);ts(a,t,"TensorList shape mismatch: ");let s=(0,v.HHK)(e);return new ti(s,t,r)}(ez,eU,eL);return n.addTensorList(eW),[eW.idTensor]}case"TensorListConcat":{let eH=N("tensorListId",e,t,n),eq=n.getTensorList(eH.id),ej=N("dtype",e,t,n),eX=N("elementShape",e,t,n);return[eq.concat(ej,eX)]}case"TensorListPushBack":{let eG=N("tensorListId",e,t,n),eK=N("tensor",e,t,n),eY=n.getTensorList(eG.id);return eY.pushBack(eK),[eY.idTensor]}case"TensorListPopBack":{let eQ=N("tensorListId",e,t,n),eZ=N("elementShape",e,t,n),eJ=N("elementDType",e,t,n),e0=n.getTensorList(eQ.id);return[e0.popBack(eZ,eJ)]}case"TensorListSplit":{let e1=N("tensor",e,t,n),e2=N("elementShape",e,t,n),e3=N("lengths",e,t,n),e9=function(e,t,n){let r=0,a=t.map(e=>r+=e);if(r!==e.shape[0])throw Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${e.shape}`);let s=0===r?0:e.size/r,o=(0,v.lub)(()=>{let o=[];e=(0,v.XLQ)(e,[1,r,s]);for(let i=0;i<t.length;++i){let u=0===i?0:a[i-1],l=[0,u,0],p=[1,t[i],s];o[i]=(0,v.XLQ)((0,v.tPi)(e,l,p),n)}return e.dispose(),o}),i=new ti([],n,e.dtype,t.length);for(let u=0;u<o.length;u++)i.setItem(u,o[u]);return i}(e1,e3,e2);return n.addTensorList(e9),[e9.idTensor]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var tl=n(1355),tp=n(4794),th=n(633),tc=n(747),td=n(2200),tf=n(6013),tm=n(9832),ty=n(2582),tg=n(9323),tb=n(4968);let tk=(0,ef.op)({fusedConv2d_:/**
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
 */ function({x:e,filter:t,strides:n,pad:r,dataFormat:a="NHWC",dilations:s=[1,1],dimRoundingMode:o,bias:i,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:p}){let h,c;if(u=u||"linear",!1===(0,tg.uy)(ep.BV.state.gradientDepth,u)){let d=(0,tp.T)(e,t,n,r,a,s,o);return null!=i&&(d=(0,el.I)(d,i)),(0,tg.QH)(d,u,l,p)}let f=(0,ec._1)(e,"x","conv2d"),m=(0,ec._1)(t,"filter","conv2d"),y=f,g=!1;3===f.rank&&(g=!0,y=(0,tb.X)(f,[1,f.shape[0],f.shape[1],f.shape[2]])),ed.hu(4===y.rank,()=>`Error in fused conv2d: input must be rank 4, but got rank ${y.rank}.`),ed.hu(4===m.rank,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${m.rank}.`),null!=o&&ed.hu(ed.GN(r),()=>`Error in fused conv2d: pad must be an integer when using, dimRoundingMode ${o} but got pad ${r}.`),ed.hu(y.shape[3]===m.shape[2],()=>`Error in conv2d: depth of input (${y.shape[3]}) must match input depth for filter ${m.shape[2]}.`),ed.hu(ty.jT(n,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`),ed.hu("NHWC"===a,()=>`Error in conv2d: got dataFormat of ${a} but only NHWC is currently supported.`);let b=ty.Ix(y.shape,m.shape,n,s,r,o);null!=i&&(h=(0,ec._1)(i,"bias","fused conv2d"),[h]=(0,tc.T_)(h,f),td.$N(b.outShape,h.shape)),null!=l&&(c=(0,ec._1)(l,"prelu weights","fused conv2d"));let k=(e,t)=>{let[a,o,i,l]=t,p=(0,tg.Fr)(e,i,u);ed.hu(ty.I0(s),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);let h=(0,tm._)(o.shape,p,a,n,r),c=(0,tf.p)(o,p,a.shape,n,r),d=[h,c];if(null!=l){let f=(0,tg.pf)(l,p);d.push(f)}return d},v={x:y,filter:m,bias:h,preluActivationWeights:c},x={strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o,activation:u,leakyreluAlpha:p};if(null==i){let N=(0,th.cb)((e,t,n)=>{let r=ep.BV.runKernel(eh._V,v,x);return n([t,e,r]),g&&(r=(0,tb.X)(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:k}});return N(y,m)}{let w=(0,th.cb)((e,t,n,r)=>{let a=ep.BV.runKernel(eh._V,v,x);return r([t,e,a,n]),g&&(a=(0,tb.X)(a,[a.shape[1],a.shape[2],a.shape[3]])),{value:a,gradFunc:k}});return w(y,m,h)}}});var tv=n(4718),tx=n(8098),tN=n(4375);let tw=(0,ef.op)({fusedDepthwiseConv2d_:/**
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
 */ function({x:e,filter:t,strides:n,pad:r,dataFormat:a="NHWC",dilations:s=[1,1],dimRoundingMode:o,bias:i,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:p}){let h,c;if(!1===(0,tg.uy)(ep.BV.state.gradientDepth,u)){let d=(0,tv.B)(e,t,n,r,a,s,o);return null!=i&&(d=(0,el.I)(d,i)),(0,tg.QH)(d,u,l,p)}let f=(0,ec._1)(e,"x","depthwiseConv2d"),m=(0,ec._1)(t,"filter","depthwiseConv2d"),y=f,g=!1;3===f.rank&&(g=!0,y=(0,tb.X)(f,[1,f.shape[0],f.shape[1],f.shape[2]])),ed.hu(4===y.rank,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${y.rank}.`),ed.hu(4===m.rank,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${m.rank}.`),ed.hu(y.shape[3]===m.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${y.shape[3]}) must match the inChannels dimension in filter ${m.shape[2]}.`),null==s&&(s=[1,1]),ed.hu(ty.jT(n,s),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`),null!=o&&ed.hu(ed.GN(r),()=>`Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode ${o} but got pad ${r}.`);let b=ty.Ix(y.shape,m.shape,n,s,r,o,!0);null!=i&&(h=(0,ec._1)(i,"bias","fused conv2d"),[h]=(0,tc.T_)(h,f),td.$N(b.outShape,h.shape)),null!=l&&(c=(0,ec._1)(l,"prelu weights","fused depthwiseConv2d"));let k=(e,t)=>{ed.hu(ty.I0(s),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`);let[a,i,l,p]=t,c=(0,tg.Fr)(e,l,u),d=(0,tN.v)(i.shape,c,a,n,r,s,o),f=(0,tx.z)(i,c,a.shape,n,r,s,o);if(null!=p){let m=(0,tg.pf)(h,c);return[d,f,m]}return[d,f]},v={x:y,filter:m,bias:h,preluActivationWeights:c},x={strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o,activation:u,leakyreluAlpha:p};if(null==i){let N=(0,th.cb)((e,t,n)=>{let r=ep.BV.runKernel(eh.lu,v,x);return n([t,e,r]),g&&(r=(0,tb.X)(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:k}});return N(y,m)}{let w=(0,th.cb)((e,t,n,r)=>{let a=ep.BV.runKernel(eh.lu,v,x);return r([t,e,a,n]),g&&(a=(0,tb.X)(a,[a.shape[1],a.shape[2],a.shape[3]])),{value:a,gradFunc:k}});return w(y,m,h)}}});var tI=n(8687);let tT=(0,ef.op)({fusedMatMul_:/**
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
 */ function({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:a,activation:s="linear",preluActivationWeights:o,leakyreluAlpha:i}){let u,l;if(!1===(0,tg.uy)(ep.BV.state.gradientDepth,s)){let p=(0,tI.O)(e,t,n,r);return null!=a&&(p=(0,el.I)(p,a)),(0,tg.QH)(p,s,o,i)}let h=(0,ec._1)(e,"a","fused matMul"),c=(0,ec._1)(t,"b","fused matMul");[h,c]=(0,tc.T_)(h,c);let d=n?h.shape[h.rank-2]:h.shape[h.rank-1],f=r?c.shape[c.rank-1]:c.shape[c.rank-2],m=n?h.shape[h.rank-1]:h.shape[h.rank-2],y=r?c.shape[c.rank-2]:c.shape[c.rank-1],g=h.shape.slice(0,-2),b=c.shape.slice(0,-2),k=ed.NA(g),v=ed.NA(b);ed.hu(h.rank>=2&&c.rank>=2&&h.rank===c.rank,()=>`Error in fused matMul: inputs must have the same rank of at least 2, got ranks ${h.rank} and ${c.rank}.`),ed.hu(ed.cO(g,b),()=>`Error in fused matMul: outer dimensions (${g}) and (${b}) of Tensors with shapes ${h.shape} and ${c.shape} must match.`),ed.hu(d===f,()=>`Error in fused matMul: inner shapes (${d}) and (${f}) of Tensors with shapes ${h.shape} and ${c.shape} and transposeA=${n} and transposeB=${r} must match.`);let x=h.shape.slice(0,-2).concat([m,y]),N=n?(0,tb.X)(h,[k,d,m]):(0,tb.X)(h,[k,m,d]),w=r?(0,tb.X)(c,[v,y,f]):(0,tb.X)(c,[v,f,y]);null!=a&&(u=(0,ec._1)(a,"bias","fused matMul"),[u]=(0,tc.T_)(u,h),td.$N(x,u.shape)),null!=o&&(l=(0,ec._1)(o,"prelu weights","fused matMul"));let I=(e,t)=>{let o,i;let[u,l,p,h]=t,c=(0,tg.Fr)((0,tb.X)(e,p.shape),p,s);if(n||r?!n&&r?(o=(0,tI.O)(c,l,!1,!1),i=(0,tI.O)(c,u,!0,!1)):n&&!r?(o=(0,tI.O)(l,c,!1,!0),i=(0,tI.O)(u,c,!1,!1)):(o=(0,tI.O)(l,c,!0,!0),i=(0,tI.O)(c,u,!0,!0)):(o=(0,tI.O)(c,l,!1,!0),i=(0,tI.O)(u,c,!0,!1)),null==a)return[o,i];{let d=(0,tg.pf)(h,c);return[o,i,d]}},T={a:N,b:w,bias:u,preluActivationWeights:l},S={transposeA:n,transposeB:r,activation:s,leakyreluAlpha:i};if(null==a){let D=(0,th.cb)((e,t,n)=>{let r=ep.BV.runKernel(eh.us,T,S);return n([e,t,r]),{value:(0,tb.X)(r,x),gradFunc:I}});return D(N,w)}{let E=(0,th.cb)((e,t,n,r)=>{let a=ep.BV.runKernel(eh.us,T,S);return r([e,t,a,n]),{value:(0,tb.X)(a,x),gradFunc:I}});return E(N,w,u)}}});/**
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
 */ var tS=n(1405);let tD=(0,ef.op)({conv3d_:/**
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
 */ function(e,t,n,r,a="NDHWC",s=[1,1,1]){let o=(0,ec._1)(e,"x","conv3d"),i=(0,ec._1)(t,"filter","conv3d"),u=o,l=!1;4===o.rank&&(l=!0,u=(0,tb.X)(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),ed.hu(5===u.rank,()=>`Error in conv3d: input must be rank 5, but got rank ${u.rank}.`),ed.hu(5===i.rank,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),ed.hu(u.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${u.shape[4]}) must match input depth for filter ${i.shape[3]}.`),ed.hu((0,ty.jT)(n,s),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`),ed.hu("NDHWC"===a,()=>`Error in conv3d: got dataFormat of ${a} but only NDHWC is currently supported.`);let p={x:u,filter:i},h=ep.BV.runKernel(eh.x1,p,{strides:n,pad:r,dataFormat:a,dilations:s});return l?(0,tb.X)(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}});var tE=n(5176),t_=n(1174);let tF=(0,ef.op)({maxPoolWithArgmax_:/**
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
 */ function(e,t,n,r,a=!1){let s=(0,ec._1)(e,"x","maxPoolWithArgmax"),o=ep.BV.runKernel(eh.vF,{x:s},{filterSize:t,strides:n,pad:r,includeBatchInIndex:a});return{result:o[0],indexes:o[1]}}});var tM=n(4368),tA=n(2271);let t$=(0,ef.op)({avgPool3d_:/**
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
 */ function(e,t,n,r,a,s="NDHWC",o){null==o?o=[1,1,1]:(0,tM.MX)("dilations is deprecated, this field will be gone in v3.0.0.");let i=(0,ec._1)(e,"x","avgPool3d","float32"),u=i,l=!1;4===i.rank&&(l=!0,u=(0,tb.X)(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),ed.hu(5===u.rank,()=>`Error in avgPool3d: x must be rank 5 but got rank ${u.rank}.`),ed.hu("NDHWC"===s,()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),ed.hu(ty.jT(n,o),()=>`Error in avgPool3d: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),null!=a&&ed.hu(ed.GN(r),()=>`Error in avgPool3d: pad must be an integer when using, dimRoundingMode ${a} but got pad ${r}.`);let p={x:u},h={filterSize:t,strides:n,pad:r,dimRoundingMode:a,dataFormat:s,dilations:o},c=ep.BV.runKernel(eh._k,p,h);return(c=(0,tA.p)(c,u.dtype),l)?(0,tb.X)(c,[c.shape[1],c.shape[2],c.shape[3],c.shape[4]]):c}}),tO=(0,ef.op)({maxPool3d_:/**
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
 */ function(e,t=[1,1,1],n,r,a,s="NDHWC",o){null==o?o=[1,1,1]:(0,tM.MX)("dilations is deprecated, this field will be gone in v3.0.0.");let i=(0,ec._1)(e,"x","maxPool3d"),u=i,l=!1;4===i.rank&&(l=!0,u=(0,tb.X)(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),ed.hu(5===u.rank,()=>`Error in maxPool3d: x must be rank 5 but got rank ${u.rank}.`),ed.hu("NDHWC"===s,()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),ed.hu(ty.jT(n,o),()=>`Error in maxPool3d: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),null!=a&&ed.hu(ed.GN(r),()=>`Error in maxPool3d: pad must be an integer when using, dimRoundingMode ${a} but got pad ${r}.`);let p={x:u},h={filterSize:t,strides:n,pad:r,dimRoundingMode:a,dataFormat:s,dilations:o},c=ep.BV.runKernel(eh.OA,p,h);return l?(0,tb.X)(c,[c.shape[1],c.shape[2],c.shape[3],c.shape[4]]):c}});var tB=n(557);/**
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
 */ function tC(e,t,n){let[r,a]=N("fusedOps",e,t,n),s="prelu"===a,o=N("numArgs",e,t,n);if("biasadd"===r){if(s&&2!==o)throw Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!s&&1!==o)throw Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if("fusedbatchnorm"===r)throw Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported.");let i=N("strides",e,t,n),u=D(e,t,n),l=N("dataFormat",e,t,n).toUpperCase(),p=N("dilations",e,t,n),[h,c]=N("args",e,t,n),d=N("leakyreluAlpha",e,t,n);return{stride:i,pad:u,dataFormat:l,dilations:p,biasArg:h,preluArg:c,activationFunc:a,leakyreluAlpha:d}}let tP=(e,t,n)=>{switch(e.op){case"Conv1D":{let r=N("stride",e,t,n),a=N("pad",e,t,n),s=N("dataFormat",e,t,n).toUpperCase(),o=N("dilation",e,t,n);return[tl.P(N("x",e,t,n),N("filter",e,t,n),r,a,s,o)]}case"Conv2D":{let i=N("strides",e,t,n),u=D(e,t,n),l=N("dataFormat",e,t,n).toUpperCase(),p=N("dilations",e,t,n);return[tp.T(N("x",e,t,n),N("filter",e,t,n),[i[1],i[2]],u,l,[p[1],p[2]])]}case"_FusedConv2D":{let{stride:h,pad:c,dataFormat:d,dilations:f,biasArg:m,preluArg:y,activationFunc:g,leakyreluAlpha:b}=tC(e,t,n);return[tk({x:N("x",e,t,n),filter:N("filter",e,t,n),strides:[h[1],h[2]],pad:c,dataFormat:d,dilations:[f[1],f[2]],bias:m,activation:g,preluActivationWeights:y,leakyreluAlpha:b})]}case"FusedDepthwiseConv2dNative":{let{stride:k,pad:v,dataFormat:x,dilations:w,biasArg:I,preluArg:T,activationFunc:S,leakyreluAlpha:E}=tC(e,t,n);return[tw({x:N("x",e,t,n),filter:N("filter",e,t,n),strides:[k[1],k[2]],pad:v,dataFormat:x,dilations:[w[1],w[2]],bias:I,activation:S,preluActivationWeights:T,leakyreluAlpha:E})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{let _=N("outputShape",e,t,n),F=N("strides",e,t,n),M=D(e,t,n);return[tS.b(N("x",e,t,n),N("filter",e,t,n),_,[F[1],F[2]],M)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{let A=N("strides",e,t,n),$=D(e,t,n),O=N("dilations",e,t,n),B=N("dataFormat",e,t,n).toUpperCase();return[tv.B(N("input",e,t,n),N("filter",e,t,n),[A[1],A[2]],$,B,[O[1],O[2]])]}case"Conv3D":{let C=N("strides",e,t,n),P=N("pad",e,t,n),V=N("dataFormat",e,t,n).toUpperCase(),R=N("dilations",e,t,n);return[tD(N("x",e,t,n),N("filter",e,t,n),[C[1],C[2],C[3]],P,V,[R[1],R[2],R[3]])]}case"AvgPool":{let z=N("strides",e,t,n),U=N("pad",e,t,n),L=N("kernelSize",e,t,n);return[tE.w(N("x",e,t,n),[L[1],L[2]],[z[1],z[2]],U)]}case"MaxPool":{let W=N("strides",e,t,n),H=N("pad",e,t,n),q=N("kernelSize",e,t,n);return[t_._(N("x",e,t,n),[q[1],q[2]],[W[1],W[2]],H)]}case"MaxPoolWithArgmax":{let j=N("strides",e,t,n),X=N("pad",e,t,n),G=N("kernelSize",e,t,n),K=N("includeBatchInIndex",e,t,n),{result:Y,indexes:Q}=tF(N("x",e,t,n),[G[1],G[2]],[j[1],j[2]],X,K);return[Y,Q]}case"AvgPool3D":{let Z=N("strides",e,t,n),J=N("pad",e,t,n),ee=N("kernelSize",e,t,n);return[t$(N("x",e,t,n),[ee[1],ee[2],ee[3]],[Z[1],Z[2],Z[3]],J)]}case"MaxPool3D":{let et=N("strides",e,t,n),en=N("pad",e,t,n),er=N("kernelSize",e,t,n);return[tO(N("x",e,t,n),[er[1],er[2],er[3]],[et[1],et[2],et[3]],en)]}case"Dilation2D":{let ea=N("strides",e,t,n),es=N("pad",e,t,n),eo=N("dilations",e,t,n),ei=ea[1],eu=ea[2],el=eo[1],ep=eo[2];return[tB.W(N("x",e,t,n),N("filter",e,t,n),[ei,eu],es,[el,ep],"NHWC")]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var tV=n(4006);let tR=(0,ef.op)({multinomial_:/**
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
 */ function(e,t,n,r=!1){let a=(0,ec._1)(e,"logits","multinomial"),s=a.size,o=a.rank;if(s<2)throw Error(`Error in multinomial: you need at least 2 outcomes, but got ${s}.`);if(o>2)throw Error(`Rank of probabilities must be 1 or 2, but is ${o}`);n=n||Math.random();let i=1===o?(0,tb.X)(a,[1,-1]):a,u={numSamples:t,seed:n,normalized:r},l=ep.BV.runKernel(eh.NZ,{logits:i},u);return 1===o?(0,tb.X)(l,[l.size]):l}});var tz=n(6708),tU=n(4917),tL=n(7846),tW=n(2657),tH=n(6377);/**
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
 */ class tq{constructor(e,t,n,r,a){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);let s=a||Math.random();this.random=tH.alea(s.toString())}nextValue(){let e,t;if(!isNaN(this.nextVal)){let n=this.nextVal;return this.nextVal=NaN,n}let r=!1;for(;!r;){let a,s,o;do o=(a=2*this.random()-1)*a+(s=2*this.random()-1)*s;while(o>=1||0===o);let i=Math.sqrt(-2*Math.log(o)/o);e=this.mean+this.stdDev*a*i,t=this.mean+this.stdDev*s*i,(!this.truncated||this.isValidTruncated(e))&&(r=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return null==this.dtype||"float32"===this.dtype?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class tj{constructor(e=0,t=1,n,r){if(this.canReturnFloat=()=>null==this.dtype||"float32"===this.dtype,this.min=e,this.range=t-e,this.dtype=n,null==r&&(r=Math.random()),"number"==typeof r&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=tH.alea(r)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}let tX=(0,ef.op)({randomUniform_:/**
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
 */ function(e,t=0,n=1,r="float32",a){let s=(0,tW.f)(e,r),o=new tj(t,n,null,a);for(let i=0;i<s.values.length;i++)s.values[i]=o.nextValue();return s.toTensor()}});var tG=n(7245);let tK=(0,ef.op)({truncatedNormal_:/**
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
 */ function(e,t=0,n=1,r,a){if(null!=r&&"bool"===r)throw Error("Unsupported data type $ { dtype }");let s=new tq(t,n,r,!0,a),o=(0,tW.f)(e,r);for(let i=0;i<o.values.length;i++)o.values[i]=s.nextValue();return o.toTensor()}});var tY=n(9640),tQ=n(6577);/**
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
 */ let tZ=(e,t,n)=>{switch(e.op){case"Fill":{let r=N("shape",e,t,n),a=N("dtype",e,t,n),s=N("value",e,t,n);return[tV.h(r,s,a)]}case"LinSpace":{let o=N("start",e,t,n),i=N("stop",e,t,n),u=N("num",e,t,n);return[/**
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
 */ function(e,t,n){if(n<=0)throw Error("The number of values should be positive.");return ep.BV.runKernel(eh.e7,{},{start:e,stop:t,num:n})}(o,i,u)]}case"Multinomial":{let l=N("logits",e,t,n),p=N("numSamples",e,t,n),h=N("seed",e,t,n);return[tR(l,p,h)]}case"OneHot":{let c=N("indices",e,t,n),d=N("depth",e,t,n),f=N("onValue",e,t,n),m=N("offValue",e,t,n);return[tz.l(c,d,f,m)]}case"Ones":return[tU.i(N("shape",e,t,n),N("dtype",e,t,n))];case"OnesLike":return[tL.J(N("x",e,t,n))];case"RandomUniform":return[tX(N("shape",e,t,n),N("minval",e,t,n),N("maxval",e,t,n),N("dtype",e,t,n))];case"Range":{let y=N("start",e,t,n),g=N("stop",e,t,n),b=N("step",e,t,n);return[tG.w(y,g,b,N("dtype",e,t,n))]}case"TruncatedNormal":{let k=N("shape",e,t,n),v=N("mean",e,t,n),x=N("stdDev",e,t,n),w=N("seed",e,t,n);return[tK(k,v,x,N("dtype",e,t,n),w)]}case"Zeros":return[tY.l(N("shape",e,t,n),N("dtype",e,t,n))];case"ZerosLike":return[tQ.P(N("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var tJ=n(3308),t0=n(8333);/**
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
 */ async function t1(e){let t=(0,ec._1)(e,"condition","whereAsync","bool"),n=await t.data(),r=(0,t0.Z)(t.shape,n);return e!==t&&t.dispose(),r}var t2=n(974);/**
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
 */ async function t3(e,t){let n=(0,ec._1)(e,"x","setdiff1d"),r=(0,ec._1)(t,"y","setdiff1d");ed.hu(n.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`),ed.hu(1===n.rank,()=>`x should be 1D tensor, but got x (${n.shape}).`),ed.hu(1===r.rank,()=>`y should be 1D tensor, but got y (${r.shape}).`);let a=await n.data(),s=await r.data(),o=new Set(s),i=0;for(let u=0;u<a.length;u++)!o.has(a[u])&&i++;let l=new t2.YD([i],n.dtype),p=new t2.YD([i],"int32");for(let h=0,c=0;h<a.length;h++)!o.has(a[h])&&(l.values[c]=a[h],p.values[c]=h,c++);return[l.toTensor(),p.toTensor()]}/**
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
 */ function t9(e,t,n){let r=N("boxes",e,t,n),a=N("scores",e,t,n),s=N("maxOutputSize",e,t,n),o=N("iouThreshold",e,t,n),i=N("scoreThreshold",e,t,n),u=N("softNmsSigma",e,t,n);return{boxes:r,scores:a,maxOutputSize:s,iouThreshold:o,scoreThreshold:i,softNmsSigma:u}}let t6=async(e,t,n)=>{switch(e.op){case"NonMaxSuppressionV5":{let{boxes:r,scores:a,maxOutputSize:s,iouThreshold:o,scoreThreshold:i,softNmsSigma:u}=t9(e,t,n),l=await tJ.BHj.nonMaxSuppressionWithScoreAsync(r,a,s,o,i,u);return[l.selectedIndices,l.selectedScores]}case"NonMaxSuppressionV4":{let{boxes:p,scores:h,maxOutputSize:c,iouThreshold:d,scoreThreshold:f}=t9(e,t,n),m=N("padToMaxOutputSize",e,t,n),y=await tJ.BHj.nonMaxSuppressionPaddedAsync(p,h,c,d,f,m);return[y.selectedIndices,y.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{let{boxes:g,scores:b,maxOutputSize:k,iouThreshold:v,scoreThreshold:x}=t9(e,t,n);return[await tJ.BHj.nonMaxSuppressionAsync(g,b,k,v,x)]}case"Where":{let w=tA.p(N("condition",e,t,n),"bool"),I=[await t1(w)];return w.dispose(),I}case"ListDiff":return t3(N("x",e,t,n),N("y",e,t,n));default:throw TypeError(`Node type ${e.op} is not implemented`)}};var t5=n(3243),t4=n(9608);/**
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
 */ let t7=(e,t,n)=>{switch(e.op){case"TopKV2":{let r=N("x",e,t,n),a=N("k",e,t,n),s=N("sorted",e,t,n),o=t5.h(r,a,s);return[o.values,o.indices]}case"Unique":{let i=N("x",e,t,n),u=t4.T(i);return[u.values,u.indices]}case"UniqueV2":{let l=N("x",e,t,n),p=N("axis",e,t,n),h=t4.T(l,p);return[h.values,h.indices]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var t8=n(6092),ne=n(9494);/**
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
 */ let nt=(e,t,n)=>{switch(e.op){case"Const":return t[e.name];case"PlaceholderWithDefault":let r=N("default",e,t,n);return[w(e.name,t,n)||r];case"Placeholder":return[w(e.name,t,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{let a=N("x",e,t,n);return[E(a)]}case"IdentityN":return N("x",e,t,n).map(e=>E(e));case"Snapshot":let s=N("x",e,t,n);return[E(s)];case"Shape":return[t8.R(N("x",e,t,n).shape,"int32")];case"ShapeN":return N("x",e,t,n).map(e=>t8.R(e.shape));case"Size":return[ne.i(N("x",e,t,n).size,"int32")];case"Rank":return[ne.i(N("x",e,t,n).rank,"int32")];case"NoOp":return[ne.i(1)];case"Print":let o=N("x",e,t,n),i=N("data",e,t,n),u=N("message",e,t,n),l=N("summarize",e,t,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(u);for(let p=0;p<i.length;p++)console.log(Array.prototype.slice.call(i[p].dataSync()).slice(0,l));return[o];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */ class nn{constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=(0,v.iD$)(0),this.tensorMap=new Map,(0,v.CnY)(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}async import(e,t){this.checkKeyAndValueTensor(e,t);let n=await e.data();return this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),(0,v.lub)(()=>{let e=(0,v.HHK)(t),r=n.length,a=e.length;v.D5U.assert(r===a,()=>`The number of elements doesn't match, keys has ${r} elements, the values has ${a} elements.`);for(let s=0;s<r;s++){let o=n[s],i=e[s];(0,v.CnY)(i),this.tensorMap.set(o,i)}return this.handle})}async find(e,t){this.checkKeyAndValueTensor(e,t);let n=await e.data();return(0,v.lub)(()=>{let e=[];for(let r=0;r<n.length;r++){let a=n[r],s=this.findWithDefault(a,t);e.push(s)}return(0,v.knu)(e)})}findWithDefault(e,t){let n=this.tensorMap.get(e);return null!=n?n:t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}}/**
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
 */ let nr=async(e,t,n,r)=>{switch(e.op){case"HashTable":case"HashTableV2":{let a=N("keyDType",e,t,n),s=N("valueDType",e,t,n),o=new nn(a,s);return r.addHashTable(e.name,o),[o.handle]}case"LookupTableImport":case"LookupTableImportV2":{let i=N("tableHandle",e,t,n,r),u=N("keys",e,t,n),l=N("values",e,t,n),p=r.getHashTableById(i.id);return[await p.import(u,l)]}case"LookupTableFind":case"LookupTableFindV2":{let h=N("tableHandle",e,t,n,r),c=N("keys",e,t,n),d=N("defaultValue",e,t,n),f=r.getHashTableById(h.id);return[await f.find(c,d)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},na=(e,t,n)=>{switch(e.op){case"ResizeBilinear":{let r=N("images",e,t,n),a=N("size",e,t,n),s=N("alignCorners",e,t,n),o=N("halfPixelCenters",e,t,n);return[tJ.BHj.resizeBilinear(r,[a[0],a[1]],s,o)]}case"ResizeNearestNeighbor":{let i=N("images",e,t,n),u=N("size",e,t,n),l=N("alignCorners",e,t,n),p=N("halfPixelCenters",e,t,n);return[tJ.BHj.resizeNearestNeighbor(i,[u[0],u[1]],l,p)]}case"CropAndResize":{let h=N("image",e,t,n),c=N("boxes",e,t,n),d=N("boxInd",e,t,n),f=N("cropSize",e,t,n),m=N("method",e,t,n),y=N("extrapolationValue",e,t,n);return[tJ.BHj.cropAndResize(h,c,d,f,m,y)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var ns=n(6477),no=n(6500),ni=n(636),nu=n(7630),nl=n(6573),np=n(624),nh=n(2856),nc=n(8651),nd=n(5750),nf=n(5912);/**
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
 */ let nm=(e,t,n)=>{switch(e.op){case"Equal":return[ns.D(N("a",e,t,n),N("b",e,t,n))];case"NotEqual":return[no.Q(N("a",e,t,n),N("b",e,t,n))];case"Greater":return[ni.p(N("a",e,t,n),N("b",e,t,n))];case"GreaterEqual":return[nu.b(N("a",e,t,n),N("b",e,t,n))];case"Less":return[nl.d(N("a",e,t,n),N("b",e,t,n))];case"LessEqual":return[np.z(N("a",e,t,n),N("b",e,t,n))];case"LogicalAnd":return[nh.H(N("a",e,t,n),N("b",e,t,n))];case"LogicalNot":return[nc.h(N("a",e,t,n))];case"LogicalOr":return[nd.K(N("a",e,t,n),N("b",e,t,n))];case"Select":case"SelectV2":return[nf.a(N("condition",e,t,n),N("a",e,t,n),N("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var ny=n(9065);/**
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
 */ let ng=(e,t,n)=>{switch(e.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[tI.O(N("a",e,t,n),N("b",e,t,n),N("transposeA",e,t,n),N("transposeB",e,t,n))];case"Transpose":return[ny.p(N("x",e,t,n),N("perm",e,t,n))];case"_FusedMatMul":let[r,a]=N("fusedOps",e,t,n),s="prelu"===a,o=N("numArgs",e,t,n),i=N("leakyreluAlpha",e,t,n);if("biasadd"===r){if(s&&2!==o)throw Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!s&&1!==o)throw Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}let[u,l]=N("args",e,t,n);return[tT({a:N("a",e,t,n),b:N("b",e,t,n),transposeA:N("transposeA",e,t,n),transposeB:N("transposeB",e,t,n),bias:u,activation:a,preluActivationWeights:l,leakyreluAlpha:i})];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var nb=n(94),nk=n(9648),nv=n(682),nx=n(1510);let nN=(0,ef.op)({sparseToDense_:/**
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
 */ function(e,t,n,r=0){let a=(0,ec._1)(e,"sparseIndices","sparseToDense","int32"),s=(0,ec._1)(t,"sparseValues","sparseToDense"),o=(0,ec._1)(r,"defaultValue","sparseToDense",s.dtype);return!function(e,t,n,r){if("int32"!==e.dtype)throw Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);let a=e.rank>0?e.shape[0]:1,s=e.rank>1?e.shape[1]:1;if(n.length!==s)throw Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${s}.`);let o=t.size;if(!(0===t.rank||1===t.rank&&o===a))throw Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${a}]`);if(t.dtype!==r.dtype)throw Error("sparseValues.dtype must match defaultValues.dtype")}(a,s,n,o),ep.BV.runKernel(eh.D2,{sparseIndices:a,sparseValues:s,defaultValue:o},{outputShape:n})}}),nw=(e,t,n)=>{switch(e.op){case"FusedBatchNorm":case"FusedBatchNormV2":case"FusedBatchNormV3":return[nb.t(N("x",e,t,n),N("mean",e,t,n),N("variance",e,t,n),N("offset",e,t,n),N("scale",e,t,n),N("epsilon",e,t,n))];case"LRN":return[nk.G(N("x",e,t,n),N("radius",e,t,n),N("bias",e,t,n),N("alpha",e,t,n),N("beta",e,t,n))];case"Softmax":return[nv.X(N("x",e,t,n))];case"LogSoftmax":return[nx.C(N("x",e,t,n))];case"SparseToDense":return[nN(N("sparseIndices",e,t,n),N("outputShape",e,t,n),N("sparseValues",e,t,n),N("defaultValue",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var nI=n(3307),nT=n(5130),nS=n(5735),nD=n(5475),nE=n(781),n_=n(2998),nF=n(47),nM=n(7394),nA=n(7405);let n$=(0,ef.op)({bincount_:/**
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
 */ function(e,t,n){let r=(0,ec._1)(e,"x","bincount"),a=(0,ec._1)(t,"weights","bincount");return ed.hu("int32"===r.dtype,()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),ed.hu(n>=0,()=>`size must be non-negative, but got ${n}.`),ed.hu(a.size===r.size||0===a.size,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${a.shape}.`),ep.BV.runKernel(eh.zv,{x:r,weights:a},{size:n})}}),nO=(0,ef.op)({denseBincount_:/**
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
 */ function(e,t,n,r=!1){let a=(0,ec._1)(e,"x","denseBincount"),s=(0,ec._1)(t,"weights","denseBincount");return ed.hu("int32"===a.dtype,()=>`Error in denseBincount: input dtype must be int32, but got ${a.dtype}`),ed.hu(a.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${a.rank}.`),ed.hu(n>=0,()=>`size must be non-negative, but got ${n}.`),ed.hu(s.size===a.size||0===s.size,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${a.shape}, weights shape: ${s.shape}.`),ep.BV.runKernel(eh.QR,{x:a,weights:s},{size:n,binaryOutput:r})}}),nB=(e,t,n)=>{switch(e.op){case"Max":{let r=N("axis",e,t,n),a=N("keepDims",e,t,n);return[nI.F(N("x",e,t,n),r,a)]}case"Mean":{let s=N("axis",e,t,n),o=N("keepDims",e,t,n);return[nT.J(N("x",e,t,n),s,o)]}case"Min":{let i=N("axis",e,t,n),u=N("keepDims",e,t,n);return[nS.V(N("x",e,t,n),i,u)]}case"Sum":{let l=N("axis",e,t,n),p=N("keepDims",e,t,n);return[nD.S(N("x",e,t,n),l,p)]}case"All":{let h=N("axis",e,t,n),c=N("keepDims",e,t,n);return[nE.$(N("x",e,t,n),h,c)]}case"Any":{let d=N("axis",e,t,n),f=N("keepDims",e,t,n);return[n_.Y(N("x",e,t,n),d,f)]}case"ArgMax":{let m=N("axis",e,t,n);return[nF.N(N("x",e,t,n),m)]}case"ArgMin":{let y=N("axis",e,t,n);return[nM.v(N("x",e,t,n),y)]}case"Prod":{let g=N("axis",e,t,n),b=N("keepDims",e,t,n);return[tt.W(N("x",e,t,n),g,b)]}case"Cumsum":{let k=N("axis",e,t,n),v=N("exclusive",e,t,n),x=N("reverse",e,t,n);return[nA.z(N("x",e,t,n),k,v,x)]}case"Bincount":let w=N("x",e,t,n),I=N("weights",e,t,n),T=N("size",e,t,n);return[n$(w,I,T)];case"DenseBincount":{let S=N("x",e,t,n),D=N("weights",e,t,n),E=N("size",e,t,n),_=N("binaryOutput",e,t,n);return[nO(S,D,E,_)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var nC=n(6884),nP=n(4926),nV=n(7486),nR=n(2676),nz=n(5158),nU=n(9590),nL=n(2991),nW=n(4136),nH=n(7501),nq=n(8644),nj=n(3028);let nX=(0,ef.op)({scatterND_:/**
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
 */ function(e,t,n){let r=(0,ec._1)(e,"indices","scatterND","int32"),a=(0,ec._1)(t,"updates","scatterND");return nj.b0(a,r,n),ep.BV.runKernel(eh.xQ,{indices:r,updates:a},{shape:n})}}),nG=(0,ef.op)({gatherND_:/**
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
 */ function(e,t){let n=(0,ec._1)(t,"indices","gatherND","int32"),r=(0,ec._1)(e,"x","gatherND");return ep.BV.runKernel(eh.q1,{params:r,indices:n})}}),nK=(e,t,n)=>{switch(e.op){case"ConcatV2":case"Concat":{let r=N("n",e,t,n),a=N("axis",e,t,n),s=N("tensors",e,t,n);return s=s.slice(0,r),[nC.z(s,a)]}case"Gather":{let o=N("x",e,t,n),i=N("indices",e,t,n);return[nP.I(o,tA.p(i,"int32"),0)]}case"GatherV2":{let u=N("axis",e,t,n),l=N("batchDims",e,t,n),p=N("x",e,t,n),h=N("indices",e,t,n);return[nP.I(p,tA.p(h,"int32"),u,l)]}case"Reverse":{let c=N("dims",e,t,n),d=[];for(let f=0;f<c.length;f++)c[f]&&d.push(f);let m=N("x",e,t,n);return[nV.G(m,d)]}case"ReverseV2":{let y=N("axis",e,t,n),g=N("x",e,t,n);return[nV.G(g,y)]}case"Slice":{let b=N("begin",e,t,n),k=N("size",e,t,n);return[nR.t(N("x",e,t,n),b,k)]}case"StridedSlice":{let x=N("begin",e,t,n),w=N("end",e,t,n),I=N("strides",e,t,n),T=N("beginMask",e,t,n),S=N("endMask",e,t,n),D=N("ellipsisMask",e,t,n),E=N("newAxisMask",e,t,n),_=N("shrinkAxisMask",e,t,n),F=N("x",e,t,n);return[nz.N(F,x,w,I,T,S,D,E,_)]}case"Pack":return(0,v.lub)(()=>{let r=N("axis",e,t,n),a=N("tensors",e,t,n),s=a[0].shape,o=nU.L(a[0]).shape,i=a.map(e=>{let t=v.D5U.arraysEqual(e.shape,s);if(!t&&!v.D5U.arraysEqual(nU.L(e).shape,o))throw Error("the input tensors shape does not match");return t?e:tb.X(e,s)});return[nL.k(i,r)]});case"Unpack":{let M=N("axis",e,t,n),A=N("tensor",e,t,n);return nW.H(A,M)}case"Tile":{let $=N("reps",e,t,n);return[nH.G(N("x",e,t,n),$)]}case"Split":case"SplitV":{let O=N("axis",e,t,n),B=N("numOrSizeSplits",e,t,n),C=N("x",e,t,n);return nq.V(C,B,O)}case"ScatterNd":{let P=N("indices",e,t,n),V=N("values",e,t,n),R=N("shape",e,t,n);return[nX(P,V,R)]}case"GatherNd":{let z=N("x",e,t,n),U=N("indices",e,t,n);return[nG(z,U)]}case"SparseToDense":{let L=N("sparseIndices",e,t,n),W=N("outputShape",e,t,n),H=N("sparseValues",e,t,n),q=N("defaultValue",e,t,n);return[nN(L,H,W,H.dtype===q.dtype?q:tA.p(q,H.dtype))]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var nY=n(7020),nQ=n(8447),nZ=n(3710),nJ=n(4415);/**
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
 */ let n0=(e,t,n)=>{switch(e.op){case"FFT":return[nY.k(N("x",e,t,n))];case"IFFT":return[nQ.S(N("x",e,t,n))];case"RFFT":return[nZ.Q(N("x",e,t,n))];case"IRFFT":return[nJ.w(N("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var n1=n(1300),n2=n(1483),n3=n(9682),n9=n(7918),n6=n(8441),n5=n(9112),n4=n(8247);/**
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
 */ let n7=(e,t,n)=>{switch(e.op){case"Cast":return[tA.p(N("x",e,t,n),N("dtype",e,t,n))];case"ExpandDims":{let r=N("axis",e,t,n);return[n1.d(N("x",e,t,n),r)]}case"Squeeze":{let a=N("axis",e,t,n);return[nU.L(N("x",e,t,n),a)]}case"Reshape":return[tb.X(N("x",e,t,n),N("shape",e,t,n))];case"MirrorPad":return[n2.V(N("x",e,t,n),N("padding",e,t,n),N("mode",e,t,n))];case"PadV2":case"Pad":return[n3.v(N("x",e,t,n),N("padding",e,t,n),N("constantValue",e,t,n))];case"SpaceToBatchND":{let s=N("blockShape",e,t,n),o=N("paddings",e,t,n);return[n9.f(N("x",e,t,n),s,o)]}case"BatchToSpaceND":{let i=N("blockShape",e,t,n),u=N("crops",e,t,n);return[n6.E(N("x",e,t,n),i,u)]}case"DepthToSpace":{let l=N("blockSize",e,t,n),p=N("dataFormat",e,t,n).toUpperCase();return[n5.n(N("x",e,t,n),l,p)]}case"BroadcastTo":return[n4.U(N("x",e,t,n),N("shape",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */ function n8(e,t,n,r){let a=((e,t,n)=>{switch(e.category){case"arithmetic":return v.lub(()=>eS(e,t,n));case"basic_math":return v.lub(()=>ta(e,t,n));case"control":return tu(e,t,n);case"convolution":return v.lub(()=>tP(e,t,n));case"creation":return v.lub(()=>tZ(e,t,n));case"dynamic":return t6(e,t,n);case"evaluation":return v.lub(()=>t7(e,t,n));case"image":return v.lub(()=>na(e,t,n));case"graph":return v.lub(()=>nt(e,t,n));case"logical":return v.lub(()=>nm(e,t,n));case"matrices":return v.lub(()=>ng(e,t,n));case"normalization":return v.lub(()=>nw(e,t,n));case"reduction":return v.lub(()=>nB(e,t,n));case"slice_join":return v.lub(()=>nK(e,t,n));case"spectral":return v.lub(()=>n0(e,t,n));case"transformation":return v.lub(()=>n7(e,t,n));case"hash_table":return nr(e,t,n,r);case"custom":let a=x[e.op];if(a&&a.customExecutor)return a.customExecutor(new eu(e,t,n));throw TypeError(`Custom op ${e.op} is not registered.`);default:throw TypeError(`Unknown op '${e.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(e,t,n);return v.D5U.isPromise(a)?a.then(e=>[].concat(e)):[].concat(a)}class re{constructor(e={},t={},n={},r={}){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=n,this.functionMap=r,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){let e=[];for(let t=0;t<this.contexts.length-1;t++){let n=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(n))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(e=>0===e.id&&0===e.iterationId?"":`${e.frameName}-${e.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;let e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(let t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(let n in this.tensorListMap)this.tensorListMap[n].clearAndClose(e)}}/**
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
 */ function rt(e,t,n,r){let a=new Set,s=[],o=null,i=null,u=new Set,l=Object.keys(e).map(e=>S(e)[0]),p=[];null!=r&&(p=r.map(e=>S(e.name)[0]));let h=[...t];for(;h.length>0;){let c=h.pop();if((rs(c)||rr.indexOf(c.op)>=0||ra.indexOf(c.op)>=0)&&null==o&&(i=(o=c).children.map(e=>e.name).filter(e=>a.has(e))),a.add(c.name),null==n[c.name]&&-1===l.indexOf(c.name)&&-1===p.indexOf(c.name)){if(0===c.inputs.length){s.push(c.name);continue}c.inputs.forEach(e=>{u.has(e.name)||(u.add(e.name),h.push(e))})}}return{inputs:e,outputs:t,usedNodes:a,missingInputs:s,dynamicNode:o,syncInputs:i}}let rn=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],rr=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],ra=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2"];function rs(e){return rn.indexOf(e.op)>=0}/**
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
 */ class ro{constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,null!=e.functions&&Object.keys(e.functions).forEach(t=>{this._functionExecutorMap[t]=new ro(e.functions[t],this)})}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){let t=Object.keys(e).map(t=>e[t].map(e=>e.id));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{let t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t})}get functions(){return Object.keys(this._functions).reduce((e,t)=>(e[t]=this._functions[t].signature,e),{})}getCompilationKey(e,t){let n=e.map(e=>e.name).sort(),r=t.map(e=>e.name).sort();return n.join(this.SEPERATOR)+"--"+r.join(this.SEPERATOR)}compile(e,t){let n=rt(e,t,this.weightMap,this._initNodes),{missingInputs:r,dynamicNode:a,syncInputs:s}=n;if(null!=a)throw Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${s}]`);if(r.length>0){let o=t.map(e=>e.name),i=Object.keys(e);throw Error(`Cannot compute the outputs [${o}] from the provided inputs [${i}]. Missing the following inputs: [${r}]`)}return function(e,t,n){let{usedNodes:r,inputs:a}=n,s=[],o=Object.keys(a).map(e=>S(e)[0]).map(t=>e.nodes[t]),i=e.initNodes;o.forEach(e=>{r.has(e.name)&&s.push(e)}),e.weights.forEach(e=>{r.has(e.name)&&s.push(e)}),null!=i&&i.forEach(e=>{r.has(e.name)&&s.push(e)});let u=new Set,l=[];for(;s.length>0;){let p=s.pop();u.add(p.name),t[p.name]||l.push(p),p.children.forEach(e=>{!u.has(e.name)&&r.has(e.name)&&e.inputs.every(e=>u.has(e.name))&&s.push(e)})}return l}(this.graph,this.weightMap,n)}execute(e,t){e=this.mapInputs(e);let n=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);let r=n.map(e=>this.graph.nodes[S(e)[0]]),a=t.map(e=>S(e)[0]),s=a.map(e=>this.graph.nodes[e]);0===s.length&&(s=this._outputs);let o=this.getCompilationKey(r,s),i=this.compiledMap.get(o);null==i&&(i=this.compile(e,s),this.compiledMap.set(o,i));let u={},l={};return(0,v.lub)(()=>{let n=new re(this.weightMap,u,l,this.functionExecutorMap),r=Object.assign({},this.weightMap);Object.keys(e).forEach(t=>{let[n,a]=S(t),s=[];s[a]=e[t],r[n]=s});let s=this.getFrozenTensorIds(r),o={};for(let p=0;p<i.length;p++){let h=i[p];if(!r[h.name]){let c=n8(h,r,n,this._resourceManager);if(v.D5U.isPromise(c))throw Error(`The execution of the op '${h.op}' returned a promise. Please use model.executeAsync() instead.`);r[h.name]=c,this.checkTensorForDisposal(h.name,h,r,n,s,a,o)}}return null==this.parent&&n.dispose(s),t.map(e=>w(e,r,n))})}getFrozenTensorIds(e){let t=[].concat.apply([],Object.keys(e).map(t=>e[t]).map(e=>e.map(e=>e.id)));return new Set(t)}checkTensorForDisposal(e,t,n,r,a,s,o){"control"!==t.category&&-1===s.indexOf(e)&&(n[e].forEach(e=>{null!=e&&(o[e.id]=(o[e.id]||0)+t.children.length)}),t.inputs.forEach(e=>{if("control"!==e.category){let t=n[T(e.name,r.currentContextId)];null!=t&&t.forEach(e=>{if(e&&!a.has(e.id)){let t=o[e.id];1===t?(e.dispose(),delete o[e.id]):null!=t&&o[e.id]--}})}}))}async executeAsync(e,t){return this._executeAsync(e,t)}async _executeAsync(e,t,n=!1,r={},a={}){n||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));let s=new re(this.weightMap,r,a,this.functionExecutorMap),o=await this.executeWithControlFlow(e,s,t,n),i=t.map(e=>w(e,o,s)),u=i.map(e=>e.id),l=Object.keys(e).map(t=>e[t].id),p=new Set([...u,...l,...this.weightIds]);return Object.keys(o).forEach(e=>{let t=o[e];t.forEach(e=>{!e||e.isDisposed||p.has(e.id)||e.dispose()})}),null==this.parent&&s.dispose(p),i}async executeFunctionAsync(e,t,n){let r=e.reduce((e,t,n)=>(e[this.inputs[n].name]=t,e),{});return this._executeAsync(r,this.outputNodes,!0,t,n)}async executeWithControlFlow(e,t,n,r){let a=Object.keys(e),s=a.map(e=>this.graph.nodes[S(e)[0]]),o=n.map(e=>S(e)[0]),i=o.map(e=>this.graph.nodes[e]);0===i.length&&(i=this._outputs);let{usedNodes:u,missingInputs:l,dynamicNode:p,syncInputs:h}=rt(e,i,this.weightMap,this._initNodes),c=[...s,...this.graph.weights,...this._initNodes||[]].map(e=>({node:e,contexts:t.currentContext})),d=Object.assign({},this.weightMap);Object.keys(e).forEach(t=>{let[n,r]=S(t),a=[];a[r]=e[t],d[n]=a});let f={},m=this.getFrozenTensorIds(d),y={};for(;c.length>0;){let g=this.processStack(s,c,t,d,y,m,o,f,u);await Promise.all(g)}null!=p||r||console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");let b=i.filter(e=>!rs(e)&&!w(e.name,d,t)).map(e=>e.name);if(b.length>0){let k="";throw null!=p&&(k=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${h}]`),Error(`Cannot compute the outputs [${b}] from the provided inputs [${a}]. Consider providing the following inputs: [${l}]. ${k}`)}return d}processStack(e,t,n,r,a,s,o,i,u){let l=[];for(;t.length>0;){let p=t.pop();n.currentContext=p.contexts;let h="";if("Enter"===p.node.op&&N("isConstant",p.node,r,n)&&([h]=I(p.node.name,n)),null==r[p.node.name]){let c=n8(p.node,r,n,this._resourceManager);h||([h]=I(p.node.name,n));let d=n.currentContext;v.D5U.isPromise(c)?l.push(c.then(e=>(r[h]=e,n.currentContext=d,this.checkTensorForDisposal(h,p.node,r,n,s,o,i),this.processChildNodes(p.node,t,n,r,a,u),e))):(r[h]=c,this.checkTensorForDisposal(h,p.node,r,n,s,o,i),this.processChildNodes(p.node,t,n,r,a,u))}else this.processChildNodes(p.node,t,n,r,a,u)}return l}processChildNodes(e,t,n,r,a,s){e.children.forEach(e=>{let[o]=I(e.name,n);!a[o]&&s.has(e.name)&&("Merge"===e.op?e.inputNames.some(e=>!!w(e,r,n))&&(a[o]=!0,t.push({contexts:n.currentContext,node:e})):e.inputNames.every(e=>!!w(e,r,n))&&(a[o]=!0,t.push({contexts:n.currentContext,node:e})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(e=>e.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(t=>{let n=e[t],[r]=S(t),a=this.graph.nodes[r];if(a.attrParams.shape&&a.attrParams.shape.value){let s=a.attrParams.shape.value,o=s.length===n.shape.length&&n.shape.every((e,t)=>-1===s[t]||s[t]===e);v.D5U.assert(o,()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${s}], but was [${n.shape}]`)}a.attrParams.dtype&&a.attrParams.dtype.value&&v.D5U.assert(n.dtype===a.attrParams.dtype.value,()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${n.dtype}`)})}mapInputs(e){let t={};for(let n in e)if(null!=this._signature&&null!=this._signature.inputs&&null!=this._signature.inputs[n]){let r=this._signature.inputs[n];t[r.name]=e[n]}else t[n]=e[n];return t}checkInputs(e){let t=Object.keys(e).filter(e=>{let[t]=S(e);return null==this.graph.nodes[t]});if(t.length>0)throw Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map(e=>{if(null!=this._signature&&null!=this._signature.outputs&&null!=this._signature.outputs[e]){let t=this._signature.outputs[e];return t.name}return e},{})}checkOutputs(e){e.forEach(e=>{let[t]=S(e);if(!this.graph.nodes[t])throw Error(`The output '${e}' is not found in the graph`)})}}class ri{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(let e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(let t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}}class ru{constructor(e,t={}){this.modelUrl=e,this.loadOptions=t,this.version="n/a",null==t&&(this.loadOptions={}),this.resourceManager=new ri}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}findIOHandler(){let e=this.modelUrl;if(null!=e.load)this.handler=e;else if(null!=this.loadOptions.requestInit)this.handler=v.io.browserHTTPRequest(e,this.loadOptions);else{let t=v.io.getLoadHandlers(e,this.loadOptions);if(0===t.length)t.push(v.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}async load(){if(this.findIOHandler(),null==this.handler.load)throw Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");let e=await this.handler.load();return this.loadSync(e)}loadSync(e){let t;this.artifacts=e;let n=this.artifacts.modelTopology;t=null!=this.artifacts.userDefinedMetadata&&null!=this.artifacts.userDefinedMetadata.signature?this.artifacts.userDefinedMetadata.signature:this.artifacts.signature,this.signature=t,this.version=`${n.versions.producer}.${n.versions.minConsumer}`;let r=v.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new ro(X.Instance.transformGraph(n,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(r),this.executor.resourceManager=this.resourceManager,null!=e.modelInitializer&&null!=e.modelInitializer.node){let a=X.Instance.transformGraph(e.modelInitializer);this.initializer=new ro(a),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(e,t){if("string"==typeof e){let n=v.io.getSaveHandlers(e);if(0===n.length)throw Error(`Cannot find any save handlers for URL '${e}'`);if(n.length>1)throw Error(`Found more than one (${n.length}) save handlers for URL '${e}'`);e=n[0]}if(null==e.save)throw Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}predict(e,t){return this.execute(e,this.outputNodes)}normalizeInputs(e){if(!(e instanceof v.esB)&&!Array.isArray(e))return e;if((e=Array.isArray(e)?e:[e]).length!==this.inputNodes.length)throw Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${e.length} input tensors.`);return this.inputNodes.reduce((t,n,r)=>(t[n]=e[r],t),{})}normalizeOutputs(e){return Array.isArray(e=e||this.outputNodes)?e:[e]}execute(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);let n=this.executor.execute(e,t);return n.length>1?n:n[0]}async executeAsync(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);let n=await this.executor.executeAsync(e,t);return n.length>1?n:n[0]}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((t,n)=>(t[n]=[e[n]],t),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}}async function rl(e,t={}){if(null==e)throw Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");null==t&&(t={}),t.fromTFHub&&null==e.load&&(e.endsWith("/")||(e+="/"),e=`${e}model.json?tfjs-format=file`);let n=new ru(e,t);return await n.load(),n}/**
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
    */ var rp=function(){return(rp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function rh(e,t,n,r){return new(n||(n=Promise))(function(a,s){function o(e){try{u(r.next(e))}catch(t){s(t)}}function i(e){try{u(r.throw(e))}catch(t){s(t)}}function u(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,i)}u((r=r.apply(e,t||[])).next())})}function rc(e,t){var n,r,a,s,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(n)throw TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(i){s=[6,i],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}}let rd=e=>({startEndTensor:e,startPoint:(0,v.tPi)(e,[0,0],[-1,2]),endPoint:(0,v.tPi)(e,[0,2],[-1,2])}),rf={strides:[8,16],anchors:[2,6]};function rm(e,t){let n,r,a;if(e.topLeft instanceof v.esB&&e.bottomRight instanceof v.esB){let[s,o]=(0,v.lub)(()=>[(0,v.zoF)([(0,v.luU)(t-1,e.topLeft.slice(0,1)),e.topLeft.slice(1,1)]),(0,v.zoF)([(0,v.luU)(t-1,e.bottomRight.slice(0,1)),e.bottomRight.slice(1,1)])]);n=s,r=o,null!=e.landmarks&&(a=(0,v.lub)(()=>{let n=(0,v.luU)((0,v.RRF)([t-1,0]),e.landmarks),r=(0,v.RRF)([1,-1]);return(0,v.dC7)(n,r)}))}else{let[i,u]=e.topLeft,[l,p]=e.bottomRight;n=[t-1-i,u],r=[t-1-l,p],null!=e.landmarks&&(a=e.landmarks.map(e=>[t-1-e[0],e[1]]))}let h={topLeft:n,bottomRight:r};return null!=a&&(h.landmarks=a),null!=e.probability&&(h.probability=e.probability instanceof v.esB?e.probability.clone():e.probability),h}function ry(e,t){return(0,v.lub)(()=>((e,t)=>{let n=(0,v.dC7)(e.startPoint,t),r=(0,v.dC7)(e.endPoint,t),a=(0,v.Izb)([n,r],1);return rd(a)})(e.hasOwnProperty("box")?e.box:e,t).startEndTensor.squeeze())}class rg{constructor(e,t,n,r,a,s){this.blazeFaceModel=e,this.width=t,this.height=n,this.maxFaces=r,this.anchorsData=function(e,t,n){let r=[];for(let a=0;a<n.strides.length;a++){let s=n.strides[a],o=Math.floor((t+s-1)/s),i=Math.floor((e+s-1)/s),u=n.anchors[a];for(let l=0;l<o;l++){let p=s*(l+.5);for(let h=0;h<i;h++){let c=s*(h+.5);for(let d=0;d<u;d++)r.push([c,p])}}}return r}(t,n,rf),this.anchors=(0,v.odF)(this.anchorsData),this.inputSizeData=[t,n],this.inputSize=(0,v.RRF)([t,n]),this.iouThreshold=a,this.scoreThreshold=s}async getBoundingBoxes(e,t,n=!0){let r;let[a,s,o]=(0,v.lub)(()=>{let t=e.resizeBilinear([this.width,this.height]),n=(0,v.dC7)((0,v.luU)(t.div(255),.5),2),r=this.blazeFaceModel.predict(n).squeeze(),a=function(e,t,n){let r=(0,v.tPi)(e,[0,1],[-1,2]),a=(0,v.IHx)(r,t),s=(0,v.tPi)(e,[0,3],[-1,2]),o=(0,v.hiC)(s,n),i=(0,v.hiC)(a,n),u=(0,v.hiC)(o,2),l=(0,v.luU)(i,u),p=(0,v.IHx)(i,u),h=(0,v.dC7)(l,n),c=(0,v.dC7)(p,n);return(0,v.Izb)([h,c],1)}(r,this.anchors,this.inputSize),s=(0,v.tPi)(r,[0,0],[-1,1]);return[r,a,(0,v.XD2)(s).squeeze()]}),i=console.warn;console.warn=()=>{};let u=v.BHj.nonMaxSuppression(s,o,this.maxFaces,this.iouThreshold,this.scoreThreshold);console.warn=i;let l=await u.array();u.dispose();let p=l.map(e=>(0,v.tPi)(s,[e,0],[1,-1]));t||(p=await Promise.all(p.map(async e=>{let t=await e.array();return e.dispose(),t})));let h=e.shape[1],c=e.shape[2];r=t?(0,v.hiC)([c,h],this.inputSize):[c/this.inputSizeData[0],h/this.inputSizeData[1]];let d=[];for(let f=0;f<p.length;f++){let m=p[f],y=(0,v.lub)(()=>{let e;let r=rd(m instanceof v.esB?m:(0,v.odF)(m));if(!n)return r;let s=l[f];return e=t?this.anchors.slice([s,0],[1,2]):this.anchorsData[s],{box:r,landmarks:(0,v.tPi)(a,[s,5],[1,-1]).squeeze().reshape([6,-1]),probability:(0,v.tPi)(o,[s],[1]),anchor:e}});d.push(y)}return s.dispose(),o.dispose(),a.dispose(),{boxes:d,scaleFactor:r}}async estimateFaces(e,t=!1,n=!1,r=!0){var a;let[,s]=(a=e)instanceof v.esB?[a.shape[0],a.shape[1]]:[a.height,a.width],o=(0,v.lub)(()=>(e instanceof v.esB||(e=v.Xhn.fromPixels(e)),e.toFloat().expandDims(0))),{boxes:i,scaleFactor:u}=await this.getBoundingBoxes(o,t,r);return o.dispose(),t?i.map(e=>{let t=ry(e,u),a={topLeft:t.slice([0],[2]),bottomRight:t.slice([2],[2])};if(r){let{landmarks:o,probability:i,anchor:l}=e,p=o.add(l).mul(u);a.landmarks=p,a.probability=i}return n&&(a=rm(a,s)),a}):Promise.all(i.map(async e=>{let t;let a=ry(e,u);if(r){var o;let[i,l,p]=await Promise.all([e.landmarks,a,e.probability].map(async e=>e.array())),h=e.anchor,[c,d]=u,f=i.map(e=>[(e[0]+h[0])*c,(e[1]+h[1])*d]);t={topLeft:l.slice(0,2),bottomRight:l.slice(2),landmarks:f,probability:p},(o=e.box).startEndTensor.dispose(),o.startPoint.dispose(),o.endPoint.dispose(),e.landmarks.dispose(),e.probability.dispose()}else{let m=await a.array();t={topLeft:m.slice(0,2),bottomRight:m.slice(2)}}return a.dispose(),n&&(t=rm(t,s)),t}))}}async function rb({maxFaces:e=10,inputWidth:t=128,inputHeight:n=128,iouThreshold:r=.3,scoreThreshold:a=.75}={}){let s=await rl("https://tfhub.dev/tensorflow/tfjs-model/blazeface/1/default/1",{fromTFHub:!0});return new rg(s,t,n,e,r,a)}var rk={silhouette:[10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109],lipsUpperOuter:[61,185,40,39,37,0,267,269,270,409,291],lipsLowerOuter:[146,91,181,84,17,314,405,321,375,291],lipsUpperInner:[78,191,80,81,82,13,312,311,310,415,308],lipsLowerInner:[78,95,88,178,87,14,317,402,318,324,308],rightEyeUpper0:[246,161,160,159,158,157,173],rightEyeLower0:[33,7,163,144,145,153,154,155,133],rightEyeUpper1:[247,30,29,27,28,56,190],rightEyeLower1:[130,25,110,24,23,22,26,112,243],rightEyeUpper2:[113,225,224,223,222,221,189],rightEyeLower2:[226,31,228,229,230,231,232,233,244],rightEyeLower3:[143,111,117,118,119,120,121,128,245],rightEyebrowUpper:[156,70,63,105,66,107,55,193],rightEyebrowLower:[35,124,46,53,52,65],rightEyeIris:[473,474,475,476,477],leftEyeUpper0:[466,388,387,386,385,384,398],leftEyeLower0:[263,249,390,373,374,380,381,382,362],leftEyeUpper1:[467,260,259,257,258,286,414],leftEyeLower1:[359,255,339,254,253,252,256,341,463],leftEyeUpper2:[342,445,444,443,442,441,413],leftEyeLower2:[446,261,448,449,450,451,452,453,464],leftEyeLower3:[372,340,346,347,348,349,350,357,465],leftEyebrowUpper:[383,300,293,334,296,336,285,417],leftEyebrowLower:[265,353,276,283,282,295],leftEyeIris:[468,469,470,471,472],midwayBetweenEyes:[168],noseTip:[1],noseBottom:[2],noseRightCorner:[98],noseLeftCorner:[327],rightCheek:[205],leftCheek:[425]};function rv(e){return[Math.abs(e.endPoint[0]-e.startPoint[0]),Math.abs(e.endPoint[1]-e.startPoint[1])]}function rx(e){return[e.startPoint[0]+(e.endPoint[0]-e.startPoint[0])/2,e.startPoint[1]+(e.endPoint[1]-e.startPoint[1])/2]}function rN(e,t){void 0===t&&(t=1.5);var n=rx(e),r=rv(e),a=[t*r[0]/2,t*r[1]/2];return{startPoint:[n[0]-a[0],n[1]-a[1]],endPoint:[n[0]+a[0],n[1]+a[1]],landmarks:e.landmarks}}var rw=[[1,0,0],[0,1,0],[0,0,1]];function rI(e,t){return[[1,0,e],[0,1,t],[0,0,1]]}function rT(e,t){for(var n=0,r=0;r<e.length;r++)n+=e[r]*t[r];return n}function rS(e,t){for(var n=[],r=e.length,a=0;a<r;a++){n.push([]);for(var s=0;s<r;s++)n[a].push(rT(e[a],function(e,t){for(var n=[],r=0;r<e.length;r++)n.push(e[r][t]);return n}(t,s)))}return n}function rD(e,t){var n=Math.cos(e),r=Math.sin(e),a=rS(rI(t[0],t[1]),[[n,-r,0],[r,n,0],[0,0,1]]);return rS(a,rI(-t[0],-t[1]))}var rE=[13,rk.midwayBetweenEyes[0]],r_=rk.leftEyeLower0,rF=[r_[0],r_[r_.length-1]],rM=rk.rightEyeLower0,rA=[rM[0],rM[rM.length-1]],r$=[{key:"EyeUpper0",indices:[9,10,11,12,13,14,15]},{key:"EyeUpper1",indices:[25,26,27,28,29,30,31]},{key:"EyeUpper2",indices:[41,42,43,44,45,46,47]},{key:"EyeLower0",indices:[0,1,2,3,4,5,6,7,8]},{key:"EyeLower1",indices:[16,17,18,19,20,21,22,23,24]},{key:"EyeLower2",indices:[32,33,34,35,36,37,38,39,40]},{key:"EyeLower3",indices:[54,55,56,57,58,59,60,61,62]},{key:"EyebrowUpper",indices:[63,64,65,66,67,68,69,70]},{key:"EyebrowLower",indices:[48,49,50,51,52,53]}];function rO(e,t,n,r){for(var a=0;a<r$.length;a++){var s=r$[a],o=s.key,i=s.indices,u=rk[""+n+o];if(null==r||r.includes(o))for(var l=0;l<i.length;l++){var p=i[l];e[u[l]]=[t[p][0],t[p][1],(t[p][2]+e[u[l]][2])/2]}}}var rB=function(){function e(e,t,n,r,a,s,o){this.regionsOfInterest=[],this.runsWithoutFaceDetector=0,this.boundingBoxDetector=e,this.meshDetector=t,this.irisModel=o,this.meshWidth=n,this.meshHeight=r,this.maxContinuousChecks=a,this.maxFaces=s}return e.prototype.transformRawCoords=function(e,t,n,r){var a,s,o,i=this,u=rv({startPoint:t.startPoint,endPoint:t.endPoint}),l=[u[0]/this.meshWidth,u[1]/this.meshHeight],p=e.map(function(e){return[l[0]*(e[0]-i.meshWidth/2),l[1]*(e[1]-i.meshHeight/2),e[2]]}),h=rD(n,[0,0]),c=p.map(function(e){return[rT(e,h[0]),rT(e,h[1])].concat([e[2]])}),d=(a=[[r[0][0],r[1][0]],[r[0][1],r[1][1]]],s=[r[0][2],r[1][2]],o=[-rT(a[0],s),-rT(a[1],s)],[a[0].concat(o[0]),a[1].concat(o[1]),[0,0,1]]),f=rx({startPoint:t.startPoint,endPoint:t.endPoint}).concat([1]),m=[rT(f,d[0]),rT(f,d[1])];return c.map(function(e){return[e[0]+m[0],e[1]+m[1],e[2]]})},e.prototype.getLeftToRightEyeDepthDifference=function(e){return e[rF[0]][2]-e[rA[0]][2]},e.prototype.getEyeBox=function(e,t,n,r,a){void 0===a&&(a=!1);var s,o,i,u,l=(o=rx(s=rN(this.calculateLandmarksBoundingBox([e[n],e[r]]),2.3)),i=rv(s),u=Math.max.apply(Math,i)/2,{startPoint:[o[0]-u,o[1]-u],endPoint:[o[0]+u,o[1]+u],landmarks:s.landmarks}),p=rv(l),h=v.BHj.cropAndResize(t,[[l.startPoint[1]/this.meshHeight,l.startPoint[0]/this.meshWidth,l.endPoint[1]/this.meshHeight,l.endPoint[0]/this.meshWidth]],[0],[64,64]);return a&&(h=v.BHj.flipLeftRight(h)),{box:l,boxSize:p,crop:h}},e.prototype.getEyeCoords=function(e,t,n,r){void 0===r&&(r=!1);for(var a=[],s=0;s<76;s++){var o=e[3*s],i=e[3*s+1],u=e[3*s+2];a.push([(r?1-o/64:o/64)*n[0]+t.startPoint[0],i/64*n[1]+t.startPoint[1],u])}return{rawCoords:a,iris:a.slice(71)}},e.prototype.getAdjustedIrisCoords=function(e,t,n){var r=e[rk[n+"EyeUpper0"][3]][2],a=e[rk[n+"EyeLower0"][4]][2],s=(r+a)/2;return t.map(function(e,t){var n=s;return 2===t?n=r:4===t&&(n=a),[e[0],e[1],n]})},e.prototype.predict=function(e,t){return rh(this,void 0,void 0,function(){var n,r,a,s,o=this;return rc(this,function(i){switch(i.label){case 0:return this.shouldUpdateRegionsOfInterest()?[4,this.boundingBoxDetector.getBoundingBoxes(e,!1,!0)]:[3,2];case 1:return r=(n=i.sent()).boxes,a=n.scaleFactor,0===r.length?(this.regionsOfInterest=[],[2,null]):(s=r.map(function(e){var t={startPoint:e.box.startPoint.squeeze().arraySync(),endPoint:e.box.endPoint.squeeze().arraySync()};return rp({},rN({startPoint:[t.startPoint[0]*a[0],t.startPoint[1]*a[1]],endPoint:[t.endPoint[0]*a[0],t.endPoint[1]*a[1]]}),{landmarks:e.landmarks.arraySync()})}),r.forEach(function(e){null!=e&&null!=e.startPoint&&(e.startEndTensor.dispose(),e.startPoint.dispose(),e.endPoint.dispose())}),this.updateRegionsOfInterest(s),this.runsWithoutFaceDetector=0,[3,3]);case 2:this.runsWithoutFaceDetector++,i.label=3;case 3:return[2,(0,v.lub)(function(){return o.regionsOfInterest.map(function(n,r){var a,s,i,u,l,p,h,c,d,f,m=n.landmarks.length>=468,y=rE[0],g=rE[1];!1===m&&(y=3,g=2),a=n.landmarks[y],f=(i=Math.PI/2-Math.atan2(-((s=n.landmarks[g])[1]-a[1]),s[0]-a[0]))-2*Math.PI*Math.floor((i+Math.PI)/(2*Math.PI));var b=rx({startPoint:n.startPoint,endPoint:n.endPoint}),k=[b[0]/e.shape[2],b[1]/e.shape[1]],x=e,N=rw;0!==f&&(x=v.BHj.rotateWithOffset(e,f,0,k),N=rD(-f,b));var w=(u={startPoint:n.startPoint,endPoint:n.endPoint},l=x,p=[o.meshHeight,o.meshWidth],h=l.shape[1],c=l.shape[2],d=[[u.startPoint[1]/h,u.startPoint[0]/c,u.endPoint[1]/h,u.endPoint[0]/c]],v.BHj.cropAndResize(l,d,[0],p)).div(255),I=o.meshDetector.predict(w),T=I[1],S=I[2],D=(0,v.XLQ)(S,[-1,3]).arraySync();if(t){var E=o.getEyeBox(D,w,rF[0],rF[1],!0),_=E.box,F=E.boxSize,M=E.crop,A=o.getEyeBox(D,w,rA[0],rA[1]),$=A.box,O=A.boxSize,B=A.crop,C=o.irisModel.predict((0,v.zoF)([M,B])).dataSync(),P=C.slice(0,228),V=o.getEyeCoords(P,_,F,!0),R=V.rawCoords,z=V.iris,U=C.slice(228),L=o.getEyeCoords(U,$,O),W=L.rawCoords,H=L.iris,q=o.getLeftToRightEyeDepthDifference(D);30>Math.abs(q)?(rO(D,R,"left"),rO(D,W,"right")):q<1?rO(D,R,"left",["EyeUpper0","EyeLower0"]):rO(D,W,"right",["EyeUpper0","EyeLower0"]);var j=o.getAdjustedIrisCoords(D,z,"left"),X=o.getAdjustedIrisCoords(D,H,"right");D=D.concat(j).concat(X)}var G=o.transformRawCoords(D,n,f,N),K=(0,v.odF)(G),Y=rN(o.calculateLandmarksBoundingBox(G));return o.regionsOfInterest[r]=rp({},Y,{landmarks:K.arraySync()}),{coords:(0,v.odF)(D,[D.length,3]),scaledCoords:K,box:Y,flag:T.squeeze()}})})]}})})},e.prototype.updateRegionsOfInterest=function(e){for(var t=0;t<e.length;t++){var n=e[t],r=this.regionsOfInterest[t],a=0;if(r&&r.startPoint){var s=n.startPoint,o=s[0],i=s[1],u=n.endPoint,l=u[0],p=u[1],h=r.startPoint,c=h[0],d=h[1],f=r.endPoint,m=f[0],y=f[1],g=(Math.min(l,m)-Math.max(o,c))*(Math.min(p,y)-Math.max(i,d));a=g/((l-o)*(p-i)+(m-c)*(y-i)-g)}a<.25&&(this.regionsOfInterest[t]=n)}this.regionsOfInterest=this.regionsOfInterest.slice(0,e.length)},e.prototype.clearRegionOfInterest=function(e){null!=this.regionsOfInterest[e]&&(this.regionsOfInterest=this.regionsOfInterest.slice(0,e).concat(this.regionsOfInterest.slice(e+1)))},e.prototype.shouldUpdateRegionsOfInterest=function(){var e=this.regionsOfInterest.length,t=0===e;return 1===this.maxFaces||t?t:e!==this.maxFaces&&this.runsWithoutFaceDetector>=this.maxContinuousChecks},e.prototype.calculateLandmarksBoundingBox=function(e){var t=e.map(function(e){return e[0]}),n=e.map(function(e){return e[1]});return{startPoint:[Math.min.apply(Math,t),Math.min.apply(Math,n)],endPoint:[Math.max.apply(Math,t),Math.max.apply(Math,n)]}},e}(),rC=[[.499976992607117,.652534008026123],[.500025987625122,.547487020492554],[.499974012374878,.602371990680695],[.482113003730774,.471979022026062],[.500150978565216,.527155995368958],[.499909996986389,.498252987861633],[.499523013830185,.40106201171875],[.289712011814117,.380764007568359],[.499954998493195,.312398016452789],[.499987006187439,.269918978214264],[.500023007392883,.107050001621246],[.500023007392883,.666234016418457],[.5000159740448,.679224014282227],[.500023007392883,.692348003387451],[.499976992607117,.695277988910675],[.499976992607117,.70593398809433],[.499976992607117,.719385027885437],[.499976992607117,.737019002437592],[.499967992305756,.781370997428894],[.499816000461578,.562981009483337],[.473773002624512,.573909997940063],[.104906998574734,.254140973091125],[.365929991006851,.409575998783112],[.338757991790771,.41302502155304],[.311120003461838,.409460008144379],[.274657994508743,.389131009578705],[.393361985683441,.403706014156342],[.345234006643295,.344011008739471],[.370094001293182,.346076011657715],[.319321990013123,.347265005111694],[.297903001308441,.353591024875641],[.24779200553894,.410809993743896],[.396889001131058,.842755019664764],[.280097991228104,.375599980354309],[.106310002505779,.399955987930298],[.2099249958992,.391353011131287],[.355807989835739,.534406006336212],[.471751004457474,.65040397644043],[.474155008792877,.680191993713379],[.439785003662109,.657229006290436],[.414617002010345,.66654098033905],[.450374007225037,.680860996246338],[.428770989179611,.682690978050232],[.374971002340317,.727805018424988],[.486716985702515,.547628998756409],[.485300987958908,.527395009994507],[.257764995098114,.314490020275116],[.401223003864288,.455172002315521],[.429818987846375,.548614978790283],[.421351999044418,.533740997314453],[.276895999908447,.532056987285614],[.483370006084442,.499586999416351],[.33721199631691,.282882988452911],[.296391993761063,.293242990970612],[.169294998049736,.193813979625702],[.447580009698868,.302609980106354],[.392390012741089,.353887975215912],[.354490011930466,.696784019470215],[.067304998636246,.730105042457581],[.442739009857178,.572826027870178],[.457098007202148,.584792017936707],[.381974011659622,.694710969924927],[.392388999462128,.694203019142151],[.277076005935669,.271932005882263],[.422551989555359,.563233017921448],[.385919004678726,.281364023685455],[.383103013038635,.255840003490448],[.331431001424789,.119714021682739],[.229923993349075,.232002973556519],[.364500999450684,.189113974571228],[.229622006416321,.299540996551514],[.173287004232407,.278747975826263],[.472878992557526,.666198015213013],[.446828007698059,.668527007102966],[.422762006521225,.673889994621277],[.445307999849319,.580065965652466],[.388103008270264,.693961024284363],[.403039008378983,.706539988517761],[.403629004955292,.693953037261963],[.460041999816895,.557139039039612],[.431158006191254,.692366003990173],[.452181994915009,.692366003990173],[.475387006998062,.692366003990173],[.465828001499176,.779190003871918],[.472328990697861,.736225962638855],[.473087012767792,.717857003211975],[.473122000694275,.704625964164734],[.473033010959625,.695277988910675],[.427942007780075,.695277988910675],[.426479011774063,.703539967536926],[.423162013292313,.711845993995667],[.4183090031147,.720062971115112],[.390094995498657,.639572978019714],[.013953999616206,.560034036636353],[.499913990497589,.58014702796936],[.413199990987778,.69539999961853],[.409626007080078,.701822996139526],[.468080013990402,.601534962654114],[.422728985548019,.585985004901886],[.463079988956451,.593783974647522],[.37211999297142,.47341400384903],[.334562003612518,.496073007583618],[.411671012639999,.546965003013611],[.242175996303558,.14767599105835],[.290776997804642,.201445996761322],[.327338010072708,.256527006626129],[.399509996175766,.748921036720276],[.441727995872498,.261676013469696],[.429764986038208,.187834024429321],[.412198007106781,.108901023864746],[.288955003023148,.398952007293701],[.218936994671822,.435410976409912],[.41278201341629,.398970007896423],[.257135003805161,.355440020561218],[.427684992551804,.437960982322693],[.448339998722076,.536936044692993],[.178560003638268,.45755398273468],[.247308000922203,.457193970680237],[.286267012357712,.467674970626831],[.332827985286713,.460712015628815],[.368755996227264,.447206974029541],[.398963987827301,.432654976844788],[.476410001516342,.405806005001068],[.189241006970406,.523923993110657],[.228962004184723,.348950982093811],[.490725994110107,.562400996685028],[.404670000076294,.485132992267609],[.019469000399113,.401564002037048],[.426243007183075,.420431017875671],[.396993011236191,.548797011375427],[.266469985246658,.376977026462555],[.439121007919312,.51895797252655],[.032313998788595,.644356966018677],[.419054001569748,.387154996395111],[.462783008813858,.505746960639954],[.238978996872902,.779744982719421],[.198220998048782,.831938028335571],[.107550002634525,.540755033493042],[.183610007166862,.740257024765015],[.134409993886948,.333683013916016],[.385764002799988,.883153975009918],[.490967005491257,.579378008842468],[.382384985685349,.508572995662689],[.174399003386497,.397670984268188],[.318785011768341,.39623498916626],[.343364000320435,.400596976280212],[.396100014448166,.710216999053955],[.187885001301765,.588537991046906],[.430987000465393,.944064974784851],[.318993002176285,.898285031318665],[.266247987747192,.869701027870178],[.500023007392883,.190576016902924],[.499976992607117,.954452991485596],[.366169989109039,.398822009563446],[.393207013607025,.39553701877594],[.410373002290726,.391080021858215],[.194993004202843,.342101991176605],[.388664990663528,.362284004688263],[.365961998701096,.355970978736877],[.343364000320435,.355356991291046],[.318785011768341,.35834002494812],[.301414996385574,.363156020641327],[.058132998645306,.319076001644135],[.301414996385574,.387449026107788],[.499987989664078,.618434011936188],[.415838003158569,.624195992946625],[.445681989192963,.566076993942261],[.465844005346298,.620640993118286],[.49992299079895,.351523995399475],[.288718998432159,.819945991039276],[.335278987884521,.852819979190826],[.440512001514435,.902418971061707],[.128294005990028,.791940987110138],[.408771991729736,.373893976211548],[.455606997013092,.451801002025604],[.499877005815506,.908990025520325],[.375436991453171,.924192011356354],[.11421000212431,.615022003650665],[.448662012815475,.695277988910675],[.4480200111866,.704632043838501],[.447111994028091,.715808033943176],[.444831997156143,.730794012546539],[.430011987686157,.766808986663818],[.406787008047104,.685672998428345],[.400738000869751,.681069016456604],[.392399996519089,.677703022956848],[.367855995893478,.663918972015381],[.247923001646996,.601333022117615],[.452769994735718,.420849978923798],[.43639200925827,.359887003898621],[.416164010763168,.368713974952698],[.413385987281799,.692366003990173],[.228018000721931,.683571994304657],[.468268007040024,.352671027183533],[.411361992359161,.804327011108398],[.499989002943039,.469825029373169],[.479153990745544,.442654013633728],[.499974012374878,.439637005329132],[.432112008333206,.493588984012604],[.499886006116867,.866917014122009],[.49991300702095,.821729004383087],[.456548988819122,.819200992584229],[.344549000263214,.745438992977142],[.37890899181366,.574010014533997],[.374292999505997,.780184984207153],[.319687992334366,.570737957954407],[.357154995203018,.604269981384277],[.295284003019333,.621580958366394],[.447750002145767,.862477004528046],[.410986006259918,.508723020553589],[.31395098567009,.775308012962341],[.354128003120422,.812552988529205],[.324548006057739,.703992962837219],[.189096003770828,.646299958229065],[.279776990413666,.71465802192688],[.1338230073452,.682700991630554],[.336768001317978,.644733011722565],[.429883986711502,.466521978378296],[.455527991056442,.548622965812683],[.437114000320435,.558896005153656],[.467287987470627,.529924988746643],[.414712011814117,.335219979286194],[.37704598903656,.322777986526489],[.344107985496521,.320150971412659],[.312875986099243,.32233202457428],[.283526003360748,.333190023899078],[.241245999932289,.382785975933075],[.102986000478268,.468762993812561],[.267612010240555,.424560010433197],[.297879010438919,.433175981044769],[.333433985710144,.433878004550934],[.366427004337311,.426115989685059],[.396012008190155,.416696012020111],[.420121014118195,.41022801399231],[.007561000064015,.480777025222778],[.432949006557465,.569517970085144],[.458638995885849,.479089021682739],[.473466008901596,.545744001865387],[.476087987422943,.563830018043518],[.468472003936768,.555056989192963],[.433990985155106,.582361996173859],[.483518004417419,.562983989715576],[.482482999563217,.57784903049469],[.42645001411438,.389798998832703],[.438998997211456,.39649498462677],[.450067013502121,.400434017181396],[.289712011814117,.368252992630005],[.276670008897781,.363372981548309],[.517862021923065,.471948027610779],[.710287988185883,.380764007568359],[.526226997375488,.573909997940063],[.895093023777008,.254140973091125],[.634069979190826,.409575998783112],[.661242008209229,.41302502155304],[.688880026340485,.409460008144379],[.725341975688934,.389131009578705],[.606630027294159,.40370500087738],[.654766023159027,.344011008739471],[.629905998706818,.346076011657715],[.680678009986877,.347265005111694],[.702096998691559,.353591024875641],[.75221198797226,.410804986953735],[.602918028831482,.842862963676453],[.719901978969574,.375599980354309],[.893692970275879,.399959981441498],[.790081977844238,.391354024410248],[.643998026847839,.534487962722778],[.528249025344849,.65040397644043],[.525849997997284,.680191040039062],[.560214996337891,.657229006290436],[.585384011268616,.66654098033905],[.549625992774963,.680860996246338],[.57122802734375,.682691991329193],[.624852001667023,.72809898853302],[.513050019741058,.547281980514526],[.51509702205658,.527251958847046],[.742246985435486,.314507007598877],[.598631024360657,.454979002475739],[.570338010787964,.548575043678284],[.578631997108459,.533622980117798],[.723087012767792,.532054007053375],[.516445994377136,.499638974666595],[.662801027297974,.282917976379395],[.70362401008606,.293271005153656],[.830704987049103,.193813979625702],[.552385985851288,.302568018436432],[.607609987258911,.353887975215912],[.645429015159607,.696707010269165],[.932694971561432,.730105042457581],[.557260990142822,.572826027870178],[.542901992797852,.584792017936707],[.6180260181427,.694710969924927],[.607590973377228,.694203019142151],[.722943007946014,.271963000297546],[.577413976192474,.563166975975037],[.614082992076874,.281386971473694],[.616907000541687,.255886018276215],[.668509006500244,.119913995265961],[.770092010498047,.232020974159241],[.635536015033722,.189248979091644],[.77039098739624,.299556016921997],[.826722025871277,.278755009174347],[.527121007442474,.666198015213013],[.553171992301941,.668527007102966],[.577238023281097,.673889994621277],[.554691970348358,.580065965652466],[.611896991729736,.693961024284363],[.59696102142334,.706539988517761],[.596370995044708,.693953037261963],[.539958000183105,.557139039039612],[.568841993808746,.692366003990173],[.547818005084991,.692366003990173],[.52461302280426,.692366003990173],[.534089982509613,.779141008853912],[.527670979499817,.736225962638855],[.526912987232208,.717857003211975],[.526877999305725,.704625964164734],[.526966989040375,.695277988910675],[.572058022022247,.695277988910675],[.573521018028259,.703539967536926],[.57683801651001,.711845993995667],[.581691026687622,.720062971115112],[.609944999217987,.639909982681274],[.986046016216278,.560034036636353],[.5867999792099,.69539999961853],[.590372025966644,.701822996139526],[.531915009021759,.601536989212036],[.577268004417419,.585934996604919],[.536915004253387,.593786001205444],[.627542972564697,.473352015018463],[.665585994720459,.495950996875763],[.588353991508484,.546862006187439],[.757824003696442,.14767599105835],[.709249973297119,.201507985591888],[.672684013843536,.256581008434296],[.600408971309662,.74900496006012],[.55826598405838,.261672019958496],[.570303976535797,.187870979309082],[.588165998458862,.109044015407562],[.711045026779175,.398952007293701],[.781069993972778,.435405015945435],[.587247014045715,.398931980133057],[.742869973182678,.355445981025696],[.572156012058258,.437651991844177],[.55186802148819,.536570012569427],[.821442008018494,.457556009292603],[.752701997756958,.457181990146637],[.71375697851181,.467626988887787],[.66711300611496,.460672974586487],[.631101012229919,.447153985500336],[.6008620262146,.432473003864288],[.523481011390686,.405627012252808],[.810747981071472,.523926019668579],[.771045982837677,.348959028720856],[.509127020835876,.562718033790588],[.595292985439301,.485023975372314],[.980530977249146,.401564002037048],[.573499977588654,.420000016689301],[.602994978427887,.548687994480133],[.733529984951019,.376977026462555],[.560611009597778,.519016981124878],[.967685997486115,.644356966018677],[.580985009670258,.387160003185272],[.537728011608124,.505385041236877],[.760966002941132,.779752969741821],[.801778972148895,.831938028335571],[.892440974712372,.54076099395752],[.816350996494293,.740260004997253],[.865594983100891,.333687007427216],[.614073991775513,.883246004581451],[.508952975273132,.579437971115112],[.617941975593567,.508316040039062],[.825608015060425,.397674977779388],[.681214988231659,.39623498916626],[.656635999679565,.400596976280212],[.603900015354156,.710216999053955],[.81208598613739,.588539004325867],[.56801301240921,.944564998149872],[.681007981300354,.898285031318665],[.733752012252808,.869701027870178],[.633830010890961,.398822009563446],[.606792986392975,.39553701877594],[.589659988880157,.391062021255493],[.805015981197357,.342108011245728],[.611334979534149,.362284004688263],[.634037971496582,.355970978736877],[.656635999679565,.355356991291046],[.681214988231659,.35834002494812],[.698584973812103,.363156020641327],[.941866993904114,.319076001644135],[.698584973812103,.387449026107788],[.584177017211914,.624107003211975],[.554318010807037,.566076993942261],[.534153997898102,.62064003944397],[.711217999458313,.819975018501282],[.664629995822906,.852871000766754],[.559099972248077,.902631998062134],[.871706008911133,.791940987110138],[.591234028339386,.373893976211548],[.544341027736664,.451583981513977],[.624562978744507,.924192011356354],[.88577002286911,.615028977394104],[.551338016986847,.695277988910675],[.551980018615723,.704632043838501],[.552887976169586,.715808033943176],[.555167973041534,.730794012546539],[.569944024085999,.767035007476807],[.593203008174896,.685675978660583],[.599261999130249,.681069016456604],[.607599973678589,.677703022956848],[.631937980651855,.663500010967255],[.752032995223999,.601315021514893],[.547226011753082,.420395016670227],[.563543975353241,.359827995300293],[.583841025829315,.368713974952698],[.586614012718201,.692366003990173],[.771915018558502,.683578014373779],[.531597018241882,.352482974529266],[.588370978832245,.804440975189209],[.52079701423645,.442565023899078],[.567984998226166,.493479013442993],[.543282985687256,.819254994392395],[.655317008495331,.745514988899231],[.621008992195129,.574018001556396],[.625559985637665,.78031200170517],[.680198013782501,.570719003677368],[.64276397228241,.604337990283966],[.704662978649139,.621529996395111],[.552012026309967,.862591981887817],[.589071989059448,.508637011051178],[.685944974422455,.775357007980347],[.645735025405884,.812640011310577],[.675342977046967,.703978002071381],[.810858011245728,.646304965019226],[.72012197971344,.714666962623596],[.866151988506317,.682704985141754],[.663187026977539,.644596993923187],[.570082008838654,.466325998306274],[.544561982154846,.548375964164734],[.562758982181549,.558784961700439],[.531987011432648,.530140042304993],[.585271000862122,.335177004337311],[.622952997684479,.32277899980545],[.655896008014679,.320163011550903],[.687132000923157,.322345972061157],[.716481983661652,.333200991153717],[.758756995201111,.382786989212036],[.897013008594513,.468769013881683],[.732392013072968,.424547016620636],[.70211398601532,.433162987232208],[.66652500629425,.433866024017334],[.633504986763,.426087975502014],[.603875994682312,.416586995124817],[.579657971858978,.409945011138916],[.992439985275269,.480777025222778],[.567192018032074,.569419980049133],[.54136598110199,.478899002075195],[.526564002037048,.546118021011353],[.523913025856018,.563830018043518],[.531529009342194,.555056989192963],[.566035985946655,.582329034805298],[.51631098985672,.563053965568542],[.5174720287323,.577877044677734],[.573594987392426,.389806985855103],[.560697972774506,.395331978797913],[.549755990505219,.399751007556915],[.710287988185883,.368252992630005],[.723330020904541,.363372981548309]];function rP(e,t,n){return rh(this,void 0,void 0,function(){return rc(this,function(r){return[2,rb({maxFaces:e,iouThreshold:t,scoreThreshold:n})]})})}function rV(e){return rh(this,void 0,void 0,function(){return rc(this,function(t){return null!=e?[2,rl(e)]:[2,rl("https://tfhub.dev/mediapipe/tfjs-model/facemesh/1/default/1",{fromTFHub:!0})]})})}function rR(e,t){if(e.mesh instanceof v.esB){var n=(0,v.lub)(function(){var n=(0,v.RRF)([t-1,0,0]),r=(0,v.RRF)([1,-1,1]);return(0,v.lub)(function(){return[(0,v.zoF)([(0,v.luU)(t-1,e.boundingBox.topLeft.slice(0,1)),e.boundingBox.topLeft.slice(1,1)]),(0,v.zoF)([(0,v.luU)(t-1,e.boundingBox.bottomRight.slice(0,1)),e.boundingBox.bottomRight.slice(1,1)]),(0,v.luU)(n,e.mesh).mul(r),(0,v.luU)(n,e.scaledMesh).mul(r)]})});return Object.assign({},e,{boundingBox:{topLeft:n[0],bottomRight:n[1]},mesh:n[2],scaledMesh:n[3]})}return Object.assign({},e,{boundingBox:{topLeft:[t-1-e.boundingBox.topLeft[0],e.boundingBox.topLeft[1]],bottomRight:[t-1-e.boundingBox.bottomRight[0],e.boundingBox.bottomRight[1]]},mesh:e.mesh.map(function(e){var n=e.slice(0);return n[0]=t-1-e[0],n}),scaledMesh:e.scaledMesh.map(function(e){var n=e.slice(0);return n[0]=t-1-e[0],n})})}var rz,rU,rL,rW,rH,rq,rj=function(){function e(e,t,n,r,a,s){this.pipeline=new rB(e,t,192,192,n,a,s),this.detectionConfidence=r}return e.getAnnotations=function(){return rk},e.getUVCoords=function(){return rC},e.prototype.estimateFaces=function(e){return rh(this,void 0,void 0,function(){var t,n,r,a,s,o,i,u,l,p,h,c=this;return rc(this,function(d){switch(d.label){case 0:var f;if(n=void 0!==(t=e.returnTensors)&&t,a=void 0!==(r=e.flipHorizontal)&&r,o=void 0===(s=e.predictIrises)||s,i=e.input,o&&null==this.pipeline.irisModel)throw Error("The iris model was not loaded as part of facemesh. Please initialize the model with facemesh.load({shouldLoadIrisModel: true}).");return u=((f=i)instanceof v.esB?[f.shape[0],f.shape[1]]:[f.height,f.width])[1],l=(0,v.lub)(function(){return i instanceof v.esB||(i=v.Xhn.fromPixels(i)),i.toFloat().expandDims(0)}),"webgl"!==(0,v.N_N)()?[3,2]:(h=(0,v.OBj)().get("WEBGL_PACK_DEPTHWISECONV"),(0,v.OBj)().set("WEBGL_PACK_DEPTHWISECONV",!0),[4,this.pipeline.predict(l,o)]);case 1:return p=d.sent(),(0,v.OBj)().set("WEBGL_PACK_DEPTHWISECONV",h),[3,4];case 2:return[4,this.pipeline.predict(l,o)];case 3:p=d.sent(),d.label=4;case 4:return l.dispose(),null!=p&&p.length>0?[2,Promise.all(p.map(function(e,t){return rh(c,void 0,void 0,function(){var r,s,i,l,p,h,c,d,f,m,y,g,b,k,x=this;return rc(this,function(N){switch(N.label){case 0:return r=e.coords,s=e.scaledCoords,i=e.box,p=[l=e.flag],n||(p=p.concat([r,s])),[4,Promise.all(p.map(function(e){return rh(x,void 0,void 0,function(){return rc(this,function(t){return[2,e.array()]})})}))];case 1:if(c=(h=N.sent())[0],l.dispose(),c<this.detectionConfidence&&this.pipeline.clearRegionOfInterest(t),n)return d={faceInViewConfidence:c,mesh:r,scaledMesh:s,boundingBox:{topLeft:(0,v.RRF)(i.startPoint),bottomRight:(0,v.RRF)(i.endPoint)}},a?[2,rR(d,u)]:[2,d];for(k in m=(f=h.slice(1))[0],y=f[1],s.dispose(),r.dispose(),g={faceInViewConfidence:c,boundingBox:{topLeft:i.startPoint,bottomRight:i.endPoint},mesh:m,scaledMesh:y},a&&(g=rR(g,u)),b={},rk)(o||!1===k.includes("Iris"))&&(b[k]=rk[k].map(function(e){return g.scaledMesh[e]}));return g.annotations=b,[2,g]}})})}))]:[2,[]]}})})},e}();function rX(e,t){return void 0===e&&(e=rq.mediapipeFacemesh),void 0===t&&(t={}),rh(this,void 0,void 0,function(){return rc(this,function(n){if(e===rq.mediapipeFacemesh)return[2,function(e){return rh(this,void 0,void 0,function(){var t,n,r,a,s,o,i,u,l,p,h,c,d,f,m;return rc(this,function(y){switch(y.label){case 0:return n=void 0===(t=e.maxContinuousChecks)?5:t,a=void 0===(r=e.detectionConfidence)?.9:r,o=void 0===(s=e.maxFaces)?10:s,u=void 0===(i=e.iouThreshold)?.3:i,p=void 0===(l=e.scoreThreshold)?.75:l,c=void 0===(h=e.shouldLoadIrisModel)||h,d=e.modelUrl,f=e.irisModelUrl,c?[4,Promise.all([rP(o,u,p),rV(d),function(e){return rh(this,void 0,void 0,function(){return rc(this,function(t){return null!=e?[2,rl(e)]:[2,rl("https://tfhub.dev/mediapipe/tfjs-model/iris/1/default/2",{fromTFHub:!0})]})})}(f)])]:[3,2];case 1:return m=y.sent(),[3,4];case 2:return[4,Promise.all([rP(o,u,p),rV(d)])];case 3:m=y.sent(),y.label=4;case 4:return[2,new rj(m[0],m[1],n,a,o,c?m[2]:null)]}})})}(t)];throw Error(e+" is not a valid package name.")})})}(function(){}).prototype.estimateFaces=function(e){throw Error("estimateFaces is not yet implemented.")},(rq||(rq={})).mediapipeFacemesh="mediapipe-facemesh"},253:function(e,t,n){"use strict";var r=n(7825);/**
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
 */ function a(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{null!=e&&r.D5U.assert("complex64"!==e.dtype,()=>`${t} does not support complex64 tensors in the CPU backend.`)})}/**
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
 */ let s=r.GDt.ZA;class o extends r.Zuw{constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new r.JLz(this,(0,r.SRH)())}write(e,t,n){this.firstUse&&(this.firstUse=!1,(0,r.OBj)().get("IS_NODE")&&r.Wap.warn("\n============================\nHi there \uD83D\uDC4B. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.\n============================"));let a={};return this.data.set(a,{values:e,dtype:n,refCount:1}),a}makeTensorInfo(e,t,n){let a;if("string"===t&&null!=n&&n.length>0&&r.D5U.isString(n[0])){let s=n.map(e=>r.D5U.encodeString(e));a=this.write(s,e,t)}else a=this.write(n,e,t);return{dataId:a,shape:e,dtype:t}}incRef(e){let t=this.data.get(e);t.refCount++}decRef(e){if(this.data.has(e)){let t=this.data.get(e);t.refCount--}}move(e,t,n,r){this.data.set(e,{values:t,dtype:r,refCount:1})}numDataIds(){return this.data.numDataIds()}async read(e){return this.readSync(e)}readSync(e){let{dtype:t,complexTensorInfos:n}=this.data.get(e);if("complex64"===t){let a=this.readSync(n.real.dataId),s=this.readSync(n.imag.dataId);return r.Wap.mergeRealAndImagArrays(a,s)}return this.data.get(e).values}bufferSync(e){let t=this.readSync(e.dataId),n=t;if("string"===e.dtype)try{n=t.map(e=>r.D5U.decodeString(e))}catch(a){throw Error("Failed to decode encoded string bytes into utf-8")}return(0,r.f3b)(e.shape,e.dtype,n)}makeOutput(e,t,n){let a=this.write(e,t,n);return(0,r.SRH)().makeTensorFromDataId(a,t,n,this)}disposeData(e){if(this.data.has(e)){let{complexTensorInfos:t}=this.data.get(e);null!=t&&(this.disposeData(t.real.dataId),this.disposeData(t.imag.dataId)),this.data.delete(e)}}disposeIntermediateTensorInfo(e){let t=e.dataId;if(this.data.has(t)){let n=this.data.get(t);n.refCount--,n.refCount<1&&this.disposeData(t)}}async time(e){let t=r.D5U.now();e();let n=r.D5U.now()-t;return{kernelMs:n}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(e){a([e],"where");let t=this.readSync(e.dataId);return s(e.shape,t)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}/**
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
 */ function i(e,t,n){return({inputs:s,attrs:o,backend:i})=>{let{x:u}=s;if(a(u,e),"string"===u.dtype||"string"===n)throw Error("unaryKernelFunc does not support string input/output");let l=i.data.get(u.dataId).values,p=r.D5U.sizeFromShape(u.shape),h=n||u.dtype,c=r.D5U.getArrayFromDType(h,p);for(let d=0;d<p;++d)c[d]=t(l[d],o);return i.makeTensorInfo(u.shape,h,c)}}function u(e,t,n){return({inputs:r,attrs:s,backend:o})=>{let{x:i}=r;if(a(i,e),"string"===i.dtype||"string"===n)throw Error("unaryKernelFunc does not support string input/output");let u=o.data.get(i.dataId).values,l=n||i.dtype,p=t(u,l,s);return o.makeTensorInfo(i.shape,l,p)}}/**
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
 */ (0,r.jqO)("cpu",()=>new o,1);/**
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
 */ let l=i(r.SX0,e=>e>=0?e:Math.exp(e)-1),p={kernelName:r.SX0,backendName:"cpu",kernelFunc:l};/**
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
 */ function h(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}let c={kernelName:r.iJz,backendName:"cpu",kernelFunc:h};/**
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
 */ function d(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{alpha:i}=s;a([o],"leakyRelu");let u=r.D5U.sizeFromShape(o.shape),l=n.data.get(o.dataId).values,p=r.D5U.getTypedArrayFromDType("float32",u);for(let h=0;h<l.length;h++)p[h]=l[h]<0?i*l[h]:l[h];return n.makeTensorInfo(o.shape,"float32",p)}let f={kernelName:r.J$2,backendName:"cpu",kernelFunc:d};/**
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
 */ function m(e){return(t,n,a,s,o)=>{let i=r.Wap.assertAndGetBroadcastShape(t,n),u=i.length,l=r.D5U.computeStrides(i),p=r.D5U.sizeFromShape(i),h=r.D5U.getTypedArrayFromDType(o,p),c=t.length,d=n.length,f=r.D5U.computeStrides(t),m=r.D5U.computeStrides(n),y=r.Wap.getBroadcastDims(t,i),g=r.Wap.getBroadcastDims(n,i);if(y.length+g.length===0)for(let b=0;b<h.length;++b)h[b]=e(a[b%a.length],s[b%s.length]);else for(let k=0;k<h.length;++k){let v=r.D5U.indexToLoc(k,u,l),x=v.slice(-c);y.forEach(e=>x[e]=0);let N=r.D5U.locToIndex(x,c,f),w=v.slice(-d);g.forEach(e=>w[e]=0);let I=r.D5U.locToIndex(w,d,m);h[k]=e(a[N],s[I])}return[h,i]}}/**
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
 */ let y=m((e,t)=>e<0?t*e:e);function g(e){let{inputs:t,backend:n}=e,{x:r,alpha:s}=t;a([r,s],"prelu");let o=n.data.get(r.dataId).values,i=n.data.get(s.dataId).values,[u,l]=y(r.shape,s.shape,o,i,r.dtype);return n.makeTensorInfo(l,r.dtype,u)}let b={kernelName:r.o0g,backendName:"cpu",kernelFunc:g},k=i(r.qkr,e=>Math.max(0,e)),v={kernelName:r.qkr,backendName:"cpu",kernelFunc:k},x=i(r.SbG,e=>Math.min(Math.max(0,e),6)),N={kernelName:r.SbG,backendName:"cpu",kernelFunc:x};/**
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
 */ function w(e,t,n,r,a){if("linear"===n)return h({inputs:{x:t},backend:e});if("relu"===n)return k({inputs:{x:t},backend:e});if("elu"===n)return l({inputs:{x:t},backend:e});if("relu6"===n)return x({inputs:{x:t},backend:e});if("prelu"===n)return g({inputs:{x:t,alpha:r},backend:e});if("leakyrelu"===n)return d({inputs:{x:t},backend:e,attrs:{alpha:a}});throw Error(`Activation ${n} has not been implemented for the CPU backend.`)}/**
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
 */ function I(e){let{inputs:t,backend:n}=e,{real:r,imag:a}=t,s=n.data.get(r.dataId).values,o=n.data.get(a.dataId).values,i=n.makeTensorInfo(r.shape,"complex64"),u=n.data.get(i.dataId);return u.complexTensorInfos={real:n.makeTensorInfo(r.shape,"float32",s),imag:n.makeTensorInfo(a.shape,"float32",o)},i}let T={kernelName:r.Zz9,backendName:"cpu",kernelFunc:I};/**
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
 */ function S(e,t,n="float32"){if("complex64"===n){let a=S(e,t,"float32"),s=S(e,t,"float32");return I({inputs:{real:a,imag:s},backend:e})}let o=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(t),n);return e.makeTensorInfo(t,n,o)}/**
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
 */ function D(e){let{inputs:t,backend:n}=e,{input:r}=t,a=n.data.get(r.dataId).complexTensorInfos.real,s=n.data.get(a.dataId).values;return n.makeTensorInfo(a.shape,a.dtype,s)}let E={kernelName:r.xJR,backendName:"cpu",kernelFunc:D};/**
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
 */ function _(e){let{inputs:t,backend:n,attrs:a}=e,{x:s}=t,{dtype:o}=a;if("complex64"===o){if("complex64"===s.dtype)return h({inputs:{x:s},backend:n});let i=S(n,s.shape,s.dtype),u=_({inputs:{x:s},backend:n,attrs:{dtype:"float32"}}),l=I({inputs:{real:u,imag:i},backend:n});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(u),l}if("complex64"===s.dtype){let p=D({inputs:{input:s},backend:n}),c=_({inputs:{x:p},backend:n,attrs:{dtype:o}});return n.disposeIntermediateTensorInfo(p),c}if(!r.D5U.hasEncodingLoss(s.dtype,o)){let d=h({inputs:{x:s},backend:n});return{dataId:d.dataId,shape:d.shape,dtype:o}}if("int32"===o){let f=n.data.get(s.dataId).values,y=Int32Array.from(f);return n.makeTensorInfo(s.shape,"int32",y)}if("bool"===o){let g=n.data.get(s.dataId).values,b=r.D5U.toTypedArray([0],s.dtype),[k,v]=m((e,t)=>e!==t?1:0)(s.shape,[],g,b,"bool");return n.makeTensorInfo(v,"bool",k)}throw Error(`Error in Cast: failed to cast ${s.dtype} to ${o}`)}let F={kernelName:r.RFZ,backendName:"cpu",kernelFunc:_};/**
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
 */ function M(e,t,n,r){return null==n?({inputs:n,backend:s})=>{let{a:o,b:i}=n;a([o,i],e);let u=s.data.get(o.dataId).values,l=s.data.get(i.dataId).values,p=r||o.dtype,[h,c]=t(o.shape,i.shape,u,l,p);return s.makeTensorInfo(c,p,h)}:({inputs:e,backend:a})=>{let{a:s,b:o}=e;if("complex64"===s.dtype||"complex64"===o.dtype){let i=_({inputs:{x:s},backend:a,attrs:{dtype:"complex64"}}),u=a.data.get(i.dataId),l=u.complexTensorInfos.real,p=u.complexTensorInfos.imag,h=a.data.get(l.dataId).values,c=a.data.get(p.dataId).values,d=_({inputs:{x:o},backend:a,attrs:{dtype:"complex64"}}),f=a.data.get(d.dataId),m=f.complexTensorInfos.real,y=f.complexTensorInfos.imag,g=a.data.get(m.dataId).values,b=a.data.get(y.dataId).values,[k,v,x]=n(s.shape,o.shape,h,c,g,b),N=a.makeTensorInfo(x,"float32",k),w=a.makeTensorInfo(x,"float32",v),T=I({inputs:{real:N,imag:w},backend:a});return a.disposeIntermediateTensorInfo(i),a.disposeIntermediateTensorInfo(d),a.disposeIntermediateTensorInfo(N),a.disposeIntermediateTensorInfo(w),T}{let S=a.data.get(s.dataId).values,D=a.data.get(o.dataId).values,E=r||s.dtype,[F,M]=t(s.shape,o.shape,S,D,E);return a.makeTensorInfo(M,E,F)}}}function A(e){return(t,n,a,s,o,i)=>{let u=r.Wap.assertAndGetBroadcastShape(t,n),l=r.D5U.sizeFromShape(u),p=u.length,h=r.D5U.computeStrides(u),c=r.D5U.getTypedArrayFromDType("float32",l),d=r.D5U.getTypedArrayFromDType("float32",l),f=r.Wap.getBroadcastDims(t,u),m=r.Wap.getBroadcastDims(n,u),y=r.Wap.mergeRealAndImagArrays(a,s),g=r.Wap.mergeRealAndImagArrays(o,i),b=t.length,k=r.D5U.computeStrides(t),v=n.length,x=r.D5U.computeStrides(n);if(f.length+m.length===0)for(let N=0;N<c.length;N++){let w=N%y.length,I=N%g.length,T=e(y[2*w],y[2*w+1],g[2*I],g[2*I+1]);c[N]=T.real,d[N]=T.imag}else for(let S=0;S<c.length;S++){let D=r.D5U.indexToLoc(S,p,h),E=D.slice(-b);f.forEach(e=>E[e]=0);let _=r.D5U.locToIndex(E,b,k),F=D.slice(-v);m.forEach(e=>F[e]=0);let M=r.D5U.locToIndex(F,v,x),A=e(y[2*_],y[2*_+1],g[2*M],g[2*M+1]);c[S]=A.real,d[S]=A.imag}return[c,d,u]}}/**
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
 */ let $=m((e,t)=>e+t),O=A((e,t,n,r)=>({real:e+n,imag:t+r})),B=M(r.mm_,$,O),C={kernelName:r.mm_,backendName:"cpu",kernelFunc:B};/**
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
 */ function P(e){let{inputs:t,backend:n,attrs:a}=e,{x:s}=t,{shape:o}=a,i=r.D5U.sizeFromShape(s.shape),u=r.D5U.inferFromImplicitShape(o,i),l=r.D5U.sizeFromShape(u);r.D5U.assert(i===l,()=>`The new shape (${u}) has ${l} elements and the old shape (${s.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`),n.incRef(s.dataId);let p=n.data.get(s.dataId);if(null!=p.complexTensorInfos){let h=p.complexTensorInfos.real,c=p.complexTensorInfos.imag;h.shape=u,c.shape=u}return{dataId:s.dataId,shape:u,dtype:s.dtype}}let V={kernelName:r.HZH,backendName:"cpu",kernelFunc:P};/**
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
 */ function R(e){let{inputs:t,backend:n,attrs:s}=e,{a:o,b:i}=t,{transposeA:u,transposeB:l}=s;a([o,i],"matMul");let p=o.shape.length,h=i.shape.length,c=u?o.shape[p-2]:o.shape[p-1],d=l?i.shape[h-1]:i.shape[h-2],f=u?o.shape[p-1]:o.shape[p-2],m=l?i.shape[h-2]:i.shape[h-1],y=o.shape.slice(0,-2),g=i.shape.slice(0,-2),b=r.D5U.sizeFromShape(y),k=r.D5U.sizeFromShape(g);r.D5U.assert(p>=2&&h>=2&&(b===k||1===b||1===k),()=>`Error in matMul: the input batch dimensions must either be the same or at least one input batch dimension must be 1. Got input batch dimensions of (${y}) and (${g}).`);let v=b>k?o.shape.slice(0,-2):i.shape.slice(0,-2),x=v.concat([f,m]);r.D5U.assert(c===d,()=>`Error in matMul: inner shapes (${c}) and (${d}) of Tensors with shapes ${o.shape} and ${i.shape} and transposeA=${u} and transposeB=${l} must match.`);let N=P({inputs:{x:o},backend:n,attrs:{shape:u?[b,c,f]:[b,f,c]}}),w=P({inputs:{x:i},backend:n,attrs:{shape:l?[k,m,d]:[k,d,m]}}),I=u?N.shape[1]:N.shape[2],T=u?N.shape[2]:N.shape[1],S=l?w.shape[1]:w.shape[2],D=Math.max(b,k),E=n.data.get(N.dataId).values,_=n.data.get(w.dataId).values,F=r.D5U.computeStrides(N.shape),M=r.D5U.computeStrides(w.shape),[A,$,O]=u?[F[0],1,F[1]]:[F[0],F[1],1],[B,C,V]=l?[1,M[1],M[0]]:[M[1],1,M[0]],R=T*S,z=(0,r.f3b)([D,T,S],N.dtype),U=z.values,L=n.blockSize;for(let W=0;W<D;W++)for(let H=0;H<T;H+=L)for(let q=0;q<S;q+=L)for(let j=0;j<I;j+=L){let X=Math.min(H+L,T),G=Math.min(q+L,S),K=Math.min(j+L,I);for(let Y=H;Y<X;Y++)for(let Q=q;Q<G;Q++){let Z=0;for(let J=j;J<K;J++){let ee=Math.min(W,b-1)*A,et=Math.min(W,k-1)*V,en=E[ee+Y*$+J*O],er=_[J*B+Q*C+et];Z+=en*er}U[W*R+(Y*S+Q)]+=Z}}return n.disposeIntermediateTensorInfo(N),n.disposeIntermediateTensorInfo(w),n.makeTensorInfo(x,z.dtype,z.values)}let z={kernelName:r.XLW,backendName:"cpu",kernelFunc:R},U={kernelName:r.usg,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let t,n,r;let{inputs:a,backend:s,attrs:o}=e,{a:i,b:u,bias:l,preluActivationWeights:p}=a,{transposeA:h,transposeB:c,activation:d,leakyreluAlpha:f}=o,m=[],y=R({inputs:{a:i,b:u},attrs:{transposeA:h,transposeB:c},backend:s});for(let g of(t=y,l&&(n=B({inputs:{a:t,b:l},backend:s}),m.push(t),t=n),d&&(r=w(s,t,d,p,f),m.push(t),t=r),m))s.disposeIntermediateTensorInfo(g);return t}},L=e=>{let{x:t}=e.inputs,n=e.backend;a(t,"abs");let s=new Float32Array(r.D5U.sizeFromShape(t.shape)),o=n.data.get(t.dataId).values;return s=/**
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
 */ function(e){let t=new Float32Array(e.length);for(let n=0;n<e.length;++n)t[n]=Math.abs(e[n]);return t}(o),n.makeOutput(s,t.shape,"float32")},W={kernelName:r.SYM,backendName:"cpu",kernelFunc:L},H=i(r.VGw,e=>Math.acos(e)),q={kernelName:r.VGw,backendName:"cpu",kernelFunc:H},j=i(r.SpW,e=>Math.acosh(e)),X={kernelName:r.SpW,backendName:"cpu",kernelFunc:j},G={kernelName:r.Xze,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n}=e;a(t,"addN");let s=t.map(e=>n.data.get(e.dataId).values),o=(0,r.f3b)(t[0].shape,t[0].dtype),i=o.values;for(let u=0;u<t.length;u++){let l=s[u];for(let p=0;p<i.length;p++)i[p]+=l[p]}return n.makeTensorInfo(o.shape,o.dtype,o.values)}};/**
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
 */ function K(e,t,n,a,s){let o=t.length,i=r.D5U.sizeFromShape(t),u=r.D5U.computeStrides(t),l=r.D5U.computeStrides(s),p=r.D5U.getTypedArrayFromDType(n,r.D5U.sizeFromShape(s));for(let h=0;h<i;++h){let c=r.D5U.indexToLoc(h,o,u),d=Array(c.length);for(let f=0;f<d.length;f++)d[f]=c[a[f]];let m=r.D5U.locToIndex(d,o,l);p[m]=e[h]}return p}/**
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
 */ function Y(e){let{inputs:t,attrs:n,backend:r}=e,{x:s}=t,{perm:o}=n;a(s,"transpose");let i=s.shape.length,u=Array(i);for(let l=0;l<u.length;l++)u[l]=s.shape[o[l]];let p=r.data.get(s.dataId).values,h=K(p,s.shape,s.dtype,o,u),c=r.write(h,u,s.dtype);return{dataId:c,shape:u,dtype:s.dtype}}let Q={kernelName:r.G3Y,backendName:"cpu",kernelFunc:Y},Z={kernelName:r.oT6,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i,keepDims:u}=s;a(o,"all");let l=r.D5U.parseAxisParam(i,o.shape),p=l,h=r.Wap.getAxesPermutation(p,o.shape.length),c=o;null!=h&&(c=Y({inputs:{x:o},backend:n,attrs:{perm:h}}),p=r.Wap.getInnerMostAxes(p.length,o.shape.length)),r.Wap.assertAxesAreInnerMostDims("all",p,c.shape.length);let[d,f]=r.Wap.computeOutAndReduceShapes(c.shape,p),m=r.D5U.sizeFromShape(f),y=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(d),c.dtype),g=n.data.get(c.dataId).values;for(let b=0;b<y.length;++b){let k=b*m,v=g[k];for(let x=0;x<m;++x){let N=g[k+x];v=v&&N}y[b]=v}null!=h&&n.disposeIntermediateTensorInfo(c);let w=n.makeTensorInfo(d,c.dtype,y);if(u){let I=r.Wap.expandShapeToKeepDim(d,l),T=P({inputs:{x:w},backend:n,attrs:{shape:I}});return n.disposeIntermediateTensorInfo(w),T}return w}},J={kernelName:r.IKK,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i,keepDims:u}=s;a(o,"any");let l=r.D5U.parseAxisParam(i,o.shape),p=l,h=r.Wap.getAxesPermutation(p,o.shape.length),c=o;null!=h&&(c=Y({inputs:{x:o},backend:n,attrs:{perm:h}}),p=r.Wap.getInnerMostAxes(p.length,o.shape.length)),r.Wap.assertAxesAreInnerMostDims("any",p,c.shape.length);let[d,f]=r.Wap.computeOutAndReduceShapes(c.shape,p),m=r.D5U.sizeFromShape(f),y=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(d),c.dtype),g=n.data.get(c.dataId).values;for(let b=0;b<y.length;++b){let k=b*m,v=g[k];for(let x=0;x<m;++x){let N=g[k+x];v=v||N}y[b]=v}null!=h&&n.disposeIntermediateTensorInfo(c);let w=n.makeTensorInfo(d,c.dtype,y);if(u){let I=r.Wap.expandShapeToKeepDim(d,l),T=P({inputs:{x:w},backend:n,attrs:{shape:I}});return n.disposeIntermediateTensorInfo(w),T}return w}},ee={kernelName:r.sJF,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i}=s;a(o,"argMax");let u=r.D5U.parseAxisParam(i,o.shape),l=r.Wap.getAxesPermutation(u,o.shape.length),p=o,h=[];null!=l&&(h.push(p=Y({inputs:{x:o},backend:n,attrs:{perm:l}})),u=r.Wap.getInnerMostAxes(u.length,p.shape.length)),u=[u[0]],r.Wap.assertAxesAreInnerMostDims("argMax",u,p.shape.length);let[c,d]=r.Wap.computeOutAndReduceShapes(p.shape,u),f=r.D5U.sizeFromShape(c),m=r.D5U.makeZerosTypedArray(f,"int32"),y=r.D5U.sizeFromShape(d),g=n.data.get(p.dataId).values;for(let b=0;b<m.length;++b){let k=b*y,v=g[k],x=0;for(let N=0;N<y;++N){let w=g[k+N];w>v&&(v=w,x=N)}m[b]=x}return h.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(c,"int32",m)}},et={kernelName:r.aJk,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i}=s;a(o,"argMin");let u=r.D5U.parseAxisParam(i,o.shape),l=r.Wap.getAxesPermutation(u,o.shape.length),p=o,h=[];null!=l&&(h.push(p=Y({inputs:{x:o},backend:n,attrs:{perm:l}})),u=r.Wap.getInnerMostAxes(u.length,p.shape.length)),u=[u[0]],r.Wap.assertAxesAreInnerMostDims("argMin",u,p.shape.length);let[c,d]=r.Wap.computeOutAndReduceShapes(p.shape,u),f=r.D5U.sizeFromShape(c),m=r.D5U.makeZerosTypedArray(f,"int32"),y=r.D5U.sizeFromShape(d),g=n.data.get(p.dataId).values;for(let b=0;b<m.length;++b){let k=b*y,v=g[k],x=0;for(let N=0;N<y;++N){let w=g[k+N];w<v&&(v=w,x=N)}m[b]=x}return h.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(c,"int32",m)}},en=i(r.M2y,e=>Math.asin(e)),er={kernelName:r.M2y,backendName:"cpu",kernelFunc:en},ea=i(r.qw7,e=>Math.asinh(e)),es={kernelName:r.qw7,backendName:"cpu",kernelFunc:ea},eo=i(r.jMg,e=>Math.atan(e)),ei={kernelName:r.jMg,backendName:"cpu",kernelFunc:eo},eu=m((e,t)=>Math.atan2(e,t)),el=M(r.QCc,eu),ep={kernelName:r.QCc,backendName:"cpu",kernelFunc:el},eh=i(r.Oyi,e=>Math.atanh(e)),ec={kernelName:r.Oyi,backendName:"cpu",kernelFunc:eh};/**
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
 */ function ed(e,t,n,a,s,o){let i=s.strideHeight,u=s.strideWidth,l=s.dilationHeight,p=s.dilationWidth,h=s.effectiveFilterHeight,c=s.effectiveFilterWidth,d=s.padInfo.top,f=s.padInfo.left,m="max"===o?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,y=(0,r.f3b)(s.outShape,n),g=y.values,b=s.outShape[1]*s.outShape[2]*s.outShape[3],k=s.outShape[2]*s.outShape[3],v=s.outShape[3];for(let x=0;x<s.batchSize;++x){let N=x*b,w=x*a[0];for(let I=0;I<s.inChannels;++I)for(let T=0;T<s.outHeight;++T){let S=T*i-d,D=Math.max(0,S),E=Math.min(s.inHeight,h+S),_=N+T*k;for(let F=0;F<s.outWidth;++F){let M=F*u-f,A=Math.max(0,M),$=Math.min(s.inWidth,c+M),O=m,B=0,C=0;for(let P=D;P<E;P+=l){let V=w+P*a[1];for(let R=A;R<$;R+=p){let z=V+R*a[2],U=e[z+I];"max"===o&&U>O?O=U:"avg"===o&&(B+=U,C++)}if(isNaN(O))break}let L=_+F*v+I;g[L]="avg"===o?B/C:O}}}return y}function ef(e,t,n,a,s=!1,o=!1){let i=(0,r.f3b)(a.outShape,"int32"),u=a.strideHeight,l=a.strideWidth,p=a.dilationHeight,h=a.dilationWidth,c=a.effectiveFilterHeight,d=a.effectiveFilterWidth,f=a.padInfo.top,m=a.padInfo.left,y=(0,r.f3b)(t,n,e);for(let g=0;g<a.batchSize;++g)for(let b=0;b<a.inChannels;++b)for(let k=0;k<a.outHeight;++k){let v=k*u-f,x=v;for(;x<0;)x+=p;let N=Math.min(a.inHeight,c+v);for(let w=0;w<a.outWidth;++w){let I=w*l-m,T=I;for(;T<0;)T+=h;let S=Math.min(a.inWidth,d+I),D=Number.NEGATIVE_INFINITY,E=-1;for(let _=x;_<N;_+=p){let F=_-v;for(let M=T;M<S;M+=h){let A=M-I,$=y.get(g,_,M,b);$>D&&(D=$,E=s?o?((g*a.inHeight+_)*a.inWidth+M)*a.inChannels+b:(_*a.inWidth+M)*a.inChannels+b:F*d+A)}}i.set(E,g,k,w,b)}}return i}function em(e,t,n,a,s,o){let i=s.strideDepth,u=s.strideHeight,l=s.strideWidth,p=s.dilationDepth,h=s.dilationHeight,c=s.dilationWidth,d=s.effectiveFilterDepth,f=s.effectiveFilterHeight,m=s.effectiveFilterWidth,y=s.padInfo.front,g=s.padInfo.top,b=s.padInfo.left,k="max"===o?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,v=(0,r.f3b)(s.outShape,n),x=v.values,N=s.outShape[1]*s.outShape[2]*s.outShape[3]*s.outShape[4],w=s.outShape[2]*s.outShape[3]*s.outShape[4],I=s.outShape[3]*s.outShape[4],T=s.outShape[4];for(let S=0;S<s.batchSize;++S){let D=S*N,E=S*a[0];for(let _=0;_<s.inChannels;++_)for(let F=0;F<s.outDepth;++F){let M=F*i-y,A=M;for(;A<0;)A+=p;let $=Math.min(s.inDepth,d+M),O=D+F*w;for(let B=0;B<s.outHeight;++B){let C=B*u-g,P=C;for(;P<0;)P+=h;let V=Math.min(s.inHeight,f+C),R=O+B*I;for(let z=0;z<s.outWidth;++z){let U=z*l-b,L=U;for(;L<0;)L+=c;let W=Math.min(s.inWidth,m+U),H=R+z*T,q=k,j=0,X=0;for(let G=A;G<$;G+=p){let K=E+G*a[1];for(let Y=P;Y<V;Y+=h){let Q=K+Y*a[2];for(let Z=L;Z<W;Z+=c){let J=Q+Z*a[3],ee=e[J+_];if("max"===o&&ee>q?q=ee:"avg"===o&&(j+=ee,X++),isNaN(q))break}if(isNaN(q))break}if(isNaN(q))break}let et=H+_;x[et]="avg"===o?j/X:q}}}}return v}let ey={kernelName:r.JhU,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let t;let{inputs:n,backend:s,attrs:o}=e,{x:i}=n;a(i,"avgPool");let{filterSize:u,strides:l,pad:p,dimRoundingMode:c}=o;r.D5U.assert(r.Wap.eitherStridesOrDilationsAreOne(l,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${l} and dilations '1'`);let d=r.Wap.computePool2DInfo(i.shape,u,l,1,p,c);if(1===d.filterWidth&&1===d.filterHeight&&r.D5U.arraysEqual(d.inShape,d.outShape))t=h({inputs:{x:i},backend:s});else{let f=s.data.get(i.dataId).values,m=r.D5U.computeStrides(i.shape),y=ed(f,i.shape,i.dtype,m,d,"avg");t=s.makeTensorInfo(d.outShape,i.dtype,y.values)}return t}},eg={kernelName:r._k9,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{filterSize:i,strides:u,pad:l,dimRoundingMode:p,dataFormat:h,dilations:c}=s;a(o,"avgPool3d");let d=c;null==d&&(d=[1,1,1]);let f=r.Wap.computePool3DInfo(o.shape,i,u,d,l,p,h),m=n.data.get(o.dataId).values,y=em(m,o.shape,o.dtype,r.D5U.computeStrides(o.shape),f,"avg");return n.makeTensorInfo(y.shape,"float32",y.values)}},eb={kernelName:r.IMb,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{dy:o,input:i}=t,{filterSize:u,strides:l,pad:p,dilations:h,dimRoundingMode:c}=s;a([o,i],"avgPool3DGrad");let d=r.Wap.computePool3DInfo(i.shape,u,l,h,p,c),f=d.strideDepth,m=d.strideHeight,y=d.strideWidth,g=d.filterDepth,b=d.filterHeight,k=d.filterWidth,v=d.dilationDepth,x=d.dilationHeight,N=d.dilationWidth,w=d.effectiveFilterDepth,I=d.effectiveFilterHeight,T=d.effectiveFilterWidth,S=w-1-d.padInfo.front,D=T-1-d.padInfo.left,E=I-1-d.padInfo.top,_=(0,r.f3b)(i.shape,"float32"),F=1/(g*b*k),M=n.bufferSync(o);for(let A=0;A<d.batchSize;++A)for(let $=0;$<d.inChannels;++$)for(let O=0;O<d.inDepth;++O)for(let B=0;B<d.inHeight;++B)for(let C=0;C<d.inWidth;++C){let P=O-S,V=B-E,R=C-D,z=0;for(let U=0;U<w;U+=v){let L=(P+U)/f;if(!(L<0)&&!(L>=d.outDepth)&&Math.floor(L)===L)for(let W=0;W<I;W+=x){let H=(V+W)/m;if(!(H<0)&&!(H>=d.outHeight)&&Math.floor(H)===H)for(let q=0;q<T;q+=N){let j=(R+q)/y;if(j<0||j>=d.outWidth||Math.floor(j)!==j)continue;let X=M.get(A,L,H,j,$);z+=X}}}_.set(z*F,A,O,B,C,$)}return n.makeTensorInfo(_.shape,_.dtype,_.values)}},ek={kernelName:r.ROF,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{dy:o,input:i}=t;a([o,i],"avgPoolGrad");let{filterSize:u,strides:l,pad:p}=s,h=r.Wap.computePool2DInfo(i.shape,u,l,1,p),c=h.strideHeight,d=h.strideWidth,f=h.filterHeight,m=h.filterWidth,y=h.dilationHeight,g=h.dilationWidth,b=h.effectiveFilterHeight,k=h.effectiveFilterWidth,v=k-1-h.padInfo.left,x=b-1-h.padInfo.top,N=(0,r.f3b)(i.shape,"float32"),w=1/(f*m),I=n.data.get(o.dataId).values,T=(0,r.f3b)(o.shape,"float32",I);for(let S=0;S<h.batchSize;++S)for(let D=0;D<h.inChannels;++D)for(let E=0;E<h.inHeight;++E)for(let _=0;_<h.inWidth;++_){let F=E-x,M=_-v,A=0;for(let $=0;$<b;$+=y){let O=(F+$)/c;if(!(O<0)&&!(O>=h.outHeight)&&Math.floor(O)===O)for(let B=0;B<k;B+=g){let C=(M+B)/d;if(C<0||C>=h.outWidth||Math.floor(C)!==C)continue;let P=T.get(S,O,C,D);A+=P}}N.set(A*w,S,E,_,D)}return n.makeTensorInfo(N.shape,N.dtype,N.values)}},ev={kernelName:r.sHE,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o,scale:i,offset:u,mean:l,variance:p}=t;r.D5U.assert(l.shape.length===p.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),r.D5U.assert(null==u||l.shape.length===u.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),r.D5U.assert(null==i||l.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),a([o,l,p,i,u],"batchNorm");let{varianceEpsilon:h}=s;null==h&&(h=.001);let c=n.data.get(o.dataId).values,d=n.data.get(l.dataId).values,f=n.data.get(p.dataId).values,m=i?n.data.get(i.dataId).values:new Float32Array([1]),y=u?n.data.get(u.dataId).values:new Float32Array([0]),g=new Float32Array(c.length),b=y.length,k=m.length,v=f.length,x=d.length,N=0,w=0,I=0,T=0;for(let S=0;S<c.length;++S)g[S]=y[N++]+(c[S]-d[w++])*m[I++]/Math.sqrt(f[T++]+h),N>=b&&(N=0),w>=x&&(w=0),I>=k&&(I=0),T>=v&&(T=0);return n.makeTensorInfo(o.shape,o.dtype,g)}};function ex(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{begin:i,size:u}=s;a(o,"slice");let[l,p]=r.kuN.parseSliceParams(o,i,u);r.kuN.assertParamsValid(o,l,p);let h=n.data.get(o.dataId).values,c=/**
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
 */ function(e,t,n,a,s){let o=r.kuN.isSliceContinous(a,t,n),i=r.D5U.sizeFromShape(n),u=r.D5U.computeStrides(a);if(o){let l=r.kuN.computeFlatOffset(t,u);return"string"===s?e.slice(l,l+i):e.subarray(l,l+i)}let p="string"===s?r.Wap.fromUint8ToStringArray(e):e,h=(0,r.f3b)(a,s,p),c=(0,r.f3b)(n,s);for(let d=0;d<c.size;++d){let f=c.indexToLoc(d),m=f.map((e,n)=>e+t[n]);c.set(h.get(...m),...f)}return"string"===s?r.Wap.fromStringArrayToUint8(c.values):c.values}(h,l,p,o.shape,o.dtype);return n.makeTensorInfo(p,o.dtype,c)}let eN={kernelName:r.p2w,backendName:"cpu",kernelFunc:ex},ew={kernelName:r.zws,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{blockShape:i,crops:u}=s;a([o],"batchToSpaceND");let l=i.reduce((e,t)=>e*t),p=r.Wap.getReshaped(o.shape,i,l),h=r.Wap.getPermuted(p.length,i.length),c=r.Wap.getReshapedPermuted(o.shape,i,l),d=r.Wap.getSliceBeginCoords(u,i.length),f=r.Wap.getSliceSize(c,u,i.length),m=P({inputs:{x:o},backend:n,attrs:{shape:p}}),y=Y({inputs:{x:m},backend:n,attrs:{perm:h}}),g=P({inputs:{x:y},backend:n,attrs:{shape:c}}),b=ex({inputs:{x:g},backend:n,attrs:{begin:d,size:f}});return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(y),n.disposeIntermediateTensorInfo(g),b}};/**
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
 */ function eI(e,t,n,a,s){let o=r.D5U.sizeFromShape(a),i=r.D5U.makeZerosTypedArray(s,n);for(let u=0;u<e.length;u++){let l=e[u];if(l<0)throw Error("Input x must be non-negative!");l>=s||(o>0?i[l]+=t[u]:i[l]+=1)}return i}let eT={kernelName:r.zvY,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,weights:s}=t,{size:o}=r,i=n.data.get(a.dataId).values,u=n.data.get(s.dataId).values,l=eI(i,u,s.dtype,s.shape,o);return n.makeTensorInfo([o],s.dtype,l)}};/**
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
 */ function eS(e){return(t,n,a)=>{let s=r.D5U.getTypedArrayFromDType(n,t.length);for(let o=0;o<t.length;++o)s[o]=e(t[o],a);return s}}/**
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
 */ let eD=eS(e=>Math.ceil(e)),eE=u(r.gJX,eD),e_={kernelName:r.gJX,backendName:"cpu",kernelFunc:eE},eF=i(r.xnO,(e,t)=>e>t.clipValueMax?t.clipValueMax:e<t.clipValueMin?t.clipValueMin:e),eM={kernelName:r.xnO,backendName:"cpu",kernelFunc:eF},eA=e=>{let{x:t}=e.inputs,n=e.backend,a=new Float32Array(r.D5U.sizeFromShape(t.shape)),s=n.data.get(t.dataId),o=s.complexTensorInfos.real,i=s.complexTensorInfos.imag,u=n.data.get(o.dataId).values,l=n.data.get(i.dataId).values;for(let p=0;p<u.length;p++){let h=u[p],c=l[p];a[p]=Math.hypot(h,c)}return n.makeOutput(a,t.shape,"float32")},e$={kernelName:r.yj2,backendName:"cpu",kernelFunc:eA};/**
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
 */ function eO(e){let{inputs:t,backend:n}=e,{input:r}=t,a=n.data.get(r.dataId).complexTensorInfos.imag,s=n.data.get(a.dataId).values;return n.makeTensorInfo(a.shape,a.dtype,s)}let eB={kernelName:r.J_u,backendName:"cpu",kernelFunc:eO};/**
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
 */ function eC(e){let{inputs:t,backend:n,attrs:a}=e,{axis:s}=a,o=r.D5U.parseAxisParam(s,t[0].shape)[0],i=r.Wap.computeOutShape(t.map(e=>e.shape),o);if(0===r.D5U.sizeFromShape(i))return n.makeTensorInfo(i,t[0].dtype,[]);let u=t.filter(e=>r.D5U.sizeFromShape(e.shape)>0);if(1===u.length)return h({inputs:{x:u[0]},backend:n});let l=u.map(e=>e.shape);if(r.Wap.assertParamsConsistent(l,o),"complex64"===u[0].dtype){let p=u.map(e=>D({inputs:{input:e},backend:n})),c=u.map(e=>eO({inputs:{input:e},backend:n})),d=eC({inputs:p,backend:n,attrs:{axis:o}}),f=eC({inputs:c,backend:n,attrs:{axis:o}}),m=I({inputs:{real:d,imag:f},backend:n});return p.forEach(e=>n.disposeIntermediateTensorInfo(e)),c.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(f),m}let y=u.map(e=>{let t=r.D5U.sizeFromShape(e.shape.slice(o));return P({inputs:{x:e},backend:n,attrs:{shape:[-1,t]}})}),g=y.map(e=>({vals:n.data.get(e.dataId).values,shape:e.shape}));i=r.Wap.computeOutShape(y.map(e=>e.shape),1);let b=1===y[0].shape[0],k=/**
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
 */ function(e,t,n,a){let s=r.D5U.getArrayFromDType(n,r.D5U.sizeFromShape(t));if(a&&"string"!==n){let o=0;e.forEach(e=>{let t=r.D5U.sizeFromShape(e.shape);s.set(e.vals,o),o+=t})}else{let i=0;e.forEach(e=>{let a="string"===n?r.Wap.fromUint8ToStringArray(e.vals):e.vals,o=0;for(let u=0;u<e.shape[0];++u){let l=u*t[1]+i;for(let p=0;p<e.shape[1];++p)s[l+p]=a[o++]}i+=e.shape[1]})}return s}(g,i,t[0].dtype,b),v=r.Wap.computeOutShape(u.map(e=>e.shape),o),x=n.makeTensorInfo(v,t[0].dtype,k);return y.forEach(e=>n.disposeIntermediateTensorInfo(e)),x}let eP={kernelName:r.Eh3,backendName:"cpu",kernelFunc:eC};/**
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
 */ function eV(e){let{inputs:t,backend:n,attrs:s}=e,{x:o,filter:i}=t,{strides:u,pad:l,dataFormat:p,dilations:h,dimRoundingMode:c}=s;a([o,i],"conv2d");let d=r.Wap.convertConv2DDataFormat(p),f=r.Wap.computeConv2DInfo(o.shape,i.shape,u,h,l,c,!1,d),m=f.filterHeight,y=f.filterWidth,g=f.dilationHeight,b=f.dilationWidth,k=f.padInfo.left,v=f.padInfo.top,x="channelsLast"===f.dataFormat,N=new r.YDk(f.outShape,o.dtype),w=r.D5U.computeStrides(o.shape),I=r.D5U.computeStrides(i.shape),T=w[0],S=x?w[1]:w[2],D=x?w[2]:1,E=x?1:w[1],_=N.strides[0],F=x?N.strides[1]:N.strides[2],M=x?N.strides[2]:1,A=x?1:N.strides[1],$=n.data.get(o.dataId).values,O=n.data.get(i.dataId).values,B=N.values;for(let C=0;C<f.batchSize;++C){let P=C*T,V=C*_;for(let R=0;R<f.outHeight;++R){let z=V+R*F,U=R*f.strideHeight-v;for(let L=0;L<m;++L){let W=U+L*g;if(W<0||W>=f.inHeight)continue;let H=L*I[0],q=P+W*S;for(let j=0;j<f.outWidth;++j){let X=z+j*M,G=j*f.strideWidth-k;for(let K=0;K<y;++K){let Y=G+K*b;if(Y<0||Y>=f.inWidth)continue;let Q=H+K*I[1],Z=q+Y*D,J=Q;for(let ee=0;ee<f.inChannels;++ee){let et=$[Z+ee*E];for(let en=0;en<f.outChannels;++en)B[X+en*A]+=et*O[J+en];J+=f.outChannels}}}}}}return n.makeTensorInfo(N.shape,N.dtype,B)}let eR={kernelName:r.mhS,backendName:"cpu",kernelFunc:eV},ez={kernelName:r.wUP,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o,dy:i}=t,{strides:u,pad:l,dataFormat:p,dimRoundingMode:h,filterShape:c}=s;a([o,i],"conv2dBackpropFilter");let d=r.Wap.convertConv2DDataFormat(p),f=r.Wap.computeConv2DInfo(o.shape,c,u,1,l,h,!1,d),{strideHeight:m,strideWidth:y,filterHeight:g,filterWidth:b}=f,k="channelsLast"===f.dataFormat,v=new r.YDk(f.filterShape,"float32"),x=f.padInfo.left,N=f.padInfo.top,w=n.data.get(o.dataId).values,I=n.data.get(i.dataId).values,T=new r.YDk(o.shape,o.dtype,w),S=new r.YDk(i.shape,i.dtype,I);for(let D=0;D<g;++D){let E=Math.max(0,Math.ceil((N-D)/m)),_=Math.min(f.outHeight,(f.inHeight+N-D)/m);for(let F=0;F<b;++F){let M=Math.max(0,Math.ceil((x-F)/y)),A=Math.min(f.outWidth,(f.inWidth+x-F)/y);for(let $=0;$<f.inChannels;++$)for(let O=0;O<f.outChannels;++O){let B=0;for(let C=0;C<f.batchSize;++C)for(let P=E;P<_;++P){let V=D+P*m-N;for(let R=M;R<A;++R){let z=F+R*y-x;k?B+=T.get(C,V,z,$)*S.get(C,P,R,O):B+=T.get(C,$,V,z)*S.get(C,O,P,R)}}v.set(B,D,F,$,O)}}}return n.makeTensorInfo(v.shape,v.dtype,v.values)}},eU={kernelName:r.wm,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{dy:o,filter:i}=t,{inputShape:u,strides:l,pad:p,dataFormat:h,dimRoundingMode:c}=s;a([o,i],"conv2dBackpropInput");let d=r.D5U.computeStrides(i.shape),f=r.D5U.computeStrides(o.shape),m=r.Wap.convertConv2DDataFormat(h),y=r.Wap.computeConv2DInfo(u,i.shape,l,1,p,c,!1,m),g=new r.YDk(y.inShape,"float32"),b=g.values,k=n.data.get(o.dataId).values,v=n.data.get(i.dataId).values,[x,N,w]=d,{batchSize:I,filterHeight:T,filterWidth:S,inChannels:D,inHeight:E,inWidth:_,outChannels:F,outHeight:M,outWidth:A,strideHeight:$,strideWidth:O}=y;m=y.dataFormat;let B=T-1-y.padInfo.top,C=S-1-y.padInfo.left,P="channelsLast"===m,V=g.strides[0],R=P?g.strides[1]:g.strides[2],z=P?g.strides[2]:1,U=P?1:g.strides[1],L=f[0],W=P?f[1]:f[2],H=P?f[2]:1,q=P?1:f[1];for(let j=0;j<I;++j)for(let X=0;X<D;++X)for(let G=0;G<E;++G){let K=G-B,Y=Math.max(0,Math.ceil(K/$)),Q=Math.min(M,(T+K)/$);for(let Z=0;Z<_;++Z){let J=Z-C,ee=Math.max(0,Math.ceil(J/O)),et=Math.min(A,(S+J)/O),en=0;for(let er=Y;er<Q;++er){let ea=er*$-K;for(let es=ee;es<et;++es){let eo=es*O-J,ei=L*j+W*er+H*es,eu=x*(T-1-ea)+N*(S-1-eo)+w*X;for(let el=0;el<F;++el){let ep=k[ei+q*el],eh=v[eu+el];en+=ep*eh}}}let ec=V*j+R*G+z*Z+U*X;b[ec]=en}}return n.makeTensorInfo(g.shape,g.dtype,g.values)}},eL={kernelName:r.x12,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o,filter:i}=t,{strides:u,pad:l,dilations:p}=s;a([o,i],"conv3d");let h=r.Wap.computeConv3DInfo(o.shape,i.shape,u,p,l),{filterDepth:c,filterHeight:d,filterWidth:f,dilationDepth:m,dilationHeight:y,dilationWidth:g,padInfo:b}=h,k=b.front,v=b.left,x=b.top,N=new r.YDk(h.outShape,o.dtype),w=n.data.get(o.dataId).values,I=n.data.get(i.dataId).values,T=N.values,S=r.D5U.computeStrides(o.shape),D=r.D5U.computeStrides(i.shape);for(let E=0;E<h.batchSize;++E){let _=E*S[0],F=E*N.strides[0];for(let M=0;M<h.outDepth;++M){let A=F+M*N.strides[1],$=M*h.strideDepth-k;for(let O=0;O<c;++O){let B=$+O*m;if(B<0||B>=h.inDepth)continue;let C=O*D[0],P=_+B*S[1];for(let V=0;V<h.outHeight;++V){let R=A+V*N.strides[2],z=V*h.strideHeight-x;for(let U=0;U<d;++U){let L=z+U*y;if(L<0||L>=h.inHeight)continue;let W=C+U*D[1],H=P+L*S[2];for(let q=0;q<h.outWidth;++q){let j=R+q*h.outChannels,X=q*h.strideWidth-v;for(let G=0;G<f;++G){let K=X+G*g;if(K<0||K>=h.inWidth)continue;let Y=W+G*D[2],Q=H+K*h.inChannels,Z=Y;for(let J=0;J<h.inChannels;++J){let ee=w[Q+J];for(let et=0;et<h.outChannels;++et)T[j+et]+=ee*I[Z+et];Z+=h.outChannels}}}}}}}}return n.makeTensorInfo(N.shape,N.dtype,N.values)}},eW={kernelName:r.o2y,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o,dy:i}=t,{strides:u,pad:l,filterShape:p}=s;a([o,i],"conv3dBackpropFilterV2");let h=r.D5U.computeStrides(o.shape),c=r.D5U.computeStrides(i.shape),d=r.Wap.computeConv3DInfo(o.shape,p,u,1,l),f=d.strideDepth,m=d.strideHeight,y=d.strideWidth,g=d.filterDepth,b=d.filterHeight,k=d.filterWidth,v=new r.YDk(d.filterShape,"float32"),x=v.values,[N,w,I,T]=v.strides,S=n.data.get(i.dataId).values,[D,E,_,F]=c,M=n.data.get(o.dataId).values,[A,$,O,B]=h,C=d.padInfo.front,P=d.padInfo.left,V=d.padInfo.top;for(let R=0;R<g;++R){let z=Math.max(0,Math.ceil((C-R)/f)),U=Math.min(d.outDepth,(d.inDepth+C-R)/f),L=R*N;for(let W=0;W<b;++W){let H=Math.max(0,Math.ceil((V-W)/m)),q=Math.min(d.outHeight,(d.inHeight+V-W)/m),j=W*w+L;for(let X=0;X<k;++X){let G=Math.max(0,Math.ceil((P-X)/y)),K=Math.min(d.outWidth,(d.inWidth+P-X)/y),Y=X*I+j;for(let Q=0;Q<d.inChannels;++Q){let Z=Q*T+Y;for(let J=0;J<d.outChannels;++J){let ee=0;for(let et=0;et<d.batchSize;++et){let en=et*A,er=et*D;for(let ea=z;ea<U;++ea){let es=R+ea*f-C,eo=es*$+en,ei=ea*E+er;for(let eu=H;eu<q;++eu){let el=W+eu*m-V,ep=el*O+eo,eh=eu*_+ei;for(let ec=G;ec<K;++ec){let ed=X+ec*y-P,ef=ed*B+ep,em=ec*F+eh;ee+=M[ef+Q]*S[em+J]}}}}x[Z+J]=ee}}}}}return n.makeTensorInfo(v.shape,v.dtype,v.values)}},eH={kernelName:r.ik2,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{dy:o,filter:i}=t,{pad:u,strides:l,inputShape:p}=s;a([o],"conv3dBackpropInputV2");let h=r.D5U.computeStrides(o.shape),c=r.D5U.computeStrides(i.shape),d=r.Wap.computeConv3DInfo(p,i.shape,l,1,u),f=new r.YDk(d.inShape,"float32"),m=f.values,[y,g,b,k]=f.strides,v=n.data.get(o.dataId).values,[x,N,w,I]=h,T=n.data.get(i.dataId).values,[S,D,E,_]=c,{batchSize:F,filterDepth:M,filterHeight:A,filterWidth:$,inChannels:O,inDepth:B,inHeight:C,inWidth:P,outChannels:V,outDepth:R,outHeight:z,outWidth:U,strideDepth:L,strideHeight:W,strideWidth:H}=d,q=M-1-d.padInfo.front,j=A-1-d.padInfo.top,X=$-1-d.padInfo.left;for(let G=0;G<F;++G)for(let K=0;K<O;++K)for(let Y=0;Y<B;++Y){let Q=Y-q,Z=Math.max(0,Math.ceil(Q/L)),J=Math.min(R,(M+Q)/L);for(let ee=0;ee<C;++ee){let et=ee-j,en=Math.max(0,Math.ceil(et/W)),er=Math.min(z,(A+et)/W);for(let ea=0;ea<P;++ea){let es=ea-X,eo=Math.max(0,Math.ceil(es/H)),ei=Math.min(U,($+es)/H),eu=0;for(let el=Z;el<J;++el){let ep=el*L-Q;for(let eh=en;eh<er;++eh){let ec=eh*W-et;for(let ed=eo;ed<ei;++ed){let ef=ed*H-es,em=x*G+N*el+w*eh+I*ed,ey=S*(M-1-ep)+D*(A-1-ec)+E*($-1-ef)+_*K;for(let eg=0;eg<V;++eg){let eb=v[em+eg],ek=T[ey+eg];eu+=eb*ek}}}}m[y*G+g*Y+b*ee+k*ea+K]=eu}}}return n.makeTensorInfo(f.shape,f.dtype,f.values)}},eq=i(r.mc4,e=>Math.cos(e)),ej={kernelName:r.mc4,backendName:"cpu",kernelFunc:eq},eX=i(r.TR1,e=>Math.cosh(e)),eG={kernelName:r.TR1,backendName:"cpu",kernelFunc:eX},eK={kernelName:r.VcC,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:a}=e,{image:s,boxes:o,boxInd:i}=t,{cropSize:u,method:l,extrapolationValue:p}=a,[h,c,d,f]=s.shape,m=o.shape[0],[y,g]=u,b=(0,r.f3b)([m,y,g,f],"float32"),k=n.data.get(o.dataId).values,v=n.data.get(i.dataId).values,x=n.data.get(s.dataId).values,N=r.D5U.computeStrides(s.shape),w=r.D5U.computeStrides(b.shape);for(let I=0;I<m;I++){let T=4*I,S=k[T],D=k[T+1],E=k[T+2],_=k[T+3],F=v[I];if(F>=h)continue;let M=y>1?(E-S)*(c-1)/(y-1):0,A=g>1?(_-D)*(d-1)/(g-1):0;for(let $=0;$<y;$++){let O=y>1?S*(c-1)+$*M:.5*(S+E)*(c-1);if(O<0||O>c-1){for(let B=0;B<g;B++)for(let C=0;C<f;C++){let P=C+B*w[2]+$*w[1]+I*w[0];b.values[P]=p}continue}if("bilinear"===l){let V=Math.floor(O),R=Math.ceil(O),z=O-V;for(let U=0;U<g;U++){let L=g>1?D*(d-1)+U*A:.5*(D+_)*(d-1);if(L<0||L>d-1){for(let W=0;W<f;W++){let H=W+U*w[2]+$*w[1]+I*w[0];b.values[H]=p}continue}let q=Math.floor(L),j=Math.ceil(L),X=L-q;for(let G=0;G<f;G++){let K=G+q*N[2]+V*N[1]+F*N[0],Y=x[K];K=G+j*N[2]+V*N[1]+F*N[0];let Q=x[K];K=G+q*N[2]+R*N[1]+F*N[0];let Z=x[K];K=G+j*N[2]+R*N[1]+F*N[0];let J=x[K],ee=Y+(Q-Y)*X,et=Z+(J-Z)*X;K=G+U*w[2]+$*w[1]+I*w[0],b.values[K]=ee+(et-ee)*z}}}else for(let en=0;en<g;++en){let er=g>1?D*(d-1)+en*A:.5*(D+_)*(d-1);if(er<0||er>d-1){for(let ea=0;ea<f;ea++){let es=ea+en*w[2]+$*w[1]+I*w[0];b.values[es]=p}continue}let eo=Math.round(er),ei=Math.round(O);for(let eu=0;eu<f;eu++){let el=eu+eo*N[2]+ei*N[1]+F*N[0],ep=eu+en*w[2]+$*w[1]+I*w[0];b.values[ep]=x[el]}}}}return n.makeTensorInfo(b.shape,b.dtype,b.values)}},eY={kernelName:r.iHb,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i,exclusive:u,reverse:l}=s;a(o,"cumsum");let p=r.Wap.getAxesPermutation([i],o.shape.length),h=o;null!=p&&(h=Y({inputs:{x:o},backend:n,attrs:{perm:p}}));let c=r.Wap.getInnerMostAxes(1,o.shape.length)[0];if(c!==h.shape.length-1)throw Error(`backend.cumsum in CPU expects an inner-most axis=${h.shape.length-1} but got axis=${c}`);let d=(0,r.x8V)(h.dtype,"int32"),f=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(h.shape),d),m=n.data.get(h.dataId).values,y=h.shape[h.shape.length-1],g=l?(e,t)=>e+y-t-1:(e,t)=>e+t;for(let b=0;b<m.length;b+=y)for(let k=0;k<y;k++){let v=g(b,k);if(0===k)f[v]=u?0:m[v];else{let x=g(b,k-1);f[v]=u?m[x]+f[x]:m[v]+f[x]}}let N=n.makeTensorInfo(h.shape,d,f);if(null!=p){let w=r.Wap.getUndoAxesPermutation(p),I=Y({inputs:{x:N},backend:n,attrs:{perm:w}});return n.disposeIntermediateTensorInfo(N),n.disposeIntermediateTensorInfo(h),I}return N}},eQ={kernelName:r.QRR,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:a}=e,{x:s,weights:o}=t,{size:i,binaryOutput:u}=a;if(1===s.shape.length){let l=n.data.get(s.dataId).values,p=n.data.get(o.dataId).values,h=eI(l,p,o.dtype,o.shape,i);return n.makeTensorInfo([i],o.dtype,h)}if(2===s.shape.length){let c=n.bufferSync(s),d=n.bufferSync(o),f=function(e,t,n,a=!1){let s=e.shape[0],o=e.shape[1],i=(0,r.f3b)([s,n],t.dtype);for(let u=0;u<s;u++)for(let l=0;l<o;l++){let p=e.get(u,l);if(p<0)throw Error("Input x must be non-negative!");p>=n||(a?i.set(1,u,p):t.size>0?i.set(i.get(u,p)+t.get(u,l),u,p):i.set(i.get(u,p)+1,u,p))}return i}(c,d,i,u);return n.makeTensorInfo(f.shape,o.dtype,f.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${s.shape.length}.`)}},eZ={kernelName:r.T0n,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:a}=e,{x:s}=t,{blockSize:o,dataFormat:i}=a;r.D5U.assert("NHWC"===i,()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${i}`),r.D5U.assert(o>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${o}`);let u=s.shape[0],l=s.shape[1],p=s.shape[2],h=s.shape[3],c=l*o,d=p*o,f=h/(o*o),m=n.data.get(s.dataId).values,y=new Float32Array(u*c*d*f),g=0;for(let b=0;b<u;++b)for(let k=0;k<c;++k){let v=Math.floor(k/o),x=k%o;for(let N=0;N<d;++N){let w=Math.floor(N/o),I=N%o,T=(x*o+I)*f;for(let S=0;S<f;++S){let D=S+T,E=D+h*(w+p*(v+l*b));y[g++]=m[E]}}}return n.makeTensorInfo([u,c,d,f],s.dtype,y)}};/**
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
 */ function eJ(e){let{inputs:t,backend:n,attrs:s}=e,{x:o,filter:i}=t,{strides:u,pad:l,dilations:p,dimRoundingMode:h}=s;a([o,i],"depthwiseConv2DNative");let c=r.D5U.computeStrides(o.shape),d=r.D5U.computeStrides(i.shape),f=p;null==f&&(f=[1,1]),r.D5U.assert(r.Wap.eitherStridesOrDilationsAreOne(u,f),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${u} and dilations '${f}'`);let m=r.Wap.computeConv2DInfo(o.shape,i.shape,u,f,l,h,!0),{filterHeight:y,filterWidth:g,dilationHeight:b,dilationWidth:k,padInfo:v}=m,x=v.left,N=v.top,w=m.outChannels/m.inChannels,I=new r.YDk(m.outShape,o.dtype),T=n.data.get(o.dataId).values,S=n.data.get(i.dataId).values,D=I.values;for(let E=0;E<m.batchSize;++E){let _=E*c[0],F=E*I.strides[0];for(let M=0;M<m.outHeight;++M){let A=F+M*I.strides[1],$=M*m.strideHeight-x;for(let O=0;O<y;++O){let B=$+O*b;if(B<0||B>=m.inHeight)continue;let C=O*d[0],P=_+B*c[1];for(let V=0;V<m.outWidth;++V){let R=A+V*I.strides[2],z=V*m.strideWidth-N;for(let U=0;U<g;++U){let L=z+U*k;if(L<0||L>=m.inWidth)continue;let W=C+U*d[1],H=P+L*m.inChannels,q=R,j=W;for(let X=0;X<m.inChannels;++X){let G=T[H+X];for(let K=0;K<w;++K)D[q+K]+=G*S[j+K];q+=w,j+=w}}}}}}return n.makeTensorInfo(I.shape,I.dtype,I.values)}let e0={kernelName:r.cie,backendName:"cpu",kernelFunc:eJ},e1={kernelName:r.sL$,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o,dy:i}=t,{strides:u,dilations:l,pad:p,dimRoundingMode:h,filterShape:c}=s;a([o,i],"depthwiseConv2dNativeBackpropFilter");let d=r.Wap.computeConv2DInfo(o.shape,c,u,l,p,h,!0),{strideHeight:f,strideWidth:m,filterHeight:y,filterWidth:g}=d,b=new r.YDk(d.filterShape,"float32"),k=d.padInfo.left,v=d.padInfo.top,x=d.outChannels/d.inChannels,N=n.data.get(o.dataId).values,w=new r.YDk(o.shape,o.dtype,N),I=n.data.get(i.dataId).values,T=new r.YDk(i.shape,i.dtype,I);for(let S=0;S<y;++S){let D=Math.max(0,Math.ceil((v-S)/f)),E=Math.min(d.outHeight,(d.inHeight+v-S)/f);for(let _=0;_<g;++_){let F=Math.max(0,Math.ceil((k-_)/m)),M=Math.min(d.outWidth,(d.inWidth+k-_)/m);for(let A=0;A<d.outChannels;++A){let $=Math.trunc(A/x),O=A%x,B=0;for(let C=0;C<d.batchSize;++C)for(let P=D;P<E;++P){let V=S+P*f-v;for(let R=F;R<M;++R){let z=_+R*m-k;B+=w.get(C,V,z,$)*T.get(C,P,R,A)}}b.set(B,S,_,$,O)}}}return n.makeTensorInfo(b.shape,b.dtype,b.values)}},e2={kernelName:r.y7R,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{dy:o,filter:i}=t,{strides:u,dilations:l,pad:p,dimRoundingMode:h,inputShape:c}=s;a([o,i],"depthwiseConv2DNativeBackpropInput");let d=r.D5U.computeStrides(o.shape),f=r.D5U.computeStrides(i.shape),m=r.Wap.computeConv2DInfo(c,i.shape,u,l,p,h,!0),y=new r.YDk(m.inShape,"float32"),g=y.values,[b,k,v]=y.strides,x=n.data.get(o.dataId).values,[N,w,I]=d,T=n.data.get(i.dataId).values,[S,D,E]=f,{batchSize:_,filterHeight:F,filterWidth:M,inChannels:A,inHeight:$,inWidth:O,outChannels:B,outHeight:C,outWidth:P,strideHeight:V,strideWidth:R}=m,z=F-1-m.padInfo.top,U=M-1-m.padInfo.left,L=B/A;for(let W=0;W<_;++W)for(let H=0;H<A;++H)for(let q=0;q<$;++q){let j=q-z,X=Math.max(0,Math.ceil(j/V)),G=Math.min(C,(F+j)/V);for(let K=0;K<O;++K){let Y=K-U,Q=Math.max(0,Math.ceil(Y/R)),Z=Math.min(P,(M+Y)/R),J=0;for(let ee=X;ee<G;++ee){let et=ee*V-j;for(let en=Q;en<Z;++en){let er=en*R-Y,ea=N*W+w*ee+I*en,es=S*(F-1-et)+D*(M-1-er)+E*H;for(let eo=0;eo<L;++eo){let ei=H*L+eo,eu=x[ea+ei],el=T[es+eo];J+=eu*el}}}g[b*W+k*q+v*K+H]=J}}return n.makeTensorInfo(y.shape,y.dtype,y.values)}},e3={kernelName:r.$w,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n}=e,{x:a}=t,s=r.D5U.sizeFromShape(a.shape),o=n.data.get(a.dataId).values,i=(0,r.f3b)([s,s],a.dtype),u=i.values;for(let l=0;l<o.length;l++)u[l*s+l]=o[l];let p=[...a.shape,...a.shape];return n.makeTensorInfo(p,i.dtype,i.values)}},e9={kernelName:r.p4S,backendName:"cpu",kernelFunc({inputs:e,backend:t,attrs:n}){let{x:a,filter:s}=e,{strides:o,pad:i,dilations:u}=n,l=t.data.get(a.dataId).values,p=a.shape.length,h=t.data.get(s.dataId).values,c=s.shape.length,{batchSize:d,inHeight:f,inWidth:m,inChannels:y,outHeight:g,outWidth:b,padInfo:k,strideHeight:v,strideWidth:x,filterHeight:N,filterWidth:w,dilationHeight:I,dilationWidth:T,outShape:S}=r.Wap.computeDilation2DInfo(a.shape,s.shape,o,i,"NHWC",u),D=r.D5U.sizeFromShape(S),E=S.length,_=r.D5U.getArrayFromDType(a.dtype,D);for(let F=0;F<d;++F)for(let M=0;M<g;++M){let A=M*v-k.top;for(let $=0;$<b;++$){let O=$*x-k.left;for(let B=0;B<y;++B){let C=Number.MIN_SAFE_INTEGER;for(let P=0;P<N;++P){let V=A+P*I;if(V>=0&&V<f)for(let R=0;R<w;++R){let z=O+R*T;if(z>=0&&z<m){let U=r.D5U.locToIndex([F,V,z,B],p,r.D5U.computeStrides(a.shape)),L=r.D5U.locToIndex([P,R,B],c,r.D5U.computeStrides(s.shape)),W=l[U]+h[L];W>C&&(C=W)}}}let H=r.D5U.locToIndex([F,M,$,B],E,r.D5U.computeStrides(S));_[H]=C}}}let q=t.write(r.D5U.toTypedArray(_,a.dtype),S,a.dtype);return{dataId:q,shape:S,dtype:a.dtype}}},e6={kernelName:r.Vn9,backendName:"cpu",kernelFunc({inputs:e,backend:t,attrs:n}){let{x:a,filter:s,dy:o}=e,{strides:i,pad:u,dilations:l}=n,p=r.D5U.toNestedArray(a.shape,t.data.get(a.dataId).values),h=r.D5U.toNestedArray(s.shape,t.data.get(s.dataId).values),{batchSize:c,inHeight:d,inWidth:f,inChannels:m,outHeight:y,outWidth:g,padInfo:b,strideHeight:k,strideWidth:v,filterHeight:x,filterWidth:N,dilationHeight:w,dilationWidth:I,outShape:T}=r.Wap.computeDilation2DInfo(a.shape,s.shape,i,u,"NHWC",l);r.D5U.assert(o.rank===T.length,()=>`Error in ${r.Vn9}, dy must have the same rank as output ${T.length}, but got ${o.rank}`);let S=r.D5U.toNestedArray(T,t.data.get(o.dataId).values),D=r.D5U.makeZerosNestedTypedArray(s.shape,s.dtype);for(let E=0;E<c;++E)for(let _=0;_<y;++_){let F=_*k-b.top;for(let M=0;M<g;++M){let A=M*v-b.left;for(let $=0;$<m;++$){let O=Number.MIN_SAFE_INTEGER,B=0,C=0;for(let P=0;P<x;++P){let V=F+P*w;if(V>=0&&V<d)for(let R=0;R<N;++R){let z=A+R*I;if(z>=0&&z<f){let U=p[E][V][z][$]+h[P][R][$];U>O&&(O=U,B=P,C=R)}}}D[B][C][$]+=S[E][_][M][$]}}}let L=t.write(r.D5U.toTypedArray(D,a.dtype),s.shape,s.dtype);return{dataId:L,shape:s.shape,dtype:s.dtype}}},e5={kernelName:r.ekb,backendName:"cpu",kernelFunc({inputs:e,backend:t,attrs:n}){let{x:a,filter:s,dy:o}=e,{strides:i,pad:u,dilations:l}=n,p=r.D5U.toNestedArray(a.shape,t.data.get(a.dataId).values),h=r.D5U.toNestedArray(s.shape,t.data.get(s.dataId).values),{batchSize:c,inHeight:d,inWidth:f,inChannels:m,outHeight:y,outWidth:g,padInfo:b,strideHeight:k,strideWidth:v,filterHeight:x,filterWidth:N,dilationHeight:w,dilationWidth:I,outShape:T}=r.Wap.computeDilation2DInfo(a.shape,s.shape,i,u,"NHWC",l);r.D5U.assert(o.rank===T.length,()=>`Error in ${r.ekb}, dy must have the same rank as output ${T.length}, but got ${o.rank}`);let S=r.D5U.toNestedArray(T,t.data.get(o.dataId).values),D=r.D5U.makeZerosNestedTypedArray(a.shape,a.dtype);for(let E=0;E<c;++E)for(let _=0;_<y;++_){let F=_*k-b.top;for(let M=0;M<g;++M){let A=M*v-b.left;for(let $=0;$<m;++$){let O=Number.MIN_SAFE_INTEGER,B=F<0?0:F,C=A<0?0:A;for(let P=0;P<x;++P){let V=F+P*w;if(V>=0&&V<d)for(let R=0;R<N;++R){let z=A+R*I;if(z>=0&&z<f){let U=p[E][V][z][$]+h[P][R][$];U>O&&(O=U,B=V,C=z)}}}D[E][B][C][$]+=S[E][_][M][$]}}}let L=t.write(r.D5U.toTypedArray(D,a.dtype),a.shape,a.dtype);return{dataId:L,shape:a.shape,dtype:a.dtype}}},e4={kernelName:r.HEU,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n}=e,{dy:s,y:o}=t;a([s,o],"eluGrad");let i=new Float32Array(r.D5U.sizeFromShape(o.shape)),u=n.data.get(o.dataId).values,l=n.data.get(s.dataId).values;for(let p=0;p<u.length;++p){let h=u[p];h>=1?i[p]=l[p]:i[p]=l[p]*(h+1)}return n.makeTensorInfo(o.shape,"float32",i)}},e7=m((e,t)=>e===t?1:0),e8=M(r.hdR,e7,null,"bool"),te={kernelName:r.hdR,backendName:"cpu",kernelFunc:e8},tt=r.Wap.ERF_P,tn=r.Wap.ERF_A1,tr=r.Wap.ERF_A2,ta=r.Wap.ERF_A3,ts=r.Wap.ERF_A4,to=r.Wap.ERF_A5,ti=i(r.Omj,e=>{let t=Math.sign(e),n=Math.abs(e),r=1/(1+tt*n);return t*(1-((((to*r+ts)*r+ta)*r+tr)*r+tn)*r*Math.exp(-n*n))}),tu={kernelName:r.Omj,backendName:"cpu",kernelFunc:ti},tl=eS(e=>Math.exp(e)),tp=u(r.NEP,tl),th={kernelName:r.NEP,backendName:"cpu",kernelFunc:tp};/**
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
 */ function tc(e){let{inputs:t,backend:n,attrs:a}=e,{input:s}=t,{dim:o}=a,i=s.shape.length,u=s.shape.slice(),l=o;return o<0&&(r.D5U.assert(-(i+1)<=o,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+o+1),u.splice(l,0,1),P({inputs:{x:s},backend:n,attrs:{shape:u}})}let td={kernelName:r.YFo,backendName:"cpu",kernelFunc:tc},tf=eS(e=>Math.expm1(e)),tm=u(r.Y0y,tf),ty={kernelName:r.Y0y,backendName:"cpu",kernelFunc:tm},tg=m((e,t)=>e*t),tb=A((e,t,n,r)=>({real:e*n-t*r,imag:e*r+t*n})),tk=M(r.wYn,tg,tb),tv={kernelName:r.wYn,backendName:"cpu",kernelFunc:tk},tx=m((e,t)=>e/t),tN=M(r.oHH,tx),tw={kernelName:r.oHH,backendName:"cpu",kernelFunc:tN},tI=m((e,t)=>e-t),tT=A((e,t,n,r)=>({real:e-n,imag:t-r})),tS=M(r.Tr8,tI,tT),tD={kernelName:r.Tr8,backendName:"cpu",kernelFunc:tS};/**
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
 */ function tE(e,t,n){let a=e.shape,s=a[0],o=a[1],i=n.data.get(e.dataId),u=i.complexTensorInfos.real,l=i.complexTensorInfos.imag,p=[s,o],c=r.D5U.sizeFromShape(p),d=r.D5U.getTypedArrayFromDType("float32",c),f=r.D5U.getTypedArrayFromDType("float32",c);for(let m=0;m<s;m++){let y=ex({inputs:{x:u},backend:n,attrs:{begin:[m,0],size:[1,o]}}),g=ex({inputs:{x:l},backend:n,attrs:{begin:[m,0],size:[1,o]}}),b=I({inputs:{real:y,imag:g},backend:n}),{real:k,imag:v}=function(e,t,n){let a=r.D5U.sizeFromShape(e.shape),s=n.data.get(e.dataId),o=n.data.get(s.complexTensorInfos.real.dataId).values,i=n.data.get(s.complexTensorInfos.imag.dataId).values;if((a&a-1)==0){let u=function e(t,n,a,s,o){if(1===a)return{real:t,imag:n};let i=r.Wap.mergeRealAndImagArrays(t,n),u=a/2,l=r.Wap.complexWithEvenIndex(i),p=l.real,h=l.imag,c=[p.length],d=o.makeTensorInfo(c,"float32",p),f=o.makeTensorInfo(c,"float32",h),m=I({inputs:{real:d,imag:f},backend:o}),y=r.Wap.complexWithOddIndex(i),g=y.real,b=y.imag,k=[g.length],v=o.makeTensorInfo(k,"float32",g),x=o.makeTensorInfo(k,"float32",b),N=I({inputs:{real:v,imag:x},backend:o}),w=e(p,h,u,s,o),T=w.real,S=w.imag,E=[T.length],_=o.makeTensorInfo(E,"float32",T),F=o.makeTensorInfo(E,"float32",S),M=I({inputs:{real:_,imag:F},backend:o}),A=e(g,b,u,s,o),$=A.real,O=A.imag,C=[$.length],P=o.makeTensorInfo(C,"float32",$),V=o.makeTensorInfo(C,"float32",O),R=I({inputs:{real:P,imag:V},backend:o}),z=r.Wap.exponents(a,s),U=[z.real.length],L=o.makeTensorInfo(U,"float32",z.real),W=o.makeTensorInfo(U,"float32",z.imag),H=I({inputs:{real:L,imag:W},backend:o}),q=tk({inputs:{a:H,b:R},backend:o}),j=B({inputs:{a:M,b:q},backend:o}),X=tS({inputs:{a:M,b:q},backend:o}),G=D({inputs:{input:j},backend:o}),K=D({inputs:{input:X},backend:o}),Y=eO({inputs:{input:j},backend:o}),Q=eO({inputs:{input:X},backend:o}),Z=eC({inputs:[G,K],backend:o,attrs:{axis:0}}),J=eC({inputs:[Y,Q],backend:o,attrs:{axis:0}}),ee=o.data.get(Z.dataId).values,et=o.data.get(J.dataId).values;return o.disposeIntermediateTensorInfo(d),o.disposeIntermediateTensorInfo(f),o.disposeIntermediateTensorInfo(m),o.disposeIntermediateTensorInfo(v),o.disposeIntermediateTensorInfo(x),o.disposeIntermediateTensorInfo(N),o.disposeIntermediateTensorInfo(_),o.disposeIntermediateTensorInfo(F),o.disposeIntermediateTensorInfo(M),o.disposeIntermediateTensorInfo(P),o.disposeIntermediateTensorInfo(V),o.disposeIntermediateTensorInfo(R),o.disposeIntermediateTensorInfo(L),o.disposeIntermediateTensorInfo(W),o.disposeIntermediateTensorInfo(H),o.disposeIntermediateTensorInfo(q),o.disposeIntermediateTensorInfo(j),o.disposeIntermediateTensorInfo(X),o.disposeIntermediateTensorInfo(G),o.disposeIntermediateTensorInfo(Y),o.disposeIntermediateTensorInfo(K),o.disposeIntermediateTensorInfo(Q),o.disposeIntermediateTensorInfo(Z),o.disposeIntermediateTensorInfo(J),{real:ee,imag:et}}(o,i,a,t,n),l=[e.shape[0],e.shape[1]];if(t){let p=n.makeTensorInfo(l,"float32",u.real),c=n.makeTensorInfo(l,"float32",u.imag),d=n.makeTensorInfo([],"float32",r.D5U.createScalarValue(a,"float32")),f=h({inputs:{x:d},backend:n}),m=tw.kernelFunc({inputs:{a:p,b:d},backend:n}),y=tw.kernelFunc({inputs:{a:c,b:f},backend:n}),g=n.data.get(m.dataId).values,b=n.data.get(y.dataId).values;return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(y),{real:g,imag:b}}return u}{let k=r.Wap.mergeRealAndImagArrays(o,i),v=function(e,t,n){let a=new Float32Array(2*t);for(let s=0;s<t;s++){let o=0,i=0;for(let u=0;u<t;u++){let l=r.Wap.exponent(s*u,t,n),p=r.Wap.getComplexWithIndex(e,u);o+=p.real*l.real-p.imag*l.imag,i+=p.real*l.imag+p.imag*l.real}n&&(o/=t,i/=t),r.Wap.assignToTypedArray(a,o,i,s)}return a}(k,a,t);return r.Wap.splitRealAndImagArrays(v)}}(b,t,n),x=r.Wap.mergeRealAndImagArrays(k,v);for(let N=0;N<o;N++){let w=r.Wap.getComplexWithIndex(x,N);d[m*o+N]=w.real,f[m*o+N]=w.imag}n.disposeIntermediateTensorInfo(y),n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(b)}let T=n.makeTensorInfo(p,"float32",d),S=n.makeTensorInfo(p,"float32",f),E=I({inputs:{real:T,imag:S},backend:n});return n.disposeIntermediateTensorInfo(T),n.disposeIntermediateTensorInfo(S),E}let t_={kernelName:r.vwp,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n}=e,{input:a}=t,s=r.D5U.sizeFromShape(a.shape),o=a.shape[a.shape.length-1],i=P({inputs:{x:a},backend:n,attrs:{shape:[s/o,o]}}),u=tE(i,!1,n),l=P({inputs:{x:u},backend:n,attrs:{shape:a.shape}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(u),l}};/**
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
 */ function tF(e){let{backend:t,attrs:n}=e,{shape:a,value:s,dtype:o}=n,i=o||r.D5U.inferDtype(s),u=r.D5U.getArrayFromDType(i,r.D5U.sizeFromShape(a));return function(e,t,n){e.fill(t)}(u,s,0),t.makeTensorInfo(a,i,u)}let tM={kernelName:r.deh,backendName:"cpu",kernelFunc:tF},tA={kernelName:r.Uyb,backendName:"cpu",kernelFunc({inputs:e,attrs:t,backend:n}){let{image:a}=e,s=r.D5U.getTypedArrayFromDType(a.dtype,r.D5U.sizeFromShape(a.shape)),[o,i,u,l]=a.shape,p=n.data.get(a.dataId).values;for(let h=0;h<o;h++){let c=h*u*i*l;for(let d=0;d<i;d++){let f=d*(u*l);for(let m=0;m<u;m++){let y=m*l;for(let g=0;g<l;g++){let b=[o,d,m,g],k=b[2],v=Math.round(u-k),x=c+f+y+g,N=p[x];if(v>=0&&v<u){let w=v*l,I=c+f+w+g;N=p[I]}s[x]=N}}}}let T=n.write(s,a.shape,a.dtype);return{dataId:T,shape:a.shape,dtype:a.dtype}}},t$=eS(e=>Math.floor(e)),tO=u(r.OR,t$),tB={kernelName:r.OR,backendName:"cpu",kernelFunc:tO},tC=m((e,t)=>Math.floor(e/t)),tP=M(r.jeX,tC,null,"int32"),tV={kernelName:r.jeX,backendName:"cpu",kernelFunc:tP},tR={kernelName:r._V0,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,filter:s,bias:o,preluActivationWeights:i}=t,{strides:u,pad:l,dataFormat:p,dilations:h,dimRoundingMode:c,activation:d,leakyreluAlpha:f}=r,m=eV({inputs:{x:a,filter:s},backend:n,attrs:{strides:u,pad:l,dataFormat:p,dilations:h,dimRoundingMode:c}});if(o){let y=m;m=B({inputs:{a:m,b:o},backend:n}),n.disposeIntermediateTensorInfo(y)}if(d){let g=m;m=w(n,m,d,i,f),n.disposeIntermediateTensorInfo(g)}return m}},tz={kernelName:r.luS,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,filter:s,bias:o,preluActivationWeights:i}=t,{strides:u,pad:l,dataFormat:p,dilations:h,dimRoundingMode:c,activation:d,leakyreluAlpha:f}=r,m=eJ({inputs:{x:a,filter:s},backend:n,attrs:{strides:u,pad:l,dataFormat:p,dilations:h,dimRoundingMode:c}});if(o){let y=m;m=B({inputs:{a:m,b:o},backend:n}),n.disposeIntermediateTensorInfo(y)}if(d){let g=m;m=w(n,m,d,i,f),n.disposeIntermediateTensorInfo(g)}return m}},tU={kernelName:r.q1x,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n}=e,{params:a,indices:s}=t,o=r.D5U.sizeFromShape(a.shape),i=s.shape,u=i[i.length-1],[l,p,h,c]=r.Wap.prepareAndValidate(a,s);if(0===p)return n.makeTensorInfo(l,a.dtype,[]);let d=(0,r.f3b)([p,h],a.dtype),f=n.data.get(s.dataId).values,m=n.data.get(a.dataId).values;for(let y=0;y<p;y++){let g=[],b=0;for(let k=0;k<u;k++){let v=f[y*u+k];b+=v*c[k],g.push(v)}if(b<0||b>=o/h)throw Error(`Invalid indices: ${g} does not index into ${a.shape}`);for(let x=0;x<h;x++)d.values[y*h+x]=m[b*h+x]}return n.makeTensorInfo(l,d.dtype,d.values)}},tL={kernelName:r.qi_,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o,indices:i}=t,{axis:u,batchDims:l}=s;a([o,i],"gatherV2");let p=l;null==l&&(p=0);let h=r.D5U.sizeFromShape(i.shape),c=r.D5U.parseAxisParam(u,o.shape)[0],d=r.Wap.segment_util.collectGatherOpShapeInfo(o,i,c,p),f=P({inputs:{x:o},backend:n,attrs:{shape:[d.batchSize,d.outerSize,d.dimSize,d.sliceSize]}}),m=P({inputs:{x:i},backend:n,attrs:{shape:[d.batchSize,h/d.batchSize]}}),y=[d.batchSize,d.outerSize,h/d.batchSize,d.sliceSize],g=n.bufferSync(m),b=n.bufferSync(f),k=/**
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
 */ function(e,t,n){let a=(0,r.f3b)(n,e.dtype);for(let s=0;s<a.size;++s){let o=a.indexToLoc(s),i=o.slice(),u=i[0],l=i[2],p=t.locToIndex([u,l]);i[2]=t.values[p];let h=e.locToIndex(i);a.values[s]=e.values[h]}return a}(b,g,y);return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(m),n.makeTensorInfo(d.outputShape,k.dtype,k.values)}},tW=m((e,t)=>e>t?1:0),tH=M(r.iZT,tW,null,"bool"),tq={kernelName:r.iZT,backendName:"cpu",kernelFunc:tH},tj=m((e,t)=>e>=t?1:0),tX=M(r.Acj,tj,null,"bool"),tG={kernelName:r.Acj,backendName:"cpu",kernelFunc:tX},tK={kernelName:r.Qg5,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n}=e,{input:a}=t,s=r.D5U.sizeFromShape(a.shape),o=a.shape[a.shape.length-1],i=P({inputs:{x:a},backend:n,attrs:{shape:[s/o,o]}}),u=tE(i,!0,n),l=P({inputs:{x:u},backend:n,attrs:{shape:a.shape}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(u),l}},tY=i(r.avt,e=>Number.isFinite(e)?1:0,"bool"),tQ={kernelName:r.avt,backendName:"cpu",kernelFunc:tY},tZ=i(r.iWB,e=>Math.abs(e)===1/0?1:0,"bool"),tJ={kernelName:r.iWB,backendName:"cpu",kernelFunc:tZ},t0=i(r.r7n,e=>Number.isNaN(e)?1:0,"bool"),t1={kernelName:r.r7n,backendName:"cpu",kernelFunc:t0},t2=m((e,t)=>e<t?1:0),t3=M(r.vtC,t2,null,"bool"),t9={kernelName:r.vtC,backendName:"cpu",kernelFunc:t3},t6=m((e,t)=>e<=t?1:0),t5=M(r.CAk,t6,null,"bool"),t4={kernelName:r.CAk,backendName:"cpu",kernelFunc:t5},t7={kernelName:r.e7N,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{backend:t,attrs:n}=e,{start:a,stop:s,num:o}=n,i=/**
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
 */ function(e,t,n){let a=(t-e)/(n-1),s=r.D5U.makeZerosTypedArray(n,"float32");s[0]=e;for(let o=1;o<s.length;o++)s[o]=s[o-1]+a;return s}(a,s,o);return t.makeTensorInfo([i.length],"float32",i)}},t8=eS(e=>Math.log(e)),ne=u(r.ZbH,t8),nt={kernelName:r.ZbH,backendName:"cpu",kernelFunc:ne},nn=i(r.kU,e=>Math.log1p(e)),nr={kernelName:r.kU,backendName:"cpu",kernelFunc:nn},na=m((e,t)=>e&&t),ns=M(r.PYm,na,null,"bool"),no={kernelName:r.PYm,backendName:"cpu",kernelFunc:ns},ni=i(r.VfG,e=>e?0:1,"bool"),nu={kernelName:r.VfG,backendName:"cpu",kernelFunc:ni},nl=m((e,t)=>e||t),np=M(r.MZg,nl,null,"bool"),nh={kernelName:r.MZg,backendName:"cpu",kernelFunc:np},nc={kernelName:r.eZ0,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{depthRadius:i,bias:u,alpha:l,beta:p}=s;a(o,"LRN");let h=o.shape[3],c=h-1,d=n.data.get(o.dataId).values,f=r.D5U.sizeFromShape(o.shape),m=new Float32Array(f);for(let y=0;y<f;y++){let g=function(e){let t=e%h,n=e-t+Math.max(0,t-i),r=e-t+Math.min(t+i,c),a=0;for(;n<=r;n++){let s=d[n];a+=s*s}return a}(y),b=d[y]*Math.pow(u+l*g,-p);m[y]=b}return n.makeTensorInfo(o.shape,o.dtype,m)}},nd={kernelName:r.Hhh,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o,y:i,dy:u}=t,{depthRadius:l,bias:p,alpha:h,beta:c}=s;a(u,"LRNGrad");let d=r.D5U.sizeFromShape(u.shape),f=u.shape[3],m=n.data.get(u.dataId).values,y=n.data.get(o.dataId).values,g=n.data.get(i.dataId).values,b=new Float32Array(d);for(let k=0;k<d;k++){let v=k%f,x=k-v+Math.max(0,v-l),N=k-v+Math.min(f,v+l+1),w=0;for(let I=x;I<N;I++)w+=Math.pow(y[I],2);w=h*w+p;for(let T=x;T<N;T++){let S=-2*h*c*y[T]*g[k]/w;k===T&&(S+=Math.pow(w,-c)),S*=m[k],b[T]+=S}}return n.makeTensorInfo(u.shape,o.dtype,b)}};/**
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
 */ function nf(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{reductionIndices:i,keepDims:u}=s,l=o.shape,p=l.length,h=r.D5U.parseAxisParam(i,l),c=h,d=r.Wap.getAxesPermutation(c,p),f=n.data.get(o.dataId).values;if(null!=d){let m=Array(p);for(let y=0;y<m.length;y++)m[y]=l[d[y]];f=K(f,l,o.dtype,d,m),c=r.Wap.getInnerMostAxes(c.length,p),l=m}a(o,"max"),r.Wap.assertAxesAreInnerMostDims("max",c,p);let[g,b]=r.Wap.computeOutAndReduceShapes(l,c),k=r.D5U.sizeFromShape(b),v=/**
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
 */ function(e,t,n,a){let s=r.D5U.getTypedArrayFromDType(a,r.D5U.sizeFromShape(n));for(let o=0;o<s.length;++o){let i=o*t,u=e[i];for(let l=0;l<t;++l){let p=e[i+l];p>u&&(u=p)}s[o]=u}return s}(f,k,g,o.dtype),x=n.write(v,g,o.dtype),N=g;if(u){let w=r.Wap.expandShapeToKeepDim(g,h);N=w}return{dataId:x,shape:N,dtype:o.dtype}}let nm={kernelName:r.YoZ,backendName:"cpu",kernelFunc:nf},ny=m((e,t)=>Math.max(e,t)),ng=M(r.BMI,ny),nb={kernelName:r.BMI,backendName:"cpu",kernelFunc:ng},nk={kernelName:r.mTV,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let t;let{inputs:n,backend:s,attrs:o}=e,{x:i}=n;a(i,"maxPool");let{filterSize:u,strides:l,pad:p,dimRoundingMode:c}=o;r.D5U.assert(r.Wap.eitherStridesOrDilationsAreOne(l,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${l} and dilations '1'`);let d=r.Wap.computePool2DInfo(i.shape,u,l,1,p,c);if(1===d.filterWidth&&1===d.filterHeight&&r.D5U.arraysEqual(d.inShape,d.outShape))t=h({inputs:{x:i},backend:s});else{let f=s.data.get(i.dataId).values,m=r.D5U.computeStrides(i.shape),y=ed(f,i.shape,i.dtype,m,d,"max");t=s.makeTensorInfo(d.outShape,i.dtype,y.values)}return t}},nv={kernelName:r.OAf,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{filterSize:i,strides:u,pad:l,dimRoundingMode:p,dataFormat:h,dilations:c}=s;a(o,"maxPool3d");let d=c;null==d&&(d=[1,1,1]);let f=r.Wap.computePool3DInfo(o.shape,i,u,d,l,p,h),m=n.data.get(o.dataId).values,y=em(m,o.shape,o.dtype,r.D5U.computeStrides(o.shape),f,"max");return n.makeTensorInfo(y.shape,"float32",y.values)}},nx={kernelName:r.OU7,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{dy:o,input:i}=t,{filterSize:u,strides:l,pad:p,dilations:h,dimRoundingMode:c}=s;a([o,i],"maxPool3DGrad");let d=r.Wap.computePool3DInfo(i.shape,u,l,h,p,c),f=n.bufferSync(i),m=function(e,t){let n=(0,r.f3b)(t.outShape,"int32"),a=t.strideDepth,s=t.strideHeight,o=t.strideWidth,i=t.dilationDepth,u=t.dilationHeight,l=t.dilationWidth,p=t.effectiveFilterDepth,h=t.effectiveFilterHeight,c=t.effectiveFilterWidth,d=t.padInfo.front,f=t.padInfo.top,m=t.padInfo.left;for(let y=0;y<t.batchSize;++y)for(let g=0;g<t.inChannels;++g)for(let b=0;b<t.outDepth;++b){let k=b*a-d,v=k;for(;v<0;)v+=i;let x=Math.min(t.inDepth,p+k);for(let N=0;N<t.outHeight;++N){let w=N*s-f,I=w;for(;I<0;)I+=u;let T=Math.min(t.inHeight,h+w);for(let S=0;S<t.outWidth;++S){let D=S*o-m,E=D;for(;E<0;)E+=l;let _=Math.min(t.inWidth,c+D),F=Number.NEGATIVE_INFINITY,M=-1;for(let A=v;A<x;A+=i){let $=A-k;for(let O=I;O<T;O+=u){let B=O-w;for(let C=E;C<_;C+=l){let P=C-D,V=e.get(y,A,O,C,g);V>=F&&(F=V,M=$*h*c+B*h+P)}}}n.set(M,y,b,N,S,g)}}}return n}(f,d),y=d.strideDepth,g=d.strideHeight,b=d.strideWidth,k=d.dilationDepth,v=d.dilationHeight,x=d.dilationWidth,N=d.effectiveFilterDepth,w=d.effectiveFilterHeight,I=d.effectiveFilterWidth,T=N-1-d.padInfo.front,S=I-1-d.padInfo.left,D=w-1-d.padInfo.top,E=(0,r.f3b)(i.shape,"float32"),_=n.bufferSync(o);for(let F=0;F<d.batchSize;++F)for(let M=0;M<d.inChannels;++M)for(let A=0;A<d.inDepth;++A)for(let $=0;$<d.inHeight;++$)for(let O=0;O<d.inWidth;++O){let B=A-T,C=$-D,P=O-S,V=0;for(let R=0;R<N;R+=k){let z=(B+R)/y;if(!(z<0)&&!(z>=d.outDepth)&&Math.floor(z)===z)for(let U=0;U<w;U+=v){let L=(C+U)/g;if(!(L<0)&&!(L>=d.outHeight)&&Math.floor(L)===L)for(let W=0;W<I;W+=x){let H=(P+W)/b;if(H<0||H>=d.outWidth||Math.floor(H)!==H)continue;let q=N*w*I-1-m.get(F,z,L,H,M),j=R*w*I+U*I+W,X=q===j?1:0;if(0===X)continue;let G=_.get(F,z,L,H,M);V+=G*X}}}E.set(V,F,A,$,O,M)}return n.makeTensorInfo(E.shape,E.dtype,E.values)}},nN={kernelName:r.OV7,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{dy:o,input:i,output:u}=t;a([i,u],"maxPoolGrad");let{filterSize:l,strides:p,pad:h,dimRoundingMode:c}=s,d=r.Wap.computePool2DInfo(i.shape,l,p,1,h,c),f=n.data.get(i.dataId).values,m=(0,r.f3b)(d.outShape,i.dtype,ef(f,i.shape,i.dtype,d).values),y=d.strideHeight,g=d.strideWidth,b=d.dilationHeight,k=d.dilationWidth,v=d.effectiveFilterHeight,x=d.effectiveFilterWidth,N=x-1-d.padInfo.left,w=v-1-d.padInfo.top,I=(0,r.f3b)(i.shape,"float32"),T=n.data.get(o.dataId).values,S=(0,r.f3b)(o.shape,"float32",T);for(let D=0;D<d.batchSize;++D)for(let E=0;E<d.inChannels;++E)for(let _=0;_<d.inHeight;++_)for(let F=0;F<d.inWidth;++F){let M=_-w,A=F-N,$=0;for(let O=0;O<v;O+=b){let B=(M+O)/y;if(!(B<0)&&!(B>=d.outHeight)&&Math.floor(B)===B)for(let C=0;C<x;C+=k){let P=(A+C)/g;if(P<0||P>=d.outWidth||Math.floor(P)!==P)continue;let V=v*x-1-m.get(D,B,P,E),R=O*x+C,z=V===R?1:0;if(0===z)continue;let U=S.get(D,B,P,E);$+=U*z}}I.set($,D,_,F,E)}return n.makeTensorInfo(I.shape,I.dtype,I.values)}},nw={kernelName:r.vFR,backendName:"cpu",kernelFunc({inputs:e,attrs:t,backend:n}){let{x:s}=e,{filterSize:o,strides:i,pad:u,includeBatchInIndex:l}=t;a(s,"MaxPoolWithArgmax");let p=n.data.get(s.dataId).values,h=r.Wap.computePool2DInfo(s.shape,o,i,[1,1],u),[c,d]=/**
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
 */ function(e,t,n,a,s){let o=r.D5U.computeStrides(t),i=ed(e,t,n,o,s,"max"),u=ef(e,t,n,s,!0,a);return[i.values,u.values]}(p,s.shape,s.dtype,l,h),f=n.write(c,h.outShape,s.dtype),m=n.write(d,h.outShape,s.dtype);return[{dataId:f,shape:h.outShape,dtype:s.dtype},{dataId:m,shape:h.outShape,dtype:"int32"}]}};/**
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
 */ function nI(e){let t;let{inputs:n,backend:s,attrs:o}=e,{x:i}=n,{axis:u,keepDims:l}=o;a(i,"sum"),t="bool"===i.dtype?_({inputs:{x:i},backend:s,attrs:{dtype:"int32"}}):h({inputs:{x:i},backend:s});let p=t.shape.length,c=r.D5U.parseAxisParam(u,t.shape),d=r.Wap.getAxesPermutation(c,p),f=c,m=t;null!=d&&(m=Y({inputs:{x:t},backend:s,attrs:{perm:d}}),f=r.Wap.getInnerMostAxes(f.length,p)),r.Wap.assertAxesAreInnerMostDims("sum",f,m.shape.length);let[y,g]=r.Wap.computeOutAndReduceShapes(m.shape,f),b=r.Wap.upcastType(m.dtype,"int32"),k=S(s,y,b),v=r.D5U.sizeFromShape(g),x=s.data.get(k.dataId).values,N=s.data.get(m.dataId).values;for(let w=0;w<x.length;++w){let I=w*v,T=0;for(let D=0;D<v;++D)T+=N[I+D];x[w]=T}if(l){let E=r.Wap.expandShapeToKeepDim(k.shape,c),F=k;k=P({inputs:{x:k},backend:s,attrs:{shape:E}}),s.disposeIntermediateTensorInfo(F)}return s.disposeIntermediateTensorInfo(t),null!=d&&s.disposeIntermediateTensorInfo(m),k}let nT={kernelName:r.GBy,backendName:"cpu",kernelFunc:nI},nS={kernelName:r.q2K,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:a}=e,{x:s}=t,{axis:o,keepDims:i}=a,u=r.D5U.parseAxisParam(o,s.shape),l=r.Wap.computeOutAndReduceShapes(s.shape,u),p=l[1],h=r.D5U.sizeFromShape(p),c=[],d=n.makeTensorInfo([],"float32",new Float32Array([h]));c.push(d);let f=_({inputs:{x:s},backend:n,attrs:{dtype:"float32"}});c.push(f);let m=tN({inputs:{a:f,b:d},backend:n});c.push(m);let y=nI({inputs:{x:m},backend:n,attrs:{axis:o,keepDims:i}});return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),y}},nD={kernelName:r.c17,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i,keepDims:u}=s;a(o,"min");let l=r.D5U.parseAxisParam(i,o.shape),p=l,h=r.Wap.getAxesPermutation(p,o.shape.length),c=o;null!=h&&(c=Y({inputs:{x:o},backend:n,attrs:{perm:h}}),p=r.Wap.getInnerMostAxes(p.length,o.shape.length)),r.Wap.assertAxesAreInnerMostDims("min",p,c.shape.length);let[d,f]=r.Wap.computeOutAndReduceShapes(c.shape,p),m=r.D5U.sizeFromShape(f),y=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(d),c.dtype),g=n.data.get(c.dataId).values;for(let b=0;b<y.length;++b){let k=b*m,v=g[k];for(let x=0;x<m;++x){let N=g[k+x];N<v&&(v=N)}y[b]=v}null!=h&&n.disposeIntermediateTensorInfo(c);let w=n.makeTensorInfo(d,c.dtype,y);if(u){let I=r.Wap.expandShapeToKeepDim(d,l),T=P({inputs:{x:w},backend:n,attrs:{shape:I}});return n.disposeIntermediateTensorInfo(w),T}return w}},nE=m((e,t)=>Math.min(e,t)),n_=M(r.q8u,nE),nF={kernelName:r.q8u,backendName:"cpu",kernelFunc:n_},nM={kernelName:r.jQs,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{paddings:i,mode:u}=s;a(o,"mirrorPad");let l=i.map((e,t)=>e[0]+o.shape[t]+e[1]),p=i.map(e=>e[0]),h=i.map((e,t)=>e[0]+o.shape[t]),c="reflect"===u?0:1,d=n.data.get(o.dataId).values,f=o.shape.length,m=r.D5U.computeStrides(o.shape),y=r.D5U.sizeFromShape(l),g=l.length,b=r.D5U.computeStrides(l),k=r.D5U.getTypedArrayFromDType(o.dtype,y);for(let v=0;v<y;v++){let x=r.D5U.indexToLoc(v,g,b);for(let N=0;N<g;N++)x[N]<p[N]?x[N]=2*p[N]-x[N]-c:x[N]>=h[N]&&(x[N]=(h[N]-1)*2-x[N]+c);x=x.map((e,t)=>e-p[t]);let w=r.D5U.locToIndex(x,f,m);k[v]=d[w]}let I=n.write(k,l,o.dtype);return{dataId:I,shape:l,dtype:o.dtype}}},nA=m((e,t)=>{let n=e%t;return e<0&&t<0||e>=0&&t>=0?n:(n+t)%t}),n$=M(r.Vbg,nA),nO={kernelName:r.Vbg,backendName:"cpu",kernelFunc:n$};var nB=n(6377);/**
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
 */ function nC(e){let{inputs:t,backend:n,attrs:a}=e,{logits:s}=t,{dim:o}=a,i=s.shape.length,u=o;if(-1===u&&(u=i-1),u!==i-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${i} and dim was ${u}`);let l=r.D5U.parseAxisParam([u],s.shape),p=nf({inputs:{x:s},backend:n,attrs:{reductionIndices:l,keepDims:!1}}),h=r.Wap.expandShapeToKeepDim(p.shape,l),c=P({inputs:{x:p},backend:n,attrs:{shape:h}}),d=tS({inputs:{a:s,b:c},backend:n}),f=tp({inputs:{x:d},backend:n}),m=nI({inputs:{x:f},backend:n,attrs:{axis:l,keepDims:!1}}),y=P({inputs:{x:m},backend:n,attrs:{shape:h}}),g=tN({inputs:{a:f,b:y},backend:n});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(y),g}let nP={kernelName:r.Gcp,backendName:"cpu",kernelFunc:nC},nV={kernelName:r.NZg,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{logits:o}=t,{numSamples:i,seed:u,normalized:l}=s;a(o,"multinomial");let p=l?o:nC({inputs:{logits:o},backend:n,attrs:{dim:-1}}),h=p.shape[0],c=p.shape[1],d=n.data.get(p.dataId).values,f=[h,i],m=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(f),"int32");for(let y=0;y<h;++y){let g=y*c,b=new Float32Array(c-1);b[0]=d[g];for(let k=1;k<b.length;++k)b[k]=b[k-1]+d[g+k];let v=nB.alea(u.toString()),x=y*i;for(let N=0;N<i;++N){let w=v();m[x+N]=b.length;for(let I=0;I<b.length;I++)if(w<b[I]){m[x+N]=I;break}}}return l||n.disposeIntermediateTensorInfo(p),n.makeTensorInfo(f,"int32",m)}},nR={kernelName:r.kuV,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n}=e,{x:s}=t;a(s,"neg");let o=n.data.get(s.dataId).values,[i,u]=/**
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
 */ function(e,t,n){let a=r.D5U.createScalarValue(-1,n);return tg([],t,a,e,n)}(o,s.shape,s.dtype);return n.makeTensorInfo(u,s.dtype,i)}},nz=r.GDt.GP,nU={kernelName:r.uv1,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:s,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l}=r;a(s,"NonMaxSuppression");let p=n.data.get(s.dataId).values,h=n.data.get(o.dataId).values,{selectedIndices:c}=nz(p,h,i,u,l);return n.makeTensorInfo([c.length],"int32",new Int32Array(c))}},nL=r.GDt.qP,nW={kernelName:r.cye,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:s,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l,padToMaxOutputSize:p}=r;a(s,"NonMaxSuppressionPadded");let h=n.data.get(s.dataId).values,c=n.data.get(o.dataId).values,{selectedIndices:d,validOutputs:f}=nL(h,c,i,u,l,p);return[n.makeTensorInfo([d.length],"int32",new Int32Array(d)),n.makeTensorInfo([],"int32",new Int32Array([f]))]}},nH=r.GDt.pA,nq={kernelName:r.W0H,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:s,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l,softNmsSigma:p}=r;a(s,"NonMaxSuppressionWithScore");let h=n.data.get(s.dataId).values,c=n.data.get(o.dataId).values,{selectedIndices:d,selectedScores:f}=nH(h,c,i,u,l,p);return[n.makeTensorInfo([d.length],"int32",new Int32Array(d)),n.makeTensorInfo([f.length],"float32",new Float32Array(f))]}},nj=m((e,t)=>e!==t?1:0),nX=M(r.yQU,nj,null,"bool"),nG={kernelName:r.yQU,backendName:"cpu",kernelFunc:nX},nK={kernelName:r.we_,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{indices:o}=t,{depth:i,onValue:u,offValue:l}=s;a(o,"oneHot");let p=r.D5U.sizeFromShape(o.shape),h=new Float32Array(p*i);h.fill(l);let c=n.data.get(o.dataId).values;for(let d=0;d<p;++d)c[d]>=0&&c[d]<i&&(h[d*i+c[d]]=u);return n.makeTensorInfo([...o.shape,i],"int32",h)}};/**
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
 */ function nY(e){let{inputs:t,backend:n}=e,{x:r}=t;if("string"===r.dtype)throw Error("zerosLike is not supported for string tensors");if("complex64"!==r.dtype)return tF({backend:n,attrs:{shape:r.shape,value:0,dtype:r.dtype}});{let a=D({inputs:{input:r},backend:n}),s=nY({inputs:{x:a},backend:n}),o=eO({inputs:{input:r},backend:n}),i=nY({inputs:{x:o},backend:n}),u=I({inputs:{real:s,imag:i},backend:n});return n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(i),u}}let nQ={kernelName:r.RuY,backendName:"cpu",kernelFunc:nY},nZ={kernelName:r.qWM,backendName:"cpu",kernelFunc:/**
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
 */ function e(t){let{inputs:n,backend:r}=t,{x:a}=n;if("string"===a.dtype)throw Error("onesLike is not supported for string tensors");if("complex64"!==a.dtype)return tF({backend:r,attrs:{shape:a.shape,value:1,dtype:a.dtype}});{let s=D({inputs:{input:a},backend:r}),o=e({inputs:{x:s},backend:r}),i=eO({inputs:{input:a},backend:r}),u=nY({inputs:{x:i},backend:r}),l=I({inputs:{real:o,imag:u},backend:r});return r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(u),l}}};/**
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
 */ function nJ(e){let{inputs:t,backend:n,attrs:a}=e,{axis:s}=a;if(1===t.length)return tc({inputs:{input:t[0]},backend:n,attrs:{dim:s}});let o=t[0].shape,i=t[0].dtype;t.forEach(e=>{r.D5U.assertShapesMatch(o,e.shape,"All tensors passed to stack must have matching shapes"),r.D5U.assert(i===e.dtype,()=>"All tensors passed to stack must have matching dtypes")});let u=[],l=t.map(e=>{let t=tc({inputs:{input:e},backend:n,attrs:{dim:s}});return u.push(t),t}),p=eC({inputs:l,backend:n,attrs:{axis:s}});return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}let n0={kernelName:r.QiL,backendName:"cpu",kernelFunc:nJ},n1={kernelName:r.lyA,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{paddings:i,constantValue:u}=s;a(o,"pad");let l=i.map((e,t)=>e[0]+o.shape[t]+e[1]),p=i.map(e=>e[0]),h=n.data.get(o.dataId).values,c=r.D5U.sizeFromShape(o.shape),d=o.shape.length,f=r.D5U.computeStrides(o.shape),m=r.D5U.sizeFromShape(l),y=l.length,g=r.D5U.computeStrides(l),b=r.D5U.getTypedArrayFromDType(o.dtype,m);0!==u&&b.fill(u);for(let k=0;k<c;k++){let v=r.D5U.indexToLoc(k,d,f),x=v.map((e,t)=>e+p[t]),N=r.D5U.locToIndex(x,y,g);b[N]=h[k]}let w=n.write(b,l,o.dtype);return{dataId:w,shape:l,dtype:o.dtype}}},n2=m((e,t)=>Math.pow(e,t)),n3=M(r.pe_,n2),n9={kernelName:r.pe_,backendName:"cpu",kernelFunc:n3},n6={kernelName:r.DlI,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i,keepDims:u}=s;a(o,"prod");let l=o.shape.length,p=r.D5U.parseAxisParam(i,o.shape),h=r.Wap.getAxesPermutation(p,l),c=p,d=o,f=[];null!=h&&(f.push(d=Y({inputs:{x:o},backend:n,attrs:{perm:h}})),c=r.Wap.getInnerMostAxes(c.length,l));let m=n.data.get(d.dataId).values,{outVals:y,outShape:g,outDtype:b}=/**
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
 */ function(e,t,n,a){let[s,o]=r.Wap.computeOutAndReduceShapes(e,a),i=(0,r.x8V)(t,"int32"),u=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(s),i),l=r.D5U.sizeFromShape(o);for(let p=0;p<u.length;++p){let h=p*l,c=1;for(let d=0;d<l;++d)c*=n[h+d];u[p]=c}return{outVals:u,outShape:s,outDtype:i}}(d.shape,d.dtype,m,c),k=g;return u&&(k=r.Wap.expandShapeToKeepDim(g,p)),f.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(k,b,y)}},n5={kernelName:r.e6w,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{backend:t,attrs:n}=e,{start:a,stop:s,dtype:o,step:i}=n,u=/**
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
 */ function(e,t,n,a){let s=e<t&&n<0,o=t<e&&n>1;if(e===t||s||o)return r.D5U.makeZerosTypedArray(0,a);let i=Math.abs(Math.ceil((t-e)/n)),u=r.D5U.makeZerosTypedArray(i,a);t<e&&1===n&&(n=-1),u[0]=e;for(let l=1;l<u.length;l++)u[l]=u[l-1]+n;return u}(a,s,i,o);return t.makeTensorInfo([u.length],o,u)}},n4=i(r.$HU,e=>1/e),n7={kernelName:r.$HU,backendName:"cpu",kernelFunc:n4},n8={kernelName:r._Yw,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{images:o}=t,{alignCorners:i,halfPixelCenters:u,size:l}=s;a(o,"resizeBilinear");let p=r.D5U.computeStrides(o.shape),[h,c]=l,[d,f,m,y]=o.shape,g=n.data.get(o.dataId).values,b=new Float32Array(r.D5U.sizeFromShape([d,h,c,y])),k=[i&&h>1?f-1:f,i&&c>1?m-1:m],v=[i&&h>1?h-1:h,i&&c>1?c-1:c],x=0,N=k[0]/v[0],w=k[1]/v[1];for(let I=0;I<d;I++)for(let T=0;T<h;T++){let S;S=u?N*(T+.5)-.5:N*T;let D=Math.max(0,Math.floor(S)),E=S-D,_=Math.min(f-1,Math.ceil(S)),F=I*p[0]+D*p[1],M=I*p[0]+_*p[1];for(let A=0;A<c;A++){let $;$=u?w*(A+.5)-.5:w*A;let O=Math.max(0,Math.floor($)),B=$-O,C=Math.min(m-1,Math.ceil($)),P=F+O*p[2],V=M+O*p[2],R=F+C*p[2],z=M+C*p[2];for(let U=0;U<y;U++){let L=g[P+U],W=g[V+U],H=g[R+U],q=g[z+U],j=L+(H-L)*B,X=W+(q-W)*B,G=j+(X-j)*E;b[x++]=G}}}return n.makeTensorInfo([d,h,c,y],"float32",b)}},re={kernelName:r.zbQ,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{images:o,dy:i}=t,{alignCorners:u}=s;a([i,o],"resizeBilinearGrad");let l=r.D5U.computeStrides(o.shape),[p,h,c,d]=o.shape,[,f,m]=i.shape,y=new Float32Array(p*h*c*d),g=[u&&f>1?h-1:h,u&&m>1?c-1:c],b=[u&&f>1?f-1:f,u&&m>1?m-1:m],k=g[0]/b[0],v=g[1]/b[1],x=n.data.get(i.dataId).values,N=0;for(let w=0;w<p;w++){let I=w*l[0];for(let T=0;T<f;T++){let S=T*k,D=Math.floor(S),E=Math.min(Math.ceil(S),h-1),_=I+D*l[1],F=I+E*l[1],M=S-D,A=1-M;for(let $=0;$<m;$++){let O=$*v,B=Math.floor(O),C=Math.min(Math.ceil(O),c-1),P=O-B,V=1-P,R=_+B*l[2],z=_+C*l[2],U=F+B*l[2],L=F+C*l[2],W=A*V,H=A*P,q=M*V,j=M*P;for(let X=0;X<d;X++){let G=x[N++];y[R+X]+=G*W,y[z+X]+=G*H,y[U+X]+=G*q,y[L+X]+=G*j}}}}return n.makeTensorInfo([p,c,h,d],"float32",y)}},rt={kernelName:r.dpD,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{images:o}=t,{alignCorners:i,halfPixelCenters:u,size:l}=s;a(o,"resizeNearestNeighbor");let p=r.D5U.computeStrides(o.shape),[h,c]=l,[d,f,m,y]=o.shape,g=n.data.get(o.dataId).values,b=new Float32Array(d*h*c*y),k=[i&&h>1?f-1:f,i&&c>1?m-1:m],v=[i&&h>1?h-1:h,i&&c>1?c-1:c],x=k[0]/v[0],N=k[1]/v[1],w=0;for(let I=0;I<d;I++){let T=I*p[0];for(let S=0;S<h;S++){let D=u?x*(S+.5):x*S,E=Math.min(f-1,i?Math.round(D):Math.floor(D));u&&(E=Math.max(0,E));let _=T+E*p[1];for(let F=0;F<c;F++){let M=u?N*(F+.5):N*F,A=Math.min(m-1,i?Math.round(M):Math.floor(M));u&&(A=Math.max(0,A));let $=_+A*p[2];for(let O=0;O<y;O++){let B=g[$+O];b[w++]=B}}}}return n.makeTensorInfo([d,h,c,y],o.dtype,b)}},rn={kernelName:r.Hmb,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{images:o,dy:i}=t,{alignCorners:u}=s;a([i,o],"resizeNearestNeighborGrad");let l=r.D5U.computeStrides(o.shape),p=r.D5U.computeStrides(i.shape),[h,c,d,f]=o.shape,[,m,y]=i.shape,g=new Float32Array(h*c*d*f),b=n.data.get(i.dataId).values,k=[u&&m>1?c-1:c,u&&y>1?d-1:d],v=[u&&m>1?m-1:m,u&&y>1?y-1:y],x=k[0]/v[0],N=k[1]/v[1],w=1/x,I=1/N,T=2*Math.ceil(w)+2,S=2*Math.ceil(I)+2;for(let D=0;D<h;D++){let E=D*l[0];for(let _=0;_<c;_++){let F=E+_*l[1],M=Math.floor(_*w),A=Math.floor(M-T/2);for(let $=0;$<d;$++){let O=F+$*l[2],B=Math.floor($*I),C=Math.floor(B-S/2);for(let P=0;P<f;P++){let V=0;for(let R=0;R<T;R++){let z=R+A;if(z<0||z>=m)continue;let U=E+z*p[1],L=z*x,W=Math.min(c-1,u?Math.round(L):Math.floor(L));if(_===W)for(let H=0;H<S;H++){let q=H+C;if(q<0||q>=y)continue;let j=U+q*p[2],X=q*N,G=Math.min(d-1,u?Math.round(X):Math.floor(X));$===G&&(V+=b[j+P])}}g[O+P]=V}}}}return n.makeTensorInfo(o.shape,o.dtype,g)}},rr={kernelName:r.mKl,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{dims:i}=s;a(o,"reverse");let u=o.shape.length,l=r.D5U.parseAxisParam(i,o.shape);if(0===u)return h({inputs:{x:o},backend:n});let p=new r.YDk(o.shape,o.dtype),c=n.bufferSync(o);for(let d=0;d<p.size;d++){let f=p.indexToLoc(d),m=f.slice();l.forEach(e=>m[e]=o.shape[e]-1-m[e]),p.set(c.get(...m),...f)}return n.makeTensorInfo(p.shape,p.dtype,p.values)}},ra={kernelName:r.b9H,backendName:"cpu",kernelFunc({inputs:e,attrs:t,backend:n}){let{image:a}=e,{radians:s,fillValue:o,center:i}=t,u=r.D5U.getTypedArrayFromDType(a.dtype,r.D5U.sizeFromShape(a.shape)),[l,p,h,c]=a.shape,[d,f]=r.Wap.getImageCenter(i,p,h),m=Math.sin(s),y=Math.cos(s),g=n.data.get(a.dataId).values;for(let b=0;b<l;b++){let k=b*h*p*c;for(let v=0;v<p;v++){let x=v*(h*c);for(let N=0;N<h;N++){let w=N*c;for(let I=0;I<c;I++){let T=[l,v,N,I],S=T[2],D=T[1],E=(S-d)*y-(D-f)*m,_=(S-d)*m+(D-f)*y;E=Math.round(E+d),_=Math.round(_+f);let F=o;if("number"!=typeof o&&(F=3===I?255:o[I]),E>=0&&E<h&&_>=0&&_<p){let M=_*(h*c),A=E*c,$=k+M+A+I;F=g[$]}let O=k+x+w+I;u[O]=F}}}}let B=n.write(u,a.shape,a.dtype);return{dataId:B,shape:a.shape,dtype:a.dtype}}},rs=i(r.e07,e=>{let t=Math.floor(e);return e-t<.5?Math.floor(e):e-t>.5?Math.ceil(e):t%2==0?t:t+1}),ro={kernelName:r.e07,backendName:"cpu",kernelFunc:rs},ri=eS(e=>1/Math.sqrt(e)),ru=u(r.bV0,ri),rl={kernelName:r.bV0,backendName:"cpu",kernelFunc:ru};/**
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
 */ function rp(e,t,n,a,s,o,i,u,l,p){let h=e.values,c=t.values;if(0===a)return(0,r.f3b)(n,t.dtype);let d=(0,r.f3b)([a/s,s],t.dtype);d.values.fill(l);for(let f=0;f<o;f++){let m=[],y=0;for(let g=0;g<i;g++){let b=h[f*i+g];m.push(b),y+=b*u[g]}if(y<0||y>=a/s)throw Error(`Invalid indices: ${m} does not index into ${n}`);for(let k=0;k<s;k++)p?d.values[y*s+k]+=c[f*s+k]:d.values[y*s+k]=0===t.rank?c[0]:c[f*s+k]}return d}let rh={kernelName:r.xQA,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:a}=e,{indices:s,updates:o}=t,{shape:i}=a,{sliceRank:u,numUpdates:l,sliceSize:p,strides:h,outputSize:c}=r.Wap.calculateShapes(o,s,i),d=n.bufferSync(s),f=n.bufferSync(o),m=rp(d,f,i,c,p,l,u,h,0,!0);return n.makeTensorInfo(i,m.dtype,m.values)}},rc={kernelName:r.PhF,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n}=e,{condition:s,t:o,e:i}=t;a([s,o,i],"select");let u=s.shape.length,l=n.data.get(s.dataId).values,p=n.data.get(o.dataId).values,h=n.data.get(i.dataId).values,c=(0,r.x8V)(o.dtype,i.dtype),d=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(o.shape),c),f=0,m=0===u||u>1||1===o.shape.length?1:r.D5U.sizeFromShape(o.shape.slice(1));for(let y=0;y<l.length;y++)for(let g=0;g<m;g++)1===l[y]?d[f++]=p[y]:d[f++]=h[y];return n.makeTensorInfo(o.shape,c,d)}},rd=r.Wap.SELU_SCALEALPHA,rf=r.Wap.SELU_SCALE,rm=i(r.oFR,e=>e>=0?rf*e:rd*(Math.exp(e)-1)),ry={kernelName:r.oFR,backendName:"cpu",kernelFunc:rm},rg=i(r.a5O,e=>1/(1+Math.exp(-e))),rb={kernelName:r.a5O,backendName:"cpu",kernelFunc:rg},rk=i(r.i5y,e=>e<0?-1:e>0?1:0),rv={kernelName:r.i5y,backendName:"cpu",kernelFunc:rk},rx=i(r.RQH,e=>Math.sin(e)),rN={kernelName:r.RQH,backendName:"cpu",kernelFunc:rx},rw=i(r.wYB,e=>Math.sinh(e)),rI={kernelName:r.wYB,backendName:"cpu",kernelFunc:rw},rT=Math.log(11920928955078125e-23)+2,rS=i(r.MRv,e=>{let t=Math.exp(e);return e<rT?t:e>-rT?e:Math.log(1+t)}),rD={kernelName:r.MRv,backendName:"cpu",kernelFunc:rS},rE={kernelName:r.TQc,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{blockShape:i,paddings:u}=s;a([o],"spaceToBatchND");let l=r.D5U.sizeFromShape(i),p=[[0,0]];p.push(...u);for(let h=1+i.length;h<o.shape.length;++h)p.push([0,0]);let c=n1.kernelFunc({inputs:{x:o},backend:n,attrs:{paddings:p,constantValue:0}}),d=r.Wap.getReshaped(c.shape,i,l,!1),f=r.Wap.getPermuted(d.length,i.length,!1),m=r.Wap.getReshapedPermuted(c.shape,i,l,!1),y=P({inputs:{x:c},backend:n,attrs:{shape:d}}),g=Y({inputs:{x:y},backend:n,attrs:{perm:f}}),b=P({inputs:{x:g},backend:n,attrs:{shape:m}});return n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(y),n.disposeIntermediateTensorInfo(g),b}},r_={kernelName:r.D2d,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:a}=e,{sparseIndices:s,sparseValues:o,defaultValue:i}=t,{outputShape:u}=a,{sliceRank:l,numUpdates:p,sliceSize:h,strides:c,outputSize:d}=r.Wap.calculateShapes(o,s,u),f=n.bufferSync(s),m=n.bufferSync(o),y=n.data.get(i.dataId).values[0],g=rp(f,m,u,d,h,p,l,c,y,!1);return n.makeTensorInfo(u,g.dtype,g.values)}},rF={kernelName:r.L8s,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:a}=e,{x:s}=t,{numOrSizeSplits:o,axis:i}=a,u=r.D5U.parseAxisParam(i,s.shape)[0],l=r.Wap.prepareSplitSize(s,o,u),p=Array(s.shape.length).fill(0),h=s.shape.slice();return l.map(e=>{let t=[...h];t[u]=e;let r=ex({inputs:{x:s},backend:n,attrs:{begin:p,size:t}});return p[u]+=e,r})}},rM=i(r.FKq,e=>Math.sqrt(e)),rA={kernelName:r.FKq,backendName:"cpu",kernelFunc:rM},r$={kernelName:r.bK0,backendName:"cpu",kernelFunc({inputs:e,backend:t}){let{x:n}=e;a(n,"square");let r=t.data.get(n.dataId).values,s=new Float32Array(r.length);for(let o=0;o<r.length;++o){let i=r[o];s[o]=i*i}let u=t.write(s,n.shape,n.dtype);return{dataId:u,shape:n.shape,dtype:n.dtype}}},rO=m((e,t)=>{let n=e-t;return n*n}),rB=M(r._tC,rO),rC={kernelName:r._tC,backendName:"cpu",kernelFunc:rB},rP=i(r.h8e,(e,t)=>isNaN(e)?NaN:e>0?1:t.alpha),rV={kernelName:r.h8e,backendName:"cpu",kernelFunc:rP},rR={kernelName:r.jQk,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let t;let{inputs:n,backend:s,attrs:o}=e,{x:i}=n,{begin:u,end:l,strides:p,beginMask:h,endMask:c,ellipsisMask:d,newAxisMask:f,shrinkAxisMask:m}=o;a(i,"stridedSlice");let{nonStrided:y,$begin:g,$strides:b,size:k,newShape:v,outShape:x}=r.kuN.sliceInfo(i.shape,u,l,p,h,c,d,f,m),N=P({inputs:{x:i},backend:s,attrs:{shape:v}});if(y){let w=ex({inputs:{x:N},backend:s,attrs:{begin:g,size:k}});t=P({inputs:{x:w},backend:s,attrs:{shape:x}}),s.disposeIntermediateTensorInfo(w)}else if(x.some(e=>0===e))t=s.makeTensorInfo(x,i.dtype,[]);else{let I=s.bufferSync(N),T=/**
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
 */ function(e,t,n,a){let s=(0,r.f3b)(e,t.dtype);for(let o=0;o<s.size;o++){let i=s.indexToLoc(o),u=Array(i.length);for(let l=0;l<u.length;l++)u[l]=i[l]*n[l]+a[l];s.set(t.get(...u),...i)}return s}(x,I,b,g);t=s.makeTensorInfo(T.shape,T.dtype,T.values)}let S=P({inputs:{x:t},backend:s,attrs:{shape:x}});return s.disposeIntermediateTensorInfo(N),s.disposeIntermediateTensorInfo(t),S}},rz=i(r.sEM,e=>Math.tan(e)),rU={kernelName:r.sEM,backendName:"cpu",kernelFunc:rz},rL=i(r.MIZ,e=>Math.tanh(e)),rW={kernelName:r.MIZ,backendName:"cpu",kernelFunc:rL},rH={kernelName:r.n9L,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{reps:i}=s;a(o,"tile");let u=/**
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
 */ function(e,t){let n=Array(e.rank);for(let a=0;a<n.length;a++)n[a]=e.shape[a]*t[a];let s=(0,r.f3b)(n,e.dtype);for(let o=0;o<s.values.length;++o){let i=s.indexToLoc(o),u=Array(e.rank);for(let l=0;l<u.length;l++)u[l]=i[l]%e.shape[l];let p=e.locToIndex(u);s.values[o]=e.values[p]}return s}(n.bufferSync(o),i);return n.makeTensorInfo(u.shape,u.dtype,u.values)}},rq={kernelName:r.cWu,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{k:i,sorted:u}=s;a(o,"topk");let l=n.data.get(o.dataId).values,[p,h]=/**
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
 */ function(e,t,n,a,s){let o=t[t.length-1],[i,u]=[e.length/o,o],l=r.D5U.getTypedArrayFromDType(n,i*a),p=r.D5U.getTypedArrayFromDType("int32",i*a);for(let h=0;h<i;h++){let c=h*u,d=e.subarray(c,c+u),f=[];for(let m=0;m<d.length;m++)f.push({value:d[m],index:m});f.sort((e,t)=>t.value-e.value);let y=h*a,g=l.subarray(y,y+a),b=p.subarray(y,y+a);for(let k=0;k<a;k++)g[k]=f[k].value,b[k]=f[k].index}let v=t.slice();return v[v.length-1]=a,[(0,r.f3b)(v,n,l),(0,r.f3b)(v,"int32",p)]}(l,o.shape,o.dtype,i,0);return[n.makeTensorInfo(p.shape,p.dtype,p.values),n.makeTensorInfo(h.shape,h.dtype,h.values)]}},rj={kernelName:r.kpP,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,attrs:n,backend:s}=e,{axis:o}=n,{x:i}=t;a(i,"unique");let u=s.data.get(i.dataId).values,{outputValues:l,outputShape:p,indices:h}=/**
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
 */ function(e,t,n,a){let s=r.D5U.parseAxisParam(t,n)[0],o=[1,n[0],1];for(let i=0;i<s;i++)o[0]*=n[i];o[1]=n[s];for(let u=s+1;u<n.length;u++)o[2]*=n[u];let l={},p=new Int32Array(n[s]),h=new r.YDk(o,a,e),c=[],d=1===o[0]&&1===o[2];for(let f=0;f<n[s];f++){let m;if(d)m=e[f].toString();else{let y=[];for(let g=0;g<o[0];g++)for(let b=0;b<o[2];b++)y.push(h.get(g,f,b));m=y.join(",")}if(void 0!==l[m])p[f]=l[m];else{let k=Object.keys(l).length;l[m]=k,p[f]=k,c.push(f)}}let v=o.slice();v[1]=Object.keys(l).length;let x=new r.YDk(v,a);c.forEach((e,t)=>{for(let n=0;n<o[0];n++)for(let r=0;r<o[2];r++)x.set(h.get(n,e,r),n,t,r)});let N=n.slice();return N[s]=v[1],{outputValues:x.values,outputShape:N,indices:p}}(u,o,i.shape,i.dtype);return[s.makeTensorInfo(p,i.dtype,l),s.makeTensorInfo([h.length],"int32",h)]}},rX={kernelName:r.ToN,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:r}=e,{value:a}=t,{axis:s}=r;s<0&&(s+=a.shape.length);let o=a.shape.length,i=a.shape[s],u=Array(o-1),l=0;for(let p=0;p<o;p++)p!==s&&(u[l++]=a.shape[p]);let h=Array(o).fill(0),c=a.shape.slice();c[s]=1;let d=Array(i);for(let f=0;f<d.length;f++){h[s]=f;let m=ex({inputs:{x:a},backend:n,attrs:{begin:h,size:c}});d[f]=P({inputs:{x:m},backend:n,attrs:{shape:u}}),n.disposeIntermediateTensorInfo(m)}return d}},rG={kernelName:r.Qvg,backendName:"cpu",kernelFunc:/**
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
 */ function(e){let{inputs:t,backend:n,attrs:s}=e,{x:o,segmentIds:i}=t,{numSegments:u}=s;a(o,"unsortedSegmentSum");let l=o.shape.length,p=i.shape.length,h=[],c=[],d=l-p,f=i;for(let m=0;m<d;++m){let y=tc({inputs:{input:f},backend:n,attrs:{dim:m+1}});f=y,c.push(y)}for(let g=0;g<u;++g){let b=r.D5U.createScalarValue(g,"int32"),k=n.makeTensorInfo([],"int32",b),v=e8({inputs:{a:k,b:f},backend:n}),x=_({inputs:{x:v},backend:n,attrs:{dtype:"float32"}}),N=tk({inputs:{a:x,b:o},backend:n}),w=nI({inputs:{x:N},backend:n,attrs:{axis:0,keepDims:!1}});h.push(w),c.push(k),c.push(v),c.push(x),c.push(N),c.push(w)}let I=nJ({inputs:h,backend:n,attrs:{axis:0}});return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),I}};for(let rK of[U,W,q,X,C,G,Z,J,ee,et,er,es,ei,ep,ec,ey,eg,eb,ek,z,ev,ew,eT,F,e_,eM,T,e$,eP,ez,eU,eR,eW,eH,eL,ej,eG,eK,eY,eQ,eZ,e0,e1,e2,e3,e9,e5,e6,tw,p,e4,te,tu,th,td,ty,t_,tM,tA,tB,tV,tR,tz,tU,tL,tq,tG,c,tK,eB,tQ,tJ,t1,f,t9,t4,t7,nt,nr,no,nu,nh,nc,nd,nb,nk,nv,nx,nN,nw,nm,nS,nD,nF,nM,nO,nV,tv,nR,nU,nW,nq,nG,nK,nZ,n0,n1,n9,b,n6,n5,E,n7,v,N,V,n8,re,rt,rn,rr,ra,ro,rl,rh,rc,ry,rb,rv,rN,rI,eN,nP,rD,rE,r_,rF,rA,r$,rC,rV,rR,tD,nT,rU,rW,rH,rq,Q,rj,rX,rG,nQ])(0,r.wCN)(rK);/**
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
 */ },2073:function(e,t,n){"use strict";n.d(t,{JL:function(){return r},Zu:function(){return a}});class r{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class a{decComplexRef(e){}time(e){return s("time")}read(e){return s("read")}readSync(e){return s("readSync")}numDataIds(){return s("numDataIds")}disposeData(e){return s("disposeData")}write(e,t,n){return s("write")}move(e,t,n,r){return s("move")}memory(){return s("memory")}floatPrecision(){return s("floatPrecision")}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}batchMatMul(e,t,n,r){return s("batchMatMul")}fusedBatchMatMul({a:e,b:t,transposeA:n,transposeB:r,bias:a,activation:o,preluActivationWeights:i}){return s("fusedBatchMatMul")}slice(e,t,n){return s("slice")}stridedSlice(e,t,n,r){return s("stridedSlice")}unstack(e,t){return s("unstack")}reverse(e,t){return s("reverse")}concat(e,t){return s("concat")}neg(e){return s("neg")}add(e,t){return s("add")}addN(e){return s("addN")}subtract(e,t){return s("subtract")}multiply(e,t){return s("multiply")}realDivide(e,t){return s("realDivide")}floorDiv(e,t){return s("floorDiv")}sum(e,t){return s("sum")}prod(e,t){return s("prod")}unsortedSegmentSum(e,t,n){return s("unsortedSegmentSum")}argMin(e,t){return s("argMin")}argMax(e,t){return s("argMax")}equal(e,t){return s("equal")}notEqual(e,t){return s("notEqual")}less(e,t){return s("less")}lessEqual(e,t){return s("lessEqual")}greater(e,t){return s("greater")}greaterEqual(e,t){return s("greaterEqual")}logicalNot(e){return s("logicalNot")}logicalAnd(e,t){return s("logicalAnd")}logicalOr(e,t){return s("logicalOr")}where(e){return s("where")}select(e,t,n){return s("select")}topk(e,t,n){return s("topk")}min(e,t){return s("min")}minimum(e,t){return s("minimum")}mod(e,t){return s("mod")}max(e,t){return s("max")}maximum(e,t){return s("maximum")}all(e,t){return s("all")}any(e,t){return s("any")}squaredDifference(e,t){return s("squaredDifference")}ceil(e){return s("ceil")}floor(e){return s("floor")}round(e){return s("round")}sign(e){return s("sign")}isNaN(e){return s("isNaN")}isInf(e){return s("isInf")}isFinite(e){return s("isFinite")}pow(e,t){return s("pow")}exp(e){return s("exp")}expm1(e){return s("expm1")}softmax(e,t){return s("softmax")}log(e){return s("log")}log1p(e){return s("log1p")}sqrt(e){return s("sqrt")}rsqrt(e){return s("rsqrt")}square(e){return s("square")}reciprocal(e){return s("reciprocal")}relu(e){return s("relu")}relu6(e){return s("relu6")}prelu(e,t){return s("prelu")}elu(e){return s("elu")}eluDer(e,t){return s("eluDer")}selu(e){return s("selu")}int(e){return s("int")}clip(e,t,n){return s("clip")}abs(e){return s("abs")}complexAbs(e){return s("complexAbs")}sigmoid(e){return s("sigmoid")}softplus(e){return s("softplus")}sin(e){return s("sin")}cos(e){return s("cos")}tan(e){return s("tan")}asin(e){return s("asin")}acos(e){return s("acos")}atan(e){return s("atan")}atan2(e,t){return s("atan2")}sinh(e){return s("sinh")}cosh(e){return s("cosh")}tanh(e){return s("tanh")}asinh(e){return s("asinh")}acosh(e){return s("acosh")}atanh(e){return s("atanh")}erf(e){return s("erf")}step(e,t){return s("step")}fusedConv2d({input:e,filter:t,convInfo:n,bias:r,activation:a,preluActivationWeights:o}){return s("fusedConv2d")}conv2d(e,t,n){return s("conv2d")}conv2dDerInput(e,t,n){return s("conv2dDerInput")}conv2dDerFilter(e,t,n){return s("conv2dDerFilter")}fusedDepthwiseConv2D({input:e,filter:t,convInfo:n,bias:r,activation:a,preluActivationWeights:o}){return s("fusedDepthwiseConv2D")}depthwiseConv2D(e,t,n){return s("depthwiseConv2D")}depthwiseConv2DDerInput(e,t,n){return s("depthwiseConv2DDerInput")}depthwiseConv2DDerFilter(e,t,n){return s("depthwiseConv2DDerFilter")}conv3d(e,t,n){return s("conv3d")}conv3dDerInput(e,t,n){return s("conv3dDerInput")}conv3dDerFilter(e,t,n){return s("conv3dDerFilter")}maxPool(e,t){return s("maxPool")}maxPoolBackprop(e,t,n,r){return s("maxPoolBackprop")}avgPool(e,t){return s("avgPool")}avgPoolBackprop(e,t,n){return s("avgPoolBackprop")}avgPool3d(e,t){return s("avgPool3d")}avgPool3dBackprop(e,t,n){return s("avgPool3dBackprop")}maxPool3d(e,t){return s("maxPool3d")}maxPool3dBackprop(e,t,n,r){return s("maxPool3dBackprop")}reshape(e,t){return s("reshape")}cast(e,t){return s("cast")}tile(e,t){return s("tile")}pad(e,t,n){return s("pad")}transpose(e,t){return s("transpose")}gather(e,t,n,r=0){return s("gather")}gatherND(e,t){return s("gatherND")}scatterND(e,t,n){return s("scatterND")}batchToSpaceND(e,t,n){return s("batchToSpaceND")}spaceToBatchND(e,t,n){return s("spaceToBatchND")}resizeBilinear(e,t,n,r,a){return s("resizeBilinear")}resizeBilinearBackprop(e,t,n){return s("resizeBilinearBackprop")}resizeNearestNeighbor(e,t,n,r,a){return s("resizeNearestNeighbor")}resizeNearestNeighborBackprop(e,t,n){return s("resizeNearestNeighborBackprop")}batchNorm(e,t,n,r,a,o){return s("batchNorm")}localResponseNormalization4D(e,t,n,r,a){return s("localResponseNormalization4D")}LRNGrad(e,t,n,r,a,o,i){return s("LRNGrad")}multinomial(e,t,n,r){return s("multinomial")}oneHot(e,t,n,r){return s("oneHot")}cumsum(e,t,n,r){return s("cumsum")}nonMaxSuppression(e,t,n,r,a){return s("nonMaxSuppression")}fft(e){return s("fft")}ifft(e){return s("ifft")}complex(e,t){return s("complex")}real(e){return s("real")}imag(e){return s("imag")}cropAndResize(e,t,n,r,a,o){return s("cropAndResize")}depthToSpace(e,t,n){return s("depthToSpace")}split(e,t,n){return s("split")}sparseToDense(e,t,n,r){return s("sparseToDense")}diag(e){return s("diag")}fill(e,t,n){return s("fill")}onesLike(e){return s("onesLike")}zerosLike(e){return s("zerosLike")}linspace(e,t,n){return s("linspace")}dispose(){return s("dispose")}}function s(e){throw Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}},8329:function(e,t,n){"use strict";function r(e,t){return e>t?1:e<t?-1:0}/**
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
 */ function a(e,t,n,r,a){return i(e,t,n,r,a,0)}function s(e,t,n,r,a,s){return i(e,t,n,r,a,0,!1,s,!0)}function o(e,t,n,r,a,s){return i(e,t,n,r,a,s,!0)}function i(e,t,n,a,s,o,i=!1,l=!1,p=!1){let h=[];for(let c=0;c<t.length;c++)t[c]>s&&h.push({score:t[c],boxIndex:c,suppressBeginIndex:0});h.sort(u);let d=o>0?-.5/o:0,f=[],m=[];for(;f.length<n&&h.length>0;){let y=h.pop(),{score:g,boxIndex:b,suppressBeginIndex:k}=y;if(g<s)break;let v=!1;for(let x=f.length-1;x>=k;--x){let N=function(e,t,n){let r=e.subarray(4*t,4*t+4),a=e.subarray(4*n,4*n+4),s=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),l=Math.min(a[0],a[2]),p=Math.min(a[1],a[3]),h=Math.max(a[0],a[2]),c=Math.max(a[1],a[3]),d=(i-s)*(u-o),f=(h-l)*(c-p);if(d<=0||f<=0)return 0;let m=Math.max(s,l),y=Math.max(o,p),g=Math.min(i,h),b=Math.min(u,c),k=Math.max(g-m,0)*Math.max(b-y,0);return k/(d+f-k)}(e,b,f[x]);if(N>=a){v=!0;break}if(y.score=y.score*function(e,t,n){let r=Math.exp(t*n*n);return n<=e?r:0}(a,d,N),y.score<=s)break}y.suppressBeginIndex=f.length,!v&&(y.score===g?(f.push(b),m.push(y.score)):y.score>s&&/**
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
 */ function(e,t,n){let a=function(e,t,n){let r=0,a=e.length,s=0,o=!1;for(;r<a;){s=r+(a-r>>>1);let i=n(t,e[s]);i>0?r=s+1:(a=s,o=!i)}return o?r:-r-1}(e,t,n||r);e.splice(a<0?-(a+1):a,0,t)}(h,y,u))}let w=f.length,I=n-w;l&&I>0&&(f.push(...Array(I).fill(0)),m.push(...Array(I).fill(0)));let T={selectedIndices:f};return i&&(T.selectedScores=m),p&&(T.validOutputs=w),T}function u(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}n.d(t,{GP:function(){return a},qP:function(){return s},pA:function(){return o}})},8333:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2657);/**
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
 */ function a(e,t){let n=[];for(let a=0;a<t.length;a++)t[a]&&n.push(a);let s=(0,r.f)(e,"int32"),o=(0,r.f)([n.length,e.length],"int32");for(let i=0;i<n.length;i++){let u=s.indexToLoc(n[i]),l=i*e.length;o.values.set(u,l)}return o.toTensor()}},196:function(e,t,n){"use strict";n.d(t,{BV:function(){return g},wv:function(){return y}});var r=n(2073),a=n(2885),s=n(5938),o=n(9121),i=n(6151),u=n(569);/**
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
 */ class l{constructor(e,t){this.backendTimer=e,this.logger=t,null==t&&(this.logger=new p)}profileKernel(e,t,n){let r;let s=()=>{r=n()},o=this.backendTimer.time(s);if((0,a.OB)().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let i=0;i<r.length;i++){let u=r[i];u.data().then(t=>{!function(e,t,n){if("float32"===t)for(let r=0;r<e.length;r++){let a=e[r];if(isNaN(a)||!isFinite(a))return console.warn(`Found ${a} in the result of '${n}'`),!0}}(t,u.dtype,e)})}let l={kernelName:e,outputs:r,inputs:t,timeMs:o.then(e=>e.kernelMs),extraInfo:o.then(e=>null!=e.getExtraProfileInfo?e.getExtraProfileInfo():"")};return l}logKernelProfile(e){let{kernelName:t,outputs:n,timeMs:r,inputs:a,extraInfo:s}=e;n.forEach(e=>{Promise.all([e.data(),r,s]).then(n=>{this.logger.logKernelProfile(t,e,n[0],n[1],a,n[2])})})}}class p{logKernelProfile(e,t,n,r,a,s){let o="number"==typeof r?u.oj(`${r}ms`,9):r.error,i=u.oj(e,25),l=t.rank,p=t.size,h=u.oj(t.shape.toString(),14),c="";for(let d in a){let f=a[d];if(null!=f){let m=f.shape||t.shape,y=m.length;c+=`${d}: ${y}D ${y>0?m:""} `}}console.log(`%c${i}	%c${o}	%c${l}D ${h}	%c${p}	%c${c}	%c${s}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}var h=n(974),c=n(747),d=n(9155);/**
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
 */ class f{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(let e in this.registeredVariables)this.registeredVariables[e].dispose()}}class m{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new f}async ready(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then(()=>{});if(null!=this.backendInstance)return;let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t],r=await this.initializeBackend(n).success;if(r){await this.setBackend(n);return}}throw Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(null!=this.pendingBackendInit)throw Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){let{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry)){if(!(e in this.registryFactory))return null;{let{asyncInit:t}=this.initializeBackend(e);if(t)return null}}return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,n=1){return e in this.registryFactory?(console.warn(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)}async setBackend(e){if(null==this.registryFactory[e])throw Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,null==this.registry[e]){this.backendInstance=null;let{success:t,asyncInit:n}=this.initializeBackend(e),r=n?await t:t;if(!r)return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new l(this.backendInstance),!0}setupRegisteredKernels(){let e=(0,i.tr)(this.backendName);e.forEach(e=>{null!=e.setupFunc&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){let t=(0,i.tr)(e);t.forEach(t=>{null!=t.disposeFunc&&t.disposeFunc(this.registry[e])})}initializeBackend(e){let t=this.registryFactory[e];if(null==t)throw Error(`Cannot initialize backend ${e}, no registration found.`);try{let n=t.factory();if(!n||n instanceof r.Zu||"function"!=typeof n.then)return this.registry[e]=n,{success:!0,asyncInit:!1};{let a=++this.pendingBackendInitId,s=n.then(t=>!(a<this.pendingBackendInitId)&&(this.registry[e]=t,this.pendingBackendInit=null,!0)).catch(t=>!(a<this.pendingBackendInitId)&&(this.pendingBackendInit=null,console.warn(`Initialization of backend ${e} failed`),console.warn(t.stack||t.message),!1));return this.pendingBackendInit=s,{success:s,asyncInit:!0}}}catch(o){return console.warn(`Initialization of backend ${e} failed`),console.warn(o.stack||o.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw Error(`${e} backend not found in registry`);this.backendName===e&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t],{success:r,asyncInit:a}=this.initializeBackend(n);if(a||r)return{name:n,asyncInit:a}}throw Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){let n=this.state.tensorInfo.get(t),r=n.backend,a=this.readSync(t);r.disposeData(t),n.backend=e,e.move(t,a,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let n,r=null;if(null==t){if("function"!=typeof e)throw Error("Please provide a function to tidy()");t=e}else{if("string"!=typeof e&&!(e instanceof String))throw Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof t)throw Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}return this.scopedRun(()=>this.startScope(r),()=>this.endScope(n),()=>((n=t())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n))}scopedRun(e,t,n){e();try{let r=n();return t(),r}catch(a){throw t(),a}}nextTensorId(){return m.nextTensorId++}nextVariableId(){return m.nextVariableId++}clone(e){let t=this.makeTensorFromDataId(e.dataId,e.shape,e.dtype),n=e=>({x(){let t="float32";return g.runKernelFunc(n=>n.cast(e,t),{x:e},null,o.RF,{dtype:t})}});return this.addTapeNode(this.state.activeScope.name,{x:e},[t],n,[],{}),t}runKernel(e,t,n,r,a){return this.runKernelFunc(null,t,null,e,n,r,a)}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,n){let r=this.backend.numDataIds(),a=0;n.forEach(e=>{a+="complex64"===e.dtype?3:1});let s=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-t-a-s;if(o>0)throw Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e,t,n,r,a,s,o){let u,l,p,h;let c=[],d=this.isTapeOn();null==r&&(r=null!=this.state.activeScope?this.state.activeScope.name:"");let f=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;let y=(0,i.pI)(r,this.backendName);if(null!=y)l=()=>{let e=this.backend.numDataIds();p=y.kernelFunc({inputs:t,attrs:a,backend:this.backend});let n=Array.isArray(p)?p:[p];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(r,e,n);let i=n.map(e=>{if(null!=e.rank)return e;let{dataId:t,shape:n,dtype:r}=e;return this.makeTensorFromDataId(t,n,r)});if(d){let u=this.getTensorsForGradient(r,t,i);if(null==u){null==o&&(o=[]);let l=i.filter((e,t)=>o[t]);u=(s||[]).slice().concat(l)}c=this.saveTensorsForBackwardMode(u)}return i};else{if(null==e)throw Error(`Error running ${r}: Neither modular kernel nor forward func passed`);let g=e=>{d&&(c=e.map(e=>this.keep(this.clone(e))))};l=()=>{let t=this.backend.numDataIds();p=this.tidy(()=>e(this.backend,g));let n=Array.isArray(p)?p:[p];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(r,t,n),n}}return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(h=this.profiler.profileKernel(r,t,()=>l()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(h),u=h.outputs):u=l()}),d&&this.addTapeNode(r,t,u,n,c,a),this.state.profiling&&this.state.activeProfile.kernels.push({name:r,bytesAdded:this.state.numBytes-f,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(t).map(e=>null!=t[e]?t[e].shape:null),outputShapes:u.map(e=>e.shape),kernelTimeMs:h.timeMs,extraInfo:h.extraInfo}),Array.isArray(p)?u:u[0]}saveTensorsForBackwardMode(e){let t=e.map(e=>this.keep(this.clone(e)));return t}getTensorsForGradient(e,t,n){let r=(0,i.uk)(e);if(null!=r){let a;let s=r.inputsToSave||[],o=r.outputsToSave||[];r.saveAllInputs?(u.hu(Array.isArray(t),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(t).map(e=>t[e])):a=s.map(e=>t[e]);let l=n.filter((e,t)=>o[t]);return a.concat(l)}return null}makeTensor(e,t,n,r){if(null==e)throw Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;let a=e;"string"===n&&u.HD(e[0])&&(a=e.map(e=>d.encodeString(e)));let s=r.write(a,t,n),o=new h.es(t,n,s,this.nextTensorId());if(this.incRef(o,r),"string"===n){let i=this.state.tensorInfo.get(s),l=(0,u.Ub)(a);this.state.numBytes+=l-i.bytes,i.bytes=l}return o}makeTensorFromDataId(e,t,n,r){n=n||"float32";let a=new h.es(t,n,e,this.nextTensorId());return this.incRef(a,r),a}makeVariable(e,t=!0,n,r){n=n||this.nextVariableId().toString(),null!=r&&r!==e.dtype&&(e=e.cast(r));let a=new h._w(e,t,n,this.nextTensorId());if(null!=this.state.registeredVariables[a.name])throw Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}incRef(e,t){let n=this.state.tensorInfo.has(e.dataId)?this.state.tensorInfo.get(e.dataId).refCount:0;if(this.state.numTensors++,"string"===e.dtype&&this.state.numStringTensors++,0===n){this.state.numDataBuffers++;let r=0;"complex64"!==e.dtype&&"string"!==e.dtype&&(r=e.size*u.bT(e.dtype)),this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:r,refCount:0}),this.state.numBytes+=r}this.state.tensorInfo.get(e.dataId).refCount++,e instanceof h._w||this.track(e)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;this.state.numTensors--,"string"===e.dtype&&this.state.numStringTensors--;let t=this.state.tensorInfo.get(e.dataId),n=t.refCount;n<=1?("complex64"!==e.dtype&&(this.state.numBytes-=t.bytes),this.state.numDataBuffers--,t.backend.disposeData(e.dataId),this.state.tensorInfo.delete(e.dataId)):(t.backend.decComplexRef(e.dataId),this.state.tensorInfo.get(e.dataId).refCount--)}disposeVariables(){for(let e in this.state.registeredVariables){let t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),null!=this.state.registeredVariables[e.name]&&delete this.state.registeredVariables[e.name]}memory(){let e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,null==e.reasons&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;let t=this.state.numBytes,n=this.state.numTensors;for(let r of(this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(e=>e.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n,this.state.activeProfile.kernels))r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(e,t,n,r,a,s){let o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:a},l=(0,i.uk)(e);null!=l&&(r=l.gradFunc),null!=r&&(o.gradient=e=>r((e=e.map((e,t)=>{if(null==e){let r=n[t],a=u.wT(r.size,r.dtype);return this.makeTensor(a,r.shape,r.dtype)}return e})).length>1?e:e[0],a,s)),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){let t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){let t=(0,c.Vu)(e),n=new Set(t.map(e=>e.id));for(let r=0;r<this.state.activeScope.track.length;r++){let a=this.state.activeScope.track[r];a.kept||n.has(a.id)||a.dispose()}let s=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(e=>{e.kept||e.scopeId!==s.id||this.track(e)})}gradients(e,t,n,r=!1){if(u.hu(t.length>0,()=>"gradients() received an empty list of xs."),null!=n&&"float32"!==n.dtype)throw Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);let a=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));u.hu(a instanceof h.es,()=>"The result y returned by f() must be a tensor.");let s=/**
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
 */ function(e,t,n){let r={},a={};for(let s=0;s<t.length;s++)r[t[s].id]=!0;for(let o=0;o<e.length;o++){let i=e[o],u=i.inputs;for(let l in u){let p=u[l],h=!1;for(let c=0;c<t.length;c++)if(r[p.id]){i.outputs.forEach(e=>r[e.id]=!0),h=!0,a[i.id]=!0;break}if(h)break}}let d={};d[n.id]=!0;let f={};for(let m=e.length-1;m>=0;m--){let y=e[m],g=y.inputs;for(let b=0;b<y.outputs.length;b++)if(d[y.outputs[b].id]){for(let k in g)d[g[k].id]=!0,f[y.id]=!0;break}}let v=[];for(let x=0;x<e.length;x++){let N=e[x];if(a[N.id]&&f[N.id]){let w={};for(let I in N.inputs){let T=N.inputs[I];r[T.id]&&(w[I]=T)}let S=Object.assign({},N);S.inputs=w,S.outputs=N.outputs,v.push(S)}}return v}(this.state.activeTape,t,a);if(!r&&0===s.length&&t.length>0)throw Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{let e={};e[a.id]=null==n?function(e){let t=(0,u.p8)((0,u.NA)(e),"float32");return g.makeTensor(t,e,"float32")}(a.shape):n,function(e,t,n,r){for(let a=t.length-1;a>=0;a--){let s=t[a],o=[];if(s.outputs.forEach(t=>{let n=e[t.id];null!=n?o.push(n):o.push(null)}),null==s.gradient)throw Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);let i=s.gradient(o);for(let l in s.inputs){if(!(l in i))throw Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(i)}.`);let p=n(()=>i[l]());if("float32"!==p.dtype)throw Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${p.dtype}'`);let h=s.inputs[l];if(!u.cO(p.shape,h.shape))throw Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${l}' has shape '${p.shape}', which does not match the shape of the input '${h.shape}'`);if(null==e[h.id])e[h.id]=p;else{let c=e[h.id];e[h.id]=r(c,p),c.dispose()}}}}(e,s,e=>this.tidy(e),b);let r=t.map(t=>e[t.id]);return 0===this.state.gradientDepth&&(this.state.activeTape.forEach(e=>{for(let t of e.saved)t.dispose()}),this.state.activeTape=null),{value:a,grads:r}})}customGrad(e){return u.hu(u.mf(e),()=>"The f passed in customGrad(f) must be a function."),(...t)=>{let n;u.hu(t.every(e=>e instanceof h.es),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r={};return t.forEach((e,t)=>{r[t]=e}),this.runKernelFunc((r,a)=>(n=e(...[...t,a]),u.hu(n.value instanceof h.es,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),u.hu(u.mf(n.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n.value),r,(e,r)=>{let a=n.gradFunc(e,r),s=Array.isArray(a)?a:[a];u.hu(s.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),u.hu(s.every(e=>e instanceof h.es),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let o={};return s.forEach((e,t)=>{o[t]=()=>e}),o})}}readSync(e){let t=this.state.tensorInfo.get(e);return t.backend.readSync(e)}read(e){let t=this.state.tensorInfo.get(e);return t.backend.read(e)}async time(e){let t=(0,d.now)(),n=await this.backend.time(e);return n.wallMs=(0,d.now)()-t,n}track(e){return null!=this.state.activeScope&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){for(let e in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new f,this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}function y(){let e=(0,s.D)();if(null==e._tfengine){let t=new a.qA(e);e._tfengine=new m(t)}return(0,a.iG)(e._tfengine.ENV),(0,h.Vi)(()=>e._tfengine),e._tfengine}m.nextTensorId=0,m.nextVariableId=0;let g=y();function b(e,t){return g.runKernel(o.mm,{a:e,b:t})}},2885:function(e,t,n){"use strict";n.d(t,{OB:function(){return o},iG:function(){return u},qA:function(){return s}});var r=n(569);/**
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
 */ let a="tfjsflags";class s{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}setPlatform(e,t){null!=this.platform&&console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`),this.platformName=e,this.platform=t}registerFlag(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},null!=this.urlFlags[e]){let r=this.urlFlags[e];console.warn(`Setting feature override from URL ${e}: ${r}.`),this.set(e,r)}}async getAsync(e){return e in this.flags||(this.flags[e]=await this.evaluateFlag(e)),this.flags[e]}get(e){if(e in this.flags)return this.flags[e];let t=this.evaluateFlag(e);if((0,r.tI)(t))throw Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(null==this.flagRegistry[e])throw Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,null!=this.flagRegistry[e].setHook&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(null==this.flagRegistry[e])throw Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(void 0===this.global||void 0===this.global.location||void 0===this.global.location.search)return;let e=function(e){let t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...n)=>{var r,a,s;return r=t,a=n[0],s=n[1],r[decodeURIComponent(a)]=decodeURIComponent(s||""),n.join("=")}),t}(this.global.location.search);if(a in e){let t=e[a].split(",");t.forEach(e=>{let[t,n]=e.split(":");this.urlFlags[t]=function(e,t){if("true"===(t=t.toLowerCase())||"false"===t)return"true"===t;if(`${+t}`===t)return+t;throw Error(`Could not parse value flag value ${t} for flag ${e}.`)}(t,n)})}}}function o(){return i}let i=null;function u(e){i=e}},5938:function(e,t,n){"use strict";let r;n.d(t,{D:function(){return s},R:function(){return o}});var a=n(3454);function s(){if(null==r){let e;if("undefined"!=typeof window)e=window;else if(void 0!==n.g)e=n.g;else if(void 0!==a)e=a;else if("undefined"!=typeof self)e=self;else throw Error("Could not find a global object");r=e}return r}function o(e,t){let n=function(){let e=s();return null==e._tfGlobals&&(e._tfGlobals=new Map),e._tfGlobals}();if(n.has(e))return n.get(e);{let r=t();return n.set(e,r),n.get(e)}}},4368:function(e,t,n){"use strict";n.d(t,{B9:function(){return p},Cn:function(){return h},MX:function(){return i},N_:function(){return c},SR:function(){return u},jq:function(){return d},lu:function(){return l}});var r=n(196),a=n(2885),s=n(974),o=n(747);function i(e){(0,a.OB)().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function u(){return r.BV}function l(e,t){return r.BV.tidy(e,t)}function p(e){let t=(0,o.Vu)(e);t.forEach(e=>e.dispose())}function h(e){return r.BV.keep(e)}function c(){return r.BV.backendName}function d(e,t,n=1){return r.BV.registerBackend(e,t,n)}(0,s.FZ)(i)},633:function(e,t,n){"use strict";n.d(t,{cb:function(){return a}});var r=n(196);function a(e){return r.BV.customGrad(e)}},7825:function(e,t,n){"use strict";let r,a;n.d(t,{SYM:function(){return eI.SY},VGw:function(){return eI.VG},SpW:function(){return eI.Sp},mm_:function(){return eI.mm},Xze:function(){return eI.Xz},oT6:function(){return eI.oT},IKK:function(){return eI.IK},sJF:function(){return eI.sJ},aJk:function(){return eI.aJ},M2y:function(){return eI.M2},qw7:function(){return eI.qw},jMg:function(){return eI.jM},QCc:function(){return eI.QC},Oyi:function(){return eI.Oy},JhU:function(){return eI.Jh},_k9:function(){return eI._k},IMb:function(){return eI.IM},ROF:function(){return eI.RO},XLW:function(){return eI.XL},zws:function(){return eI.zw},zvY:function(){return eI.zv},RFZ:function(){return eI.RF},gJX:function(){return eI.gJ},xnO:function(){return eI.xn},Zz9:function(){return eI.Zz},yj2:function(){return eI.yj},Eh3:function(){return eI.Eh},mhS:function(){return eI.mh},wUP:function(){return eI.wU},wm:function(){return eI.wm},x12:function(){return eI.x1},o2y:function(){return eI.o2},ik2:function(){return eI.ik},mc4:function(){return eI.mc},TR1:function(){return eI.TR},VcC:function(){return eI.Vc},iHb:function(){return eI.iH},JLz:function(){return tA.JL},QRR:function(){return eI.QR},T0n:function(){return eI.T0},cie:function(){return eI.ci},sL$:function(){return eI.sL},y7R:function(){return eI.y7},$w:function(){return eI.$w},p4S:function(){return eI.p4},Vn9:function(){return eI.Vn},ekb:function(){return eI.ek},SX0:function(){return eI.SX},HEU:function(){return eI.HE},hdR:function(){return eI.hd},Omj:function(){return eI.Om},NEP:function(){return eI.NE},YFo:function(){return eI.YF},Y0y:function(){return eI.Y0},vwp:function(){return eI.vw},deh:function(){return eI.de},Uyb:function(){return eI.Uy},OR:function(){return eI.OR},jeX:function(){return eI.je},sHE:function(){return eI.sH},_V0:function(){return eI._V},luS:function(){return eI.lu},q1x:function(){return eI.q1},qi_:function(){return eI.qi},iZT:function(){return eI.iZ},Acj:function(){return eI.Ac},Qg5:function(){return eI.Qg},iJz:function(){return eI.iJ},J_u:function(){return eI.J_},avt:function(){return eI.av},iWB:function(){return eI.iW},r7n:function(){return eI.r7},Zuw:function(){return tA.Zu},eZ0:function(){return eI.eZ},Hhh:function(){return eI.Hh},J$2:function(){return eI.J$},vtC:function(){return eI.vt},CAk:function(){return eI.CA},e7N:function(){return eI.e7},ZbH:function(){return eI.Zb},kU:function(){return eI.kU},PYm:function(){return eI.PY},VfG:function(){return eI.Vf},MZg:function(){return eI.MZ},YoZ:function(){return eI.Yo},mTV:function(){return eI.mT},OAf:function(){return eI.OA},OU7:function(){return eI.OU},OV7:function(){return eI.OV},vFR:function(){return eI.vF},BMI:function(){return eI.BM},q2K:function(){return eI.q2},c17:function(){return eI.c1},q8u:function(){return eI.q8},jQs:function(){return eI.jQ},Vbg:function(){return eI.Vb},NZg:function(){return eI.NZ},wYn:function(){return eI.wY},kuV:function(){return eI.ku},uv1:function(){return eI.uv},cye:function(){return eI.cy},W0H:function(){return eI.W0},yQU:function(){return eI.yQ},we_:function(){return eI.we},qWM:function(){return eI.qW},QiL:function(){return eI.Qi},lyA:function(){return eI.ly},pe_:function(){return eI.pe},o0g:function(){return eI.o0},DlI:function(){return eI.Dl},e6w:function(){return eI.e6},xJR:function(){return eI.xJ},oHH:function(){return eI.oH},$HU:function(){return eI.$H},qkr:function(){return eI.qk},SbG:function(){return eI.Sb},HZH:function(){return eI.HZ},_Yw:function(){return eI._Y},zbQ:function(){return eI.zb},dpD:function(){return eI.dp},Hmb:function(){return eI.Hm},mKl:function(){return eI.mK},b9H:function(){return eI.b9},e07:function(){return eI.e0},bV0:function(){return eI.bV},xQA:function(){return eI.xQ},PhF:function(){return eI.Ph},oFR:function(){return eI.oF},a5O:function(){return eI.a5},i5y:function(){return eI.i5},RQH:function(){return eI.RQ},wYB:function(){return eI.w3},p2w:function(){return eI.p2},Gcp:function(){return eI.Gc},MRv:function(){return eI.MR},TQc:function(){return eI.TQ},D2d:function(){return eI.D2},L8s:function(){return eI.L8},FKq:function(){return eI.FK},bK0:function(){return eI.bK},_tC:function(){return eI._t},h8e:function(){return eI.h8},jQk:function(){return eI.m2},Tr8:function(){return eI.Tr},GBy:function(){return eI.GB},sEM:function(){return eI.sE},MIZ:function(){return eI.MI},esB:function(){return ea.es},YDk:function(){return ea.YD},n9L:function(){return eI.n9},cWu:function(){return eI.cW},G3Y:function(){return eI.G3},kpP:function(){return eI.kp},ToN:function(){return eI.To},Qvg:function(){return eI.Qv},RuY:function(){return eI.Ru},usg:function(){return eI.us},IHx:function(){return eG.IHx},Wap:function(){return l},Xhn:function(){return o},f3b:function(){return eG.f3b},d9v:function(){return eG.d9v},zoF:function(){return eG.zoF},Izb:function(){return eG.Izb},hiC:function(){return eG.hiC},SRH:function(){return eK.SR},OBj:function(){return c.OB},N_N:function(){return eK.N_},BHj:function(){return eG.BHj},io:function(){return s},CnY:function(){return eK.Cn},GDt:function(){return p},dC7:function(){return eG.dC7},jqO:function(){return eK.jq},wCN:function(){return eT.wC},XLQ:function(){return eG.XLQ},iD$:function(){return eG.iD$},XD2:function(){return eG.XD2},tPi:function(){return eG.tPi},kuN:function(){return i},knu:function(){return eG.knu},luU:function(){return eG.luU},XeE:function(){return eG.XeE},RRF:function(){return eG.RRF},odF:function(){return eG.odF},lub:function(){return eK.lu},HHK:function(){return eG.HHK},x8V:function(){return eX.x8},D5U:function(){return ej}});var s={};n.r(s),n.d(s,{browserFiles:function(){return ep},browserHTTPRequest:function(){return ek},concatenateArrayBuffers:function(){return I},copyModel:function(){return K},decodeWeights:function(){return x},encodeWeights:function(){return v},fromMemory:function(){return eN},getLoadHandlers:function(){return M},getModelArtifactsInfoForJSON:function(){return S},getSaveHandlers:function(){return F},http:function(){return eb},isHTTPScheme:function(){return ey},listModels:function(){return X},loadWeights:function(){return ed},moveModel:function(){return Y},registerLoadRouter:function(){return _},registerSaveRouter:function(){return E},removeModel:function(){return G},weightsLoaderFactory:function(){return ef},withSaveHandler:function(){return ew}});var o={};n.r(o),n.d(o,{fromPixels:function(){return eF},toPixels:function(){return e_}});var i={};n.r(i),n.d(i,{assertParamsValid:function(){return eM},computeFlatOffset:function(){return eW},computeOutShape:function(){return e$},getNormalizedAxes:function(){return eC},isSliceContinous:function(){return eL},maskToAxes:function(){return eA},parseSliceParams:function(){return eH},sliceInfo:function(){return eq},startForAxis:function(){return ez},startIndicesWithElidedDims:function(){return eP},stopForAxis:function(){return eU},stopIndicesWithElidedDims:function(){return eV},stridesForAxis:function(){return eR},stridesWithElidedDims:function(){return eO}});var u={};n.r(u),n.d(u,{collectGatherOpShapeInfo:function(){return tT},computeOutShape:function(){return tI},segOpComputeOptimalWindowSize:function(){return tw}});var l={};n.r(l),n.d(l,{ERF_A1:function(){return ti},ERF_A2:function(){return tu},ERF_A3:function(){return tl},ERF_A4:function(){return tp},ERF_A5:function(){return th},ERF_P:function(){return to},PARALLELIZE_THRESHOLD:function(){return e9},SELU_SCALE:function(){return ts},SELU_SCALEALPHA:function(){return ta},applyActivation:function(){return e3.QH},assertAndGetBroadcastShape:function(){return eJ.$N},assertAxesAreInnerMostDims:function(){return eZ.lB},assertParamsConsistent:function(){return e0},assignToTypedArray:function(){return tk},axesAreInnerMostDims:function(){return eZ.YB},calculateShapes:function(){return tr.SU},castTensor:function(){return tS},combineLocations:function(){return eZ.Vh},complexWithEvenIndex:function(){return ty},complexWithOddIndex:function(){return tg},computeConv2DInfo:function(){return e2.Ix},computeConv3DInfo:function(){return e2.jw},computeDefaultPad:function(){return e2.aO},computeDilation2DInfo:function(){return e2.Rf},computeOptimalWindowSize:function(){return e6},computeOutAndReduceShapes:function(){return eZ.kz},computeOutShape:function(){return e1},computePool2DInfo:function(){return e2.Xw},computePool3DInfo:function(){return e2.pl},convertConv2DDataFormat:function(){return e2.sl},eitherStridesOrDilationsAreOne:function(){return e2.jT},expandShapeToKeepDim:function(){return eZ.rv},exponent:function(){return tx},exponents:function(){return tv},fromStringArrayToUint8:function(){return t_},fromUint8ToStringArray:function(){return tE},getAxesPermutation:function(){return eZ.Q3},getBroadcastDims:function(){return eJ.XF},getComplexWithIndex:function(){return tb},getFusedBiasGradient:function(){return e3.pf},getFusedDyActivation:function(){return e3.Fr},getImageCenter:function(){return e5},getInnerMostAxes:function(){return eZ.sY},getPermuted:function(){return e7},getReductionAxes:function(){return eJ.RR},getReshaped:function(){return e4},getReshapedPermuted:function(){return e8},getSliceBeginCoords:function(){return te},getSliceSize:function(){return tt},getUndoAxesPermutation:function(){return eZ.LJ},log:function(){return td},mergeRealAndImagArrays:function(){return tf},prepareAndValidate:function(){return tn},prepareSplitSize:function(){return tN},reshapeTensor:function(){return tD},segment_util:function(){return u},shouldFuse:function(){return e3.uy},slice_util:function(){return i},splitRealAndImagArrays:function(){return tm},tupleValuesAreOne:function(){return e2.I0},upcastType:function(){return eX.x8},validateInput:function(){return tr.b0},validateUpdateShape:function(){return tr.l5},warn:function(){return tc}});var p={};n.r(p),n.d(p,{GP:function(){return tF.GP},qP:function(){return tF.qP},pA:function(){return tF.pA},ZA:function(){return tM.Z}});var h=n(196),c=n(2885),d=n(3454);/**
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
 */ let f=(0,c.OB)();f.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),f.registerFlag("IS_BROWSER",()=>"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope),f.registerFlag("IS_NODE",()=>void 0!==d&&void 0!==d.versions&&void 0!==d.versions.node),f.registerFlag("IS_CHROME",()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),f.registerFlag("PROD",()=>!1),f.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>f.getBool("DEBUG")),f.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),f.registerFlag("IS_TEST",()=>!1),f.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);var m=n(1661),y=n(701),g=n(569);/**
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
 */ let b={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};var k=n(1876).Buffer;async function v(e,t){let n=[],r=[],a=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);for(let s=0;s<a.length;++s){let o=a[s],i=Array.isArray(e)?e[s].tensor:e[o];if("float32"!==i.dtype&&"int32"!==i.dtype&&"bool"!==i.dtype&&"string"!==i.dtype&&"complex64"!==i.dtype)throw Error(`Unsupported dtype in weight '${o}': ${i.dtype}`);let u={name:o,shape:i.shape,dtype:i.dtype};if("string"===i.dtype){let l=new Promise(async e=>{let t=await i.bytes(),n=t.reduce((e,t)=>e+t.length,0)+4*t.length,r=new Uint8Array(n),a=0;for(let s=0;s<t.length;s++){let o=t[s],u=new Uint8Array(new Uint32Array([o.length]).buffer);r.set(u,a),a+=4,r.set(o,a),a+=o.length}e(r)});r.push(l)}else r.push(i.data());null!=t&&(u.group=t),n.push(u)}let p=await Promise.all(r);return{data:function(e){if(null===e)throw Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0,n=[];e.forEach(e=>{if(t+=e.byteLength,n.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw Error(`Unsupported TypedArray subtype: ${e.constructor.name}`)});let r=new Uint8Array(t),a=0;return n.forEach(e=>{r.set(new Uint8Array(e.buffer),a),a+=e.byteLength}),r.buffer}(p),specs:n}}function x(e,t){let n;let r={},a=0;for(let s of t){let o;let i=s.name,u=s.dtype,l=s.shape,p=(0,g.NA)(l);if("quantization"in s){let h=s.quantization;if("uint8"===h.dtype||"uint16"===h.dtype){if(!("min"in h&&"scale"in h))throw Error(`Weight ${s.name} with quantization ${h.dtype} doesn't have corresponding metadata min and scale.`)}else if("float16"===h.dtype){if("float32"!==u)throw Error(`Weight ${s.name} is quantized with ${h.dtype} which only supports weights of type float32 not ${u}.`)}else throw Error(`Weight ${s.name} has unknown quantization dtype ${h.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);let c=b[h.dtype],d=e.slice(a,a+p*c),f="uint8"===h.dtype?new Uint8Array(d):new Uint16Array(d);if("float32"===u){if("uint8"===h.dtype||"uint16"===h.dtype){o=new Float32Array(f.length);for(let k=0;k<f.length;k++){let v=f[k];o[k]=v*h.scale+h.min}}else if("float16"===h.dtype)void 0===n&&(n=function(){let e=function(){let e=e=>{let t=e<<13,n=0;for(;(8388608&t)==0;)n-=8388608,t<<=1;return(t&=-8388609)|(n+=947912704)},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let r=1024;r<2048;r++)t[r]=939524096+(r-1024<<13);return t}(),t=function(){let e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let n=33;n<63;n++)e[n]=2147483648+(n-32<<23);return e}(),n=function(){let e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}();return r=>{let a=new ArrayBuffer(4*r.length),s=new Uint32Array(a);for(let o=0;o<r.length;o++){let i=r[o],u=e[n[i>>10]+(1023&i)]+t[i>>10];s[o]=u}return new Float32Array(a)}}()),o=n(f);else throw Error(`Unsupported quantization type ${h.dtype} for weight type float32.`)}else if("int32"===u){if("uint8"!==h.dtype&&"uint16"!==h.dtype)throw Error(`Unsupported quantization type ${h.dtype} for weight type int32.`);o=new Int32Array(f.length);for(let x=0;x<f.length;x++){let N=f[x];o[x]=Math.round(N*h.scale+h.min)}}else throw Error(`Unsupported dtype in weight '${i}': ${u}`);a+=p*c}else if("string"===u){let w=(0,g.NA)(s.shape);o=[];for(let I=0;I<w;I++){let T=new Uint32Array(e.slice(a,a+4))[0];a+=4;let S=new Uint8Array(e.slice(a,a+T));o.push(S),a+=T}}else{let D=b[u],E=e.slice(a,a+p*D);if("float32"===u)o=new Float32Array(E);else if("int32"===u)o=new Int32Array(E);else if("bool"===u)o=new Uint8Array(E);else if("complex64"===u){o=new Float32Array(E);let _=new Float32Array(o.length/2),F=new Float32Array(o.length/2);for(let M=0;M<_.length;M++)_[M]=o[2*M],F[M]=o[2*M+1];let A=(0,y.X)(_,l,"float32"),$=(0,y.X)(F,l,"float32");r[i]=(0,m.P)(A,$),A.dispose(),$.dispose()}else throw Error(`Unsupported dtype in weight '${i}': ${u}`);a+=p*D}"complex64"!==u&&(r[i]=(0,y.X)(o,l,u))}return r}let N=void 0!==k&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function w(e){return N?k.byteLength(e):new Blob([e]).size}function I(e){if(1===e.length)return e[0];let t=0;e.forEach(e=>{t+=e.byteLength});let n=new Uint8Array(t),r=0;return e.forEach(e=>{n.set(new Uint8Array(e),r),r+=e.byteLength}),n.buffer}function T(e){for(e=e.trim();e.endsWith("/");)e=e.slice(0,e.length-1);let t=e.split("/");return t[t.length-1]}function S(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==e.modelTopology?0:w(JSON.stringify(e.modelTopology)),weightSpecsBytes:null==e.weightSpecs?0:w(JSON.stringify(e.weightSpecs)),weightDataBytes:null==e.weightData?0:e.weightData.byteLength}}/**
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
 */ class D{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==D.instance&&(D.instance=new D),D.instance}static registerSaveRouter(e){D.getInstance().saveRouters.push(e)}static registerLoadRouter(e){D.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return D.getHandlers(e,"save")}static getLoadHandlers(e,t){return D.getHandlers(e,"load",t)}static getHandlers(e,t,n){let r=[],a="load"===t?D.getInstance().loadRouters:D.getInstance().saveRouters;return a.forEach(t=>{let a=t(e,n);null!==a&&r.push(a)}),r}}let E=e=>D.registerSaveRouter(e),_=e=>D.registerLoadRouter(e),F=e=>D.getSaveHandlers(e),M=(e,t)=>D.getLoadHandlers(e,t),A="tensorflowjs",$="models_store",O="model_info_store";function B(){if(!(0,c.OB)().getBool("IS_BROWSER"))throw Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");let e="undefined"==typeof window?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(null==t)throw Error("The current browser does not appear to support IndexedDB.");return t}function C(e){let t=e.result;t.createObjectStore($,{keyPath:"modelPath"}),t.createObjectStore(O,{keyPath:"modelPath"})}class P{constructor(e){if(this.indexedDB=B(),null==e||!e)throw Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((e,n)=>{let r=this.indexedDB.open(A,1);r.onupgradeneeded=()=>C(r),r.onsuccess=()=>{let a=r.result;if(null==t){let s=a.transaction($,"readonly"),o=s.objectStore($),i=o.get(this.modelPath);i.onsuccess=()=>{if(null==i.result)return a.close(),n(Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(i.result.modelArtifacts)},i.onerror=e=>(a.close(),n(i.error)),s.oncomplete=()=>a.close()}else{let u;let l=S(t),p=a.transaction(O,"readwrite"),h=p.objectStore(O),c=h.put({modelPath:this.modelPath,modelArtifactsInfo:l});c.onsuccess=()=>{u=a.transaction($,"readwrite");let r=u.objectStore($),s=r.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:l});s.onsuccess=()=>e({modelArtifactsInfo:l}),s.onerror=e=>{h=p.objectStore(O);let t=h.delete(this.modelPath);t.onsuccess=()=>(a.close(),n(s.error)),t.onerror=e=>(a.close(),n(s.error))}},c.onerror=e=>(a.close(),n(c.error)),p.oncomplete=()=>{null==u?a.close():u.oncomplete=()=>a.close()}}},r.onerror=e=>n(r.error)})}}P.URL_SCHEME="indexeddb://";let V=e=>{var t;return(0,c.OB)().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(P.URL_SCHEME)?(t=e.slice(P.URL_SCHEME.length),new P(t)):null};D.registerSaveRouter(V),D.registerLoadRouter(V);let R="tensorflowjs_models",z="info";function U(e){return{info:[R,e,z].join("/"),topology:[R,e,"model_topology"].join("/"),weightSpecs:[R,e,"weight_specs"].join("/"),weightData:[R,e,"weight_data"].join("/"),modelMetadata:[R,e,"model_metadata"].join("/")}}class L{constructor(e){if(!(0,c.OB)().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==e||!e)throw Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=U(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{let t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=S(e);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(e){if(N)return k.from(e).toString("base64");let t=new Uint8Array(e),n="";for(let r=0,a=t.length;r<a;r++)n+=String.fromCharCode(t[r]);return btoa(n)}(e.weightData));let a={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};return null!=e.signature&&(a.signature=e.signature),null!=e.userDefinedMetadata&&(a.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(a.modelInitializer=e.modelInitializer),this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:r}}catch(s){throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){let e=JSON.parse(this.LS.getItem(this.keys.info));if(null==e)throw Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==e.modelTopologyType)throw Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");let t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(null==n)throw Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;let r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==r)throw Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;let a=this.LS.getItem(this.keys.modelMetadata);if(null!=a){let s=JSON.parse(a);t.format=s.format,t.generatedBy=s.generatedBy,t.convertedBy=s.convertedBy,null!=s.signature&&(t.signature=s.signature),null!=s.userDefinedMetadata&&(t.userDefinedMetadata=s.userDefinedMetadata),null!=s.modelInitializer&&(t.modelInitializer=s.modelInitializer)}let o=this.LS.getItem(this.keys.weightData);if(null==o)throw Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=function(e){if(N){let t=k.from(e,"base64");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}let n=atob(e),r=new Uint8Array(n.length);for(let a=0;a<n.length;++a)r.set([n.charCodeAt(a)],a);return r.buffer}(o),t}}L.URL_SCHEME="localstorage://";let W=e=>{var t;return(0,c.OB)().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(L.URL_SCHEME)?(t=e.slice(L.URL_SCHEME.length),new L(t)):null};D.registerSaveRouter(W),D.registerLoadRouter(W);class H{constructor(){this.managers={}}static getInstance(){return null==H.instance&&(H.instance=new H),H.instance}static registerManager(e,t){(0,g.hu)(null!=e,()=>"scheme must not be undefined or null."),e.endsWith("://")&&(e=e.slice(0,e.indexOf("://"))),(0,g.hu)(e.length>0,()=>"scheme must not be an empty string.");let n=H.getInstance();(0,g.hu)(null==n.managers[e],()=>`A model store manager is already registered for scheme '${e}'.`),n.managers[e]=t}static getManager(e){let t=this.getInstance().managers[e];if(null==t)throw Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(this.getInstance().managers)}}function q(e){if(-1===e.indexOf("://"))throw Error(`The url string provided does not contain a scheme. Supported schemes are: ${H.getSchemes().join(",")}`);return{scheme:e.split("://")[0],path:e.split("://")[1]}}async function j(e,t,n=!1){(0,g.hu)(e!==t,()=>`Old path and new path are the same: '${e}'`);let r=D.getLoadHandlers(e);(0,g.hu)(r.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),(0,g.hu)(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${e}.`);let a=r[0],s=D.getSaveHandlers(t);(0,g.hu)(s.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),(0,g.hu)(s.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`);let o=s[0],i=q(e).scheme,u=q(e).path,l=i===q(e).scheme,p=await a.load();n&&l&&await H.getManager(i).removeModel(u);let h=await o.save(p);return n&&!l&&await H.getManager(i).removeModel(u),h.modelArtifactsInfo}async function X(){let e=H.getSchemes(),t={};for(let n of e){let r=await H.getManager(n).listModels();for(let a in r){let s=n+"://"+a;t[s]=r[a]}}return t}async function G(e){let t=q(e),n=H.getManager(t.scheme);return n.removeModel(t.path)}async function K(e,t){return j(e,t,!1)}async function Y(e,t){return j(e,t,!0)}if((0,c.OB)().get("IS_BROWSER")){(0,c.OB)().setPlatform("browser",new /**
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
 */ class{fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw Error(`Browser's encoder only supports utf-8, but got ${t}`);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}});try{H.registerManager(L.URL_SCHEME,new class{constructor(){(0,g.hu)((0,c.OB)().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),(0,g.hu)("undefined"==typeof window||void 0!==window.localStorage,()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){let e={},t=R+"/",n="/"+z;for(let r=0;r<this.LS.length;++r){let a=this.LS.key(r);if(a.startsWith(t)&&a.endsWith(n)){let s=function(e){let t=e.split("/");if(t.length<3)throw Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join("/")}(a);e[s]=JSON.parse(this.LS.getItem(a))}}return e}async removeModel(e){var t;e=(t=e).startsWith(L.URL_SCHEME)?t.slice(L.URL_SCHEME.length):t;let n=U(e);if(null==this.LS.getItem(n.info))throw Error(`Cannot find model at path '${e}'`);let r=JSON.parse(this.LS.getItem(n.info));return this.LS.removeItem(n.info),this.LS.removeItem(n.topology),this.LS.removeItem(n.weightSpecs),this.LS.removeItem(n.weightData),r}})}catch(Q){}try{H.registerManager(P.URL_SCHEME,new class{constructor(){this.indexedDB=B()}async listModels(){return new Promise((e,t)=>{let n=this.indexedDB.open(A,1);n.onupgradeneeded=()=>C(n),n.onsuccess=()=>{let r=n.result,a=r.transaction(O,"readonly"),s=a.objectStore(O),o=s.getAll();o.onsuccess=()=>{let t={};for(let n of o.result)t[n.modelPath]=n.modelArtifactsInfo;e(t)},o.onerror=e=>(r.close(),t(o.error)),a.oncomplete=()=>r.close()},n.onerror=e=>t(n.error)})}async removeModel(e){var t;return e=(t=e).startsWith(P.URL_SCHEME)?t.slice(P.URL_SCHEME.length):t,new Promise((t,n)=>{let r=this.indexedDB.open(A,1);r.onupgradeneeded=()=>C(r),r.onsuccess=()=>{let a;let s=r.result,o=s.transaction(O,"readwrite"),i=o.objectStore(O),u=i.get(e);u.onsuccess=()=>{if(null==u.result)return s.close(),n(Error(`Cannot find model with path '${e}' in IndexedDB.`));{let r=i.delete(e),o=()=>{a=s.transaction($,"readwrite");let r=a.objectStore($),o=r.delete(e);o.onsuccess=()=>t(u.result.modelArtifactsInfo),o.onerror=e=>n(u.error)};r.onsuccess=o,r.onerror=e=>(o(),s.close(),n(u.error))}},u.onerror=e=>(s.close(),n(u.error)),o.oncomplete=()=>{null==a?s.close():a.oncomplete=()=>s.close()}},r.onerror=e=>n(r.error)})}})}catch(Z){}}var J=n(3454);/**
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
 */ let ee={importFetch:()=>n(5410)};(0,c.OB)().get("IS_NODE")&&(0,c.OB)().setPlatform("node",new class{constructor(){this.util=n(8628),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return null!=(0,c.OB)().global.fetch?(0,c.OB)().global.fetch(e,t):(null==r&&(r=ee.importFetch()),r(e,t))}now(){let e=J.hrtime();return 1e3*e[0]+e[1]/1e6}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return 0===e.length?"":new this.util.TextDecoder(t).decode(e)}});var et=n(2657),en=n(2271),er=n(8723),ea=n(974);/**
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
 */ (0,h.wv)();let es={buffer:et.f,cast:en.p,clone:er.d,print:/**
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
 */ function(e,t=!1){console.log(e.toString(t))}};function eo(e){return new Promise(e=>setTimeout(e)).then(e)}(0,ea.Vp)(es);class ei{constructor(e){if(!(0,c.OB)().getBool("IS_BROWSER"))throw Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(ei.URL_SCHEME)&&(e=e.slice(ei.URL_SCHEME.length)),(null==e||0===e.length)&&(e="model"),this.modelTopologyFileName=e+".json",this.weightDataFileName=e+".weights.bin"}async save(e){if("undefined"==typeof document)throw Error("Browser downloads are not supported in this environment since `document` is not present");let t=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{let n=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:n};null!=e.signature&&(r.signature=e.signature),null!=e.userDefinedMetadata&&(r.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(r.modelInitializer=e.modelInitializer);let a=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),s=null==this.jsonAnchor?document.createElement("a"):this.jsonAnchor;if(s.download=this.modelTopologyFileName,s.href=a,await eo(()=>s.dispatchEvent(new MouseEvent("click"))),null!=e.weightData){let o=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;o.download=this.weightDataFileName,o.href=t,await eo(()=>o.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:S(e)}}}}ei.URL_SCHEME="downloads://";class eu{constructor(e){if(null==e||e.length<1)throw Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.files=e}async load(){let e=this.files[0],t=this.files.slice(1);return new Promise((n,r)=>{let a=new FileReader;a.onload=a=>{let s;let o=JSON.parse(a.target.result),i=o.modelTopology;if(null==i){r(Error(`modelTopology field is missing from file ${e.name}`));return}0===t.length&&n({modelTopology:i});let u=o.weightsManifest;if(null==u){r(Error(`weightManifest field is missing from file ${e.name}`));return}try{s=this.checkManifestAndWeightFiles(u,t)}catch(l){r(l);return}let p=[],h=[],c=[];u.forEach(e=>{e.paths.forEach(e=>{h.push(e),c.push(null)}),p.push(...e.weights)}),u.forEach(e=>{e.paths.forEach(e=>{let t=new FileReader;t.onload=t=>{let r=t.target.result,a=h.indexOf(e);if(c[a]=r,-1===c.indexOf(null)){let s={modelTopology:i,weightSpecs:p,weightData:I(c),format:o.format,generatedBy:o.generatedBy,convertedBy:o.convertedBy};null!=o.signature&&(s.signature=o.signature),null!=o.userDefinedMetadata&&(s.userDefinedMetadata=o.userDefinedMetadata),null!=o.modelInitializer&&(s.modelInitializer=o.modelInitializer),n(s)}},t.onerror=t=>r(`Failed to weights data from file of path '${e}'.`),t.readAsArrayBuffer(s[e])})})},a.onerror=t=>r(`Failed to read model topology and weights manifest JSON from file '${e.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),a.readAsText(e)})}checkManifestAndWeightFiles(e,t){let n=[],r=t.map(e=>T(e.name)),a={};for(let s of e)s.paths.forEach(e=>{let s=T(e);if(-1!==n.indexOf(s))throw Error(`Duplicate file basename found in weights manifest: '${s}'`);if(n.push(s),-1===r.indexOf(s))throw Error(`Weight file with basename '${s}' is not provided.`);a[e]=t[r.indexOf(s)]});if(n.length!==t.length)throw Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${t.length}).`);return a}}let el=e=>(0,c.OB)().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(ei.URL_SCHEME)?function(e="model"){return new ei(e)}(e.slice(ei.URL_SCHEME.length)):null;function ep(e){return new eu(e)}/**
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
 */ function eh(e,t,n,r){var a,s;(0,g.hu)(null!=e&&Array.isArray(e)&&e.length>0,()=>"promises must be a none empty array"),a=n=null==n?0:n,s=r=null==r?1:r,(0,g.hu)(a>=0&&a<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${a}`),(0,g.hu)(s>=0&&s<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${s}`),(0,g.hu)(s>=a,()=>`startFraction must be no more than endFraction, but got startFraction ${a} and endFraction ${s}`);let o=0,i=a=>(a.then(a=>{let s=n+ ++o/e.length*(r-n);return t(s),a}),a);return Promise.all(e.map(i))}/**
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
 */ async function ec(e,t){null==t&&(t={});let n=null==t.fetchFunc?(0,c.OB)().platform.fetch:t.fetchFunc,r=e.map(e=>n(e,t.requestInit,{isBinary:!0})),a=null==t.onProgress?await Promise.all(r):await eh(r,t.onProgress,0,.5),s=a.map(e=>e.arrayBuffer()),o=null==t.onProgress?await Promise.all(s):await eh(s,t.onProgress,.5,1);return o}async function ed(e,t="",n,r){let a=e=>ec(e,{requestInit:r}),s=ef(a);return s(e,t,n)}function ef(e){return async(t,n="",r)=>{let a=t.map(()=>!1),s={},o=null!=r?r.map(()=>!1):[],i=[];if(t.forEach((e,t)=>{let n=0;e.weights.forEach(e=>{let u="quantization"in e?e.quantization.dtype:e.dtype,l=b[u]*g.NA(e.shape),p=()=>{a[t]=!0,null==s[t]&&(s[t]=[]),s[t].push({manifestEntry:e,groupOffset:n,sizeBytes:l})};null!=r?r.forEach((t,n)=>{t===e.name&&(p(),o[n]=!0)}):p(),i.push(e.name),n+=l})}),!o.every(e=>e)){let u=r.filter((e,t)=>!o[t]);throw Error(`Could not find weights in manifest with names: ${u.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}let l=a.reduce((e,t,n)=>(t&&e.push(n),e),[]),p=[];l.forEach(e=>{t[e].paths.forEach(e=>{let t=n+(n.endsWith("/")?"":"/")+e;p.push(t)})});let h=await e(p),c={},d=0;return l.forEach(e=>{let n=t[e].paths.length,r=0;for(let a=0;a<n;a++)r+=h[d+a].byteLength;let o=new ArrayBuffer(r),i=new Uint8Array(o),u=0;for(let l=0;l<n;l++){let p=new Uint8Array(h[d+l]);i.set(p,u),u+=p.byteLength}let f=s[e];f.forEach(e=>{let t=o.slice(e.groupOffset,e.groupOffset+e.sizeBytes),n=x(t,[e.manifestEntry]);for(let r in n)c[r]=n[r]}),d+=n}),c}}D.registerSaveRouter(el);class em{constructor(e,t){if(this.DEFAULT_METHOD="POST",null==t&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,this.weightUrlConverter=t.weightUrlConverter,null!=t.fetchFunc?((0,g.hu)("function"==typeof t.fetchFunc,()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc):this.fetch=(0,c.OB)().platform.fetch,(0,g.hu)(null!=e&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&(0,g.hu)(2===e.length,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,null!=t.requestInit&&null!=t.requestInit.body)throw Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{}}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");let t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;let n=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:n};null!=e.signature&&(r.signature=e.signature),null!=e.userDefinedMetadata&&(r.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(r.modelInitializer=e.modelInitializer),t.body.append("model.json",new Blob([JSON.stringify(r)],{type:"application/json"}),"model.json"),null!=e.weightData&&t.body.append("model.weights.bin",new Blob([e.weightData],{type:"application/octet-stream"}),"model.weights.bin");let a=await this.fetch(this.path,t);if(a.ok)return{modelArtifactsInfo:S(e),responses:[a]};throw Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${a.status}.`)}async load(){let e,t,n;let r=await this.fetch(this.path,this.requestInit);if(!r.ok)throw Error(`Request to ${this.path} failed with status code ${r.status}. Please verify this URL points to the model JSON of the model to load.`);try{e=await r.json()}catch(s){let a=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?a+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":a+=" Please make sure the server is serving valid JSON for this request.",Error(a)}let o=e.modelTopology,i=e.weightsManifest,u=e.generatedBy,l=e.convertedBy,p=e.format,h=e.signature,c=e.userDefinedMetadata;if(null==o&&null==i)throw Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);if(null!=i){let d=await this.loadWeights(i);[t,n]=d}let f={modelTopology:o,weightSpecs:t,weightData:n,generatedBy:u,convertedBy:l,format:p};null!=h&&(f.signature=h),null!=c&&(f.userDefinedMetadata=c);let m=e.modelInitializer;return m&&(f.modelInitializer=m),f}async loadWeights(e){let t=Array.isArray(this.path)?this.path[1]:this.path,[n,r]=function(e){let t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),r=e.substring(0,t),a=n>t?e.substring(n):"";return[r+"/",a]}(t),a=this.weightPathPrefix||n,s=[];for(let o of e)s.push(...o.weights);let i=[],u=[];for(let l of e)for(let p of l.paths)null!=this.weightUrlConverter?u.push(this.weightUrlConverter(p)):i.push(a+p+r);this.weightUrlConverter&&i.push(...await Promise.all(u));let h=await ec(i,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[s,I(h)]}}function ey(e){return null!=e.match(em.URL_SCHEME_REGEX)}em.URL_SCHEME_REGEX=/^https?:\/\//;let eg=(e,t)=>{if("undefined"==typeof fetch&&(null==t||null==t.fetchFunc));else if(Array.isArray(e)?e.every(e=>ey(e)):ey(e))return eb(e,t);return null};function eb(e,t){return new em(e,t)}function ek(e,t){return eb(e,t)}D.registerSaveRouter(eg),D.registerLoadRouter(eg);/**
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
 */ class ev{constructor(e){this.modelArtifacts=e}async load(){return this.modelArtifacts}}class ex{constructor(e){this.saveHandler=e}async save(e){return this.saveHandler(e)}}function eN(e,t,n,r){if(1!=arguments.length)return console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ev({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r});{let a=null!=e.modelTopology||null!=e.weightSpecs;return a?new ev(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ev({modelTopology:e}))}}function ew(e){return new ex(e)}/**
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
 */ var eI=n(9121),eT=n(6151),eS=n(3740),eD=n(2668),eE=n(7852);async function e_(e,t){let n=(0,eS._1)(e,"img","toPixels");if(!(e instanceof ea.es)){let r=n;n=(0,en.p)(r,"int32"),r.dispose()}if(2!==n.rank&&3!==n.rank)throw Error(`toPixels only supports rank 2 or 3 tensors, got rank ${n.rank}.`);let[a,s]=n.shape.slice(0,2),o=2===n.rank?1:n.shape[2];if(o>4||2===o)throw Error(`toPixels only supports depth of size 1, 3 or 4 but got ${o}`);if("float32"!==n.dtype&&"int32"!==n.dtype)throw Error(`Unsupported type for toPixels: ${n.dtype}. Please use float32 or int32 tensors.`);let i=await n.data(),u="float32"===n.dtype?255:1,l=new Uint8ClampedArray(s*a*4);for(let p=0;p<a*s;++p){let h=[0,0,0,255];for(let c=0;c<o;c++){let d=i[p*o+c];if("float32"===n.dtype){if(d<0||d>1)throw Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${d}.`)}else if("int32"===n.dtype&&(d<0||d>255))throw Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${d}.`);1===o?(h[0]=d*u,h[1]=d*u,h[2]=d*u):h[c]=d*u}let f=4*p;l[f+0]=Math.round(h[0]),l[f+1]=Math.round(h[1]),l[f+2]=Math.round(h[2]),l[f+3]=Math.round(h[3])}if(null!=t){t.width=s,t.height=a;let m=t.getContext("2d"),y=new ImageData(l,s,a);m.putImageData(y,0,0)}return n!==e&&n.dispose(),l}let eF=(0,eD.op)({fromPixels_:function(e,t=3){let n,r;if(t>4)throw Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==e)throw Error("pixels passed to tf.browser.fromPixels() can not be null");let s=!1,o=!1,i=!1,u=!1,l=!1,p=!1;if(e.data instanceof Uint8Array)s=!0;else if("undefined"!=typeof ImageData&&e instanceof ImageData)o=!0;else if("undefined"!=typeof HTMLVideoElement&&e instanceof HTMLVideoElement)i=!0;else if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement)u=!0;else if(null!=e.getContext)l=!0;else if("undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap)p=!0;else throw Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);if(i&&i&&e.readyState<2)throw Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");let c=(0,eT.pI)(eI.eB,h.BV.backendName);if(null!=c)return h.BV.runKernel(eI.eB,{pixels:e},{numChannels:t});let[d,f]=i?[e.videoWidth,e.videoHeight]:[e.width,e.height];if(l?n=e.getContext("2d").getImageData(0,0,d,f).data:o||s?n=e.data:(u||i||p)&&(null==a&&(a=document.createElement("canvas").getContext("2d")),a.canvas.width=d,a.canvas.height=f,a.drawImage(e,0,0,d,f),n=a.getImageData(0,0,d,f).data),4===t)r=new Int32Array(n);else{let m=d*f;r=new Int32Array(m*t);for(let y=0;y<m;y++)for(let b=0;b<t;++b)r[y*t+b]=n[4*y+b]}return(/**
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
 */ function(e,t,n){if((0,g.Cq)(e),null!=t&&3!==t.length)throw Error("tensor3d() requires shape to have three numbers");let r=(0,eS.C)(e,n);if(3!==r.length&&1!==r.length)throw Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===r.length&&null==t)throw Error("tensor3d() requires shape to be provided when `values` are a flat array");return(0,eE.H)(e,t,r,n)}(r,[f,d,t],"int32"))}});/**
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
 */ function eM(e,t,n){let r=e.shape.length;g.hu(r===t.length,()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`),g.hu(r===n.length,()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`);for(let a=0;a<r;++a)g.hu(t[a]+n[a]<=e.shape[a],()=>`Error in slice${r}D: begin[${a}] + size[${a}] (${t[a]+n[a]}) would overflow input.shape[${a}] (${e.shape[a]})`)}function eA(e){let t=[],n=0;for(;e>0;)1&e&&t.push(n),e/=2,n++;return t}function e$(e,t,n){let r=[];for(let a=0;a<e.length;a++)r[a]=Math.ceil((t[a]-e[a])/n[a]);return r}function eO(e,t,n,r){let a=[...e];for(let s=a.length;s<r.length;s++)a.push(1);for(let o=0;o<n;o++)0===o?a[t]=1:(a.splice(t,0,1),a.pop());return a}function eB(e,t){let n=[];for(let r=0;r<e;r++)n.push(t+r);return n}function eC(e,t,n,r,a,s,o,i,u){let l=e.length,p=Array(l),h=Array(l),c=Array(l);if(t.length&&n>0){let d=t[0],f=n+1;p=eP(o,d,f,r,e),h=eV(i,d,f,a,e),c=eO(s,d,f,e)}else for(let m=0;m<l;m++)p[m]=ez(o,r,s,e,m,u),h[m]=eU(i,a,s,e,m,u),c[m]=eR(s,m,u);return{begin:p,end:h,strides:c}}function eP(e,t,n,r,a){let s=[...a],o=eB(n,t);for(let i=0;i<s.length;i++)if(o.indexOf(i)>-1)s[i]=0;else{var u;let l=(u=i)<=t?u:u-(n-1),p=r[l];e&1<<l&&(p=0),s[i]=p}return s}function eV(e,t,n,r,a){let s=[...a],o=eB(n,t);for(let i=0;i<s.length;i++)if(o.indexOf(i)>-1)s[i]=Number.MAX_SAFE_INTEGER;else{var u;let l=(u=i)<=t?u:u-(n-1),p=r[l];e&1<<l&&(p=Number.MAX_SAFE_INTEGER),s[i]=p}for(let h=0;h<s.length;h++){let c=a[h];s[h]<0&&(s[h]+=c),s[h]=g.uZ(0,s[h],a[h])}return s}function eR(e,t,n){let r=e[t];return(n&1<<t||null==r)&&(r=1),r}function ez(e,t,n,r,a,s){let o=t[a],i=n[a]||1;(e&1<<a||s&1<<a||null==o)&&(o=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);let u=r[a];return o<0&&(o+=u),o=g.uZ(0,o,u-1)}function eU(e,t,n,r,a,s){let o=t[a],i=n[a]||1;(e&1<<a||s&1<<a||null==o)&&(o=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);let u=r[a];return o<0&&(o+=u),o=i>0?g.uZ(0,o,u):g.uZ(-1,o,u-1)}function eL(e,t,n){let r=n.length;for(let a=0;a<n.length;a++)if(n[a]>1){r=a;break}for(let s=r+1;s<n.length;s++)if(t[s]>0||n[s]!==e[s])return!1;return!0}function eW(e,t){let n=e.length>0?e[e.length-1]:1;for(let r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function eH(e,t,n){let r,a;let s=e.shape.length;return(r="number"==typeof t?[t,...Array(s-1).fill(0)]:t.length<s?t.concat(Array(s-t.length).fill(0)):t.slice()).forEach(e=>{g.hu(-1!==e,()=>"slice() does not support negative begin indexing.")}),a=(a=null==n?Array(s).fill(-1):"number"==typeof n?[n,...Array(s-1).fill(-1)]:n.length<s?n.concat(Array(s-n.length).fill(-1)):n).map((t,n)=>t>=0?t:(g.hu(-1===t,()=>`Negative size values should be exactly -1 but got ${t} for the slice() size at index ${n}.`),e.shape[n]-r[n])),[r,a]}function eq(e,t,n,r,a,s,o,i,u){let l=t.slice(),p=n.slice(),h=r;null==r&&(h=Array(l.length));let c=eA(o);if(c.length>1)throw Error("Multiple ellipses in slice is not allowed.");if(0!==o&&0!==i)throw Error("Using both ellipsisMask and newAxisMask is not yet supported.");if(0!==o&&0!==u)throw Error("Using both ellipsisMask and shrinkAxisMask is not yet supported.");let d=e.length-l.length,f=eA(i),m=e.slice();f.forEach(e=>{l[e]=0,p[e]=1,m.splice(e,0,1)});let{begin:y,end:g,strides:b}=eC(m,c,d,l,p,h,a,s,o);l=y,p=g,h=b;let k=eA(u);k.forEach(e=>{p[e]=l[e]+1,h[e]=1});let v=e$(l,p,h),x=v.filter((e,t)=>-1===k.indexOf(t)),N=h.every(e=>1===e);return{nonStrided:N,$begin:l,$end:p,$strides:h,size:v,newShape:m,outShape:x}}var ej=n(9155),eX=n(1221),eG=n(3308),eK=n(4368),eY=n(9494),eQ=n(9640),eZ=n(3591),eJ=n(2200);/**
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
 */ function e0(e,t){let n=e[0].length;e.forEach((e,t)=>{g.hu(e.length===n,()=>`Error in concat${n}D: rank of tensors[${t}] must be the same as the rank of the rest (${n})`)}),g.hu(t>=0&&t<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);let r=e[0];e.forEach((e,a)=>{for(let s=0;s<n;s++)g.hu(s===t||e[s]===r[s],()=>`Error in concat${n}D: Shape of tensors[${a}] (${e}) does not match the shape of the rest (${r}) along the non-concatenated axis ${a}.`)})}function e1(e,t){let n=e[0].slice();for(let r=1;r<e.length;r++)n[t]+=e[r][t];return n}var e2=n(2582),e3=n(9323);/**
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
 */ let e9=30;function e6(e){return e<=e9?e:(0,g.jP)(e,Math.floor(Math.sqrt(e)))}/**
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
 */ function e5(e,t,n){let r=n*("number"==typeof e?e:e[0]),a=t*("number"==typeof e?e:e[1]);return[r,a]}/**
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
 */ function e4(e,t,n,r=!0){let a=[];if(r)(a=a.concat(t.slice(0))).push(e[0]/n),a=a.concat(e.slice(1));else{a=a.concat(e[0]);let s=t.length;for(let o=0;o<s;++o)a=a.concat([e[o+1]/t[o],t[o]]);a=a.concat(e.slice(s+1))}return a}function e7(e,t,n=!0){let r=[];if(n){r.push(t);for(let a=t+1;a<e;++a)a<=2*t?(r.push(a),r.push(a-(t+1))):r.push(a)}else{let s=[],o=[];for(let i=1;i<e;++i)i>=2*t+1||i%2==1?o.push(i):s.push(i);r.push(...s),r.push(0),r.push(...o)}return r}function e8(e,t,n,r=!0){let a=[];r?a.push(e[0]/n):a.push(e[0]*n);for(let s=1;s<e.length;++s)s<=t.length?r?a.push(t[s-1]*e[s]):a.push(e[s]/t[s-1]):a.push(e[s]);return a}function te(e,t){let n=[0];for(let r=0;r<t;++r)n.push(e[r][0]);return n}function tt(e,t,n){let r=e.slice(0,1);for(let a=0;a<n;++a)r.push(e[a+1]-t[a][0]-t[a][1]);return r}function tn(e,t){let n=e.shape.length,r=t.shape.length;if(n<1)throw Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if("int32"!==t.dtype)throw Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>n)throw Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${n}`);if(0===(0,g.NA)(e.shape))throw Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);let a=t.shape,s=a[a.length-1],o=1;for(let i=0;i<a.length-1;++i)o*=a[i];let u=e.shape,l=a.slice();l.pop();let p=1;for(let h=s;h<n;++h)p*=u[h],l.push(u[h]);let c=[...(0,g.e3)(e.shape).map(e=>e/p),1].slice(0,s);return[l,o,p,c]}var tr=n(3028);/**
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
 */ let ta=1.7580993408473768,ts=1.0507009873554805,to=.3275911,ti=.254829592,tu=-.284496736,tl=1.421413741,tp=-1.453152027,th=1.061405429;/**
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
 */ function tc(...e){(0,c.OB)().getBool("IS_TEST")||console.warn(...e)}function td(...e){(0,c.OB)().getBool("IS_TEST")||console.log(...e)}/**
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
 */ function tf(e,t){if(e.length!==t.length)throw Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);let n=new Float32Array(2*e.length);for(let r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function tm(e){let t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}function ty(e){let t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let a=0;a<e.length;a+=4)n[Math.floor(a/4)]=e[a],r[Math.floor(a/4)]=e[a+1];return{real:n,imag:r}}function tg(e){let t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let a=2;a<e.length;a+=4)n[Math.floor(a/4)]=e[a],r[Math.floor(a/4)]=e[a+1];return{real:n,imag:r}}function tb(e,t){let n=e[2*t],r=e[2*t+1];return{real:n,imag:r}}function tk(e,t,n,r){e[2*r]=t,e[2*r+1]=n}function tv(e,t){let n=new Float32Array(e/2),r=new Float32Array(e/2);for(let a=0;a<Math.ceil(e/2);a++){let s=(t?2:-2)*Math.PI*(a/e);n[a]=Math.cos(s),r[a]=Math.sin(s)}return{real:n,imag:r}}function tx(e,t,n){let r=(n?2:-2)*Math.PI*(e/t),a=Math.cos(r),s=Math.sin(r);return{real:a,imag:s}}function tN(e,t,n=0){let r=[];if("number"==typeof t)(0,g.hu)(e.shape[n]%t==0,()=>"Number of splits must evenly divide the axis."),r=Array(t).fill(e.shape[n]/t);else{let a=t.reduce((e,t)=>(-1===t&&(e+=1),e),0);(0,g.hu)(a<=1,()=>"There should be only one negative value in split array.");let s=t.indexOf(-1);if(-1!==s){let o=t.reduce((e,t)=>t>0?e+t:e);t[s]=e.shape[n]-o}(0,g.hu)(e.shape[n]===t.reduce((e,t)=>e+t),()=>"The sum of sizes must match the size of the axis dimension."),r=t}return r}/**
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
 */ function tw(e,t){let n,r=!1;for(e<=e9?(n=e,r=!0):n=(0,g.jP)(e,Math.floor(Math.sqrt(e)));!r;)n>t||n===e?r=!0:n=(0,g.jP)(e,n+1);return n}function tI(e,t,n){let r=[],a=e.length;for(let s=0;s<a;s++)s!==t?r.push(e[s]):r.push(n);return r}function tT(e,t,n,r){let a=t.shape.length,s=e.shape.length;if(0!==r&&(r<-a||r>a))throw Error(`Expect batchDims in the range of [-${a}, ${a}], but got ${r}`);if(r<0&&(r+=a),r>s)throw Error(`batchDims (${r}) must be less than rank(x) (
    ${s}).`);if(n<r)throw Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let o=0;o<r;++o)if(e.shape[o]!==t.shape[o])throw Error(`x.shape[${o}]: ${e.shape[o]} should be equal to indices.shape[${o}]: ${t.shape[o]}.`);let i=e.shape[n],u=[],l=1,p=1,h=1;for(let c=0;c<r;++c)u.push(e.shape[c]),l*=e.shape[c];for(let d=r;d<n;d++)u.push(e.shape[d]),p*=e.shape[d];for(let f=r;f<a;f++)u.push(t.shape[f]);for(let m=n+1;m<s;m++)u.push(e.shape[m]),h*=e.shape[m];return{batchSize:l,sliceSize:h,outerSize:p,dimSize:i,outputShape:u}}/**
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
 */ function tS(e,t,n){if("complex64"===t){if("complex64"===e.dtype)return e.clone();let r=(0,eQ.l)(e.shape),a=(0,en.p)(e,"float32"),s=n.complex(a,r);return r.dispose(),a.dispose(),s}if(!(0,g.QB)(e.dtype,t))return h.BV.makeTensorFromDataId(e.dataId,e.shape,t);if("complex64"===e.dtype){let o=n.real(e),i=(0,en.p)(o,t);return o.dispose(),i}if("int32"===t)return n.int(e);if("bool"===t){let u=(0,eY.i)(0,e.dtype),l=n.notEqual(e,u);return u.dispose(),l}throw Error(`Error in Cast: failed to cast ${e.dtype} to ${t}`)}function tD(e,t){return h.BV.makeTensorFromDataId(e.dataId,t,e.dtype)}function tE(e){try{return e.map(e=>(0,ej.decodeString)(e))}catch(t){throw Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function t_(e){return e.map(e=>(0,ej.encodeString)(e))}var tF=n(8329),tM=n(8333),tA=n(2073),t$=n(4841),tO=n(1901);/**
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
 */ let tB={kernelName:eI.SY,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,t$.d)(e,(0,tO.N)((0,en.p)(n,"float32"),-1))}}};var tC=n(1274),tP=n(7370),tV=n(3261),tR=n(248),tz=n(827);/**
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
 */ let tU={kernelName:eI.VG,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x(){let t=(0,tR.h)((0,en.p)(n,"float32")),r=(0,tV._)((0,tz.l)((0,eY.i)(1),t));return(0,tP.W)((0,tC.h)(e,r))}}}},tL={kernelName:eI.Sp,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x(){let t=(0,tV._)((0,tz.l)((0,tR.h)((0,en.p)(n,"float32")),1));return(0,tC.h)(e,t)}}}};var tW=n(4968),tH=n(5475);/**
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
 */ let tq={kernelName:eI.mm,inputsToSave:["a","b"],gradFunc(e,t){let[n,r]=t,a=eJ.$N(n.shape,r.shape),s=()=>{let t=e,r=eJ.RR(n.shape,a);return r.length>0&&(t=(0,tH.S)(t,r)),(0,tW.X)(t,n.shape)},o=()=>{let t=e,n=eJ.RR(r.shape,a);return n.length>0&&(t=(0,tH.S)(t,n)),(0,tW.X)(t,r.shape)};return{a:s,b:o}}},tj={kernelName:eI.Xz,saveAllInputs:!0,gradFunc(e,t){let n={};return t.forEach((t,r)=>{n[r]=()=>e.clone()}),n}};var tX=n(6577);/**
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
 */ let tG={kernelName:eI.sJ,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,tX.P)(n)}}},tK={kernelName:eI.aJ,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,tX.P)(n)}}},tY={kernelName:eI.M2,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,tC.h)(e,(0,tV._)((0,tz.l)((0,eY.i)(1),(0,tR.h)((0,en.p)(n,"float32")))))}}};var tQ=n(6407);/**
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
 */ let tZ={kernelName:eI.qw,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x(){let t=(0,tV._)((0,tQ.I)((0,eY.i)(1),(0,tR.h)((0,en.p)(n,"float32"))));return(0,tC.h)(e,t)}}}},tJ={kernelName:eI.QC,inputsToSave:["a","b"],gradFunc(e,t){let[n,r]=t,a=(0,eJ.$N)(n.shape,r.shape),s=()=>{let t=(0,tQ.I)((0,tR.h)(n),(0,tR.h)(r)),s=(0,t$.d)(e,(0,tC.h)(r,t)),o=(0,eJ.RR)(n.shape,a);return o.length>0&&(s=(0,tH.S)(s,o)),(0,tW.X)(s,n.shape)},o=()=>{let t=(0,tQ.I)((0,tR.h)(n),(0,tR.h)(r)),s=(0,tP.W)((0,t$.d)(e,(0,tC.h)(n,t))),o=(0,eJ.RR)(r.shape,a);return o.length>0&&(s=(0,tH.S)(s,o)),(0,tW.X)(s,r.shape)};return{a:s,b:o}}},t0={kernelName:eI.jM,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,tC.h)(e,(0,tQ.I)((0,tR.h)((0,en.p)(n,"float32")),1))}}},t1={kernelName:eI.Oy,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,tC.h)(e,(0,tz.l)((0,eY.i)(1),(0,tR.h)((0,en.p)(n,"float32"))))}}},t2=(0,eD.op)({avgPool3dGrad_:/**
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
 */ function(e,t,n,r,a=[1,1,1],s,o){let i=(0,eS._1)(e,"dy","avgPool3dGrad"),u=(0,eS._1)(t,"input","avgPool3dGrad"),l=i,p=u,c=!1;4===u.rank&&(c=!0,l=(0,tW.X)(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]]),p=(0,tW.X)(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]])),g.hu(5===l.rank,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),g.hu(5===p.rank,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${p.rank}.`),g.hu(e2.jT(r,a),()=>`Error in avgPool3dGrad: Either strides or dilations must be 1. Got strides ${r} and dilations '${a}'`),null!=o&&g.hu(g.GN(s),()=>`Error in avgPool3dGrad: pad must be an integer when using, dimRoundingMode ${o} but got pad ${s}.`);let d={dy:l,input:p},f=h.BV.runKernel(eI.IM,d,{filterSize:n,strides:r,dilations:a,pad:s,dimRoundingMode:o});return c?(0,tW.X)(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}}),t3={kernelName:eI._k,inputsToSave:["x"],gradFunc(e,t,n){let[r]=t,{filterSize:a,strides:s,dilations:o,pad:i,dimRoundingMode:u}=n,l=null==o?[1,1,1]:o;return{x:()=>t2(e,r,a,s,l,i,u)}}},t9=(0,eD.op)({avgPoolGrad_:/**
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
 */ function(e,t,n,r,a){let s=(0,eS._1)(e,"dy","avgPoolGrad"),o=(0,eS._1)(t,"input","avgPoolGrad");g.hu(o.rank===s.rank,()=>`Rank of input (${o.rank}) does not match rank of dy (${s.rank})`);let i=o,u=s,l=!1;3===o.rank&&(l=!0,i=(0,tW.X)(o,[1,o.shape[0],o.shape[1],o.shape[2]]),u=(0,tW.X)(s,[1,s.shape[0],s.shape[1],s.shape[2]])),g.hu(4===u.rank,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${u.rank}.`),g.hu(4===i.rank,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${i.rank}.`);let p={dy:u,input:i},c=h.BV.runKernel(eI.RO,p,{filterSize:n,strides:r,pad:a});return l?(0,tW.X)(c,[c.shape[1],c.shape[2],c.shape[3]]):c}}),t6={kernelName:eI.Jh,inputsToSave:["x"],gradFunc(e,t,n){let[r]=t,{filterSize:a,strides:s,pad:o}=n;return{x:()=>t9(e,r,a,s,o)}}};var t5=n(8687);/**
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
 */ let t4={kernelName:eI.XL,inputsToSave:["a","b"],gradFunc(e,t,n){let[r,a]=t,{transposeA:s,transposeB:o}=n;return s||o?!s&&o?{a:()=>(0,t5.O)(e,a,!1,!1),b:()=>(0,t5.O)(e,r,!0,!1)}:s&&!o?{a:()=>(0,t5.O)(a,e,!1,!0),b:()=>(0,t5.O)(r,e,!1,!1)}:{a:()=>(0,t5.O)(a,e,!0,!0),b:()=>(0,t5.O)(e,r,!0,!0)}:{a:()=>(0,t5.O)(e,a,!1,!0),b:()=>(0,t5.O)(r,e,!0,!1)}}};var t7=n(7918);/**
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
 */ let t8={kernelName:eI.zw,gradFunc(e,t,n){let{blockShape:r,crops:a}=n;return{x:()=>(0,t7.f)(e,r,a)}}},ne={kernelName:eI.Ly,gradFunc(e,t,n){let r=n.inputShape,a=n.shape,s=Array.from(a);for(let o=r.length-1;o>=0;o--)if(r[o]===a[o])s[o]=1;else if(1!==r[o])throw Error(`broadcastTo(): [${r}] cannot be broadcast to [${a}].`);let i=[];for(let u=0;u<s.length;u++)s[u]>1&&i.push(u);return{x:()=>(0,tH.S)(e,i,!0)}}},nt={kernelName:eI.RF,gradFunc:e=>({x:()=>e.clone()})},nn={kernelName:eI.gJ,gradFunc:e=>({x:()=>(0,tX.P)(e)})};var nr=n(7630),na=n(624),ns=n(2856),no=n(5912);/**
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
 */ let ni={kernelName:eI.xn,inputsToSave:["x"],gradFunc(e,t,n){let[r]=t,{clipValueMin:a,clipValueMax:s}=n;return{x:()=>(0,no.a)((0,ns.H)((0,nr.b)(r,a),(0,na.z)(r,s)),e,(0,tX.P)(e))}}},nu={kernelName:eI.yj,inputsToSave:["x"],gradFunc:tB.gradFunc};var nl=n(8644);/**
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
 */ let np={kernelName:eI.Eh,saveAllInputs:!0,gradFunc(e,t,n){let r=t.map(e=>e.shape),{axis:a}=n,s=(0,g.EC)(a,t[0].shape)[0],o=r.map(e=>e[s]),i=(0,nl.V)(e,o,s);return i.map(e=>()=>e)}};var nh=n(6013),nc=n(9832);/**
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
 */ let nd={kernelName:eI.mh,inputsToSave:["x","filter"],gradFunc(e,t,n){let[r,a]=t,{dilations:s,strides:o,pad:i,dataFormat:u}=n;return g.hu(e2.I0(s),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`),{x:()=>(0,nc._)(r.shape,e,a,o,i,u),filter:()=>(0,nh.p)(r,e,a.shape,o,i,u)}}};var nf=n(4794);/**
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
 */ let nm={kernelName:eI.wm,inputsToSave:["dy","filter"],gradFunc(e,t,n){let[r,a]=t,{strides:s,pad:o,dataFormat:i,dimRoundingMode:u}=n;return{dy:()=>(0,nf.T)(e,a,s,o,i,1,u),filter:()=>(0,nh.p)(e,r,a.shape,s,o,i,u)}}},ny=(0,eD.op)({conv3DBackpropFilter_:/**
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
 */ function(e,t,n,r,a){let s=e;4===e.rank&&(s=(0,tW.X)(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]));let o=t;4===o.rank&&(o=(0,tW.X)(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),g.hu(5===s.rank,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${s.shape}.`),g.hu(5===o.rank,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${o.shape}.`),g.hu(5===n.length,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${n}.`),g.hu(s.shape[4]===n[3],()=>`Error in conv3dDerFilter: depth of input ${s.shape[4]}) must match input depth in filter (${n[3]}.`),g.hu(o.shape[4]===n[4],()=>`Error in conv3dDerFilter: depth of dy (${o.shape[4]}) must match output depth for filter (${n[4]}).`);let i={x:s,dy:o};return h.BV.runKernel(eI.o2,i,{strides:r,pad:a,filterShape:n})}}),ng=(0,eD.op)({conv3DBackpropInput_:/**
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
 */ function(e,t,n,r,a){g.hu(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let s=e,o=t,i=!1;4===t.rank&&(i=!0,o=(0,tW.X)(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),s=[1,e[0],e[1],e[2],e[3]]);let u=s[4],l=o.shape[4];g.hu(5===s.length,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${s.length}.`),g.hu(5===o.rank,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),g.hu(5===n.rank,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),g.hu(u===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${u}) must match input depth for filter ${n.shape[3]}.`),g.hu(l===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`);let p={dy:o,filter:n},c={pad:a,strides:r,inputShape:s},d=h.BV.runKernel(eI.ik,p,c);return i?(0,tW.X)(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}}),nb={kernelName:eI.x1,inputsToSave:["x","filter"],gradFunc(e,t,n){let{dilations:r,strides:a,pad:s}=n;g.hu((0,e2.I0)(r),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);let[o,i]=t;return{x:()=>ng(o.shape,e,i,a,s),filter:()=>ny(o,e,i.shape,a,s)}}};var nk=n(9331);/**
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
 */ let nv={kernelName:eI.mc,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,t$.d)((0,tP.W)((0,nk.O)((0,en.p)(n,"float32"))),e)}}};var nx=n(3254);/**
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
 */ let nN={kernelName:eI.TR,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,t$.d)((0,nx.R)((0,en.p)(n,"float32")),e)}}};var nw=n(7405),nI=n(9065);/**
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
 */ let nT={kernelName:eI.iH,inputsToSave:["x"],gradFunc(e,t,n){let[r]=t,{axis:a,exclusive:s,reverse:o}=n;return{x(){let t=(0,eZ.Q3)([a],r.rank),n=(0,nw.z)(e,a,s,!o);return null!=t&&(n=(0,nI.p)(n,t)),n}}}};var nS=n(8098),nD=n(4375);/**
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
 */ let nE={kernelName:eI.ci,inputsToSave:["x","filter"],gradFunc(e,t,n){let{dilations:r,strides:a,pad:s,dimRoundingMode:o}=n,i=null==r?[1,1]:r;g.hu(e2.I0(i),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${i}'`);let[u,l]=t;return g.hu(4===u.rank,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${u.rank}.`),g.hu(4===l.rank,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${l.rank}.`),g.hu(u.shape[3]===l.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${u.shape[3]}) must match the inChannels dimension in filter ${l.shape[2]}.`),g.hu(e2.jT(a,i),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${a} and dilations '${i}'.`),null!=o&&g.hu(g.GN(s),()=>`Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode ${o} but got pad ${s}.`),{x:()=>(0,nD.v)(u.shape,e,l,a,s,r,o),filter:()=>(0,nS.z)(u,e,l.shape,a,s,r,o)}}},n_={kernelName:eI.p4,inputsToSave:["x","filter"],gradFunc(e,t,n){let[r,a]=t,s={x:r,filter:a,dy:e},o={x:r,filter:a,dy:e};return{x:()=>h.BV.runKernel(eI.ek,s,n),filter:()=>h.BV.runKernel(eI.Vn,o,n)}}},nF={kernelName:eI.SX,outputsToSave:[!0],gradFunc(e,t){let[n]=t,r={dy:e,y:n};return{x:()=>h.BV.runKernel(eI.HE,r)}}};var nM=n(4842);/**
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
 */ let nA={kernelName:eI.Om,inputsToSave:["x"],gradFunc(e,t){let[n]=t,r=(0,t$.d)((0,nM.Q)((0,tP.W)((0,tR.h)(n))),2/Math.sqrt(Math.PI));return{x:()=>(0,t$.d)(e,r)}}},n$={kernelName:eI.NE,outputsToSave:[!0],gradFunc(e,t){let[n]=t;return{x:()=>(0,t$.d)(e,n)}}},nO={kernelName:eI.YF,inputsToSave:["input"],gradFunc(e,t){let[n]=t;return{input:()=>(0,tW.X)(e,n.shape)}}},nB={kernelName:eI.Y0,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,t$.d)(e,(0,nM.Q)(n))}}},nC={kernelName:eI.OR,gradFunc:e=>({x:()=>(0,tX.P)(e)})},nP={kernelName:eI.je,inputsToSave:["a","b"],gradFunc(e,t){let[n,r]=t,a=(0,eJ.$N)(n.shape,r.shape),s=()=>{let t=(0,tC.h)(e,(0,en.p)(r,"float32")),s=(0,eJ.RR)(n.shape,a);return s.length>0?(0,tW.X)((0,tH.S)(t,s),n.shape):t},o=()=>{let t=(0,t$.d)(e,(0,en.p)(n,"float32")),s=(0,eJ.RR)(r.shape,a);s.length>0&&(t=(0,tW.X)((0,tH.S)(t,s),r.shape));let o=(0,tR.h)(r);return(0,tP.W)((0,tC.h)(t,(0,en.p)(o,"float32")))};return{a:s,b:o}}};var nV=n(2634),nR=n(7501);/**
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
 */ let nz={kernelName:eI.sH,inputsToSave:["x","mean","variance","scale"],gradFunc(e,t,n){let{varianceEpsilon:r}=n,[a,s,o,i]=t,u=null==i?(0,eY.i)(1):i,l=(0,eJ.RR)(s.shape,a.shape),p=[];if(1===s.rank){for(let h=0;h<a.shape.length-1;++h)p.push(a.shape[h]);p.push(1)}let c=(0,tz.l)(a,s),d=(0,t$.d)(e,u),f=(0,nV.b)((0,tQ.I)(o,(0,eY.i)(r))),m=(0,t$.d)((0,t$.d)((0,t$.d)(f,f),f),(0,eY.i)(-.5)),y=()=>1===s.rank?(0,tW.X)((0,t$.d)((0,t$.d)(e,(0,nR.G)((0,tW.X)(f,[1,1,1,s.shape[0]]),p)),u),a.shape):(0,tW.X)((0,t$.d)((0,t$.d)(e,f),u),a.shape),g=()=>{let e=(0,t$.d)((0,t$.d)(f,(0,eY.i)(-1)),d);return 1===s.rank&&(e=(0,tH.S)(e,l)),(0,tW.X)(e,s.shape)},b=()=>{let e=(0,t$.d)((0,t$.d)(m,c),d);return 1===s.rank&&(e=(0,tH.S)(e,l)),(0,tW.X)(e,s.shape)},k=()=>{let t=(0,t$.d)(c,f),n=(0,t$.d)(e,t);return 1===s.rank&&(n=(0,tH.S)(n,l)),(0,tW.X)(n,s.shape)},v=()=>{let t=e;return 1===s.rank&&(t=(0,tH.S)(t,l)),(0,tW.X)(t,s.shape)};return{x:y,mean:g,variance:b,scale:k,offset:v}}},nU=(0,eD.op)({unsortedSegmentSum_:/**
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
 */ function(e,t,n){let r=(0,eS._1)(e,"x","unsortedSegmentSum"),a=(0,eS._1)(t,"segmentIds","unsortedSegmentSum","int32");return(0,g.hu)((0,g.GN)(n),()=>"numSegments must be of dtype int"),h.BV.runKernel(eI.Qv,{x:r,segmentIds:a},{numSegments:n})}}),nL={kernelName:eI.qi,inputsToSave:["x","indices"],gradFunc(e,t,n){let[r,a]=t,{axis:s}=n,o=(0,g.EC)(s,r.shape)[0],i=()=>{let t=r.shape,n=a.size,i=t.slice(0,o),u=i.length,l=t.slice(s,t.length).slice(1),p=l.length,h=nW(0,u),c=nW(u+1,u+1+p),d=nH([i,[n],l]),f=(0,tW.X)(e,d),m=(0,tW.X)(a,[n]),y=nH([[u],h,c]),g=(0,nI.p)(f,y),b=nU(g,m,r.shape[o]),k=(0,eZ.LJ)(y);return(0,nI.p)(b,k)};return{x:i,indices:()=>a}}};function nW(e,t){let n=[];for(let r=e;r<t;++r)n.push(r);return n}function nH(e){let t=[];for(let n=0;n<e.length;++n)for(let r=0;r<e[n].length;++r)t.push(e[n][r]);return t}/**
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
 */ let nq={kernelName:eI.Ac,inputsToSave:["a","b"],gradFunc(e,t){let[n,r]=t;return{a:()=>(0,tX.P)(n),b:()=>(0,tX.P)(r)}}},nj={kernelName:eI.iJ,gradFunc:e=>({x:()=>(0,en.p)(e,"float32")})},nX={kernelName:eI.av,gradFunc:e=>({x:()=>(0,tX.P)(e)})},nG={kernelName:eI.iW,gradFunc:e=>({x:()=>(0,tX.P)(e)})},nK={kernelName:eI.r7,gradFunc:e=>({x:()=>(0,tX.P)(e)})};var nY=n(636);/**
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
 */ let nQ={kernelName:eI.J$,inputsToSave:["x"],gradFunc(e,t,n){let[r]=t,{alpha:a}=n,s=(0,nY.p)(r,0);return{x:()=>(0,no.a)(s,e,(0,t$.d)(e,a))}}},nZ={kernelName:eI.kU,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,tC.h)(e,(0,tQ.I)(n,1))}}},nJ={kernelName:eI.Zb,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,tC.h)(e,(0,en.p)(n,"float32"))}}},n0={kernelName:eI.qC,inputsToSave:[],outputsToSave:[!0],gradFunc(e,t,n){let[r]=t,{axis:a}=n;return{logits(){let t=(0,nM.Q)(r);return(0,tz.l)(e,(0,t$.d)((0,tH.S)(e,a,!0),t))}}}},n1=(0,eD.op)({localResponseNormalizationBackprop_:/**
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
 */ function(e,t,n,r=5,a=1,s=1,o=.5){return h.BV.runKernel(eI.Hh,{x:e,y:t,dy:n},{depthRadius:r,bias:a,alpha:s,beta:o})}}),n2={kernelName:eI.eZ,inputsToSave:["x"],outputsToSave:[!0],gradFunc(e,t,n){let[r,a]=t,{depthRadius:s,bias:o,alpha:i,beta:u}=n;return{x:()=>n1(r,a,e,s,o,i,u)}}};var n3=n(6477);/**
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
 */ function n9(e,t,n,r){return t.rank<n.rank&&(t=(0,tW.X)(t,eZ.rv(t.shape,r))),e.rank<n.rank&&(e=(0,tW.X)(e,eZ.rv(e.shape,r))),{x(){let r=(0,t$.d)(e,(0,en.p)((0,n3.D)(n,t),e.dtype));return r}}}/**
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
 */ let n6={kernelName:eI.Yo,inputsToSave:["x"],outputsToSave:[!0],gradFunc(e,t,n){let{reductionIndices:r}=n,a=t[0],s=t[1],o=g.EC(r,a.shape),i=n9(e,s,a,o);return{x:()=>i.x()}}};var n5=n(6573);/**
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
 */ let n4={kernelName:eI.BM,inputsToSave:["a","b"],gradFunc(e,t){let[n,r]=t,a=()=>(0,t$.d)(e,(0,en.p)((0,nr.b)(n,r),"float32")),s=()=>(0,t$.d)(e,(0,en.p)((0,n5.d)(n,r),"float32"));return{a:a,b:s}}},n7=(0,eD.op)({maxPool3dGrad_:/**
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
 */ function(e,t,n,r,a,s=[1,1,1],o,i){let u=(0,eS._1)(e,"dy","maxPool3dGrad"),l=(0,eS._1)(t,"input","maxPool3dGrad"),p=(0,eS._1)(n,"output","maxPool3dGrad"),c=u,d=l,f=p,m=!1;4===l.rank&&(m=!0,c=(0,tW.X)(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]]),d=(0,tW.X)(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),f=(0,tW.X)(p,[1,p.shape[0],p.shape[1],p.shape[2],p.shape[3]])),g.hu(5===c.rank,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${c.rank}.`),g.hu(5===d.rank,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${d.rank}.`),g.hu(5===f.rank,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${f.rank}.`),g.hu(e2.jT(a,s),()=>`Error in maxPool3dGrad: Either strides or dilations must be 1. Got strides ${a} and dilations '${s}'`),null!=i&&g.hu(g.GN(o),()=>`Error in maxPool3dGrad: pad must be an integer when using, dimRoundingMode ${i} but got pad ${o}.`);let y={dy:c,input:d,output:f},b=h.BV.runKernel(eI.OU,y,{filterSize:r,strides:a,dilations:s,pad:o,dimRoundingMode:i});return m?(0,tW.X)(b,[b.shape[1],b.shape[2],b.shape[3],b.shape[4]]):b}}),n8={kernelName:eI.OA,inputsToSave:["x"],outputsToSave:[!0],gradFunc(e,t,n){let[r,a]=t,{filterSize:s,strides:o,dilations:i,pad:u,dimRoundingMode:l}=n,p=null==i?[1,1,1]:i;return{x:()=>n7(e,r,a,s,o,p,u,l)}}},re=(0,eD.op)({maxPoolGrad_:/**
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
 */ function(e,t,n,r,a,s,o){let i=(0,eS._1)(e,"dy","maxPoolGrad"),u=(0,eS._1)(t,"input","maxPoolGrad"),l=(0,eS._1)(n,"output","maxPoolGrad");return g.hu(u.rank===i.rank,()=>`Rank of input (${u.rank}) does not match rank of dy (${i.rank})`),g.hu(4===i.rank,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${i.rank}.`),g.hu(4===u.rank,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${u.rank}.`),null!=o&&g.hu(g.GN(s),()=>`Error in maxPoolGrad: pad must be an integer when using, dimRoundingMode ${o} but got pad ${s}.`),h.BV.runKernel(eI.OV,{dy:i,input:u,output:l},{filterSize:r,strides:a,pad:s,dimRoundingMode:o})}}),rt={kernelName:eI.mT,inputsToSave:["x"],outputsToSave:[!0],gradFunc(e,t,n){let[r,a]=t,{filterSize:s,strides:o,pad:i}=n;return{x:()=>re(e,r,a,s,o,i)}}};var rn=n(4917);/**
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
 */ let rr={kernelName:eI.q2,inputsToSave:["x"],gradFunc(e,t,n){let[r]=t,{axis:a}=n,s=g.EC(a,r.shape),o=(0,eZ.kz)(r.shape,s),i=o[1],u=g.NA(i),l=()=>{let t=r.shape.slice();s.forEach(e=>{t[e]=1});let n=(0,tW.X)(e,t),a=(0,tC.h)((0,t$.d)(n,(0,rn.i)(r.shape,"float32")),u);return a};return{x:l}}},ra={kernelName:eI.c1,inputsToSave:["x"],outputsToSave:[!0],gradFunc(e,t,n){let{axis:r}=n,[a,s]=t,o=g.EC(r,a.shape),i=n9(e,s,a,o);return{x:()=>i.x()}}},rs={kernelName:eI.q8,inputsToSave:["a","b"],gradFunc(e,t){let[n,r]=t,a=()=>(0,t$.d)(e,(0,en.p)((0,na.z)(n,r),"float32")),s=()=>(0,t$.d)(e,(0,en.p)((0,nY.p)(n,r),"float32"));return{a:a,b:s}}};var ro=n(2676);/**
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
 */ let ri={kernelName:eI.jQ,inputsToSave:["x"],gradFunc(e,t,n){let r=t[0],{paddings:a}=n,s=a.map(e=>e[0]);return{x:()=>(0,ro.t)(e,s,r.shape)}}};var ru=n(6943);/**
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
 */ let rl={kernelName:eI.Vb,inputsToSave:["a","b"],gradFunc(e,t){let[n,r]=t,a=(0,eJ.$N)(n.shape,r.shape),s=()=>{let t=(0,eJ.RR)(n.shape,a);return t.length>0?(0,tW.X)((0,tH.S)(e,t),n.shape):e},o=()=>{let t=(0,t$.d)(e,(0,tP.W)((0,ru.G)((0,tC.h)(n,r)))),s=(0,eJ.RR)(r.shape,a);return s.length>0?(0,tW.X)((0,tH.S)(t,s),r.shape):t};return{a:s,b:o}}},rp={kernelName:eI.wY,inputsToSave:["a","b"],gradFunc(e,t){let[n,r]=t,a=(0,eJ.$N)(n.shape,r.shape),s=()=>{let t=(0,t$.d)(e,(0,en.p)(r,"float32")),s=(0,eJ.RR)(n.shape,a);return s.length>0?(0,tW.X)((0,tH.S)(t,s),n.shape):t},o=()=>{let t=(0,t$.d)(e,(0,en.p)(n,"float32")),s=(0,eJ.RR)(r.shape,a);return s.length>0?(0,tW.X)((0,tH.S)(t,s),r.shape):t};return{a:s,b:o}}},rh={kernelName:eI.ku,gradFunc:e=>({x:()=>(0,tP.W)(e)})},rc={kernelName:eI.we,inputsToSave:["indices"],gradFunc(e,t){let n=t[0];return{indices:()=>(0,eQ.l)(n.shape,"float32")}}},rd={kernelName:eI.qW,gradFunc:e=>({x:()=>(0,tX.P)(e)})};var rf=n(4136);/**
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
 */ let rm={kernelName:eI.Qi,saveAllInputs:!0,gradFunc(e,t,n){let{axis:r}=n,a=(0,rf.H)(e,r);return a.map(e=>()=>e)}},ry={kernelName:eI.ly,inputsToSave:["x"],gradFunc(e,t,n){let r=t[0],{paddings:a}=n,s=a.map(e=>e[0]);return{x:()=>(0,ro.t)(e,s,r.shape)}}};var rg=n(2597),rb=n(3453);/**
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
 */ let rk={kernelName:eI.pe,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc(e,t){let[n,r,a]=t,s=eJ.$N(n.shape,r.shape),o=()=>{let t=(0,en.p)(r,"float32"),a=(0,t$.d)(e,(0,t$.d)(t,(0,rb.s)(n,(0,tz.l)(t,(0,eY.i)(1))))),o=eJ.RR(n.shape,s);return o.length>0&&(a=(0,tH.S)(a,o)),(0,tW.X)(a,n.shape)},i=()=>{let t=(0,nY.p)(n,0),o=(0,no.a)(t,(0,rg.c)(n),(0,tX.P)(n)),i=(0,t$.d)(e,(0,t$.d)(a,o)),u=eJ.RR(r.shape,s);return u.length>0&&(i=(0,tH.S)(i,u)),(0,tW.X)(i,r.shape)};return{a:o,b:i}}},rv={kernelName:eI.o0,inputsToSave:["x","alpha"],gradFunc(e,t){let[n,r]=t,a=(0,nY.p)(n,0);return{x:()=>(0,no.a)(a,e,(0,t$.d)(e,r)),alpha(){let t=(0,no.a)(a,(0,tX.P)(e),(0,t$.d)(e,n)),s=(0,eJ.RR)(r.shape,e.shape);return s.length>0&&(t=(0,tH.S)(t,s)),(0,tW.X)(t,r.shape)}}}},rx={kernelName:eI.oH,inputsToSave:["a","b"],gradFunc(e,t){let[n,r]=t,a=eJ.$N(n.shape,r.shape),s=()=>{let t=(0,tC.h)(e,(0,en.p)(r,"float32")),s=eJ.RR(n.shape,a);return s.length>0?(0,tW.X)((0,tH.S)(t,s),n.shape):t},o=()=>{let t=(0,t$.d)(e,(0,en.p)(n,"float32")),s=eJ.RR(r.shape,a);s.length>0&&(t=(0,tW.X)((0,tH.S)(t,s),r.shape));let o=(0,tR.h)(r);return(0,tP.W)((0,tC.h)(t,(0,en.p)(o,"float32")))};return{a:s,b:o}}},rN={kernelName:eI.$H,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,tC.h)(e,(0,tP.W)((0,tR.h)(n)))}}},rw={kernelName:eI.Sb,inputsToSave:["x"],gradFunc(e,t){let[n]=t,r=(0,t$.d)((0,na.z)(n,6),(0,tO.N)(n));return{x:()=>(0,t$.d)(e,(0,en.p)(r,"float32"))}}},rI={kernelName:eI.qk,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,t$.d)(e,(0,en.p)((0,tO.N)(n),"float32"))}}},rT={kernelName:eI.HZ,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,tW.X)(e,n.shape)}}},rS={kernelName:eI._Y,inputsToSave:["images"],gradFunc(e,t,n){let[r]=t,a={dy:e,images:r},s=()=>h.BV.runKernel(eI.zb,a,n);return{images:s}}},rD={kernelName:eI.dp,inputsToSave:["images"],gradFunc(e,t,n){let[r]=t,a={dy:e,images:r},s=()=>h.BV.runKernel(eI.Hm,a,n);return{images:s}}};var rE=n(7486);/**
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
 */ let r_={kernelName:eI.mK,gradFunc(e,t,n){let{dims:r}=n,a=(0,g.EC)(r,e.shape);return{x:()=>(0,rE.G)(e,a)}}},rF={kernelName:eI.e0,gradFunc:e=>({x:()=>(0,tX.P)(e)})},rM={kernelName:eI.bV,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,tP.W)((0,tC.h)(e,(0,t$.d)((0,rb.s)(n,1.5),2)))}}};var rA=n(8651);/**
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
 */ let r$={kernelName:eI.Ph,inputsToSave:["condition"],gradFunc(e,t){let[n]=t;return{condition:()=>(0,en.p)((0,tX.P)(n),"float32"),t:()=>(0,t$.d)(e,(0,en.p)(n,e.dtype)),e:()=>(0,t$.d)(e,(0,en.p)((0,rA.h)(n),e.dtype))}}},rO={kernelName:eI.oF,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x(){let t=(0,nY.p)(n,(0,eY.i)(0)),r=(0,eY.i)(ta),a=(0,eY.i)(ts),s=(0,t$.d)(e,a),o=(0,t$.d)((0,t$.d)(e,r),(0,nM.Q)((0,en.p)(n,"float32")));return(0,no.a)(t,s,o)}}}},rB={kernelName:eI.a5,outputsToSave:[!0],gradFunc(e,t){let[n]=t;return{x:()=>(0,t$.d)(e,(0,t$.d)(n,(0,tz.l)((0,eY.i)(1),n)))}}},rC={kernelName:eI.i5,gradFunc:e=>({x:()=>(0,tX.P)(e)})};var rP=n(173);/**
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
 */ let rV={kernelName:eI.RQ,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,t$.d)((0,rP.m)((0,en.p)(n,"float32")),e)}}};var rR=n(2699);/**
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
 */ let rz={kernelName:eI.w3,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,t$.d)((0,rR.f)((0,en.p)(n,"float32")),e)}}};var rU=n(9682);/**
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
 */ let rL={kernelName:eI.p2,inputsToSave:["x"],gradFunc(e,t,n){let[r]=t,{begin:a,size:s}=n,o=r.shape,[i,u]=eH(r,a,s),l=[];for(let p=0;p<e.rank;p++)l.push([i[p],o[p]-i[p]-u[p]]);return{x:()=>(0,rU.v)(e,l)}}},rW={kernelName:eI.Gc,outputsToSave:[!0],gradFunc(e,t,n){let[r]=t,{dim:a}=n,s=(0,t$.d)(e,r);return{logits:()=>(0,tz.l)(s,(0,t$.d)((0,tH.S)(s,[a],!0),r))}}};var rH=n(625);/**
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
 */ let rq={kernelName:eI.MR,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,t$.d)(e,(0,rH.X)(n))}}};var rj=n(8441);/**
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
 */ let rX={kernelName:eI.TQ,gradFunc(e,t,n){let{blockShape:r,paddings:a}=n;return{x:()=>(0,rj.E)(e,r,a)}}};var rG=n(6884);/**
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
 */ let rK={kernelName:eI.L8,gradFunc(e,t,n){let{axis:r}=n;return{x:()=>(0,rG.z)(e,r)}}},rY={kernelName:eI.FK,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,tC.h)(e,(0,t$.d)((0,tV._)((0,en.p)(n,"float32")),2))}}},rQ={kernelName:eI.bK,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,t$.d)(e,(0,t$.d)((0,en.p)(n,"float32"),2))}}},rZ={kernelName:eI._t,inputsToSave:["a","b"],gradFunc(e,t){let[n,r]=t,a=(0,eY.i)(2),s=()=>(0,t$.d)(e,(0,t$.d)(a,(0,tz.l)(n,r))),o=()=>(0,t$.d)(e,(0,t$.d)(a,(0,tz.l)(r,n)));return{a:s,b:o}}},rJ={kernelName:eI.h8,gradFunc:e=>({x:()=>(0,tX.P)(e)})},r0={kernelName:eI.Tr,inputsToSave:["a","b"],gradFunc(e,t){let[n,r]=t,a=eJ.$N(n.shape,r.shape),s=()=>{let t=e,r=eJ.RR(n.shape,a);return r.length>0&&(t=(0,tH.S)(t,r)),(0,tW.X)(t,n.shape)},o=()=>{let t=e,n=eJ.RR(r.shape,a);return n.length>0&&(t=(0,tH.S)(t,n)),(0,tW.X)((0,tP.W)(t),r.shape)};return{a:s,b:o}}},r1={kernelName:eI.GB,inputsToSave:["x"],gradFunc(e,t,n){let[r]=t,a=r.shape.slice(),{axis:s}=n,o=(0,g.EC)(s,r.shape);o.forEach(e=>{a[e]=1});let i=(0,tW.X)(e,a),u=(0,t$.d)(i,(0,rn.i)(r.shape,"float32"));return{x:()=>u}}},r2={kernelName:eI.sE,inputsToSave:["x"],gradFunc(e,t){let[n]=t;return{x:()=>(0,tC.h)(e,(0,tR.h)((0,rP.m)(n)))}}},r3={kernelName:eI.MI,outputsToSave:[!0],gradFunc(e,t){let[n]=t;return{x:()=>(0,t$.d)((0,tz.l)((0,eY.i)(1),(0,tR.h)(n)),e)}}},r9={kernelName:eI.n9,inputsToSave:["x"],gradFunc(e,t,n){let[r]=t,{reps:a}=n,s=()=>{let t=(0,tX.P)(r);if(1===r.rank)for(let n=0;n<a[0];++n)t=(0,tQ.I)(t,(0,ro.t)(e,[n*r.shape[0]],[r.shape[0]]));else if(2===r.rank)for(let s=0;s<a[0];++s)for(let o=0;o<a[1];++o)t=(0,tQ.I)(t,(0,ro.t)(e,[s*r.shape[0],o*r.shape[1]],[r.shape[0],r.shape[1]]));else if(3===r.rank)for(let i=0;i<a[0];++i)for(let u=0;u<a[1];++u)for(let l=0;l<a[2];++l)t=(0,tQ.I)(t,(0,ro.t)(e,[i*r.shape[0],u*r.shape[1],l*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else if(4===r.rank)for(let p=0;p<a[0];++p)for(let h=0;h<a[1];++h)for(let c=0;c<a[2];++c)for(let d=0;d<a[3];++d)t=(0,tQ.I)(t,(0,ro.t)(e,[p*r.shape[0],h*r.shape[1],c*r.shape[2],d*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]));else throw Error(`Gradient for tile operation is not implemented for rank-${r.rank} tensors yet.`);return t};return{x:s}}},r6={kernelName:eI.G3,gradFunc(e,t,n){let{perm:r}=n,a=eZ.LJ(r);return{x:()=>(0,nI.p)(e,a)}}};var r5=n(2991);/**
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
 */ let r4={kernelName:eI.To,gradFunc(e,t,n){let{axis:r}=n;return{value:()=>(0,r5.k)(e,r)}}};var r7=n(1300),r8=n(4926),ae=n(632);/**
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
 */ let at={kernelName:eI.Qv,inputsToSave:["segmentIds"],gradFunc(e,t){let[n]=t,r=()=>(function(e,t){let n=(0,ae.g)(t,(0,tX.P)(t)),r=(0,r8.I)(e,n),a=(0,nr.b)(t,(0,eY.i)(0,"int32")),s=r.rank-a.rank;for(let o=0;o<s;++o)a=(0,r7.d)(a,o+1);a=(0,ns.H)(a,(0,rn.i)(r.shape,"bool"));let i=(0,tX.P)(r);return(0,no.a)(a,r,i)})(e,n);return{x:r}}},an={kernelName:eI.Ru,gradFunc:e=>({x:()=>(0,tX.P)(e)})};for(let ar of[tB,tU,tL,tq,tj,tG,tK,tY,tZ,tJ,t0,t1,t3,t6,t4,t8,ne,nt,nn,ni,nu,np,nm,nd,nb,nv,nN,nT,nE,n_,rx,nF,nA,n$,nO,nB,nP,nC,nz,nL,nq,nj,nX,nG,nK,nQ,nZ,nJ,n0,n2,n6,n6,n4,n8,rt,rr,ra,rs,ri,rl,rp,rh,rc,rd,rm,ry,ry,rk,rv,rN,rw,rI,rT,rS,rD,r_,rF,rM,r$,rO,rB,rC,rV,rz,rL,rW,rq,rX,rX,rK,rK,rY,rZ,rQ,rJ,r0,r1,r2,r3,r9,r6,r4,at,an])(0,eT.Li)(ar);var aa=n(6235);/**
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
 */ ea.es.prototype.abs=function(){return this.throwIfDisposed(),(0,aa.W)(this)};var as=n(7839);/**
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
 */ ea.es.prototype.acos=function(){return this.throwIfDisposed(),(0,as.K)(this)};var ao=n(1470);/**
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
 */ ea.es.prototype.acosh=function(){return this.throwIfDisposed(),(0,ao._)(this)};var ai=n(4513),au=n(5228),al=n(5265);let ap=(0,eD.op)({addStrict_:/**
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
 */ function(e,t){(0,eK.MX)("strict variants of ops have been deprecated and will be removed in future");let n=(0,eS._1)(e,"a","addStrict"),r=(0,eS._1)(t,"b","addStrict");return g.k5(n.shape,r.shape,"Error in addStrict: "),(0,tQ.I)(n,r)}}),ah=(0,eD.op)({divStrict_:function(e,t){(0,eK.MX)("strict variants of ops have been deprecated and will be removed in future");let n=(0,eS._1)(e,"a","div"),r=(0,eS._1)(t,"b","div");return g.k5(n.shape,r.shape,"Error in divideStrict: "),(0,tC.h)(n,r)}}),ac=(0,eD.op)({maximumStrict_:function(e,t){(0,eK.MX)("strict variants of ops have been deprecated and will be removed in future");let n=(0,eS._1)(e,"a","maximumStrict"),r=(0,eS._1)(t,"b","maximumStrict");return g.k5(n.shape,r.shape,"Error in maximumStrict: "),(0,ae.g)(n,r)}}),ad=(0,eD.op)({minimumStrict_:function(e,t){(0,eK.MX)("strict variants of ops have been deprecated and will be removed in future");let n=(0,eS._1)(e,"a","minimumStrict"),r=(0,eS._1)(t,"b","minimumStrict");return g.k5(n.shape,r.shape,"Error in minimumStrict: "),(0,ai.L)(n,r)}}),af=(0,eD.op)({modStrict_:function(e,t){(0,eK.MX)("strict variants of ops have been deprecated and will be removed in future");let n=(0,eS._1)(e,"a","modStrict"),r=(0,eS._1)(t,"b","modStrict");return g.k5(n.shape,r.shape,"Error in modStrict: "),(0,au.w)(n,r)}}),am=(0,eD.op)({mulStrict_:function(e,t){(0,eK.MX)("strict variants of ops have been deprecated and will be removed in future");let n=(0,eS._1)(e,"a","mul"),r=(0,eS._1)(t,"b","mul");return g.k5(n.shape,r.shape,"Error in multiplyStrict: "),(0,t$.d)(n,r)}}),ay=(0,eD.op)({powStrict_:function(e,t){return(0,eK.MX)("strict variants of ops have been deprecated and will be removed in future"),g.k5(e.shape,t.shape,"Error in powStrict: "),(0,rb.s)(e,t)}}),ag=(0,eD.op)({squaredDifferenceStrict_:function(e,t){(0,eK.MX)("strict variants of ops have been deprecated and will be removed in future");let n=(0,eS._1)(e,"a","squaredDifferenceStrict"),r=(0,eS._1)(t,"b","squaredDifferenceStrict");return g.k5(n.shape,r.shape,"Error in squaredDifferenceStrict: "),(0,al.$)(n,r)}}),ab=(0,eD.op)({subStrict_:function(e,t){(0,eK.MX)("strict variants of ops have been deprecated and will be removed in future");let n=(0,eS._1)(e,"a","subStrict"),r=(0,eS._1)(t,"b","subStrict");return g.k5(n.shape,r.shape,"Error in subStrict: "),(0,tz.l)(n,r)}});/**
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
 */ ea.es.prototype.addStrict=function(e){return this.throwIfDisposed(),ap(this,e)},/**
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
 */ ea.es.prototype.add=function(e){return this.throwIfDisposed(),(0,tQ.I)(this,e)};var ak=n(781);/**
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
 */ ea.es.prototype.all=function(e,t){return this.throwIfDisposed(),(0,ak.$)(this,e,t)};var av=n(2998);/**
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
 */ ea.es.prototype.any=function(e,t){return this.throwIfDisposed(),(0,av.Y)(this,e,t)};var ax=n(47);/**
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
 */ ea.es.prototype.argMax=function(e){return this.throwIfDisposed(),(0,ax.N)(this,e)};var aN=n(7394);/**
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
 */ ea.es.prototype.argMin=function(e){return this.throwIfDisposed(),(0,aN.v)(this,e)},/**
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
 */ ea.es.prototype.asScalar=function(){return this.throwIfDisposed(),(0,g.hu)(1===this.size,()=>"The array must have only 1 element."),(0,tW.X)(this,[])},/**
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
 */ ea.es.prototype.asType=function(e){return this.throwIfDisposed(),(0,en.p)(this,e)},/**
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
 */ ea.es.prototype.as1D=function(){return this.throwIfDisposed(),(0,tW.X)(this,[this.size])},/**
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
 */ ea.es.prototype.as2D=function(e,t){return this.throwIfDisposed(),(0,tW.X)(this,[e,t])},/**
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
 */ ea.es.prototype.as3D=function(e,t,n){return this.throwIfDisposed(),(0,tW.X)(this,[e,t,n])},/**
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
 */ ea.es.prototype.as4D=function(e,t,n,r){return this.throwIfDisposed(),(0,tW.X)(this,[e,t,n,r])},/**
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
 */ ea.es.prototype.as5D=function(e,t,n,r,a){return this.throwIfDisposed(),(0,tW.X)(this,[e,t,n,r,a])};var aw=n(2421);/**
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
 */ ea.es.prototype.asin=function(){return this.throwIfDisposed(),(0,aw.Z)(this)};var aI=n(1891);/**
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
 */ ea.es.prototype.asinh=function(){return this.throwIfDisposed(),(0,aI.V)(this)};var aT=n(7037);/**
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
 */ ea.es.prototype.atan=function(){return this.throwIfDisposed(),(0,aT.z)(this)};var aS=n(9812);/**
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
 */ ea.es.prototype.atan2=function(e){return this.throwIfDisposed(),(0,aS.f)(this,e)};var aD=n(369);/**
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
 */ ea.es.prototype.atanh=function(){return this.throwIfDisposed(),(0,aD.C)(this)};var aE=n(5176);/**
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
 */ ea.es.prototype.avgPool=function(e,t,n,r){return this.throwIfDisposed(),(0,aE.w)(this,e,t,n,r)},/**
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
 */ ea.es.prototype.batchToSpaceND=function(e,t){return this.throwIfDisposed(),(0,rj.E)(this,e,t)};var a_=n(94);/**
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
 */ ea.es.prototype.batchNorm=function(e,t,n,r,a){return this.throwIfDisposed(),(0,a_.t)(this,e,t,n,r,a)};var aF=n(8247);/**
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
 */ ea.es.prototype.broadcastTo=function(e){return this.throwIfDisposed(),(0,aF.U)(this,e)},/**
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
 */ ea.es.prototype.cast=function(e){return this.throwIfDisposed(),(0,en.p)(this,e)};var aM=n(6825);/**
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
 */ ea.es.prototype.ceil=function(){return this.throwIfDisposed(),(0,aM.m)(this)};var aA=n(2279);/**
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
 */ ea.es.prototype.clipByValue=function(e,t){return this.throwIfDisposed(),(0,aA.i)(this,e,t)},/**
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
 */ ea.es.prototype.concat=function(e,t){return this.throwIfDisposed(),e instanceof ea.es&&(e=[e]),(0,rG.z)([this,...e],t)};var a$=n(1355);/**
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
 */ ea.es.prototype.conv1d=function(e,t,n,r,a,s){return this.throwIfDisposed(),(0,a$.P)(this,e,t,n,r,a,s)};var aO=n(1405);/**
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
 */ ea.es.prototype.conv2dTranspose=function(e,t,n,r,a){return this.throwIfDisposed(),(0,aO.b)(this,e,t,n,r,a)},/**
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
 */ ea.es.prototype.conv2d=function(e,t,n,r,a,s){return this.throwIfDisposed(),(0,nf.T)(this,e,t,n,r,a,s)},/**
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
 */ ea.es.prototype.cos=function(){return this.throwIfDisposed(),(0,rP.m)(this)},/**
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
 */ ea.es.prototype.cosh=function(){return this.throwIfDisposed(),(0,rR.f)(this)},/**
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
 */ ea.es.prototype.cumsum=function(e,t,n){return this.throwIfDisposed(),(0,nw.z)(this,e,t,n)};var aB=n(9112);/**
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
 */ ea.es.prototype.depthToSpace=function(e,t){return this.throwIfDisposed(),(0,aB.n)(this,e,t)};var aC=n(4718);/**
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
 */ ea.es.prototype.depthwiseConv2D=function(e,t,n,r,a,s){return(0,eK.MX)("depthwiseConv2D is deprecated, use depthwiseConv2d instead"),this.throwIfDisposed(),(0,aC.B)(this,e,t,n,r,a,s)},/**
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
 */ ea.es.prototype.depthwiseConv2d=function(e,t,n,r,a,s){return this.throwIfDisposed(),(0,aC.B)(this,e,t,n,r,a,s)};var aP=n(557);/**
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
 */ ea.es.prototype.dilation2d=function(e,t,n,r,a){return this.throwIfDisposed(),(0,aP.W)(this,e,t,n,r,a)};var aV=n(9322);/**
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
 */ ea.es.prototype.divNoNan=function(e){return this.throwIfDisposed(),(0,aV.N)(this,e)},/**
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
 */ ea.es.prototype.divStrict=function(e){return this.throwIfDisposed(),ah(this,e)},/**
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
 */ ea.es.prototype.div=function(e){return this.throwIfDisposed(),(0,tC.h)(this,e)};let aR=(0,eD.op)({dot_:/**
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
 */ function(e,t){let n=(0,eS._1)(e,"t1","dot"),r=(0,eS._1)(t,"t2","dot");g.hu((1===n.rank||2===n.rank)&&(1===r.rank||2===r.rank),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);let a=1===n.rank?n.size:n.shape[1],s=1===r.rank?r.size:r.shape[0];if(g.hu(a===s,()=>`Error in dot: inner dimensions of inputs must match, but got ${a} and ${s}.`),1===n.rank&&1===r.rank){let o=(0,tW.X)(n,[1,-1]),i=(0,tW.X)(r,[-1,1]),u=(0,t5.O)(o,i);return(0,tW.X)(u,[])}if(1===n.rank&&2===r.rank){let l=(0,tW.X)(n,[1,-1]),p=(0,tW.X)(r,[r.shape[0],r.shape[1]]),h=(0,t5.O)(l,p);return(0,tW.X)(h,[h.size])}if(2===n.rank&&1===r.rank){let c=(0,tW.X)(r,[-1,1]),d=(0,t5.O)(n,c);return(0,tW.X)(d,[d.size])}{let f=(0,tW.X)(r,[r.shape[0],r.shape[1]]),m=(0,t5.O)(n,f);return m}}});/**
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
 */ ea.es.prototype.dot=function(e){return this.throwIfDisposed(),aR(this,e)};var az=n(3233);/**
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
 */ ea.es.prototype.elu=function(){return this.throwIfDisposed(),(0,az.p)(this)};var aU=n(6500);let aL=(0,eD.op)({equalStrict_:function(e,t){(0,eK.MX)("strict variants of ops have been deprecated and will be removed in future");let n=(0,eS._1)(e,"a","equalStrict"),r=(0,eS._1)(t,"b","equalStrict");return(0,g.k5)(n.shape,r.shape,"Error in equalStrict: "),(0,n3.D)(n,r)}}),aW=(0,eD.op)({greaterEqualStrict_:function(e,t){(0,eK.MX)("strict variants of ops have been deprecated and will be removed in future");let n=(0,eS._1)(e,"a","greaterEqualStrict"),r=(0,eS._1)(t,"b","greaterEqualStrict");return(0,g.k5)(n.shape,r.shape,"Error in greaterEqualStrict: "),(0,nr.b)(n,r)}}),aH=(0,eD.op)({greaterStrict_:function(e,t){(0,eK.MX)("strict variants of ops have been deprecated and will be removed in future");let n=(0,eS._1)(e,"a","greaterStrict"),r=(0,eS._1)(t,"b","greaterStrict");return(0,g.k5)(n.shape,r.shape,"Error in greaterStrict: "),(0,nY.p)(n,r)}}),aq=(0,eD.op)({lessEqualStrict_:function(e,t){(0,eK.MX)("strict variants of ops have been deprecated and will be removed in future");let n=(0,eS._1)(e,"a","lessEqualStrict"),r=(0,eS._1)(t,"b","lessEqualStrict");return(0,g.k5)(n.shape,r.shape,"Error in lessEqualStrict: "),(0,na.z)(n,r)}}),aj=(0,eD.op)({lessStrict_:function(e,t){(0,eK.MX)("strict variants of ops have been deprecated and will be removed in future");let n=(0,eS._1)(e,"a","lessStrict"),r=(0,eS._1)(t,"b","lessStrict");return(0,g.k5)(n.shape,r.shape,"Error in lessStrict: "),(0,n5.d)(n,r)}}),aX=(0,eD.op)({notEqualStrict_:/**
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
 */ function(e,t){(0,eK.MX)("strict variants of ops have been deprecated and will be removed in future");let n=(0,eS._1)(e,"a","notEqualStrict"),r=(0,eS._1)(t,"b","notEqualStrict");return(0,g.k5)(n.shape,r.shape,"Error in notEqualStrict: "),(0,aU.Q)(n,r)}});/**
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
 */ ea.es.prototype.equalStrict=function(e){return this.throwIfDisposed(),aL(this,e)},/**
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
 */ ea.es.prototype.equal=function(e){return this.throwIfDisposed(),(0,n3.D)(this,e)};var aG=n(4650);/**
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
 */ ea.es.prototype.erf=function(){return this.throwIfDisposed(),(0,aG.q)(this)},/**
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
 */ ea.es.prototype.exp=function(){return this.throwIfDisposed(),(0,nM.Q)(this)},/**
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
 */ ea.es.prototype.expandDims=function(e){return this.throwIfDisposed(),(0,r7.d)(this,e)};var aK=n(3426);/**
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
 */ ea.es.prototype.expm1=function(){return this.throwIfDisposed(),(0,aK.t)(this)};var aY=n(7020);/**
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
 */ ea.es.prototype.fft=function(){return this.throwIfDisposed(),(0,aY.k)(this)},/**
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
 */ ea.es.prototype.flatten=function(){return this.throwIfDisposed(),(0,tW.X)(this,[this.size])},/**
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
 */ ea.es.prototype.floor=function(){return this.throwIfDisposed(),(0,ru.G)(this)};var aQ=n(9165);/**
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
 */ ea.es.prototype.floorDiv=function(e){return this.throwIfDisposed(),(0,aQ.q)(this,e)},/**
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
 */ ea.es.prototype.gather=function(e,t){return this.throwIfDisposed(),(0,r8.I)(this,e,t)},/**
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
 */ ea.es.prototype.greaterEqualStrict=function(e){return this.throwIfDisposed(),aW(this,e)},/**
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
 */ ea.es.prototype.greaterEqual=function(e){return this.throwIfDisposed(),(0,nr.b)(this,e)},/**
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
 */ ea.es.prototype.greaterStrict=function(e){return this.throwIfDisposed(),aH(this,e)},/**
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
 */ ea.es.prototype.greater=function(e){return this.throwIfDisposed(),(0,nY.p)(this,e)};var aZ=n(8447);/**
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
 */ ea.es.prototype.ifft=function(){return this.throwIfDisposed(),(0,aZ.S)(this)};var aJ=n(4415);/**
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
 */ ea.es.prototype.irfft=function(){return this.throwIfDisposed(),(0,aJ.w)(this)};let a0=(0,eD.op)({isFinite_:/**
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
 */ function(e){let t=(0,eS._1)(e,"x","isFinite");return h.BV.runKernel(eI.av,{x:t})}});/**
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
 */ ea.es.prototype.isFinite=function(){return this.throwIfDisposed(),a0(this)};let a1=(0,eD.op)({isInf_:/**
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
 */ function(e){let t=(0,eS._1)(e,"x","isInf");return h.BV.runKernel(eI.iW,{x:t})}});/**
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
 */ ea.es.prototype.isInf=function(){return this.throwIfDisposed(),a1(this)};let a2=(0,eD.op)({isNaN_:/**
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
 */ function(e){let t=(0,eS._1)(e,"x","isNaN");return h.BV.runKernel(eI.r7,{x:t})}});/**
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
 */ ea.es.prototype.isNaN=function(){return this.throwIfDisposed(),a2(this)};var a3=n(9133);/**
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
 */ ea.es.prototype.leakyRelu=function(e){return this.throwIfDisposed(),(0,a3.h)(this,e)},/**
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
 */ ea.es.prototype.lessEqualStrict=function(e){return this.throwIfDisposed(),aq(this,e)},/**
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
 */ ea.es.prototype.lessEqual=function(e){return this.throwIfDisposed(),(0,na.z)(this,e)},/**
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
 */ ea.es.prototype.lessStrict=function(e){return this.throwIfDisposed(),aj(this,e)},/**
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
 */ ea.es.prototype.less=function(e){return this.throwIfDisposed(),(0,n5.d)(this,e)};var a9=n(9648);/**
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
 */ ea.es.prototype.localResponseNormalization=function(e,t,n,r){return this.throwIfDisposed(),(0,a9.G)(this,e,t,n,r)};var a6=n(633),a5=n(3694);let a4=(0,eD.op)({logSigmoid_:/**
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
 */ function(e){let t=(0,eS._1)(e,"x","logSigmoid"),n=(0,a6.cb)(e=>{let t=(0,tP.W)((0,a5.W)((0,tP.W)(e))),n=t=>{let n=(0,t$.d)(t,(0,rH.X)((0,tP.W)(e)));return n};return{value:t,gradFunc:n}});return n(t)}});/**
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
 */ ea.es.prototype.logSigmoid=function(){return this.throwIfDisposed(),a4(this)};var a7=n(1510);/**
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
 */ ea.es.prototype.logSoftmax=function(e){return this.throwIfDisposed(),(0,a7.C)(this,e)};var a8=n(1391);/**
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
 */ ea.es.prototype.logSumExp=function(e,t){return this.throwIfDisposed(),(0,a8.l)(this,e,t)},/**
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
 */ ea.es.prototype.log=function(){return this.throwIfDisposed(),(0,rg.c)(this)};var se=n(7474);/**
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
 */ ea.es.prototype.log1p=function(){return this.throwIfDisposed(),(0,se.K)(this)},/**
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
 */ ea.es.prototype.logicalAnd=function(e){return this.throwIfDisposed(),(0,ns.H)(this,e)},/**
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
 */ ea.es.prototype.logicalNot=function(){return this.throwIfDisposed(),(0,rA.h)(this)};var st=n(5750);/**
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
 */ ea.es.prototype.logicalOr=function(e){return this.throwIfDisposed(),(0,st.K)(this,e)};let sn=(0,eD.op)({logicalXor_:/**
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
 */ function(e,t){let n=(0,eS._1)(e,"a","logicalXor","bool"),r=(0,eS._1)(t,"b","logicalXor","bool");return(0,eJ.$N)(n.shape,r.shape),(0,ns.H)((0,st.K)(e,t),(0,rA.h)((0,ns.H)(e,t)))}});/**
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
 */ ea.es.prototype.logicalXor=function(e){return this.throwIfDisposed(),sn(this,e)},/**
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
 */ ea.es.prototype.matMul=function(e,t,n){return this.throwIfDisposed(),(0,t5.O)(this,e,t,n)};var sr=n(1174);/**
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
 */ ea.es.prototype.maxPool=function(e,t,n,r){return this.throwIfDisposed(),(0,sr._)(this,e,t,n,r)};var sa=n(3307);/**
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
 */ ea.es.prototype.max=function(e,t){return this.throwIfDisposed(),(0,sa.F)(this,e,t)},/**
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
 */ ea.es.prototype.maximumStrict=function(e){return this.throwIfDisposed(),ac(this,e)},/**
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
 */ ea.es.prototype.maximum=function(e){return this.throwIfDisposed(),(0,ae.g)(this,e)};var ss=n(5130);/**
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
 */ ea.es.prototype.mean=function(e,t){return this.throwIfDisposed(),(0,ss.J)(this,e,t)};var so=n(5735);/**
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
 */ ea.es.prototype.min=function(e,t){return this.throwIfDisposed(),(0,so.V)(this,e,t)},/**
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
 */ ea.es.prototype.minimumStrict=function(e){return this.throwIfDisposed(),ad(this,e)},/**
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
 */ ea.es.prototype.minimum=function(e){return this.throwIfDisposed(),(0,ai.L)(this,e)};var si=n(1483);/**
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
 */ ea.es.prototype.mirrorPad=function(e,t){return this.throwIfDisposed(),(0,si.V)(this,e,t)},/**
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
 */ ea.es.prototype.modStrict=function(e){return this.throwIfDisposed(),af(this,e)},/**
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
 */ ea.es.prototype.mod=function(e){return this.throwIfDisposed(),(0,au.w)(this,e)},/**
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
 */ ea.es.prototype.mulStrict=function(e){return this.throwIfDisposed(),am(this,e)},/**
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
 */ ea.es.prototype.mul=function(e){return this.throwIfDisposed(),(0,t$.d)(this,e)},/**
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
 */ ea.es.prototype.neg=function(){return this.throwIfDisposed(),(0,tP.W)(this)};var su=n(3561);/**
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
 */ ea.es.prototype.norm=function(e,t,n){return this.throwIfDisposed(),(0,su.K)(this,e,t,n)},/**
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
 */ ea.es.prototype.notEqualStrict=function(e){return this.throwIfDisposed(),aX(this,e)},/**
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
 */ ea.es.prototype.notEqual=function(e){return this.throwIfDisposed(),(0,aU.Q)(this,e)};var sl=n(6708);/**
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
 */ ea.es.prototype.oneHot=function(e,t=1,n=0){return this.throwIfDisposed(),(0,sl.l)(this,e,t,n)};var sp=n(7846);/**
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
 */ ea.es.prototype.onesLike=function(){return this.throwIfDisposed(),(0,sp.J)(this)},/**
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
 */ ea.es.prototype.pad=function(e,t){return this.throwIfDisposed(),(0,rU.v)(this,e,t)};let sh=(0,eD.op)({pool_:/**
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
 */ function(e,t,n,r,a,s){let o;null==a&&(a=[1,1]),null==s&&(s=1),0===r&&(r="valid");let i=(0,eS._1)(e,"x","maxPool"),u=i,l=!1;3===i.rank&&(l=!0,u=(0,tW.X)(i,[1,i.shape[0],i.shape[1],i.shape[2]])),g.hu(e2.jT(s,a),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${s} and dilations '${a}'`);let p=e2.Xw(u.shape,t,s,a,r),h=[p.dilationHeight,p.dilationWidth];o="same"===r?function(e,t){let n=e.map((e,n)=>e+(e-1)*(t[n]-1)),r=n.map(e=>e-1),a=r.map(e=>Math.floor(e/2)),s=r.map((e,t)=>e-a[t]);return r.map((e,t)=>[a[t],s[t]])}([p.filterHeight,p.filterWidth],h):[[0,0],[0,0]];let c=1===h[0]&&1===h[1],[d,f]=function(e,t,n){let r=n.map(e=>e[0]),a=n.map(e=>e[1]),s=e.concat(r,a),o=t.map((e,t)=>(e-s[t]%e)%e),i=a.map((e,t)=>e+o[t]),u=t.map((e,t)=>[r[t],i[t]]),l=t.map((e,t)=>[0,o[t]]);return[u,l]}([p.inHeight,p.inWidth],h,o),m=c?r:"valid",y=c?u:(0,t7.f)(u,h,d),b="avg"===n?()=>(0,aE.w)(y,t,s,m):()=>(0,sr._)(y,t,s,m),k=b(),v=c?k:(0,rj.E)(k,h,f);return l?(0,tW.X)(v,[v.shape[1],v.shape[2],v.shape[3]]):v}});/**
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
 */ ea.es.prototype.pool=function(e,t,n,r,a){return this.throwIfDisposed(),sh(this,e,t,n,r,a)},/**
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
 */ ea.es.prototype.powStrict=function(e){return this.throwIfDisposed(),ay(this,e)},/**
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
 */ ea.es.prototype.pow=function(e){return this.throwIfDisposed(),(0,rb.s)(this,e)};var sc=n(8151);/**
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
 */ ea.es.prototype.prelu=function(e){return this.throwIfDisposed(),(0,sc.A)(this,e)};var sd=n(9451);/**
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
 */ ea.es.prototype.prod=function(e,t){return this.throwIfDisposed(),(0,sd.W)(this,e,t)};var sf=n(9036);/**
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
 */ ea.es.prototype.reciprocal=function(){return this.throwIfDisposed(),(0,sf.M)(this)};var sm=n(7409);/**
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
 */ ea.es.prototype.relu=function(){return this.throwIfDisposed(),(0,sm.U)(this)};var sy=n(3582);/**
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
 */ ea.es.prototype.relu6=function(){return this.throwIfDisposed(),(0,sy.b)(this)},/**
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
 */ ea.es.prototype.reshapeAs=function(e){return this.throwIfDisposed(),(0,tW.X)(this,e.shape)},/**
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
 */ ea.es.prototype.reshape=function(e){return this.throwIfDisposed(),(0,tW.X)(this,e)};var sg=n(3305);/**
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
 */ ea.es.prototype.resizeBilinear=function(e,t,n){return this.throwIfDisposed(),(0,sg.I)(this,e,t,n)};var sb=n(5098);/**
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
 */ ea.es.prototype.resizeNearestNeighbor=function(e,t,n){return this.throwIfDisposed(),(0,sb.j)(this,e,t,n)},/**
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
 */ ea.es.prototype.reverse=function(e){return this.throwIfDisposed(),(0,rE.G)(this,e)};var sk=n(3710);/**
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
 */ ea.es.prototype.rfft=function(){return this.throwIfDisposed(),(0,sk.Q)(this)};var sv=n(7809);/**
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
 */ ea.es.prototype.round=function(){return this.throwIfDisposed(),(0,sv.N)(this)},/**
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
 */ ea.es.prototype.rsqrt=function(){return this.throwIfDisposed(),(0,nV.b)(this)};var sx=n(5503);/**
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
 */ ea.es.prototype.selu=function(){return this.throwIfDisposed(),(0,sx.U)(this)};let sN=(0,eD.op)({separableConv2d_:function(e,t,n,r,a,s=[1,1],o="NHWC"){let i=(0,eS._1)(e,"x","separableConv2d"),u=(0,eS._1)(t,"depthwiseFilter","separableConv2d"),l=(0,eS._1)(n,"pointwiseFilter","separableConv2d"),p=i,h=!1;if(3===i.rank&&(h=!0,p=(0,tW.X)(i,[1,i.shape[0],i.shape[1],i.shape[2]])),"NCHW"===o)throw Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");g.hu(4===p.rank,()=>`Error in separableConv2d: input must be rank 4, but got rank ${p.rank}.`),g.hu(4===u.rank,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`),g.hu(4===l.rank,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`),g.hu(1===l.shape[0],()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),g.hu(1===l.shape[1],()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);let c=u.shape[2],d=u.shape[3];g.hu(l.shape[2]===c*d,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${c*d}, but got ${l.shape[2]}.`);let f=(0,aC.B)(p,u,r,a,o,s),m=(0,nf.T)(f,l,1,"valid",o);return h?(0,tW.X)(m,[m.shape[1],m.shape[2],m.shape[3]]):m}});/**
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
 */ ea.es.prototype.separableConv2d=function(e,t,n,r,a,s){return this.throwIfDisposed(),sN(this,e,t,n,r,a,s)},/**
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
 */ ea.es.prototype.sigmoid=function(){return this.throwIfDisposed(),(0,rH.X)(this)};var sw=n(4434);/**
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
 */ ea.es.prototype.sign=function(){return this.throwIfDisposed(),(0,sw.X)(this)},/**
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
 */ ea.es.prototype.sin=function(){return this.throwIfDisposed(),(0,nk.O)(this)},/**
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
 */ ea.es.prototype.sinh=function(){return this.throwIfDisposed(),(0,nx.R)(this)},/**
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
 */ ea.es.prototype.slice=function(e,t){return this.throwIfDisposed(),(0,ro.t)(this,e,t)};var sI=n(682);/**
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
 */ ea.es.prototype.softmax=function(e){return this.throwIfDisposed(),(0,sI.X)(this,e)},/**
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
 */ ea.es.prototype.softplus=function(){return this.throwIfDisposed(),(0,a5.W)(this)},/**
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
 */ ea.es.prototype.spaceToBatchND=function(e,t){return this.throwIfDisposed(),(0,t7.f)(this,e,t)},/**
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
 */ ea.es.prototype.split=function(e,t){return this.throwIfDisposed(),(0,nl.V)(this,e,t)},/**
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
 */ ea.es.prototype.sqrt=function(){return this.throwIfDisposed(),(0,tV._)(this)},/**
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
 */ ea.es.prototype.square=function(){return this.throwIfDisposed(),(0,tR.h)(this)},/**
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
 */ ea.es.prototype.squaredDifference=function(e){return this.throwIfDisposed(),(0,al.$)(this,e)},/**
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
 */ ea.es.prototype.squaredDifferenceStrict=function(e){return this.throwIfDisposed(),ag(this,e)};var sT=n(9590);/**
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
 */ ea.es.prototype.squeeze=function(e){return this.throwIfDisposed(),(0,sT.L)(this,e)},/**
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
 */ ea.es.prototype.stack=function(e,t){this.throwIfDisposed();let n=e instanceof ea.es?[this,e]:[this,...e];return(0,r5.k)(n,t)},/**
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
 */ ea.es.prototype.step=function(e){return this.throwIfDisposed(),(0,tO.N)(this,e)};var sS=n(5158);/**
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
 */ ea.es.prototype.stridedSlice=function(e,t,n,r,a,s,o,i){return this.throwIfDisposed(),(0,sS.N)(this,e,t,n,r,a,s,o,i)},/**
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
 */ ea.es.prototype.subStrict=function(e){return this.throwIfDisposed(),ab(this,e)},/**
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
 */ ea.es.prototype.sub=function(e){return this.throwIfDisposed(),(0,tz.l)(this,e)},/**
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
 */ ea.es.prototype.sum=function(e,t){return this.throwIfDisposed(),(0,tH.S)(this,e,t)};var sD=n(1173);/**
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
 */ ea.es.prototype.tan=function(){return this.throwIfDisposed(),(0,sD.O)(this)};var sE=n(1869);/**
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
 */ ea.es.prototype.tanh=function(){return this.throwIfDisposed(),(0,sE.A)(this)},/**
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
 */ ea.es.prototype.tile=function(e){return this.throwIfDisposed(),(0,nR.G)(this,e)},/**
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
 */ ea.es.prototype.toBool=function(){return this.throwIfDisposed(),(0,en.p)(this,"bool")},/**
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
 */ ea.es.prototype.toFloat=function(){return this.throwIfDisposed(),(0,en.p)(this,"float32")},/**
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
 */ ea.es.prototype.toInt=function(){return this.throwIfDisposed(),(0,en.p)(this,"int32")};var s_=n(3243);/**
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
 */ ea.es.prototype.topk=function(e,t){return this.throwIfDisposed(),(0,s_.h)(this,e,t)},/**
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
 */ ea.es.prototype.transpose=function(e){return this.throwIfDisposed(),(0,nI.p)(this,e)};var sF=n(9608);/**
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
 */ ea.es.prototype.unique=function(e){return this.throwIfDisposed(),(0,sF.T)(this,e)},/**
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
 */ ea.es.prototype.unsortedSegmentSum=function(e,t){return this.throwIfDisposed(),nU(this,e,t)},/**
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
 */ ea.es.prototype.unstack=function(e){return this.throwIfDisposed(),(0,rf.H)(this,e)},/**
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
 */ ea.es.prototype.where=function(e,t){return this.throwIfDisposed(),(0,no.a)(e,this,t)},/**
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
 */ ea.es.prototype.zerosLike=function(){return this.throwIfDisposed(),(0,tX.P)(this)};/**
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
 */ },9121:function(e,t,n){"use strict";n.d(t,{$H:function(){return e5},$w:function(){return j},Ac:function(){return ed},BM:function(){return e$},CA:function(){return eN},D2:function(){return tI},Dl:function(){return e3},Eh:function(){return F},FK:function(){return ty},G3:function(){return tF},GB:function(){return tg},Gc:function(){return tv},HE:function(){return Z},HZ:function(){return e7},Hh:function(){return eM},Hm:function(){return te},IK:function(){return l},IM:function(){return v},J$:function(){return ev},J_:function(){return ey},Jh:function(){return g},L8:function(){return tk},Ly:function(){return I},M2:function(){return c},MI:function(){return tD},MR:function(){return tm},MZ:function(){return eE},NE:function(){return et},NZ:function(){return eH},OA:function(){return eC},OR:function(){return ei},OU:function(){return eP},OV:function(){return eB},Om:function(){return J},Oy:function(){return m},PY:function(){return eS},Ph:function(){return tu},QC:function(){return y},QR:function(){return U},Qg:function(){return em},Qi:function(){return eJ},Qv:function(){return t$},RF:function(){return T},RO:function(){return b},RQ:function(){return th},Ru:function(){return tO},SX:function(){return Q},SY:function(){return r},Sb:function(){return tr},Sp:function(){return s},T0:function(){return L},TQ:function(){return tb},TR:function(){return V},To:function(){return tA},Tr:function(){return tw},Uy:function(){return eo},VG:function(){return a},Vb:function(){return eW},Vc:function(){return z},Vf:function(){return eD},Vn:function(){return K},W0:function(){return eY},XL:function(){return x},Xz:function(){return i},Y0:function(){return er},YF:function(){return en},Yo:function(){return eA},Zb:function(){return eI},Zz:function(){return E},_V:function(){return tR},_Y:function(){return tt},_k:function(){return k},_t:function(){return tx},a5:function(){return tf},aJ:function(){return h},av:function(){return eg},b9:function(){return tP},bK:function(){return tN},bV:function(){return to},c1:function(){return ez},cW:function(){return t_},ci:function(){return W},cy:function(){return eK},de:function(){return es},dp:function(){return e8},e0:function(){return ts},e6:function(){return e9},e7:function(){return ew},eB:function(){return tC},eZ:function(){return eF},ek:function(){return G},gJ:function(){return S},h8:function(){return tB},hd:function(){return ee},i5:function(){return td},iH:function(){return R},iJ:function(){return ef},iW:function(){return eb},iZ:function(){return ec},ik:function(){return C},jM:function(){return f},jQ:function(){return eL},je:function(){return eu},kU:function(){return eT},kp:function(){return tM},ku:function(){return ej},lu:function(){return tz},ly:function(){return e0},m2:function(){return tT},mK:function(){return ta},mT:function(){return eO},mc:function(){return P},mh:function(){return M},mm:function(){return o},n9:function(){return tE},o0:function(){return e2},o2:function(){return B},oF:function(){return tl},oH:function(){return Y},oT:function(){return u},p2:function(){return tp},p4:function(){return X},pe:function(){return e1},q1:function(){return eh},q2:function(){return eR},q8:function(){return eU},qC:function(){return e_},qW:function(){return eQ},qi:function(){return ep},qk:function(){return e4},qw:function(){return d},r7:function(){return ek},sE:function(){return tS},sH:function(){return el},sJ:function(){return p},sL:function(){return H},us:function(){return tV},uv:function(){return eG},vF:function(){return eV},vt:function(){return ex},vw:function(){return ea},w3:function(){return tc},wU:function(){return A},wY:function(){return eq},we:function(){return eZ},wm:function(){return $},x1:function(){return O},xJ:function(){return e6},xQ:function(){return ti},xn:function(){return D},y7:function(){return q},yQ:function(){return eX},yj:function(){return _},zb:function(){return tn},zv:function(){return w},zw:function(){return N}});let r="Abs",a="Acos",s="Acosh",o="Add",i="AddN",u="All",l="Any",p="ArgMax",h="ArgMin",c="Asin",d="Asinh",f="Atan",m="Atanh",y="Atan2",g="AvgPool",b="AvgPoolGrad",k="AvgPool3D",v="AvgPool3DGrad",x="BatchMatMul",N="BatchToSpaceND",w="Bincount",I="BroadcastTo",T="Cast",S="Ceil",D="ClipByValue",E="Complex",_="ComplexAbs",F="Concat",M="Conv2D",A="Conv2DBackpropFilter",$="Conv2DBackpropInput",O="Conv3D",B="Conv3DBackpropFilterV2",C="Conv3DBackpropInputV2",P="Cos",V="Cosh",R="Cumsum",z="CropAndResize",U="DenseBincount",L="DepthToSpace",W="DepthwiseConv2dNative",H="DepthwiseConv2dNativeBackpropFilter",q="DepthwiseConv2dNativeBackpropInput",j="Diag",X="Dilation2D",G="Dilation2DBackpropInput",K="Dilation2DBackpropFilter",Y="RealDiv",Q="Elu",Z="EluGrad",J="Erf",ee="Equal",et="Exp",en="ExpandDims",er="Expm1",ea="FFT",es="Fill",eo="FlipLeftRight",ei="Floor",eu="FloorDiv",el="FusedBatchNorm",ep="GatherV2",eh="GatherNd",ec="Greater",ed="GreaterEqual",ef="Identity",em="IFFT",ey="Imag",eg="IsFinite",eb="IsInf",ek="IsNan",ev="LeakyRelu",ex="Less",eN="LessEqual",ew="LinSpace",eI="Log",eT="Log1p",eS="LogicalAnd",eD="LogicalNot",eE="LogicalOr",e_="LogSoftmax",eF="LRN",eM="LRNGrad",eA="Max",e$="Maximum",eO="MaxPool",eB="MaxPoolGrad",eC="MaxPool3D",eP="MaxPool3DGrad",eV="MaxPoolWithArgmax",eR="Mean",ez="Min",eU="Minimum",eL="MirrorPad",eW="Mod",eH="Multinomial",eq="Multiply",ej="Neg",eX="NotEqual",eG="NonMaxSuppressionV3",eK="NonMaxSuppressionV4",eY="NonMaxSuppressionV5",eQ="OnesLike",eZ="OneHot",eJ="Pack",e0="PadV2",e1="Pow",e2="Prelu",e3="Prod",e9="Range",e6="Real",e5="Reciprocal",e4="Relu",e7="Reshape",e8="ResizeNearestNeighbor",te="ResizeNearestNeighborGrad",tt="ResizeBilinear",tn="ResizeBilinearGrad",tr="Relu6",ta="Reverse",ts="Round",to="Rsqrt",ti="ScatterNd",tu="Select",tl="Selu",tp="Slice",th="Sin",tc="Sinh",td="Sign",tf="Sigmoid",tm="Softplus",ty="Sqrt",tg="Sum",tb="SpaceToBatchND",tk="SplitV",tv="Softmax",tx="SquaredDifference",tN="Square",tw="Sub",tI="SparseToDense",tT="StridedSlice",tS="Tan",tD="Tanh",tE="Tile",t_="TopK",tF="Transpose",tM="Unique",tA="Unpack",t$="UnsortedSegmentSum",tO="ZerosLike",tB="Step",tC="FromPixels",tP="RotateWithOffset",tV="_FusedMatMul",tR="FusedConv2D",tz="FusedDepthwiseConv2D"},6151:function(e,t,n){"use strict";n.d(t,{Li:function(){return h},pI:function(){return i},tr:function(){return l},uk:function(){return u},wC:function(){return p}});var r=n(2885),a=n(5938);/**
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
 */ let s=(0,a.R)("kernelRegistry",()=>new Map),o=(0,a.R)("gradRegistry",()=>new Map);function i(e,t){let n=`${t}_${e}`;return s.get(n)}function u(e){return o.get(e)}function l(e){let t=s.entries(),n=[];for(;;){let{done:r,value:a}=t.next();if(r)break;let[o,i]=a,[u]=o.split("_");u===e&&n.push(i)}return n}function p(e){let{kernelName:t,backendName:n}=e,r=`${n}_${t}`;s.has(r)&&console.warn(`The kernel '${t}' for backend '${n}' is already registered`),s.set(r,e)}function h(e){let{kernelName:t}=e;o.has(t)&&(0,r.OB)().getBool("DEBUG")&&console.warn(`Overriding the gradient for '${t}'`),o.set(t,e)}},6235:function(e,t,n){"use strict";n.d(t,{W:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({abs_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","abs");return"complex64"===t.dtype?r.BV.runKernel(a.yj,{x:t}):r.BV.runKernel(a.SY,{x:t})}})},7839:function(e,t,n){"use strict";n.d(t,{K:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({acos_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","acos");return r.BV.runKernel(a.VG,{x:t})}})},1470:function(e,t,n){"use strict";n.d(t,{_:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({acosh_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","acosh");return r.BV.runKernel(a.Sp,{x:t})}})},6407:function(e,t,n){"use strict";n.d(t,{I:function(){return u}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2668);let u=(0,i.op)({add_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"a","add"),i=(0,o._1)(t,"b","add");[n,i]=(0,s.T_)(n,i);let u={a:n,b:i};return r.BV.runKernel(a.mm,u)}})},781:function(e,t,n){"use strict";n.d(t,{$:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({all_:/**
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
 */ function(e,t=null,n=!1){let o=(0,s._1)(e,"x","all","bool");return r.BV.runKernel(a.oT,{x:o},{axis:t,keepDims:n})}})},2998:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({any_:/**
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
 */ function(e,t=null,n=!1){let o=(0,s._1)(e,"x","any","bool");return r.BV.runKernel(a.IK,{x:o},{axis:t,keepDims:n})}})},47:function(e,t,n){"use strict";n.d(t,{N:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({argMax_:/**
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
 */ function(e,t=0){let n=(0,s._1)(e,"x","argMax");return r.BV.runKernel(a.sJ,{x:n},{axis:t})}})},7394:function(e,t,n){"use strict";n.d(t,{v:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({argMin_:/**
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
 */ function(e,t=0){let n=(0,s._1)(e,"x","argMin");return r.BV.runKernel(a.aJ,{x:n},{axis:t})}})},2421:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({asin_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","asin");return r.BV.runKernel(a.M2,{x:t})}})},1891:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({asinh_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","asinh");return r.BV.runKernel(a.qw,{x:t})}})},7037:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({atan_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","atan");return r.BV.runKernel(a.jM,{x:t})}})},9812:function(e,t,n){"use strict";n.d(t,{f:function(){return u}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2668);let u=(0,i.op)({atan2_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"a","atan2"),i=(0,o._1)(t,"b","atan2");[n,i]=(0,s.T_)(n,i);let u={a:n,b:i};return r.BV.runKernel(a.QC,u)}})},369:function(e,t,n){"use strict";n.d(t,{C:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({atanh_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","atanh");return r.BV.runKernel(a.Oy,{x:t})}})},5176:function(e,t,n){"use strict";n.d(t,{w:function(){return h}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2271),u=n(2582),l=n(2668),p=n(4968);let h=(0,l.op)({avgPool_:/**
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
 */ function(e,t,n,l,h){let c=(0,s._1)(e,"x","avgPool","float32");o.hu(u.jT(n,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`);let d=c,f=!1;3===c.rank&&(f=!0,d=(0,p.X)(c,[1,c.shape[0],c.shape[1],c.shape[2]])),o.hu(4===d.rank,()=>`Error in avgPool: x must be rank 4 but got rank ${d.rank}.`),null!=h&&o.hu(o.GN(l),()=>`Error in avgPool: pad must be an integer when using, dimRoundingMode ${h} but got pad ${l}.`);let m={x:d},y=r.BV.runKernel(a.Jh,m,{filterSize:t,strides:n,pad:l,dimRoundingMode:h});return(y=(0,i.p)(y,c.dtype),f)?(0,p.X)(y,[y.shape[1],y.shape[2],y.shape[3]]):y}})},3591:function(e,t,n){"use strict";n.d(t,{LJ:function(){return p},Q3:function(){return l},Vh:function(){return s},YB:function(){return a},kz:function(){return o},lB:function(){return u},rv:function(){return i},sY:function(){return h}});var r=n(569);/**
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
 */ function a(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function s(e,t,n){let r=e.length+t.length,a=[],s=0,o=0;for(let i=0;i<r;i++)-1===n.indexOf(i)?a.push(e[s++]):a.push(t[o++]);return a}function o(e,t){let n=[],r=e.length;for(let a=0;a<r;a++)-1===t.indexOf(a)&&n.push(e[a]);let s=t.map(t=>e[t]);return[n,s]}function i(e,t){let n=t.map(e=>1);return s(e,n,t)}function u(e,t,n){r.hu(a(t,n),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`)}function l(e,t){if(a(e,t))return null;let n=[];for(let r=0;r<t;++r)-1===e.indexOf(r)&&n.push(r);return e.forEach(e=>n.push(e)),n}function p(e){return e.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function h(e,t){let n=[];for(let r=t-e;r<t;++r)n.push(r);return n}},8441:function(e,t,n){"use strict";n.d(t,{E:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668);let u=(0,i.op)({batchToSpaceND_:/**
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
 */ function(e,t,n){let i=(0,s._1)(e,"x","batchToSpaceND"),u=t.reduce((e,t)=>e*t);return o.hu(i.rank>=1+t.length,()=>`input rank is ${i.rank} but should be > than blockShape.length ${t.length}`),o.hu(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),o.hu(i.shape[0]%u==0,()=>`input tensor batch is ${i.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${u}`),r.BV.runKernel(a.zw,{x:i},{blockShape:t,crops:n})}})},94:function(e,t,n){"use strict";n.d(t,{t:function(){return l}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(4968),u=n(2668);let l=(0,u.op)({batchNorm_:/**
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
 */ function(e,t,n,u,l,p){let h,c;null==p&&(p=.001);let d=(0,s._1)(e,"x","batchNorm"),f=(0,s._1)(t,"mean","batchNorm"),m=(0,s._1)(n,"variance","batchNorm");null!=l&&(h=(0,s._1)(l,"scale","batchNorm")),null!=u&&(c=(0,s._1)(u,"offset","batchNorm")),o.hu(f.rank===m.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),o.hu(null==c||f.rank===c.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),o.hu(null==h||f.rank===h.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let y=0===d.rank||1===d.rank?(0,i.X)(d,[1,1,1,d.size]):2===d.rank?(0,i.X)(d,[1,1,d.shape[0],d.shape[1]]):3===d.rank?(0,i.X)(d,[1,d.shape[0],d.shape[1],d.shape[2]]):d,g={x:y,scale:h,offset:c,mean:f,variance:m},b={varianceEpsilon:p},k=r.BV.runKernel(a.sH,g,b);return(0,i.X)(k,d.shape)}})},8247:function(e,t,n){"use strict";n.d(t,{U:function(){return l}});var r=n(196),a=n(9121),s=n(3740),o=n(8723),i=n(2668),u=n(4968);let l=(0,i.op)({broadcastTo_:/**
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
 */ function(e,t){let n=(0,s._1)(e,"broadcastTo","x"),i=n.shape;if(t.some(e=>!(e>0)||e%1!=0))throw Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<n.rank)throw Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){let l=n.shape.slice();for(;l.length<t.length;)l.unshift(1);n=(0,u.X)(n,l)}let p=n.shape,h=Array.from(t);for(let c=t.length-1;c>=0;c--)if(p[c]===t[c])h[c]=1;else if(1!==n.shape[c])throw Error(`broadcastTo(): [${i}] cannot be broadcast to [${t}].`);let d=h.map((e,t)=>e>1?t:-1).filter(e=>e>=0);if(0===d.length)return(0,o.d)(n);let f={x:n};return r.BV.runKernel(a.n9,f,{reps:h})}})},2200:function(e,t,n){"use strict";/**
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
 */ function r(e,t){let n=e.length,r=[];for(let a=0;a<n;a++){let s=n-1-a,o=e[s]||1,i=t[t.length-1-a]||1;i>1&&1===o&&r.unshift(s)}return r}function a(e,t){let n=[];for(let r=0;r<t.length;r++){let a=e[e.length-r-1],s=t.length-r-1,o=t[s];(null==a||1===a&&o>1)&&n.unshift(s)}return n}function s(e,t){let n=[],r=Math.max(e.length,t.length);for(let a=0;a<r;a++){let s=e[e.length-a-1];null==s&&(s=1);let o=t[t.length-a-1];if(null==o&&(o=1),1===s)n.unshift(o);else if(1===o)n.unshift(s);else if(s!==o){let i=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(i)}else n.unshift(s)}return n}n.d(t,{$N:function(){return s},RR:function(){return a},XF:function(){return r}})},2657:function(e,t,n){"use strict";n.d(t,{f:function(){return s}});var r=n(974),a=n(569);/**
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
 */ function s(e,t="float32",n){return t=t||"float32",a.Mu(e),new r.YD(e,t,n)}},2271:function(e,t,n){"use strict";n.d(t,{p:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668);let u=(0,i.op)({cast_:/**
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
 */ function(e,t){let n=(0,s._1)(e,"x","cast");if(!o.LP(t))throw Error(`Failed to cast to unknown dtype ${t}`);if("string"===t&&"string"!==n.dtype||"string"!==t&&"string"===n.dtype)throw Error("Only strings can be casted to strings");return r.BV.runKernel(a.RF,{x:n},{dtype:t})}})},6825:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({ceil_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","ceil");return r.BV.runKernel(a.gJ,{x:t})}})},2279:function(e,t,n){"use strict";n.d(t,{i:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668);let u=(0,i.op)({clipByValue_:/**
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
 */ function(e,t,n){let i=(0,s._1)(e,"x","clipByValue");return o.hu(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),r.BV.runKernel(a.xn,{x:i},{clipValueMin:t,clipValueMax:n})}})},8723:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({clone_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","clone","string_or_numeric");return r.BV.runKernel(a.iJ,{x:t})}})},1661:function(e,t,n){"use strict";n.d(t,{P:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668);let u=(0,i.op)({complex_:/**
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
 */ function(e,t){let n=(0,s._1)(e,"real","complex"),i=(0,s._1)(t,"imag","complex");return o.k5(n.shape,i.shape,`real and imag shapes, ${n.shape} and ${i.shape}, must match in call to tf.complex().`),r.BV.runKernel(a.Zz,{real:n,imag:i})}})},6884:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(8723),u=n(2668);let l=(0,u.op)({concat_:/**
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
 */ function(e,t=0){(0,o.hu)(e.length>=1,()=>"Pass at least one tensor to concat");let n=(0,s.sI)(e,"tensors","concat","string_or_numeric");return("complex64"===n[0].dtype&&n.forEach(e=>{if("complex64"!==e.dtype)throw Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${e.dtype}. `)}),1===n.length)?(0,i.d)(n[0]):r.BV.runKernel(a.Eh,n,{axis:t})}})},1355:function(e,t,n){"use strict";n.d(t,{P:function(){return l}});var r=n(3740),a=n(569),s=n(4794),o=n(2582),i=n(2668),u=n(4968);let l=(0,i.op)({conv1d_:function(e,t,n,i,l="NWC",p=1,h){let c=(0,r._1)(e,"x","conv1d"),d=(0,r._1)(t,"filter","conv1d"),f=c,m=!1;2===c.rank&&(m=!0,f=(0,u.X)(c,[1,c.shape[0],c.shape[1]])),a.hu(3===f.rank,()=>`Error in conv1d: input must be rank 3, but got rank ${f.rank}.`),a.hu(3===d.rank,()=>`Error in conv1d: filter must be rank 3, but got rank ${d.rank}.`),null!=h&&a.hu(a.GN(i),()=>`Error in conv1d: pad must be an integer when using, dimRoundingMode ${h} but got pad ${i}.`),a.hu(f.shape[2]===d.shape[1],()=>`Error in conv1d: depth of input (${f.shape[2]}) must match input depth for filter ${d.shape[1]}.`),a.hu(o.jT(n,p),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${p}'`),a.hu("NWC"===l,()=>`Error in conv1d: got dataFormat of ${l} but only NWC is currently supported.`);let y=(0,u.X)(d,[1,d.shape[0],d.shape[1],d.shape[2]]),g=(0,u.X)(f,[f.shape[0],1,f.shape[1],f.shape[2]]),b=(0,s.T)(g,y,[1,n],i,"NHWC",[1,p],h);return m?(0,u.X)(b,[b.shape[2],b.shape[3]]):(0,u.X)(b,[b.shape[0],b.shape[2],b.shape[3]])}})},4794:function(e,t,n){"use strict";n.d(t,{T:function(){return p}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2582),u=n(2668),l=n(4968);let p=(0,u.op)({conv2d_:/**
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
 */ function(e,t,n,u,p="NHWC",h=[1,1],c){let d=(0,s._1)(e,"x","conv2d"),f=(0,s._1)(t,"filter","conv2d"),m=d,y=!1;3===d.rank&&(y=!0,m=(0,l.X)(d,[1,d.shape[0],d.shape[1],d.shape[2]])),o.hu(4===m.rank,()=>`Error in conv2d: input must be rank 4, but got rank ${m.rank}.`),o.hu(4===f.rank,()=>`Error in conv2d: filter must be rank 4, but got rank ${f.rank}.`),null!=c&&o.hu(o.GN(u),()=>`Error in conv2d: pad must be an integer when using, dimRoundingMode ${c} but got pad ${u}.`);let g="NHWC"===p?m.shape[3]:m.shape[1];o.hu(g===f.shape[2],()=>`Error in conv2d: depth of input (${g}) must match input depth for filter ${f.shape[2]}.`),o.hu(i.jT(n,h),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${h}'`);let b={x:m,filter:f},k=r.BV.runKernel(a.mh,b,{strides:n,pad:u,dataFormat:p,dilations:h,dimRoundingMode:c});return y?(0,l.X)(k,[k.shape[1],k.shape[2],k.shape[3]]):k}})},6013:function(e,t,n){"use strict";n.d(t,{p:function(){return u}});var r=n(196),a=n(9121),s=n(569),o=n(2668),i=n(4968);let u=(0,o.op)({conv2DBackpropFilter_:/**
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
 */ function(e,t,n,o,u,l="NHWC",p){let h=e;3===e.rank&&(h=(0,i.X)(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;3===c.rank&&(c=(0,i.X)(t,[1,t.shape[0],t.shape[1],t.shape[2]])),s.hu(4===h.rank,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${h.shape}.`),s.hu(4===c.rank,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),s.hu(4===n.length,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);let d="NHWC"===l?h.shape[3]:h.shape[1],f="NHWC"===l?c.shape[3]:c.shape[1];s.hu(d===n[2],()=>`Error in conv2dDerFilter: depth of input ${d}) must match input depth in filter (${n[2]}.`),s.hu(f===n[3],()=>`Error in conv2dDerFilter: depth of dy (${f}) must match output depth for filter (${n[3]}).`),null!=p&&s.hu(s.GN(u),()=>`Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode ${p} but got pad ${u}.`);let m={x:h,dy:c};return r.BV.runKernel(a.wU,m,{strides:o,pad:u,dataFormat:l,dimRoundingMode:p,filterShape:n})}})},9832:function(e,t,n){"use strict";n.d(t,{_:function(){return u}});var r=n(196),a=n(9121),s=n(569),o=n(2668),i=n(4968);let u=(0,o.op)({conv2DBackpropInput_:/**
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
 */ function(e,t,n,o,u,l="NHWC",p){s.hu(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let h=e,c=t,d=!1;3===t.rank&&(d=!0,c=(0,i.X)(t,[1,t.shape[0],t.shape[1],t.shape[2]]),h=[1,e[0],e[1],e[2]]),s.hu(4===h.length,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${h.length}.`),s.hu(4===c.rank,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),s.hu(4===n.rank,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);let f="NHWC"===l?h[3]:h[1],m="NHWC"===l?c.shape[3]:c.shape[1];s.hu(f===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${f}) must match input depth for filter ${n.shape[2]}.`),s.hu(m===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${m}) must match output depth for filter ${n.shape[3]}.`),null!=p&&s.hu(s.GN(u),()=>`Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode ${p} but got pad ${u}.`);let y={dy:c,filter:n},g={strides:o,pad:u,dataFormat:l,dimRoundingMode:p,inputShape:h},b=r.BV.runKernel(a.wm,y,g);return d?(0,i.X)(b,[b.shape[1],b.shape[2],b.shape[3]]):b}})},1405:function(e,t,n){"use strict";n.d(t,{b:function(){return o}});var r=n(3740),a=n(9832),s=n(2668);let o=(0,s.op)({conv2dTranspose_:function(e,t,n,s,o,i){let u=(0,r._1)(e,"x","conv2dTranspose"),l=(0,r._1)(t,"filter","conv2dTranspose");return(0,a._)(n,u,l,s,o,"NHWC",i)}})},2582:function(e,t,n){"use strict";/**
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
 */ function r(e,t,n,r,a="NHWC",s){let i=e[3],u=[...t,i],l=m(a);return o(e,u,n,s,r,null,null,l)}function a(e,t,n,r,a,s,i="channelsLast"){let u;let[p,h]=l(t);if("channelsLast"===i)u=[p,h,e[3],e[3]];else if("channelsFirst"===i)u=[p,h,e[1],e[1]];else throw Error(`Unknown dataFormat ${i}`);return o(e,u,n,r,a,s,!1,i)}function s(e,t,n,r,a,s,o="NDHWC"){let u,l;let[h,c,d]=p(t);if("NDHWC"===o)l="channelsLast",u=[h,c,d,e[4],e[4]];else if("NCDHW"===o)l="channelsFirst",u=[h,c,d,e[1],e[1]];else throw Error(`Unknown dataFormat ${o}`);return i(e,u,n,r,a,!1,l,s)}function o(e,t,n,r,a,s,o=!1,i="channelsLast"){let p,[d,f,m,y]=[-1,-1,-1,-1];if("channelsLast"===i)[d,f,m,y]=e;else if("channelsFirst"===i)[d,y,f,m]=e;else throw Error(`Unknown dataFormat ${i}`);let[g,b,,k]=t,[v,x]=l(n),[N,w]=l(r),I=h(g,N),T=h(b,w),{padInfo:S,outHeight:D,outWidth:E}=function(e,t,n,r,a,s,o,i,l){let p,h,d;if("number"==typeof e){p={top:e,bottom:e,left:e,right:e,type:0===e?"VALID":"NUMBER"};let f=function(e,t,n,r,a){null==r&&(r=u(e,t,n));let s=e[0],o=e[1],i=c((s-t+2*r)/n+1,a),l=c((o-t+2*r)/n+1,a);return[i,l]}([t,n],s,r,e,i);h=f[0],d=f[1]}else if("same"===e){h=Math.ceil(t/r),d=Math.ceil(n/a);let m=Math.max(0,(h-1)*r+s-t),y=Math.max(0,(d-1)*a+o-n),g=Math.floor(m/2),b=Math.floor(y/2);p={top:g,bottom:m-g,left:b,right:y-b,type:"SAME"}}else if("valid"===e)p={top:0,bottom:0,left:0,right:0,type:"VALID"},h=Math.ceil((t-s+1)/r),d=Math.ceil((n-o+1)/a);else if("object"==typeof e){let k="channelsLast"===l?e[1][0]:e[2][0],v="channelsLast"===l?e[1][1]:e[2][1],x="channelsLast"===l?e[2][0]:e[3][0],N="channelsLast"===l?e[2][1]:e[3][1];p={top:k,bottom:v,left:x,right:N,type:0===k&&0===v&&0===x&&0===N?"VALID":"EXPLICIT"},h=c((t-s+k+v)/r+1,i),d=c((n-o+x+N)/a+1,i)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outHeight:h,outWidth:d}}(a,f,m,v,x,I,T,s,i),_=o?k*y:k;return"channelsFirst"===i?p=[d,_,D,E]:"channelsLast"===i&&(p=[d,D,E,_]),{batchSize:d,dataFormat:i,inHeight:f,inWidth:m,inChannels:y,outHeight:D,outWidth:E,outChannels:_,padInfo:S,strideHeight:v,strideWidth:x,filterHeight:g,filterWidth:b,effectiveFilterHeight:I,effectiveFilterWidth:T,dilationHeight:N,dilationWidth:w,inShape:e,outShape:p,filterShape:t}}function i(e,t,n,r,a,s=!1,o="channelsLast",i){let l,[d,f,m,y,g]=[-1,-1,-1,-1,-1];if("channelsLast"===o)[d,f,m,y,g]=e;else if("channelsFirst"===o)[d,g,f,m,y]=e;else throw Error(`Unknown dataFormat ${o}`);let[b,k,v,,x]=t,[N,w,I]=p(n),[T,S,D]=p(r),E=h(b,T),_=h(k,S),F=h(v,D),{padInfo:M,outDepth:A,outHeight:$,outWidth:O}=function(e,t,n,r,a,s,o,i,l,p,h){let d,f,m,y;if("number"==typeof e){d={top:e,bottom:e,left:e,right:e,front:e,back:e,type:0===e?"VALID":"NUMBER"};let g=function(e,t,n,r,a,s){null==a&&(a=u(e,t,r));let o=e[0],i=e[1],l=e[2],p=c((o-t+2*a)/r+1,s),h=c((i-t+2*a)/r+1,s),d=c((l-t+2*a)/r+1,s);return[p,h,d,1]}([t,n,r,1],i,0,a,e,h);f=g[0],m=g[1],y=g[2]}else if("same"===e){f=Math.ceil(t/a),m=Math.ceil(n/s),y=Math.ceil(r/o);let b=(f-1)*a+i-t,k=(m-1)*s+l-n,v=(y-1)*o+p-r,x=Math.floor(b/2),N=Math.floor(k/2),w=Math.floor(v/2);d={top:N,bottom:k-N,left:w,right:v-w,front:x,back:b-x,type:"SAME"}}else if("valid"===e)d={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},f=Math.ceil((t-i+1)/a),m=Math.ceil((n-l+1)/s),y=Math.ceil((r-p+1)/o);else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:f,outHeight:m,outWidth:y}}(a,f,m,y,N,w,I,E,_,F,i),B=s?x*g:x;return"channelsFirst"===o?l=[d,B,A,$,O]:"channelsLast"===o&&(l=[d,A,$,O,B]),{batchSize:d,dataFormat:o,inDepth:f,inHeight:m,inWidth:y,inChannels:g,outDepth:A,outHeight:$,outWidth:O,outChannels:B,padInfo:M,strideDepth:N,strideHeight:w,strideWidth:I,filterDepth:b,filterHeight:k,filterWidth:v,effectiveFilterDepth:E,effectiveFilterHeight:_,effectiveFilterWidth:F,dilationDepth:T,dilationHeight:S,dilationWidth:D,inShape:e,outShape:l,filterShape:t}}function u(e,t,n,r=1){let a=h(t,r);return Math.floor((e[0]*(n-1)-n+a)/2)}function l(e){return"number"==typeof e?[e,e,e]:2===e.length?[e[0],e[1],1]:e}function p(e){return"number"==typeof e?[e,e,e]:e}function h(e,t){return t<=1?e:e+(e-1)*(t-1)}function c(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw Error(`Unknown roundingMode ${t}`)}}function d(e){let[t,n,r]=l(e);return 1===t&&1===n&&1===r}function f(e,t){return d(e)||d(t)}function m(e){if("NHWC"===e)return"channelsLast";if("NCHW"===e)return"channelsFirst";throw Error(`Unknown dataFormat ${e}`)}n.d(t,{I0:function(){return d},Ix:function(){return o},Rf:function(){return r},Xw:function(){return a},aO:function(){return u},jT:function(){return f},jw:function(){return i},pl:function(){return s},sl:function(){return m}})},173:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({cos_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","cos");return r.BV.runKernel(a.mc,{x:t})}})},2699:function(e,t,n){"use strict";n.d(t,{f:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({cosh_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","cosh");return r.BV.runKernel(a.TR,{x:t})}})},7405:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({cumsum_:/**
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
 */ function(e,t=0,n=!1,o=!1){let i=(0,s._1)(e,"x","cumsum");return r.BV.runKernel(a.iH,{x:i},{axis:t,exclusive:n,reverse:o})}})},9112:function(e,t,n){"use strict";n.d(t,{n:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668);let u=(0,i.op)({depthToSpace_:/**
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
 */ function(e,t,n="NHWC"){let i=(0,s._1)(e,"x","depthToSpace"),u="NHWC"===n?i.shape[1]:i.shape[2],l="NHWC"===n?i.shape[2]:i.shape[3],p="NHWC"===n?i.shape[3]:i.shape[1];return o.hu(u*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${u} and ${t}  for depthToSpace with input shape
    ${i.shape}`),o.hu(l*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${l} and ${t} for depthToSpace with input shape
        ${i.shape}`),o.hu(p%(t*t)==0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${p} for depthToSpace with input shape ${i.shape}`),r.BV.runKernel(a.T0,{x:i},{blockSize:t,dataFormat:n})}})},4718:function(e,t,n){"use strict";n.d(t,{B:function(){return l}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668),u=n(4968);let l=(0,i.op)({depthwiseConv2d_:/**
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
 */ function(e,t,n,i,l="NHWC",p=[1,1],h){let c=(0,s._1)(e,"x","depthwiseConv2d"),d=(0,s._1)(t,"filter","depthwiseConv2d"),f=c,m=!1;3===c.rank&&(m=!0,f=(0,u.X)(c,[1,c.shape[0],c.shape[1],c.shape[2]])),o.hu(4===f.rank,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${f.rank}.`),o.hu(4===d.rank,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${d.rank}.`),o.hu(f.shape[3]===d.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${f.shape[3]}) must match the inChannels dimension in filter ${d.shape[2]}.`),null!=h&&o.hu(o.GN(i),()=>`Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode ${h} but got pad ${i}.`);let y={x:f,filter:d},g=r.BV.runKernel(a.ci,y,{strides:n,pad:i,dataFormat:l,dilations:p,dimRoundingMode:h});return m?(0,u.X)(g,[g.shape[1],g.shape[2],g.shape[3]]):g}})},8098:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var r=n(196),a=n(9121),s=n(2668),o=n(4968);let i=(0,s.op)({depthwiseConv2dNativeBackpropFilter_:/**
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
 */ function(e,t,n,s,i,u=[1,1],l){let p=e;3===e.rank&&(p=(0,o.X)(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let h=t;3===h.rank&&(h=(0,o.X)(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let c={x:p,dy:h};return r.BV.runKernel(a.sL,c,{strides:s,pad:i,dimRoundingMode:l,dilations:u,filterShape:n})}})},4375:function(e,t,n){"use strict";n.d(t,{v:function(){return i}});var r=n(196),a=n(9121),s=n(2668),o=n(4968);let i=(0,s.op)({depthwiseConv2dNativeBackpropInput_:/**
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
 */ function(e,t,n,s,i,u=[1,1],l){let p=t,h=!1;3===t.rank&&(h=!0,p=(0,o.X)(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let c={dy:p,filter:n},d=r.BV.runKernel(a.y7,c,{strides:s,pad:i,dimRoundingMode:l,dilations:u,inputShape:e});return h?(0,o.X)(d,[d.shape[1],d.shape[2],d.shape[3]]):d}})},557:function(e,t,n){"use strict";n.d(t,{W:function(){return l}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668),u=n(4968);let l=(0,i.op)({dilation2d_:/**
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
 */ function(e,t,n,i,l=[1,1],p="NHWC"){let h=(0,s._1)(e,"x","dilation2d"),c=(0,s._1)(t,"filter","dilation2d");o.hu(3===h.rank||4===h.rank,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${h.rank}.`),o.hu(3===c.rank,()=>`Error in dilation2d: filter must be rank 3, but got rank ${c.rank}.`),o.hu("NHWC"===p,()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${p}`);let d=h,f=!1;3===h.rank&&(d=(0,u.X)(h,[1,h.shape[0],h.shape[1],h.shape[2]]),f=!0);let m={x:d,filter:c},y=r.BV.runKernel(a.p4,m,{strides:n,pad:i,dilations:l});return f?(0,u.X)(y,[y.shape[1],y.shape[2],y.shape[3]]):y}})},1274:function(e,t,n){"use strict";n.d(t,{h:function(){return l}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(9165),u=n(2668);let l=(0,u.op)({div_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"a","div"),u=(0,o._1)(t,"b","div");if([n,u]=(0,s.T_)(n,u),"int32"===n.dtype&&"int32"===u.dtype)return(0,i.q)(n,u);let l={a:n,b:u};return r.BV.runKernel(a.oH,l,{})}})},9322:function(e,t,n){"use strict";n.d(t,{N:function(){return p}});var r=n(747),a=n(3740),s=n(1274),o=n(6477),i=n(2668),u=n(5912),l=n(6577);let p=(0,i.op)({divNoNan_:/**
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
 */ function(e,t){let n=(0,a._1)(e,"a","div"),i=(0,a._1)(t,"b","div");[n,i]=(0,r.T_)(n,i);let p=(0,s.h)(n,i),h=(0,l.P)(p),c=(0,o.D)(i,h);return(0,u.a)(c,h,p)}})},3233:function(e,t,n){"use strict";n.d(t,{p:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({elu_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","elu");return r.BV.runKernel(a.SX,{x:t})}})},6477:function(e,t,n){"use strict";n.d(t,{D:function(){return l}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2200),u=n(2668);let l=(0,u.op)({equal_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"a","equal"),u=(0,o._1)(t,"b","equal");[n,u]=(0,s.T_)(n,u),(0,i.$N)(n.shape,u.shape);let l={a:n,b:u};return r.BV.runKernel(a.hd,l)}})},4650:function(e,t,n){"use strict";n.d(t,{q:function(){return l}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2271),u=n(2668);let l=(0,u.op)({erf_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","erf");o.hu("int32"===t.dtype||"float32"===t.dtype,()=>"Input dtype must be `int32` or `float32`."),"int32"===t.dtype&&(t=(0,i.p)(t,"float32"));let n={x:t};return r.BV.runKernel(a.Om,n)}})},4842:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({exp_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","exp");return r.BV.runKernel(a.NE,{x:t})}})},1300:function(e,t,n){"use strict";n.d(t,{d:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668);let u=(0,i.op)({expandDims_:/**
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
 */ function(e,t=0){let n=(0,s._1)(e,"x","expandDims","string_or_numeric");return o.hu(t<=n.rank,()=>"Axis must be <= rank of the tensor"),r.BV.runKernel(a.YF,{input:n},{dim:t})}})},3426:function(e,t,n){"use strict";n.d(t,{t:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({expm1_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","expm1");return r.BV.runKernel(a.Y0,{x:t})}})},4006:function(e,t,n){"use strict";n.d(t,{h:function(){return s}});var r=n(196),a=n(9121);/**
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
 */ function s(e,t,n){return r.BV.runKernel(a.de,{},{shape:e,value:t,dtype:n})}},6943:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({floor_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","floor");return r.BV.runKernel(a.OR,{x:t})}})},9165:function(e,t,n){"use strict";n.d(t,{q:function(){return u}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2668);let u=(0,i.op)({floorDiv_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"a","floorDiv"),i=(0,o._1)(t,"b","floorDiv");[n,i]=(0,s.T_)(n,i);let u={a:n,b:i};return r.BV.runKernel(a.je,u)}})},9323:function(e,t,n){"use strict";n.d(t,{Fr:function(){return d},QH:function(){return m},pf:function(){return f},uy:function(){return y}});var r=n(2200),a=n(3233),s=n(9133),o=n(4841),i=n(8151),u=n(7409),l=n(3582),p=n(4968),h=n(1901),c=n(5475);/**
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
 */ function d(e,t,n){if(null==n||"linear"===n)return e;if("relu"===n)return(0,o.d)(e,(0,h.N)(t));throw Error(`Cannot compute gradient for fused activation ${n}.`)}function f(e,t){let n=t,a=r.RR(e.shape,t.shape);return a.length>0&&(n=(0,c.S)(n,a)),(0,p.X)(n,e.shape)}function m(e,t,n,r){if("linear"===t)return e;if("relu"===t)return(0,u.U)(e);if("elu"===t)return(0,a.p)(e);if("relu6"===t)return(0,l.b)(e);if("prelu"===t)return(0,i.A)(e,n);if("leakyrelu"===t)return(0,s.h)(e,r);throw Error(`Unknown fused activation ${t}.`)}let y=(e,t)=>!(e>0)||"linear"===t},4926:function(e,t,n){"use strict";n.d(t,{I:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({gather_:/**
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
 */ function(e,t,n=0,o=0){let i=(0,s._1)(e,"x","gather"),u=(0,s._1)(t,"indices","gather","int32");return r.BV.runKernel(a.qi,{x:i,indices:u},{axis:n,batchDims:o})}})},636:function(e,t,n){"use strict";n.d(t,{p:function(){return l}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2200),u=n(2668);let l=(0,u.op)({greater_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"a","greater"),u=(0,o._1)(t,"b","greater");[n,u]=(0,s.T_)(n,u),(0,i.$N)(n.shape,u.shape);let l={a:n,b:u};return r.BV.runKernel(a.iZ,l)}})},7630:function(e,t,n){"use strict";n.d(t,{b:function(){return l}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2200),u=n(2668);let l=(0,u.op)({greaterEqual_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"a","greaterEqual"),u=(0,o._1)(t,"b","greaterEqual");[n,u]=(0,s.T_)(n,u),(0,i.$N)(n.shape,u.shape);let l={a:n,b:u};return r.BV.runKernel(a.Ac,l)}})},4386:function(e,t,n){"use strict";n.d(t,{a:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({imag_:/**
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
 */ function(e){let t=(0,s._1)(e,"input","imag");return r.BV.runKernel(a.J_,{input:t})}})},3305:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668),u=n(4968);let l=(0,i.op)({resizeBilinear_:/**
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
 */ function(e,t,n=!1,i=!1){let l=(0,s._1)(e,"images","resizeBilinear");o.hu(3===l.rank||4===l.rank,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${l.rank}.`),o.hu(2===t.length,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),o.hu(!1===i||!1===n,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let p=l,h=!1;3===l.rank&&(h=!0,p=(0,u.X)(l,[1,l.shape[0],l.shape[1],l.shape[2]]));let[]=t,c={images:p},d=r.BV.runKernel(a._Y,c,{alignCorners:n,halfPixelCenters:i,size:t});return h?(0,u.X)(d,[d.shape[1],d.shape[2],d.shape[3]]):d}})},5098:function(e,t,n){"use strict";n.d(t,{j:function(){return l}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668),u=n(4968);let l=(0,i.op)({resizeNearestNeighbor_:/**
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
 */ function(e,t,n=!1,i=!1){let l=(0,s._1)(e,"images","resizeNearestNeighbor");o.hu(3===l.rank||4===l.rank,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${l.rank}.`),o.hu(2===t.length,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),o.hu("float32"===l.dtype||"int32"===l.dtype,()=>"`images` must have `int32` or `float32` as dtype"),o.hu(!1===i||!1===n,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let p=l,h=!1;3===l.rank&&(h=!0,p=(0,u.X)(l,[1,l.shape[0],l.shape[1],l.shape[2]]));let[]=t,c={images:p},d=r.BV.runKernel(a.dp,c,{alignCorners:n,halfPixelCenters:i,size:t});return h?(0,u.X)(d,[d.shape[1],d.shape[2],d.shape[3]]):d}})},9133:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({leakyRelu_:/**
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
 */ function(e,t=.2){let n=(0,s._1)(e,"x","leakyRelu");return r.BV.runKernel(a.J$,{x:n},{alpha:t})}})},6573:function(e,t,n){"use strict";n.d(t,{d:function(){return l}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2200),u=n(2668);let l=(0,u.op)({less_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"a","less"),u=(0,o._1)(t,"b","less");[n,u]=(0,s.T_)(n,u),(0,i.$N)(n.shape,u.shape);let l={a:n,b:u};return r.BV.runKernel(a.vt,l)}})},624:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2200),u=n(2668);let l=(0,u.op)({lessEqual_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"a","lessEqual"),u=(0,o._1)(t,"b","lessEqual");[n,u]=(0,s.T_)(n,u),(0,i.$N)(n.shape,u.shape);let l={a:n,b:u};return r.BV.runKernel(a.CA,l)}})},9648:function(e,t,n){"use strict";n.d(t,{G:function(){return l}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668),u=n(4968);let l=(0,i.op)({localResponseNormalization_:/**
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
 */ function(e,t=5,n=1,i=1,l=.5){let p=(0,s._1)(e,"x","localResponseNormalization");o.hu(4===p.rank||3===p.rank,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${p.rank}.`),o.hu(o.GN(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let h=p,c=!1;3===p.rank&&(c=!0,h=(0,u.X)(p,[1,p.shape[0],p.shape[1],p.shape[2]]));let d={x:h},f=r.BV.runKernel(a.eZ,d,{depthRadius:t,bias:n,alpha:i,beta:l});return c?(0,u.X)(f,[f.shape[1],f.shape[2],f.shape[3]]):f}})},2597:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({log_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","log");return r.BV.runKernel(a.Zb,{x:t})}})},7474:function(e,t,n){"use strict";n.d(t,{K:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({log1p_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","log1p");return r.BV.runKernel(a.kU,{x:t})}})},1510:function(e,t,n){"use strict";n.d(t,{C:function(){return d}});var r=n(633),a=n(3740),s=n(2271),o=n(4842),i=n(2597),u=n(3307),l=n(4841),p=n(2668),h=n(827),c=n(5475);let d=(0,p.op)({logSoftmax_:/**
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
 */ function(e,t=-1){let n=(0,a._1)(e,"logits","logSoftmax");if(-1===t&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);let p=(0,r.cb)((e,n)=>{let r=(0,u.F)(e,t,!0),a=(0,h.l)(e,r),p=(0,h.l)((0,s.p)(a,"float32"),(0,i.c)((0,c.S)((0,o.Q)(a),t,!0)));n([p]);let d=(e,n)=>{let[r]=n,a=(0,o.Q)(r);return(0,h.l)(e,(0,l.d)((0,c.S)(e,t,!0),a))};return{value:p,gradFunc:d}});return p(n)}})},1391:function(e,t,n){"use strict";n.d(t,{l:function(){return f}});var r=n(3740),a=n(569),s=n(6407),o=n(3591),i=n(4842),u=n(2597),l=n(3307),p=n(2668),h=n(4968),c=n(827),d=n(5475);let f=(0,p.op)({logSumExp_:/**
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
 */ function(e,t=null,n=!1){let p=(0,r._1)(e,"x","logSumExp"),f=(0,a.EC)(t,p.shape),m=(0,l.F)(p,f,!0),y=(0,c.l)(p,m),g=(0,i.Q)(y),b=(0,d.S)(g,f),k=(0,u.c)(b),v=(0,s.I)((0,h.X)(m,k.shape),k);if(n){let x=(0,o.rv)(v.shape,f);return(0,h.X)(v,x)}return v}})},2856:function(e,t,n){"use strict";n.d(t,{H:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(2200),i=n(2668);let u=(0,i.op)({logicalAnd_:/**
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
 */ function(e,t){let n=(0,s._1)(e,"a","logicalAnd","bool"),i=(0,s._1)(t,"b","logicalAnd","bool");return(0,o.$N)(n.shape,i.shape),r.BV.runKernel(a.PY,{a:n,b:i})}})},8651:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({logicalNot_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","logicalNot","bool");return r.BV.runKernel(a.Vf,{x:t})}})},5750:function(e,t,n){"use strict";n.d(t,{K:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(2200),i=n(2668);let u=(0,i.op)({logicalOr_:/**
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
 */ function(e,t){let n=(0,s._1)(e,"a","logicalOr","bool"),i=(0,s._1)(t,"b","logicalOr","bool");return(0,o.$N)(n.shape,i.shape),r.BV.runKernel(a.MZ,{a:n,b:i})}})},8687:function(e,t,n){"use strict";n.d(t,{O:function(){return u}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2668);let u=(0,i.op)({matMul_:/**
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
 */ function(e,t,n=!1,i=!1){let u=(0,o._1)(e,"a","matMul"),l=(0,o._1)(t,"b","matMul");[u,l]=(0,s.T_)(u,l);let p={a:u,b:l};return r.BV.runKernel(a.XL,p,{transposeA:n,transposeB:i})}})},3307:function(e,t,n){"use strict";n.d(t,{F:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({max_:/**
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
 */ function(e,t=null,n=!1){let o=(0,s._1)(e,"x","max");return r.BV.runKernel(a.Yo,{x:o},{reductionIndices:t,keepDims:n})}})},1174:function(e,t,n){"use strict";n.d(t,{_:function(){return p}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2582),u=n(2668),l=n(4968);let p=(0,u.op)({maxPool_:/**
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
 */ function(e,t,n,u,p){let h=(0,s._1)(e,"x","maxPool"),c=h,d=!1;3===h.rank&&(d=!0,c=(0,l.X)(h,[1,h.shape[0],h.shape[1],h.shape[2]])),o.hu(4===c.rank,()=>`Error in maxPool: input must be rank 4 but got rank ${c.rank}.`),o.hu(i.jT(n,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`),null!=p&&o.hu(o.GN(u),()=>`Error in maxPool: pad must be an integer when using, dimRoundingMode ${p} but got pad ${u}.`);let f={x:c},m=r.BV.runKernel(a.mT,f,{filterSize:t,strides:n,pad:u,dimRoundingMode:p});return d?(0,l.X)(m,[m.shape[1],m.shape[2],m.shape[3]]):m}})},632:function(e,t,n){"use strict";n.d(t,{g:function(){return p}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2200),u=n(2271),l=n(2668);let p=(0,l.op)({maximum_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"a","maximum"),l=(0,o._1)(t,"b","maximum");[n,l]=(0,s.T_)(n,l),"bool"===n.dtype&&(n=(0,u.p)(n,"int32"),l=(0,u.p)(l,"int32")),(0,i.$N)(n.shape,l.shape);let p={a:n,b:l};return r.BV.runKernel(a.BM,p)}})},5130:function(e,t,n){"use strict";n.d(t,{J:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({mean_:/**
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
 */ function(e,t=null,n=!1){let o=(0,s._1)(e,"x","mean");return r.BV.runKernel(a.q2,{x:o},{axis:t,keepDims:n})}})},5735:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({min_:/**
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
 */ function(e,t=null,n=!1){let o=(0,s._1)(e,"x","min");return r.BV.runKernel(a.c1,{x:o},{axis:t,keepDims:n})}})},4513:function(e,t,n){"use strict";n.d(t,{L:function(){return p}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2200),u=n(2271),l=n(2668);let p=(0,l.op)({minimum_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"a","minimum"),l=(0,o._1)(t,"b","minimum");[n,l]=(0,s.T_)(n,l),"bool"===n.dtype&&(n=(0,u.p)(n,"int32"),l=(0,u.p)(l,"int32")),(0,i.$N)(n.shape,l.shape);let p={a:n,b:l};return r.BV.runKernel(a.q8,p)}})},1483:function(e,t,n){"use strict";n.d(t,{V:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668);let u=(0,i.op)({mirrorPad_:/**
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
 */ function(e,t,n){o.hu("reflect"===n||"symmetric"===n,()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);let i=(0,s._1)(e,"x","mirrorPad");if(0===i.rank)throw Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");o.hu(t.length===i.rank,()=>`Padding doesn't match input. Must be ${i.rank}. Got ${t.length}.`);let u="reflect"===n?1:0;for(let l=0;l<i.rank;l++)o.hu(2===t[l].length,()=>"Invalid number of paddings. Must be length of 2 each."),o.hu(t[l][0]>=0&&t[l][0]<=i.shape[l]-u&&t[l][1]>=0&&t[l][1]<=i.shape[l]-u,()=>`Padding in dimension ${l} cannot be greater than or equal to ${i.shape[l]-u} or less than 0 for input of shape ${i.shape}`);return r.BV.runKernel(a.jQ,{x:i},{paddings:t,mode:n})}})},5228:function(e,t,n){"use strict";n.d(t,{w:function(){return u}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2668);let u=(0,i.op)({mod_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"a","mod"),i=(0,o._1)(t,"b","mod");[n,i]=(0,s.T_)(n,i);let u={a:n,b:i};return r.BV.runKernel(a.Vb,u)}})},4841:function(e,t,n){"use strict";n.d(t,{d:function(){return u}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2668);let u=(0,i.op)({mul_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"a","mul"),i=(0,o._1)(t,"b","mul");[n,i]=(0,s.T_)(n,i);let u={a:n,b:i};return r.BV.runKernel(a.wY,u)}})},7370:function(e,t,n){"use strict";n.d(t,{W:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({neg_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","neg");return r.BV.runKernel(a.ku,{x:t})}})},3561:function(e,t,n){"use strict";n.d(t,{K:function(){return y}});var r=n(3740),a=n(569),s=n(6235),o=n(3591),i=n(3307),u=n(5735),l=n(2668),p=n(3453),h=n(4968),c=n(9494),d=n(3261),f=n(248),m=n(5475);let y=(0,l.op)({norm_:/**
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
 */ function(e,t="euclidean",n=null,l=!1){e=(0,r._1)(e,"x","norm");let y=function e(t,n,r=null){if(0===t.rank)return(0,s.W)(t);if(1!==t.rank&&null===r)return e((0,h.X)(t,[-1]),n,r);if(1===t.rank||"number"==typeof r||Array.isArray(r)&&1===r.length){if(1===n)return(0,m.S)((0,s.W)(t),r);if(n===1/0)return(0,i.F)((0,s.W)(t),r);if(n===-1/0)return(0,u.V)((0,s.W)(t),r);if("euclidean"===n||2===n)return(0,d._)((0,m.S)((0,p.s)((0,s.W)(t),(0,c.i)(2,"int32")),r));throw Error(`Error in norm: invalid ord value: ${n}`)}if(Array.isArray(r)&&2===r.length){if(1===n)return(0,i.F)((0,m.S)((0,s.W)(t),r[0]),r[1]-1);if(n===1/0)return(0,i.F)((0,m.S)((0,s.W)(t),r[1]),r[0]);if(n===-1/0)return(0,u.V)((0,m.S)((0,s.W)(t),r[1]),r[0]);if("fro"===n||"euclidean"===n)return(0,d._)((0,m.S)((0,f.h)(t),r));throw Error(`Error in norm: invalid ord value: ${n}`)}throw Error(`Error in norm: invalid axis: ${r}`)}(e,t,n),g=y.shape;if(l){let b=(0,a.EC)(n,e.shape);g=o.rv(y.shape,b)}return(0,h.X)(y,g)}})},6500:function(e,t,n){"use strict";n.d(t,{Q:function(){return l}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2200),u=n(2668);let l=(0,u.op)({notEqual_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"a","notEqual"),u=(0,o._1)(t,"b","notEqual");[n,u]=(0,s.T_)(n,u),(0,i.$N)(n.shape,u.shape);let l={a:n,b:u};return r.BV.runKernel(a.yQ,l)}})},6708:function(e,t,n){"use strict";n.d(t,{l:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({oneHot_:/**
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
 */ function(e,t,n=1,o=0){if(t<2)throw Error(`Error in oneHot: depth must be >=2, but it is ${t}`);let i=(0,s._1)(e,"indices","oneHot","int32");return r.BV.runKernel(a.we,{indices:i},{depth:t,onValue:n,offValue:o})}})},4917:function(e,t,n){"use strict";n.d(t,{i:function(){return(/**
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
 */ function e(t,n="float32"){if("complex64"===n){let i=e(t,"float32"),u=(0,o.l)(t,"float32");return(0,s.P)(i,u)}let l=(0,a.p8)((0,a.NA)(t),n);return r.BV.makeTensor(l,t,n)})}});var r=n(196),a=n(569),s=n(1661),o=n(9640)},7846:function(e,t,n){"use strict";n.d(t,{J:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({onesLike_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","onesLike");return r.BV.runKernel(a.qW,{x:t})}})},2668:function(e,t,n){"use strict";n.d(t,{op:function(){return s}});var r=n(196),a=n(569);function s(e){let t=Object.keys(e);if(1!==t.length)throw Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0],s=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n+="__op";let o=(...e)=>{r.BV.startScope(n);try{let t=s(...e);return(0,a.tI)(t)&&console.error("Cannot return a Promise inside of tidy."),r.BV.endScope(t),t}catch(o){throw r.BV.endScope(null),o}};return Object.defineProperty(o,"name",{value:n,configurable:!0}),o}},3308:function(e,t,n){"use strict";n.d(t,{IHx:function(){return s.I},f3b:function(){return o.f},d9v:function(){return i.d},zoF:function(){return u.z},Izb:function(){return p},hiC:function(){return h.h},BHj:function(){return eF},dC7:function(){return c.d},XLQ:function(){return d.X},iD$:function(){return f.i},XD2:function(){return m.X},tPi:function(){return y.t},knu:function(){return g.k},luU:function(){return b.l},XeE:function(){return k.X},RRF:function(){return v.R},odF:function(){return I},HHK:function(){return T.H}});var r,a,s=n(6407),o=n(2657),i=n(8723),u=n(6884),l=n(2668);let p=(0,l.op)({concat2d_:function(e,t){return(0,u.z)(e,t)}});var h=n(1274),c=n(4841),d=n(4968),f=n(9494),m=n(625),y=n(2676),g=n(2991),b=n(827),k=n(701),v=n(6092),x=n(3740),N=n(569),w=n(7852);/**
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
 */ function I(e,t,n){if((0,N.Cq)(e),null!=t&&2!==t.length)throw Error("tensor2d() requires shape to have two numbers");let r=(0,x.C)(e,n);if(2!==r.length&&1!==r.length)throw Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==t)throw Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return(0,w.H)(e,t,r,n)}var T=n(4136),S=n(3710),D=n(7020),E=n(8447),_=n(4415);function F(e,t,n){let r=1-e%2,a=new Float32Array(e);for(let s=0;s<e;++s){let o=2*Math.PI*s/(e+r-1);a[s]=t-n*Math.cos(o)}return(0,v.R)(a,"float32")}(0,l.op)({hammingWindow_:/**
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
 */ function(e){return F(e,.54,.46)}});let M=(0,l.op)({hannWindow_:/**
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
 */ function(e){return F(e,.5,.5)}});var A=n(4006);let $=(0,l.op)({frame_:/**
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
 */ function(e,t,n,r=!1,a=0){let s=0,o=[];for(;s+t<=e.size;)o.push((0,y.t)(e,s,t)),s+=n;if(r)for(;s<e.size;){let i=s+t-e.size,l=(0,u.z)([(0,y.t)(e,s,t-i),(0,A.h)([i],a)]);o.push(l),s+=n}return 0===o.length?I([],[0,t]):(0,d.X)((0,u.z)(o),[o.length,t])}});(0,l.op)({stft_:/**
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
 */ function(e,t,n,r,a=M){null==r&&(r=Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2)))));let s=$(e,t,n),o=(0,c.d)(s,a(t)),i=[];for(let l=0;l<s.shape[0];l++)i.push((0,S.Q)((0,y.t)(o,[l,0],[1,t]),r));return(0,u.z)(i)}});var O=n(196),B=n(9121);let C=(0,l.op)({cropAndResize_:/**
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
 */ function(e,t,n,r,a="bilinear",s=0){let o=(0,x._1)(e,"image","cropAndResize"),i=(0,x._1)(t,"boxes","cropAndResize","float32"),u=(0,x._1)(n,"boxInd","cropAndResize","int32"),l=i.shape[0];N.hu(4===o.rank,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),N.hu(2===i.rank&&4===i.shape[1],()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${i.shape}.`),N.hu(1===u.rank&&u.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${i.shape}.`),N.hu(2===r.length,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),N.hu(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),N.hu("bilinear"===a||"nearest"===a,()=>`method must be bilinear or nearest, but was ${a}`);let p=O.BV.runKernel(B.Vc,{image:o,boxes:i,boxInd:u},{method:a,extrapolationValue:s,cropSize:r});return p}}),P=(0,l.op)({flipLeftRight_:/**
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
 */ function(e){let t=(0,x._1)(e,"image","flipLeftRight","float32");N.hu(4===t.rank,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);let n=O.BV.runKernel(B.Uy,{image:t},{});return n}}),V=(0,l.op)({rotateWithOffset_:/**
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
 */ function(e,t,n=0,r=.5){let a=(0,x._1)(e,"image","rotateWithOffset","float32");N.hu(4===a.rank,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${a.rank}.`);let s=O.BV.runKernel(B.b9,{image:a},{radians:t,fillValue:n,center:r});return s}});/**
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
 */ function R(e,t,n,r,a,s){null==r&&(r=.5),null==a&&(a=Number.NEGATIVE_INFINITY),null==s&&(s=0);let o=e.shape[0];return n=Math.min(n,o),N.hu(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),N.hu(2===e.rank,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),N.hu(4===e.shape[1],()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),N.hu(1===t.rank,()=>"scores must be a 1D tensor"),N.hu(t.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`),N.hu(0<=s&&s<=1,()=>`softNmsSigma must be in [0, 1], but was '${s}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:a,softNmsSigma:s}}let z=(0,l.op)({nonMaxSuppression_:/**
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
 */ function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY){let s=(0,x._1)(e,"boxes","nonMaxSuppression"),o=(0,x._1)(t,"scores","nonMaxSuppression"),i=R(s,o,n,r,a);n=i.maxOutputSize,r=i.iouThreshold,a=i.scoreThreshold;let u={maxOutputSize:n,iouThreshold:r,scoreThreshold:a};return O.BV.runKernel(B.uv,{boxes:s,scores:o},u)}});var U=n(8329);/**
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
 */ async function L(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY){let s=(0,x._1)(e,"boxes","nonMaxSuppressionAsync"),o=(0,x._1)(t,"scores","nonMaxSuppressionAsync"),i=R(s,o,n,r,a);n=i.maxOutputSize,r=i.iouThreshold,a=i.scoreThreshold;let u=await Promise.all([s.data(),o.data()]),l=u[0],p=u[1],{selectedIndices:h}=(0,U.GP)(l,p,n,r,a);return s!==e&&s.dispose(),o!==t&&o.dispose(),(0,v.R)(h,"int32")}let W=(0,l.op)({nonMaxSuppressionWithScore_:/**
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
 */ function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,s=0){let o=(0,x._1)(e,"boxes","nonMaxSuppression"),i=(0,x._1)(t,"scores","nonMaxSuppression"),u=R(o,i,n,r,a,s);n=u.maxOutputSize,r=u.iouThreshold,a=u.scoreThreshold,s=u.softNmsSigma;let l={maxOutputSize:n,iouThreshold:r,scoreThreshold:a,softNmsSigma:s},p=O.BV.runKernel(B.W0,{boxes:o,scores:i},l);return{selectedIndices:p[0],selectedScores:p[1]}}});/**
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
 */ async function H(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,s=0){let o=(0,x._1)(e,"boxes","nonMaxSuppressionAsync"),i=(0,x._1)(t,"scores","nonMaxSuppressionAsync"),u=R(o,i,n,r,a,s);n=u.maxOutputSize,r=u.iouThreshold,a=u.scoreThreshold,s=u.softNmsSigma;let l=await Promise.all([o.data(),i.data()]),p=l[0],h=l[1],{selectedIndices:c,selectedScores:d}=(0,U.pA)(p,h,n,r,a,s);return o!==e&&o.dispose(),i!==t&&i.dispose(),{selectedIndices:(0,v.R)(c,"int32"),selectedScores:(0,v.R)(d)}}let q=(0,l.op)({nonMaxSuppressionPadded_:/**
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
 */ function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,s=!1){let o=(0,x._1)(e,"boxes","nonMaxSuppression"),i=(0,x._1)(t,"scores","nonMaxSuppression"),u=R(o,i,n,r,a,null),l=u.maxOutputSize,p=u.iouThreshold,h=u.scoreThreshold,c=O.BV.runKernel(B.cy,{boxes:o,scores:i},{maxOutputSize:l,iouThreshold:p,scoreThreshold:h,padToMaxOutputSize:s});return{selectedIndices:c[0],validOutputs:c[1]}}});/**
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
 */ async function j(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,s=!1){let o=(0,x._1)(e,"boxes","nonMaxSuppressionAsync"),i=(0,x._1)(t,"scores","nonMaxSuppressionAsync"),u=R(o,i,n,r,a,null),l=u.maxOutputSize,p=u.iouThreshold,h=u.scoreThreshold,[c,d]=await Promise.all([o.data(),i.data()]),{selectedIndices:m,validOutputs:y}=(0,U.qP)(c,d,l,p,h,s);return o!==e&&o.dispose(),i!==t&&i.dispose(),{selectedIndices:(0,v.R)(m,"int32"),validOutputs:(0,f.i)(y,"int32")}}var X=n(3305),G=n(5098),K=n(7630),Y=n(624),Q=n(2856),Z=n(7245),J=n(5912),ee=n(9640);(0,l.op)({bandPart_:/**
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
 */ function(e,t,n){(0,N.hu)(t%1==0,()=>`bandPart(): numLower must be an integer, got ${t}.`),(0,N.hu)(n%1==0,()=>`bandPart(): numUpper must be an integer, got ${n}.`);let r=(0,x._1)(e,"a","bandPart");(0,N.hu)(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);let a=r.shape,[s,o]=r.shape.slice(-2);if(!(t<=s))throw Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${s}).`);if(!(n<=o))throw Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`);t<0&&(t=s),n<0&&(n=o);let i=(0,d.X)((0,Z.w)(0,s,1,"int32"),[-1,1]),u=(0,Z.w)(0,o,1,"int32"),l=(0,b.l)(i,u),p=(0,Q.H)((0,Y.z)(l,(0,f.i)(+t,"int32")),(0,K.b)(l,(0,f.i)(-n,"int32"))),h=(0,ee.l)([s,o],r.dtype);return(0,d.X)((0,g.k)((0,T.H)((0,d.X)(r,[-1,s,o])).map(e=>(0,J.a)(p,e,h))),a)}});var et=n(3561),en=n(8644),er=n(9590),ea=n(5475);(0,l.op)({gramSchmidt_:/**
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
 */ function(e){let t;if(Array.isArray(e)){t=!1,(0,N.hu)(null!=e&&e.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");let n=e[0].shape[0];for(let r=1;r<e.length;++r)(0,N.hu)(e[r].shape[0]===n,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[r].shape[0]} vs. ${n})`)}else t=!0,e=(0,en.V)(e,e.shape[0],0).map(e=>(0,er.L)(e,[0]));(0,N.hu)(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);let a=[],s=e;for(let o=0;o<e.length;++o)a.push(O.BV.tidy(()=>{let e=s[o];if(o>0)for(let t=0;t<o;++t){let n=(0,c.d)((0,ea.S)((0,c.d)(a[t],e)),a[t]);e=(0,b.l)(e,n)}return(0,h.h)(e,(0,et.K)(e,"euclidean"))}));return t?(0,g.k)(a,0):a}});var es=n(4368),eo=n(1300),ei=n(7501);let eu=(0,l.op)({eye_:/**
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
 */ function(e,t,n,r="float32"){null==t&&(t=e);let a=(0,o.f)([e,t],r),s=e<=t?e:t;for(let i=0;i<s;++i)a.set(1,i,i);let u=(0,d.X)(a.toTensor(),[e,t]);if(null==n)return u;if(1===n.length)return(0,ei.G)((0,eo.d)(u,0),[n[0],1,1]);if(2===n.length)return(0,ei.G)((0,eo.d)((0,eo.d)(u,0),0),[n[0],n[1],1,1]);if(3===n.length)return(0,ei.G)((0,eo.d)((0,eo.d)((0,eo.d)(u,0),0),0),[n[0],n[1],n[2],1,1]);throw Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}});var el=n(636),ep=n(8687),eh=n(7370),ec=n(9065);function ed(e,t=!1){return O.BV.tidy(()=>{(0,N.hu)(2===e.shape.length,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);let n=e.shape[0],r=e.shape[1],a=eu(n),s=(0,i.d)(e),o=I([[1]],[1,1]),l=(0,i.d)(o),p=n>=r?r:n;for(let d=0;d<p;++d){let f=s,m=l,g=a;[l,s,a]=O.BV.tidy(()=>{let e=(0,y.t)(s,[d,d],[n-d,1]),t=(0,et.K)(e),p=(0,y.t)(s,[d,d],[1,1]),f=(0,J.a)((0,el.p)(p,0),I([[-1]]),I([[1]])),m=(0,b.l)(p,(0,c.d)(f,t)),g=(0,h.h)(e,m);l=1===g.shape[0]?(0,i.d)(o):(0,u.z)([o,(0,y.t)(g,[1,0],[g.shape[0]-1,g.shape[1]])],0);let k=(0,eh.W)((0,h.h)((0,ep.O)(f,m),t)),v=(0,y.t)(s,[d,0],[n-d,r]),x=(0,c.d)(k,l),N=(0,ec.p)(l);if(0===d)s=(0,b.l)(v,(0,ep.O)(x,(0,ep.O)(N,v)));else{let w=(0,b.l)(v,(0,ep.O)(x,(0,ep.O)(N,v)));s=(0,u.z)([(0,y.t)(s,[0,0],[d,r]),w],0)}let T=(0,ec.p)(x),S=(0,y.t)(a,[0,d],[n,a.shape[1]-d]);if(0===d)a=(0,b.l)(S,(0,ep.O)((0,ep.O)(S,l),T));else{let D=(0,b.l)(S,(0,ep.O)((0,ep.O)(S,l),T));a=(0,u.z)([(0,y.t)(a,[0,0],[n,d]),D],1)}return[l,s,a]}),(0,es.B9)([f,m,g])}return!t&&n>r&&(a=(0,y.t)(a,[0,0],[n,r]),s=(0,y.t)(s,[0,0],[r,r])),[a,s]})}(0,l.op)({qr_:/**
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
 */ function(e,t=!1){if((0,N.hu)(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),2===e.rank)return ed(e,t);{let n=e.shape.slice(0,e.shape.length-2).reduce((e,t)=>e*t),r=(0,T.H)((0,d.X)(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),a=[],s=[];r.forEach(e=>{let[n,r]=ed(e,t);a.push(n),s.push(r)});let o=(0,d.X)((0,g.k)(a,0),e.shape),i=(0,d.X)((0,g.k)(s,0),e.shape);return[o,i]}}});var ef=n(6235);(r=a||(a={}))[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS";var em=n(2271),ey=n(5130),eg=n(6500),eb=n(4917);let ek=(0,l.op)({computeWeightedLoss_:function(e,t,n=a.SUM_BY_NONZERO_WEIGHTS){let r=(0,x._1)(e,"losses","computeWeightedLoss"),s=null;null!=t&&(s=(0,x._1)(t,"weights","computeWeightedLoss"));let o=null==s?r:(0,c.d)(r,s);if(n===a.NONE)return o;if(n===a.SUM)return(0,ea.S)(o);if(n===a.MEAN){if(null==s)return(0,ey.J)(o);{let i=r.size/s.size,u=(0,h.h)((0,ea.S)(o),(0,ea.S)(s));return i>1?(0,h.h)(u,(0,f.i)(i)):u}}if(n===a.SUM_BY_NONZERO_WEIGHTS){if(null==s)return(0,h.h)((0,ea.S)(o),(0,f.i)(r.size));{let l=(0,c.d)(s,(0,eb.i)(r.shape)),p=(0,em.p)((0,ea.S)((0,eg.Q)(l,(0,f.i)(0))),"float32");return(0,h.h)((0,ea.S)(o),p)}}throw Error(`Unknown reduction: ${n}`)}});(0,l.op)({absoluteDifference_:/**
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
 */ function(e,t,n,r=a.SUM_BY_NONZERO_WEIGHTS){let s=(0,x._1)(e,"labels","absoluteDifference"),o=(0,x._1)(t,"predictions","absoluteDifference"),i=null;null!=n&&(i=(0,x._1)(n,"weights","absoluteDifference")),(0,N.k5)(s.shape,o.shape,"Error in absoluteDifference: ");let u=(0,ef.W)((0,b.l)(s,o));return ek(u,i,r)}}),(0,l.op)({cosineDistance_:function(e,t,n,r,s=a.SUM_BY_NONZERO_WEIGHTS){let o=(0,x._1)(e,"labels","cosineDistance"),i=(0,x._1)(t,"predictions","cosineDistance"),u=null;null!=r&&(u=(0,x._1)(r,"weights","cosineDistance")),(0,N.k5)(o.shape,i.shape,"Error in cosineDistance: ");let l=(0,f.i)(1),p=(0,b.l)(l,(0,ea.S)((0,c.d)(o,i),n,!0));return ek(p,u,s)}});var ev=n(7409);(0,l.op)({hingeLoss_:function(e,t,n,r=a.SUM_BY_NONZERO_WEIGHTS){let s=(0,x._1)(e,"labels","hingeLoss"),o=(0,x._1)(t,"predictions","hingeLoss"),i=null;null!=n&&(i=(0,x._1)(n,"weights","hingeLoss")),(0,N.k5)(s.shape,o.shape,"Error in hingeLoss: ");let u=(0,f.i)(1);s=(0,b.l)((0,c.d)((0,f.i)(2),s),u);let l=(0,ev.U)((0,b.l)(u,(0,c.d)(s,o)));return ek(l,i,r)}});var ex=n(4513),eN=n(248);(0,l.op)({huberLoss_:/**
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
 */ function(e,t,n,r=1,o=a.SUM_BY_NONZERO_WEIGHTS){let i=(0,x._1)(e,"labels","huberLoss"),u=(0,x._1)(t,"predictions","huberLoss"),l=null;null!=n&&(l=(0,x._1)(n,"weights","huberLoss")),(0,N.k5)(i.shape,u.shape,"Error in huberLoss: ");let p=(0,f.i)(r),h=(0,ef.W)((0,b.l)(u,i)),d=(0,ex.L)(h,p),m=(0,b.l)(h,d),y=(0,s.I)((0,c.d)((0,f.i)(.5),(0,eN.h)(d)),(0,c.d)(p,m));return ek(y,l,o)}});var ew=n(2597);(0,l.op)({logLoss_:/**
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
 */ function(e,t,n,r=1e-7,o=a.SUM_BY_NONZERO_WEIGHTS){let i=(0,x._1)(e,"labels","logLoss"),u=(0,x._1)(t,"predictions","logLoss"),l=null;null!=n&&(l=(0,x._1)(n,"weights","logLoss")),(0,N.k5)(i.shape,u.shape,"Error in logLoss: ");let p=(0,f.i)(1),h=(0,f.i)(r),d=(0,eh.W)((0,c.d)(i,(0,ew.c)((0,s.I)(u,h)))),m=(0,c.d)((0,b.l)(p,i),(0,ew.c)((0,s.I)((0,b.l)(p,u),h))),y=(0,b.l)(d,m);return ek(y,l,o)}});var eI=n(5265);(0,l.op)({meanSquaredError_:/**
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
 */ function(e,t,n,r=a.SUM_BY_NONZERO_WEIGHTS){let s=(0,x._1)(e,"labels","meanSquaredError"),o=(0,x._1)(t,"predictions","meanSquaredError"),i=null;null!=n&&(i=(0,x._1)(n,"weights","meanSquaredError")),(0,N.k5)(s.shape,o.shape,"Error in meanSquaredError: ");let u=(0,eI.$)(s,o);return ek(u,i,r)}});var eT=n(4842),eS=n(7474);(0,l.op)({sigmoidCrossEntropy_:function(e,t,n,r=0,o=a.SUM_BY_NONZERO_WEIGHTS){let i=(0,x._1)(e,"multiClassLabels","sigmoidCrossEntropy"),u=(0,x._1)(t,"logits","sigmoidCrossEntropy"),l=null;if(null!=n&&(l=(0,x._1)(n,"weights","sigmoidCrossEntropy")),(0,N.k5)(i.shape,u.shape,"Error in sigmoidCrossEntropy: "),r>0){let p=(0,f.i)(r),h=(0,f.i)(1),d=(0,f.i)(.5);i=(0,s.I)((0,c.d)(i,(0,b.l)(h,p)),(0,c.d)(d,p))}let m=/**
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
 */ function(e,t){let n=(0,x._1)(e,"labels","sigmoidCrossEntropyWithLogits"),r=(0,x._1)(t,"logits","sigmoidCrossEntropyWithLogits");(0,N.k5)(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");let a=(0,ev.U)(r),o=(0,c.d)(r,n),i=(0,eS.K)((0,eT.Q)((0,eh.W)((0,ef.W)(r))));return(0,s.I)((0,b.l)(a,o),i)}(i,u);return ek(m,l,o)}});var eD=n(633),eE=n(3591),e_=n(1391);(0,l.op)({softmaxCrossEntropy_:function(e,t,n,r=0,o=a.SUM_BY_NONZERO_WEIGHTS){let i=(0,x._1)(e,"onehotLabels","softmaxCrossEntropy"),u=(0,x._1)(t,"logits","softmaxCrossEntropy"),l=null;if(null!=n&&(l=(0,x._1)(n,"weights","softmaxCrossEntropy")),(0,N.k5)(i.shape,u.shape,"Error in softmaxCrossEntropy: "),r>0){let p=(0,f.i)(r),m=(0,f.i)(1),y=(0,f.i)(i.shape[1]);i=(0,s.I)((0,c.d)(i,(0,b.l)(m,p)),(0,h.h)(p,y))}let g=/**
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
 */ function(e,t,n=-1){if(-1===n&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);let r=(0,eD.cb)((e,t,r)=>{let a=(0,e_.l)(t,[n],!0),s=(0,b.l)((0,em.p)(t,"float32"),a);r([e,s]);let o=(0,eh.W)((0,c.d)(s,e)),i=(0,ea.S)(o,[n]),u=(e,t)=>{let[r,a]=t,s=(0,eE.rv)(e.shape,[n]);return[(0,c.d)((0,d.X)(e,s),(0,b.l)((0,em.p)(r,"float32"),(0,eT.Q)(a))),(0,c.d)((0,d.X)(e,s),(0,b.l)((0,eT.Q)(a),(0,em.p)(r,"float32")))]};return{value:i,gradFunc:u}});return r(e,t)}(i,u);return ek(g,l,o)}}),D.k,E.S,S.Q,_.w;let eF={flipLeftRight:P,resizeNearestNeighbor:G.j,resizeBilinear:X.I,rotateWithOffset:V,cropAndResize:C,nonMaxSuppression:z,nonMaxSuppressionAsync:L,nonMaxSuppressionWithScore:W,nonMaxSuppressionWithScoreAsync:H,nonMaxSuppressionPadded:q,nonMaxSuppressionPaddedAsync:j}},9682:function(e,t,n){"use strict";n.d(t,{v:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({pad_:/**
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
 */ function(e,t,n=0){let o=(0,s._1)(e,"x","pad");if(0===o.rank)throw Error("pad(scalar) is not defined. Pass non-scalar to pad");return r.BV.runKernel(a.ly,{x:o},{paddings:t,constantValue:n})}})},3453:function(e,t,n){"use strict";n.d(t,{s:function(){return u}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2668);let u=(0,i.op)({pow_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"base","pow"),i=(0,o._1)(t,"exp","pow");[n,i]=(0,s.T_)(n,i);let u={a:n,b:i};return r.BV.runKernel(a.pe,u)}})},8151:function(e,t,n){"use strict";n.d(t,{A:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({prelu_:/**
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
 */ function(e,t){let n=(0,s._1)(e,"x","prelu"),o=(0,s._1)(t,"alpha","prelu");return r.BV.runKernel(a.o0,{x:n,alpha:o})}})},9451:function(e,t,n){"use strict";n.d(t,{W:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(2271),i=n(2668);let u=(0,i.op)({prod_:/**
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
 */ function(e,t=null,n=!1){let i=(0,s._1)(e,"x","prod");"bool"===i.dtype&&(i=(0,o.p)(i,"int32"));let u={x:i};return r.BV.runKernel(a.Dl,u,{axis:t,keepDims:n})}})},7245:function(e,t,n){"use strict";n.d(t,{w:function(){return s}});var r=n(196),a=n(9121);/**
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
 */ function s(e,t,n=1,s="float32"){if(0===n)throw Error("Cannot have a step of zero");return r.BV.runKernel(a.e6,{},{start:e,stop:t,step:n,dtype:s})}},766:function(e,t,n){"use strict";n.d(t,{k:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({real_:/**
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
 */ function(e){let t=(0,s._1)(e,"input","real");return r.BV.runKernel(a.xJ,{input:t})}})},9036:function(e,t,n){"use strict";n.d(t,{M:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({reciprocal_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","reciprocal");return r.BV.runKernel(a.$H,{x:t})}})},7409:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({relu_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","relu");return r.BV.runKernel(a.qk,{x:t})}})},3582:function(e,t,n){"use strict";n.d(t,{b:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({relu6_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","relu6");return r.BV.runKernel(a.Sb,{x:t})}})},4968:function(e,t,n){"use strict";n.d(t,{X:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({reshape_:/**
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
 */ function(e,t){let n=(0,s._1)(e,"x","reshape","string_or_numeric");return r.BV.runKernel(a.HZ,{x:n},{shape:t})}})},7486:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({reverse_:/**
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
 */ function(e,t){let n=(0,s._1)(e,"x","reverse");return r.BV.runKernel(a.mK,{x:n},{dims:t})}})},7809:function(e,t,n){"use strict";n.d(t,{N:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({round_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","round");return r.BV.runKernel(a.e0,{x:t})}})},2634:function(e,t,n){"use strict";n.d(t,{b:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({rsqrt_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","rsqrt");return r.BV.runKernel(a.bV,{x:t})}})},9494:function(e,t,n){"use strict";n.d(t,{i:function(){return s}});var r=n(569),a=n(7852);/**
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
 */ function s(e,t){if(((0,r.fU)(e)&&"string"!==t||Array.isArray(e))&&"complex64"!==t)throw Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===t&&(0,r.fU)(e)&&!(e instanceof Uint8Array))throw Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return(0,a.H)(e,[],[],t)}},3028:function(e,t,n){"use strict";n.d(t,{SU:function(){return o},b0:function(){return s},l5:function(){return a}});var r=n(569);function a(e,t,n){let r=t.rank>1?t.shape[t.rank-1]:1,a=t.rank>1?t.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${a}.`;if(n.rank<a)throw Error(s+` update.rank < ${a}. `);if(e.length<r+(n.rank-a))throw Error(s+` Output shape length < ${r+(n.rank-a)}`);if(n.rank!==a+e.length-r)throw Error(s+` update.rank != ${a+e.length-r}`);for(let o=0;o<a;++o)if(n.shape[o]!==t.shape[o])throw Error(s+` updates.shape[${o}] (${n.shape[o]}) != indices.shape[${o}] (${t.shape[o]}).`);for(let i=0;i<n.rank-a;++i)if(n.shape[i+a]!==e[i+r])throw Error(s+` updates.shape[${i+a}] (${n.shape[i+a]}) != shape[${i+a}] (${e[i+a]})`)}function s(e,t,n){if(t.rank<1)throw Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if("int32"!==t.dtype)throw Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(0===n.length){if(0===t.size)throw Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(0===e.size)throw Error(`Updates specified for empty output. updates shape: ${e.shape}`)}a(n,t,e)}function o(e,t,n){let a=t.shape.length,s=a>1?t.shape[a-1]:1,o=n.length,i=1;for(let u=s;u<o;++u)i*=n[u];let l=(0,r.NA)(t.shape)/(s<1?1:s),p=[...(0,r.e3)(n.slice(0,s)),1],h=(0,r.NA)(n);return{sliceRank:s,numUpdates:l,sliceSize:i,strides:p,outputSize:h}}},5503:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({selu_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","selu");return r.BV.runKernel(a.oF,{x:t})}})},625:function(e,t,n){"use strict";n.d(t,{X:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({sigmoid_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","sigmoid");return r.BV.runKernel(a.a5,{x:t})}})},4434:function(e,t,n){"use strict";n.d(t,{X:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({sign_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","sign");return r.BV.runKernel(a.i5,{x:t})}})},9331:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({sin_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","sin");return r.BV.runKernel(a.RQ,{x:t})}})},3254:function(e,t,n){"use strict";n.d(t,{R:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({sinh_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","sinh");return r.BV.runKernel(a.w3,{x:t})}})},2676:function(e,t,n){"use strict";n.d(t,{t:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({slice_:/**
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
 */ function(e,t,n){let o=(0,s._1)(e,"x","slice","string_or_numeric");if(0===o.rank)throw Error("Slicing scalar is not possible");return r.BV.runKernel(a.p2,{x:o},{begin:t,size:n})}})},682:function(e,t,n){"use strict";n.d(t,{X:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({softmax_:/**
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
 */ function(e,t=-1){let n=(0,s._1)(e,"logits","softmax","float32");if(-1===t&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);let o={dim:t};return r.BV.runKernel(a.Gc,{logits:n},o)}})},3694:function(e,t,n){"use strict";n.d(t,{W:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({softplus_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","softplus");return r.BV.runKernel(a.MR,{x:t})}})},7918:function(e,t,n){"use strict";n.d(t,{f:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668);let u=(0,i.op)({spaceToBatchND_:/**
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
 */ function(e,t,n){let i=(0,s._1)(e,"x","spaceToBatchND");return o.hu(i.rank>=1+t.length,()=>`input rank ${i.rank} should be > than [blockShape] ${t.length}`),o.hu(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),o.hu(i.shape.reduce((e,r,a)=>a>0&&a<=t.length?e&&(r+n[a-1][0]+n[a-1][1])%t[a-1]==0:e,!0),()=>`input spatial dimensions ${i.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`),r.BV.runKernel(a.TQ,{x:i},{blockShape:t,paddings:n})}})},7020:function(e,t,n){"use strict";n.d(t,{k:function(){return i}});var r=n(196),a=n(9121),s=n(569),o=n(2668);let i=(0,o.op)({fft_:/**
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
 */ function(e){return(0,s.hu)("complex64"===e.dtype,()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`),r.BV.runKernel(a.vw,{input:e})}})},8447:function(e,t,n){"use strict";n.d(t,{S:function(){return i}});var r=n(196),a=n(9121),s=n(569),o=n(2668);let i=(0,o.op)({ifft_:/**
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
 */ function(e){return(0,s.hu)("complex64"===e.dtype,()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`),r.BV.runKernel(a.Qg,{input:e})}})},4415:function(e,t,n){"use strict";n.d(t,{w:function(){return f}});var r=n(1661),a=n(6884),s=n(4386),o=n(4841),i=n(2668),u=n(766),l=n(4968),p=n(7486),h=n(9494),c=n(2676),d=n(8447);let f=(0,i.op)({irfft_:/**
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
 */ function(e){let t;let n=e.shape[e.shape.length-1],i=e.size/n;if(n<=2){let f=(0,l.X)(e,[i,n]);t=(0,d.S)(f)}else{let m=[i,2*(n-1)],y=(0,l.X)((0,u.k)(e),[i,n]),g=(0,l.X)((0,s.a)(e),[i,n]),b=(0,p.G)((0,c.t)(y,[0,1],[i,n-2]),1),k=(0,o.d)((0,p.G)((0,c.t)(g,[0,1],[i,n-2]),1),(0,h.i)(-1)),v=(0,a.z)([y,b],1),x=(0,a.z)([g,k],1),N=(0,l.X)((0,r.P)(v,x),[m[0],m[1]]);t=(0,d.S)(N)}if(t=(0,u.k)(t),3===e.rank&&0!==e.shape[0]){let w=t,I=e.shape[0];t=(0,l.X)(t,[I,t.shape[0]/I,t.shape[1]]),w.dispose()}return t}})},3710:function(e,t,n){"use strict";n.d(t,{Q:function(){return m}});var r=n(569),a=n(1661),s=n(6884),o=n(4386),i=n(2668),u=n(766),l=n(4968),p=n(2676),h=n(8644),c=n(9640),d=n(6577),f=n(7020);let m=(0,i.op)({rfft_:/**
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
 */ function(e,t){let n;(0,r.hu)("float32"===e.dtype,()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let i=e.shape[e.shape.length-1],m=e.size/i;if(null!=t&&t<i){let y=e.shape.map(e=>0),g=e.shape.map(e=>e);g[e.shape.length-1]=t,n=(0,p.t)(e,y,g),i=t}else if(null!=t&&t>i){let b=e.shape.map(e=>e);b[e.shape.length-1]=t-i,n=(0,s.z)([e,(0,c.l)(b)],e.shape.length-1),i=t}else n=e;let k=(0,d.P)(n),v=(0,l.X)((0,a.P)(n,k),[m,i]),x=(0,f.k)(v),N=Math.floor(i/2)+1,w=(0,u.k)(x),I=(0,o.a)(x),T=(0,h.V)(w,[N,i-N],w.shape.length-1),S=(0,h.V)(I,[N,i-N],I.shape.length-1),D=n.shape.slice();return D[n.shape.length-1]=N,(0,l.X)((0,a.P)(T[0],S[0]),D)}})},8644:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({split_:/**
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
 */ function(e,t,n=0){let o=(0,s._1)(e,"x","split");return r.BV.runKernel(a.L8,{x:o},{numOrSizeSplits:t,axis:n})}})},3261:function(e,t,n){"use strict";n.d(t,{_:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({sqrt_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","sqrt");return r.BV.runKernel(a.FK,{x:t})}})},248:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var r=n(196),a=n(3740),s=n(2668);let o=(0,s.op)({square_:/**
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
 */ function(e){let t=(0,a._1)(e,"x","square");return r.BV.runKernel("Square",{x:t},{})}})},5265:function(e,t,n){"use strict";n.d(t,{$:function(){return l}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2200),u=n(2668);let l=(0,u.op)({squaredDifference_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"a","squaredDifference"),u=(0,o._1)(t,"b","squaredDifference");[n,u]=(0,s.T_)(n,u),(0,i.$N)(n.shape,u.shape);let l={a:n,b:u};return r.BV.runKernel(a._t,l,{})}})},9590:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var r=n(3740),a=n(569),s=n(2668),o=n(4968);let i=(0,s.op)({squeeze_:/**
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
 */ function(e,t){let n=(0,r._1)(e,"x","squeeze");return(0,o.X)(n,(0,a.bp)(n.shape,t).newShape)}})},2991:function(e,t,n){"use strict";n.d(t,{k:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668);let u=(0,i.op)({stack_:/**
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
 */ function(e,t=0){let n=(0,s.sI)(e,"tensors","stack","string_or_numeric");return o.hu(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&o.hu(t<=n[0].rank,()=>"Axis must be <= rank of the tensor"),r.BV.runKernel(a.Qi,n,{axis:t})}})},1901:function(e,t,n){"use strict";n.d(t,{N:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({step_:/**
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
 */ function(e,t=0){let n=(0,s._1)(e,"x","step");return r.BV.runKernel(a.h8,{x:n},{alpha:t})}})},5158:function(e,t,n){"use strict";n.d(t,{N:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({stridedSlice_:/**
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
 */ function(e,t,n,o,i=0,u=0,l=0,p=0,h=0){let c=(0,s._1)(e,"x","stridedSlice");return r.BV.runKernel(a.m2,{x:c},{begin:t,end:n,strides:o,beginMask:i,endMask:u,ellipsisMask:l,newAxisMask:p,shrinkAxisMask:h})}})},827:function(e,t,n){"use strict";n.d(t,{l:function(){return u}});var r=n(196),a=n(9121),s=n(747),o=n(3740),i=n(2668);let u=(0,i.op)({sub_:/**
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
 */ function(e,t){let n=(0,o._1)(e,"a","sub"),i=(0,o._1)(t,"b","sub");[n,i]=(0,s.T_)(n,i);let u={a:n,b:i};return r.BV.runKernel(a.Tr,u)}})},5475:function(e,t,n){"use strict";n.d(t,{S:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(2271),i=n(2668);let u=(0,i.op)({sum_:/**
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
 */ function(e,t=null,n=!1){let i=(0,s._1)(e,"x","sum");"bool"===i.dtype&&(i=(0,o.p)(i,"int32"));let u={x:i};return r.BV.runKernel(a.GB,u,{axis:t,keepDims:n})}})},1173:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({tan_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","tan");return r.BV.runKernel(a.sE,{x:t})}})},1869:function(e,t,n){"use strict";n.d(t,{A:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({tanh_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","tanh");return r.BV.runKernel(a.MI,{x:t})}})},701:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(3740),a=n(7852);/**
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
 */ function s(e,t,n){let s=(0,r.C)(e,n);return(0,a.H)(e,t,s,n)}},6092:function(e,t,n){"use strict";n.d(t,{R:function(){return o}});var r=n(3740),a=n(569),s=n(7852);/**
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
 */ function o(e,t){(0,a.Cq)(e);let n=(0,r.C)(e,t);if(1!==n.length)throw Error("tensor1d() requires values to be a flat/TypedArray");return(0,s.H)(e,null,n,t)}},7852:function(e,t,n){"use strict";n.d(t,{H:function(){return o}});var r=n(196),a=n(569),s=n(9155);/**
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
 */ function o(e,t,n,o){if(null==o&&(o=(0,a.D2)(e)),"complex64"===o)throw Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!(0,a.fU)(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e)throw Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=t){(0,a.Mu)(t);let i=(0,a.NA)(t),u=(0,a.NA)(n);(0,a.hu)(i===u,()=>`Based on the provided shape, [${t}], the tensor should have ${i} values but has ${u}`);for(let l=0;l<n.length;++l){let p=n[l],h=l!==n.length-1||p!==(0,a.NA)(t.slice(l));(0,a.hu)(n[l]===t[l]||!h,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return(0,a.fU)(e)||Array.isArray(e)||(e=[e]),t=t||n,e="string"!==o?(0,s.toTypedArray)(e,o):(0,a.xH)(e,[],!0),r.BV.makeTensor(e,t,o)}},7501:function(e,t,n){"use strict";n.d(t,{G:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668);let u=(0,i.op)({tile_:/**
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
 */ function(e,t){let n=(0,s._1)(e,"x","tile","string_or_numeric");return o.hu(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`),r.BV.runKernel(a.n9,{x:n},{reps:t})}})},3243:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({topk_:/**
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
 */ function(e,t=1,n=!0){let o=(0,s._1)(e,"x","topk");if(0===o.rank)throw Error("topk() expects the input to be of rank 1 or higher");let i=o.shape[o.shape.length-1];if(t>i)throw Error(`'k' passed to topk() must be <= the last dimension (${i}) but got ${t}`);let[u,l]=r.BV.runKernel(a.cW,{x:o},{k:t,sorted:n});return{values:u,indices:l}}})},9065:function(e,t,n){"use strict";n.d(t,{p:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668);let u=(0,i.op)({transpose_:/**
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
 */ function(e,t){let n=(0,s._1)(e,"x","transpose");if(null==t&&(t=n.shape.map((e,t)=>t).reverse()),o.hu(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of perm ${t}.`),t.forEach(e=>{o.hu(e>=0&&e<n.rank,()=>`All entries in 'perm' must be between 0 and ${n.rank-1} but got ${t}`)}),n.rank<=1)return n.clone();let i={perm:t};return r.BV.runKernel(a.G3,{x:n},i)}})},9608:function(e,t,n){"use strict";n.d(t,{T:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668);let u=(0,i.op)({unique_:/**
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
 */ function(e,t=0){let n=(0,s._1)(e,"x","unique","string_or_numeric");(0,o.hu)(n.rank>0,()=>"The input tensor must be at least 1D");let[i,u]=r.BV.runKernel(a.kp,{x:n},{axis:t});return{values:i,indices:u}}})},4136:function(e,t,n){"use strict";n.d(t,{H:function(){return u}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(2668);let u=(0,i.op)({unstack_:/**
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
 */ function(e,t=0){let n=(0,s._1)(e,"x","unstack","string_or_numeric");return o.hu(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`),r.BV.runKernel(a.To,{value:n},{axis:t})}})},5912:function(e,t,n){"use strict";n.d(t,{a:function(){return p}});var r=n(196),a=n(9121),s=n(3740),o=n(569),i=n(8247),u=n(2200),l=n(2668);let p=(0,l.op)({where_:/**
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
 */ function(e,t,n){let l=(0,s._1)(t,"a","where"),p=(0,s._1)(n,"b","where"),h=(0,s._1)(e,"condition","where","bool"),c=(0,u.$N)(l.shape,p.shape),d=(0,i.U)(l,c),f=(0,i.U)(p,c);return 1===h.rank&&(0,o.hu)(h.shape[0]===l.shape[0],()=>"The first dimension of `a` must match the size of `condition`."),1!==h.rank&&(0,o.k5)(h.shape,f.shape,"Error in where: "),r.BV.runKernel(a.Ph,{condition:h,t:d,e:f})}})},9640:function(e,t,n){"use strict";n.d(t,{l:function(){return(/**
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
 */ function e(t,n="float32"){if("complex64"===n){let o=e(t,"float32"),i=e(t,"float32");return(0,s.P)(o,i)}let u=(0,a.wT)((0,a.NA)(t),n);return r.BV.makeTensor(u,t,n)})}});var r=n(196),a=n(569),s=n(1661)},6577:function(e,t,n){"use strict";n.d(t,{P:function(){return i}});var r=n(196),a=n(9121),s=n(3740),o=n(2668);let i=(0,o.op)({zerosLike_:/**
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
 */ function(e){let t=(0,s._1)(e,"x","zerosLike");return r.BV.runKernel(a.Ru,{x:t})}})},974:function(e,t,n){"use strict";n.d(t,{es:function(){return f},YD:function(){return u},_w:function(){return m},FZ:function(){return d},Vp:function(){return c},Vi:function(){return h}});var r=n(569);function a(e,t,n){let a;return a=Array.isArray(e)?`${parseFloat(e[0].toFixed(7))} + ${parseFloat(e[1].toFixed(7))}j`:(0,r.HD)(e)?`'${e}'`:"bool"===n?s(e):parseFloat(e.toFixed(7)).toString(),(0,r.oj)(a,t)}function s(e){return 0===e?"false":"true"}function o(e){let t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}var i=n(9155);/**
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
 */ class u{constructor(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=r.NA(e),null!=n){let a=n.length;r.hu(a===this.size,()=>`Length of values '${a}' does not match the size inferred by the shape '${this.size}'.`)}if("complex64"===t)throw Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||r.rQ(t,this.size),this.strides=(0,r.e3)(e)}set(e,...t){0===t.length&&(t=[0]),r.hu(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);let n=this.locToIndex(t);this.values[n]=e}get(...e){0===e.length&&(e=[0]);let t=0;for(let n of e){if(n<0||n>=this.shape[t]){let r=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw Error(r)}t++}let a=e[e.length-1];for(let s=0;s<e.length-1;++s)a+=this.strides[s]*e[s];return this.values[a]}locToIndex(e){if(0===this.rank)return 0;if(1===this.rank)return e[0];let t=e[e.length-1];for(let n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t}indexToLoc(e){if(0===this.rank)return[];if(1===this.rank)return[e];let t=Array(this.shape.length);for(let n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return l().makeTensor(this.values,this.shape,this.dtype)}}let l=null,p=null;function h(e){l=e}function c(e){p=e}function d(e){}class f{constructor(e,t,n,a){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=r.NA(e),this.strides=(0,r.e3)(e),this.dataId=n,this.id=a,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){let e=await this.data();return p.buffer(this.shape,this.dtype,e)}bufferSync(){return p.buffer(this.shape,this.dtype,this.dataSync())}async array(){let e=await this.data();return(0,r.GX)(this.shape,e)}arraySync(){return(0,r.GX)(this.shape,this.dataSync())}async data(){this.throwIfDisposed();let e=l().read(this.dataId);if("string"===this.dtype){let t=await e;try{return t.map(e=>i.decodeString(e))}catch(n){throw Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataSync(){this.throwIfDisposed();let e=l().readSync(this.dataId);if("string"===this.dtype)try{return e.map(e=>i.decodeString(e))}catch(t){throw Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();let e=await l().read(this.dataId);return"string"===this.dtype?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(l().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw Error("Tensor is disposed.")}print(e=!1){return p.print(this,e)}clone(){return this.throwIfDisposed(),p.clone(this)}toString(e=!1){let t=this.dataSync();return function(e,t,n,i){let u=(0,r.e3)(t),l=function(e,t,n,s){let i=(0,r.NA)(t),u=s[s.length-1],l=Array(u).fill(0),p=t.length,h="complex64"===n?o(e):e;if(p>1)for(let c=0;c<i/u;c++){let d=c*u;for(let f=0;f<u;f++)l[f]=Math.max(l[f],a(h[d+f],0,n).length)}return l}(e,t,n,u),p=t.length,h=function e(t,n,r,i,u,l=!0){let p="complex64"===r?2:1,h=n[0],c=n.length;if(0===c){if("complex64"===r){let d=o(t);return[a(d[0],0,r)]}return"bool"===r?[s(t[0])]:[t[0].toString()]}if(1===c){if(h>20){let f=Array.from(t.slice(0,3*p)),m=Array.from(t.slice((h-3)*p,h*p));return"complex64"===r&&(f=o(f),m=o(m)),["["+f.map((e,t)=>a(e,u[t],r)).join(", ")+", ..., "+m.map((e,t)=>a(e,u[h-3+t],r)).join(", ")+"]"]}let y="complex64"===r?o(t):Array.from(t);return["["+y.map((e,t)=>a(e,u[t],r)).join(", ")+"]"]}let g=n.slice(1),b=i.slice(1),k=i[0]*p,v=[];if(h>20){for(let x=0;x<3;x++){let N=x*k,w=N+k;v.push(...e(t.slice(N,w),g,r,b,u,!1))}v.push("...");for(let I=h-3;I<h;I++){let T=I*k,S=T+k;v.push(...e(t.slice(T,S),g,r,b,u,I===h-1))}}else for(let D=0;D<h;D++){let E=D*k,_=E+k;v.push(...e(t.slice(E,_),g,r,b,u,D===h-1))}let F=2===c?",":"";v[0]="["+v[0]+F;for(let M=1;M<v.length-1;M++)v[M]=" "+v[M]+F;let A=",\n";for(let $=2;$<c;$++)A+="\n";return v[v.length-1]=" "+v[v.length-1]+"]"+(l?"":A),v}(e,t,n,u,l),c=["Tensor"];return i&&(c.push(`  dtype: ${n}`),c.push(`  rank: ${p}`),c.push(`  shape: [${t}]`),c.push("  values:")),c.push(h.map(e=>"    "+e).join("\n")),c.join("\n")}(t,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),p.cast(this,e)}variable(e=!0,t,n){return this.throwIfDisposed(),l().makeVariable(this,e,t,n)}}Object.defineProperty(f,Symbol.hasInstance,{value:e=>!!e&&null!=e.data&&null!=e.dataSync&&null!=e.throwIfDisposed});class m extends f{constructor(e,t,n,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=n}assign(e){if(e.dtype!==this.dtype)throw Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!r.cO(e.shape,this.shape))throw Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);l().disposeTensor(this),this.dataId=e.dataId,l().incRef(this,null)}dispose(){l().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(m,Symbol.hasInstance,{value:e=>e instanceof f&&null!=e.assign&&e.assign instanceof Function})},747:function(e,t,n){"use strict";n.d(t,{T_:function(){return s},Vu:function(){return o}});var r=n(974),a=n(1221);/**
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
 */ function s(e,t){if(e.dtype===t.dtype)return[e,t];let n=(0,a.x8)(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function o(e){let t=[],n=new Set;return function e(t,n,a){if(null!=t){if(t instanceof r.es){n.push(t);return}if(Array.isArray(t)||"object"==typeof t)for(let s in t){let o=t[s];a.has(o)||(a.add(o),e(o,n,a))}}}(e,t,n),t}},3740:function(e,t,n){"use strict";n.d(t,{C:function(){return u},_1:function(){return p},sI:function(){return h}});var r=n(196),a=n(2885),s=n(974),o=n(569),i=n(9155);/**
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
 */ function u(e,t){let n=e;if((0,o.fU)(e))return"string"===t?[]:[e.length];if(!Array.isArray(e))return[];let r=[];for(;Array.isArray(n)||(0,o.fU)(n)&&"string"!==t;)r.push(n.length),n=n[0];return Array.isArray(e)&&(0,a.OB)().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function e(t,n,r){if(r=r||[],!Array.isArray(t)&&!(0,o.fU)(t)){(0,o.hu)(0===n.length,()=>`Element arr[${r.join("][")}] is a primitive, but should be an array/TypedArray of ${n[0]} elements`);return}(0,o.hu)(n.length>0,()=>`Element arr[${r.join("][")}] should be a primitive, but is an array of ${t.length} elements`),(0,o.hu)(t.length===n[0],()=>`Element arr[${r.join("][")}] should have ${n[0]} elements, but has ${t.length} elements`);let a=n.slice(1);for(let s=0;s<t.length;++s)e(t[s],a,r.concat(s))}(e,r,[]),r}function l(e,t,n,r){if("string_or_numeric"!==e){if(null==e)throw Error("Expected dtype cannot be null.");if("numeric"!==e&&e!==t||"numeric"===e&&"string"===t)throw Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function p(e,t,n,a="numeric"){if(e instanceof s.es)return l(a,e.dtype,t,n),e;let p=(0,o.D2)(e);if("string"!==p&&["bool","int32","float32"].indexOf(a)>=0&&(p=a),l(a,p,t,n),null==e||!(0,o.fU)(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e){let h=null==e?"null":e.constructor.name;throw Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${h}'`)}let c=u(e,p);(0,o.fU)(e)||Array.isArray(e)||(e=[e]);let d="string"!==p?(0,i.toTypedArray)(e,p):(0,o.xH)(e,[],!0);return r.BV.makeTensor(d,c,p)}function h(e,t,n,r="numeric"){if(!Array.isArray(e))throw Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((e,a)=>p(e,`${t}[${a}]`,n,r))}},1221:function(e,t,n){"use strict";var r,a,s,o,i,u,l,p,h,c;n.d(t,{x8:function(){return f}}),(u=r||(r={})).R0="R0",u.R1="R1",u.R2="R2",u.R3="R3",u.R4="R4",u.R5="R5",u.R6="R6",(l=a||(a={})).float32="float32",l.int32="int32",l.bool="int32",l.complex64="complex64",(p=s||(s={})).float32="float32",p.int32="int32",p.bool="bool",p.complex64="complex64",(h=o||(o={})).float32="float32",h.int32="float32",h.bool="float32",h.complex64="complex64",(c=i||(i={})).float32="complex64",c.int32="complex64",c.bool="complex64",c.complex64="complex64";let d={float32:o,int32:a,bool:s,complex64:i};function f(e,t){if("string"===e||"string"===t){if("string"===e&&"string"===t)return"string";throw Error(`Can not upcast ${e} with ${t}`)}return d[e][t]}},9155:function(e,t,n){"use strict";n.r(t),n.d(t,{arraysEqual:function(){return a.cO},assert:function(){return a.hu},assertNonNegativeIntegerDimensions:function(){return a.Mu},assertNonNull:function(){return a.Cq},assertShapesMatch:function(){return a.k5},bytesFromStringArray:function(){return a.Ub},bytesPerElement:function(){return a.bT},checkConversionForErrors:function(){return a.D5},clamp:function(){return a.uZ},computeStrides:function(){return a.e3},createScalarValue:function(){return s},createShuffledIndices:function(){return a.U$},decodeString:function(){return p},distSquared:function(){return a.E7},encodeString:function(){return l},fetch:function(){return u},flatten:function(){return a.xH},getArrayFromDType:function(){return a.rQ},getTypedArrayFromDType:function(){return a.WP},hasEncodingLoss:function(){return a.QB},indexToLoc:function(){return a.NE},inferDtype:function(){return a.D2},inferFromImplicitShape:function(){return a.JZ},isBoolean:function(){return a.jn},isFunction:function(){return a.mf},isInt:function(){return a.GN},isNumber:function(){return a.hj},isPromise:function(){return a.tI},isScalarShape:function(){return a.N9},isString:function(){return a.HD},isTypedArray:function(){return a.fU},isValidDtype:function(){return a.LP},locToIndex:function(){return a.qy},makeOnesTypedArray:function(){return a.p8},makeZerosNestedTypedArray:function(){return a.l6},makeZerosTypedArray:function(){return a.wT},nearestDivisor:function(){return a.jP},nearestLargerEven:function(){return a.nY},now:function(){return i},parseAxisParam:function(){return a.EC},randUniform:function(){return a.bj},repeatedTry:function(){return a.WD},rightPad:function(){return a.oj},shuffle:function(){return a.TV},sizeFromShape:function(){return a.NA},sizeToSquarishShape:function(){return a.YP},squeezeShape:function(){return a.bp},sum:function(){return a.Sm},tanh:function(){return a.AE},toNestedArray:function(){return a.GX},toTypedArray:function(){return o}});var r=n(2885),a=n(569);/**
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
 */ function s(e,t){return"string"===t?l(e):o([e],t)}function o(e,t){var n;if("string"===t)throw Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=a.xH(e)),(0,r.OB)().getBool("DEBUG")&&a.D5(e,t),(n=e)instanceof Float32Array&&"float32"===t||n instanceof Int32Array&&"int32"===t||n instanceof Uint8Array&&"bool"===t)return e;if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t){let s=new Uint8Array(e.length);for(let o=0;o<s.length;++o)0!==Math.round(e[o])&&(s[o]=1);return s}throw Error(`Unknown data type ${t}`)}function i(){return(0,r.OB)().platform.now()}function u(e,t){return(0,r.OB)().platform.fetch(e,t)}function l(e,t="utf-8"){return t=t||"utf-8",(0,r.OB)().platform.encode(e,t)}function p(e,t="utf-8"){return t=t||"utf-8",(0,r.OB)().platform.decode(e,t)}},569:function(e,t,n){"use strict";/**
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
 */ function r(e){let t=e.length,n=0,r=0;for(;t>0;)r=Math.random()*t|0,n=e[--t],e[t]=e[r],e[r]=n}function a(e,t,n){return Math.max(e,Math.min(t,n))}function s(e){return e%2==0?e:e+1}function o(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function i(e,t){let n=Math.random();return t*n+(1-n)*e}function u(e,t){let n=0;for(let r=0;r<e.length;r++){let a=Number(e[r])-Number(t[r]);n+=a*a}return n}function l(e,t){if(!e)throw Error("string"==typeof t?t:t())}function p(e,t,n=""){l(f(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function h(e){l(null!=e,()=>"The input to the tensor constructor must be a non-null value.")}function c(e){if(0===e.length)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function d(e){return 0===e.length}function f(e,t){if(e===t)return!0;if(null==e||null==t||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function m(e){return e%1==0}function y(e){if(null!=Math.tanh)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return -1;{let t=Math.exp(2*e);return(t-1)/(t+1)}}function g(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function b(e){let t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return r(t),t}function k(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function v(e,t=e=>0,n){return new Promise((r,a)=>{let s=0,o=()=>{if(e()){r();return}s++;let i=t(s);if(null!=n&&s>=n){a();return}setTimeout(o,i)};o()})}function x(e,t){let n=1,r=-1;for(let a=0;a<e.length;++a)if(e[a]>=0)n*=e[a];else if(-1===e[a]){if(-1!==r)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${a}`);r=a}else if(e[a]<0)throw Error(`Shapes can not be < 0. Found ${e[a]} at dim ${a}`);if(-1===r){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(0===n)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!=0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);let s=e.slice();return s[r]=t/n,s}function N(e,t){let n=t.length;return l((e=null==e?t.map((e,t)=>t):[].concat(e)).every(e=>e>=-n&&e<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),l(e.every(e=>m(e)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(e=>e<0?n+e:e)}function w(e,t){let n=[],r=[],a=null!=t&&Array.isArray(t)&&0===t.length,s=null==t||a?null:N(t,e).sort(),o=0;for(let i=0;i<e.length;++i){if(null!=s){if(s[o]===i&&1!==e[i])throw Error(`Can't squeeze axis ${i} since its dim '${e[i]}' is not 1`);(null==s[o]||s[o]>i)&&1===e[i]&&(n.push(e[i]),r.push(i)),s[o]<=i&&o++}1!==e[i]&&(n.push(e[i]),r.push(i))}return{newShape:n,keptDims:r}}function I(e,t){let n=null;if(null==e||"float32"===e)n=new Float32Array(t);else if("int32"===e)n=new Int32Array(t);else if("bool"===e)n=new Uint8Array(t);else throw Error(`Unknown data type ${e}`);return n}function T(e,t){let n=null;if(null==e||"float32"===e)n=new Float32Array(t);else if("int32"===e)n=new Int32Array(t);else if("bool"===e)n=new Uint8Array(t);else if("string"===e)n=Array(t);else throw Error(`Unknown data type ${e}`);return n}function S(e,t){for(let n=0;n<e.length;n++){let r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function D(e){return"bool"===e||"complex64"===e||"float32"===e||"int32"===e||"string"===e}function E(e,t){return"complex64"!==t&&("float32"!==t||"complex64"===e)&&("int32"!==t||"float32"===e||"complex64"===e)&&("bool"!==t||"bool"!==e)}function _(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array}function F(e){if("float32"===e||"int32"===e)return 4;if("complex64"===e)return 8;if("bool"===e)return 1;throw Error(`Unknown dtype ${e}`)}function M(e){if(null==e)return 0;let t=0;return e.forEach(e=>t+=e.length),t}function A(e){return"string"==typeof e||e instanceof String}function $(e){return"boolean"==typeof e}function O(e){return"number"==typeof e}function B(e){return!!(e&&e.constructor&&e.call&&e.apply)}function C(e,t){for(let n=t;n<e;++n)if(e%n==0)return n;return e}function P(e){let t=e.length;if(t<2)return[];let n=Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function V(e,t){if(0===e.length)return t[0];let n=e.reduce((e,t)=>e*t);if(0===n)return[];if(n!==t.length)throw Error(`[${e}] does not match the input size ${t.length}.`);return function e(t,n,r){let a=[];if(1===n.length){let s=n[0];for(let o=0;o<s;o++)a[o]=r[t+o]}else{let i=n[0],u=n.slice(1),l=u.reduce((e,t)=>e*t);for(let p=0;p<i;p++)a[p]=e(t+p*l,u,r)}return a}(0,e,t)}function R(e,t){let n=z(e,t);for(let r=0;r<n.length;r++)n[r]=1;return n}function z(e,t){if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t)return new Uint8Array(e);throw Error(`Unknown data type ${t}`)}function U(e,t){let n=e.reduce((e,t)=>e*t,1);if(null==t||"float32"===t)return V(e,new Float32Array(n));if("int32"===t)return V(e,new Int32Array(n));if("bool"===t)return V(e,new Uint8Array(n));throw Error(`Unknown data type ${t}`)}function L(e){e.forEach(t=>{l(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function W(e,t,n){if(0===t)return 0;if(1===t)return e[0];let r=e[e.length-1];for(let a=0;a<e.length-1;++a)r+=n[a]*e[a];return r}function H(e,t,n){if(0===t)return[];if(1===t)return[e];let r=Array(t);for(let a=0;a<r.length-1;++a)r[a]=Math.floor(e/n[a]),e-=r[a]*n[a];return r[r.length-1]=e,r}function q(e){return e&&e.then&&"function"==typeof e.then}n.d(t,{AE:function(){return y},Cq:function(){return h},D2:function(){return function e(t){if(Array.isArray(t))return e(t[0]);if(t instanceof Float32Array);else if(t instanceof Int32Array||t instanceof Uint8Array)return"int32";else if(O(t));else if(A(t))return"string";else if($(t))return"bool";return"float32"}},D5:function(){return S},E7:function(){return u},EC:function(){return N},GN:function(){return m},GX:function(){return V},HD:function(){return A},JZ:function(){return x},LP:function(){return D},Mu:function(){return L},N9:function(){return d},NA:function(){return c},NE:function(){return H},QB:function(){return E},Sm:function(){return o},TV:function(){return r},U$:function(){return b},Ub:function(){return M},WD:function(){return v},WP:function(){return I},YP:function(){return g},bT:function(){return F},bj:function(){return i},bp:function(){return w},cO:function(){return f},e3:function(){return P},fU:function(){return _},hj:function(){return O},hu:function(){return l},jP:function(){return C},jn:function(){return $},k5:function(){return p},l6:function(){return U},mf:function(){return B},nY:function(){return s},oj:function(){return k},p8:function(){return R},qy:function(){return W},rQ:function(){return T},tI:function(){return q},uZ:function(){return a},wT:function(){return z},xH:function(){return function e(t,n=[],r=!1){if(null==n&&(n=[]),Array.isArray(t)||_(t)&&!r)for(let a=0;a<t.length;++a)e(t[a],n,r);else n.push(t);return n}}})},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function u(e){return function(t){return r.createElement(l,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,o({key:n},t.attr),e(t.child))})}(e.child))}}function l(e){var t=function(t){var n,a=e.attr,s=e.size,u=e.title,l=i(e,["attr","size","title"]),p=s||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,l,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==s?r.createElement(s.Consumer,null,function(e){return t(e)}):t(a)}},804:function(e,t,n){"use strict";var r,a,s=n(7294),o=function(e,t){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},i=(r=a={path:void 0,exports:{},require:function(e,t){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&a.path)}},a.exports,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var s=typeof a;if("string"===s||"number"===s)n.push(a);else if(Array.isArray(a)&&a.length){var o=t.apply(null,a);o&&n.push(o)}else if("object"===s)for(var i in a)e.call(a,i)&&a[i]&&n.push(i)}}return n.join(" ")}r.exports?(t.default=t,r.exports=t):window.classNames=t}(),a.exports);function u(e,t,n){function r(){var l=Date.now()-i;l<t&&l>=0?a=setTimeout(r,t-l):(a=null,n||(u=e.apply(o,s),o=s=null))}null==t&&(t=100);var a,s,o,i,u,l=function(){o=this,s=arguments,i=Date.now();var l=n&&!a;return a||(a=setTimeout(r,t)),l&&(u=e.apply(o,s),o=s=null),u};return l.clear=function(){a&&(clearTimeout(a),a=null)},l.flush=function(){a&&(u=e.apply(o,s),o=s=null,clearTimeout(a),a=null)},l}u.debounce=u,function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".indiana-scroll-container {\n  overflow: auto; }\n  .indiana-scroll-container--dragging {\n    scroll-behavior: auto !important; }\n    .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab; }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important; }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto; }\n\n.indiana-dragging {\n  cursor: -webkit-grab;\n  cursor: grab; }\n");var l,p=(l="indiana-scroll-container",function(e,t){if(!e)return l;"string"==typeof e?n=e:t=e;var n,r=l;return n&&(r+="__"+n),r+(t?Object.keys(t).reduce(function(e,n){var a=t[n];return a&&(e+=" "+("boolean"==typeof a?r+"--"+n:r+"--"+n+"_"+a)),e},""):"")}),h=function(e){function t(t){var n=e.call(this,t)||this;return n.onEndScroll=function(){n.scrolling=!1,!n.pressed&&n.started&&n.processEnd()},n.onScroll=function(e){var t=n.container.current;t.scrollLeft===n.scrollLeft&&t.scrollTop===n.scrollTop||(n.scrolling=!0,n.processScroll(e),n.onEndScroll())},n.onTouchStart=function(e){var t=n.props.nativeMobileScroll;if(n.isDraggable(e.target)){if(n.internal=!0,t&&n.scrolling)n.pressed=!0;else{var r=e.touches[0];n.processClick(e,r.clientX,r.clientY),!t&&n.props.stopPropagation&&e.stopPropagation()}}},n.onTouchEnd=function(e){var t=n.props.nativeMobileScroll;n.pressed&&(!n.started||n.scrolling&&t?n.pressed=!1:n.processEnd(),n.forceUpdate())},n.onTouchMove=function(e){var t=n.props.nativeMobileScroll;if(n.pressed&&(!t||!n.isMobile)){var r=e.touches[0];r&&n.processMove(e,r.clientX,r.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation()}},n.onMouseDown=function(e){n.isDraggable(e.target)&&n.isScrollable()&&(n.internal=!0,-1!==n.props.buttons.indexOf(e.button)&&(n.processClick(e,e.clientX,e.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation()))},n.onMouseMove=function(e){n.pressed&&(n.processMove(e,e.clientX,e.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation())},n.onMouseUp=function(e){n.pressed&&(n.started?n.processEnd():(n.internal=!1,n.pressed=!1,n.forceUpdate(),n.props.onClick&&n.props.onClick(e)),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation())},n.container=s.createRef(),n.onEndScroll=u(n.onEndScroll,300),n.scrolling=!1,n.started=!1,n.pressed=!1,n.internal=!1,n.getRef=n.getRef.bind(n),n}return function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){var e=this.props.nativeMobileScroll,t=this.container.current;window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd),t.addEventListener("touchstart",this.onTouchStart,{passive:!1}),t.addEventListener("mousedown",this.onMouseDown,{passive:!1}),e&&(this.isMobile=this.isMobileDevice(),this.isMobile&&this.forceUpdate())},t.prototype.componentWillUnmount=function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},t.prototype.getElement=function(){return this.container.current},t.prototype.isMobileDevice=function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},t.prototype.isDraggable=function(e){var t=this.props.ignoreElements;if(t){var n=e.closest(t);return null===n||n.contains(this.getElement())}return!0},t.prototype.isScrollable=function(){var e=this.container.current;return e&&(e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight)},t.prototype.processClick=function(e,t,n){var r=this.container.current;this.scrollLeft=r.scrollLeft,this.scrollTop=r.scrollTop,this.clientX=t,this.clientY=n,this.pressed=!0},t.prototype.processStart=function(e){void 0===e&&(e=!0);var t=this.props.onStartScroll;this.started=!0,e&&document.body.classList.add("indiana-dragging"),t&&t({external:!this.internal}),this.forceUpdate()},t.prototype.processScroll=function(e){if(this.started){var t=this.props.onScroll;t&&t({external:!this.internal})}else this.processStart(!1)},t.prototype.processMove=function(e,t,n){var r=this.props,a=r.horizontal,s=r.vertical,o=r.activationDistance,i=r.onScroll,u=this.container.current;this.started?(a&&(u.scrollLeft-=t-this.clientX),s&&(u.scrollTop-=n-this.clientY),i&&i({external:!this.internal}),this.clientX=t,this.clientY=n,this.scrollLeft=u.scrollLeft,this.scrollTop=u.scrollTop):(a&&Math.abs(t-this.clientX)>o||s&&Math.abs(n-this.clientY)>o)&&(this.clientX=t,this.clientY=n,this.processStart())},t.prototype.processEnd=function(){var e=this.props.onEndScroll;this.container.current&&e&&e({external:!this.internal}),this.pressed=!1,this.started=!1,this.scrolling=!1,this.internal=!1,document.body.classList.remove("indiana-dragging"),this.forceUpdate()},t.prototype.getRef=function(e){[this.container,this.props.innerRef].forEach(function(t){t&&("function"==typeof t?t(e):t.current=e)})},t.prototype.render=function(){var e=this.props,t=e.children,n=e.draggingClassName,r=e.className,a=e.style,o=e.hideScrollbars,u=e.component;return s.createElement(u,{className:i(r,this.pressed&&n,p({dragging:this.pressed,"hide-scrollbars":o,"native-scroll":this.isMobile})),style:a,ref:this.getRef,onScroll:this.onScroll},t)},t.defaultProps={nativeMobileScroll:!0,hideScrollbars:!0,activationDistance:10,vertical:!0,horizontal:!0,stopPropagation:!1,style:{},component:"div",buttons:[0]},t}(s.PureComponent);t.Z=h},6377:function(e,t,n){var r=n(4832),a=n(8652),s=n(801),o=n(2030),i=n(3618),u=n(9049),l=n(1971);l.alea=r,l.xor128=a,l.xorwow=s,l.xorshift7=o,l.xor4096=i,l.tychei=u,e.exports=l},4832:function(e,t,n){var r;!function(e,a,s){function o(e){var t,n=this,r=(t=4022871197,function(e){e=e.toString();for(var n=0;n<e.length;n++){var r=.02519603282416938*(t+=e.charCodeAt(n));t=r>>>0,r-=t,r*=t,t=r>>>0,r-=t,t+=4294967296*r}return(t>>>0)*23283064365386963e-26});n.next=function(){var e=2091639*n.s0+23283064365386963e-26*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=e-(n.c=0|e)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(e),n.s0<0&&(n.s0+=1),n.s1-=r(e),n.s1<0&&(n.s1+=1),n.s2-=r(e),n.s2<0&&(n.s2+=1),r=null}function i(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function u(e,t){var n=new o(e),r=t&&t.state,a=n.next;return a.int32=function(){return 4294967296*n.next()|0},a.double=function(){return a()+(2097152*a()|0)*11102230246251565e-32},a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0!==(r=(function(){return u}).call(t,n,t,a))&&(a.exports=r):this.alea=u}(0,e=n.nmd(e),n.amdD)},9049:function(e,t,n){var r;!function(e,a,s){function o(e){var t=this,n="";t.next=function(){var e=t.b,n=t.c,r=t.d,a=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^a,a=a-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^a,t.a=a-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):n+=e;for(var r=0;r<n.length+20;r++)t.b^=0|n.charCodeAt(r),t.next()}function i(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function u(e,t){var n=new o(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152;while(0===e);return e},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0!==(r=(function(){return u}).call(t,n,t,a))&&(a.exports=r):this.tychei=u}(0,e=n.nmd(e),n.amdD)},8652:function(e,t,n){var r;!function(e,a,s){function o(e){var t=this,n="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function u(e,t){var n=new o(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152;while(0===e);return e},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0!==(r=(function(){return u}).call(t,n,t,a))&&(a.exports=r):this.xor128=u}(0,e=n.nmd(e),n.amdD)},3618:function(e,t,n){var r;!function(e,a,s){function o(e){var t=this;t.next=function(){var e,n,r=t.w,a=t.X,s=t.i;return t.w=r=r+1640531527|0,n=a[s+34&127],e=a[s=s+1&127],n^=n<<13,e^=e<<17,n^=n>>>15,e^=e>>>12,n=a[s]=n^e,t.i=s,n+(r^r>>>16)|0},function(e,t){var n,r,a,s,o,i=[],u=128;for(t===(0|t)?(r=t,t=null):(t+="\0",r=0,u=Math.max(u,t.length)),a=0,s=-32;s<u;++s)t&&(r^=t.charCodeAt((s+32)%t.length)),0===s&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,s>=0&&(o=o+1640531527|0,a=0==(n=i[127&s]^=r+o)?a+1:0);for(a>=128&&(i[127&(t&&t.length||0)]=-1),a=127,s=512;s>0;--s)r=i[a+34&127],n=i[a=a+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,i[a]=r^n;e.w=o,e.X=i,e.i=a}(t,e)}function i(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function u(e,t){null==e&&(e=+new Date);var n=new o(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152;while(0===e);return e},a.int32=n.next,a.quick=a,r&&(r.X&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0!==(r=(function(){return u}).call(t,n,t,a))&&(a.exports=r):this.xor4096=u}(0,e=n.nmd(e),n.amdD)},2030:function(e,t,n){var r;!function(e,a,s){function o(e){var t=this;t.next=function(){var e,n,r=t.x,a=t.i;return e=r[a],e^=e>>>7,n=e^e<<24,e=r[a+1&7],n^=e^e>>>10,e=r[a+3&7],n^=e^e>>>3,e=r[a+4&7],n^=e^e<<7,e=r[a+7&7],e^=e<<13,n^=e^e<<9,r[a]=n,t.i=a+1&7,n},function(e,t){var n,r=[];if(t===(0|t))r[0]=t;else for(n=0,t=""+t;n<t.length;++n)r[7&n]=r[7&n]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}(t,e)}function i(e,t){return t.x=e.x.slice(),t.i=e.i,t}function u(e,t){null==e&&(e=+new Date);var n=new o(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152;while(0===e);return e},a.int32=n.next,a.quick=a,r&&(r.x&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0!==(r=(function(){return u}).call(t,n,t,a))&&(a.exports=r):this.xorshift7=u}(0,e=n.nmd(e),n.amdD)},801:function(e,t,n){var r;!function(e,a,s){function o(e){var t=this,n="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(e^e<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function u(e,t){var n=new o(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152;while(0===e);return e},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0!==(r=(function(){return u}).call(t,n,t,a))&&(a.exports=r):this.xorwow=u}(0,e=n.nmd(e),n.amdD)},1971:function(e,t,n){var r;!function(a,s){var o,i=this,u="random",l=s.pow(256,6),p=s.pow(2,52),h=2*p;function c(e,t,n){var r=[],c=m(function e(t,n){var r,a=[],s=typeof t;if(n&&"object"==s)for(r in t)try{a.push(e(t[r],n-1))}catch(o){}return a.length?a:"string"==s?t:t+"\0"}((t=!0==t?{entropy:!0}:t||{}).entropy?[e,y(a)]:null==e?function(){try{var e;return o&&(e=o.randomBytes)?e=e(256):(e=new Uint8Array(256),(i.crypto||i.msCrypto).getRandomValues(e)),y(e)}catch(r){var t=i.navigator,n=t&&t.plugins;return[+new Date,i,n,i.screen,y(a)]}}():e,3),r),g=new d(r),b=function(){for(var e=g.g(6),t=l,n=0;e<p;)e=(e+n)*256,t*=256,n=g.g(1);for(;e>=h;)e/=2,t/=2,n>>>=1;return(e+n)/t};return b.int32=function(){return 0|g.g(4)},b.quick=function(){return g.g(4)/4294967296},b.double=b,m(y(g.S),a),(t.pass||n||function(e,t,n,r){return(r&&(r.S&&f(r,g),e.state=function(){return f(g,{})}),n)?(s[u]=e,t):e})(b,c,"global"in t?t.global:this==s,t.state)}function d(e){var t,n=e.length,r=this,a=0,s=r.i=r.j=0,o=r.S=[];for(n||(e=[n++]);a<256;)o[a]=a++;for(a=0;a<256;a++)o[a]=o[s=255&s+e[a%n]+(t=o[a])],o[s]=t;(r.g=function(e){for(var t,n=0,a=r.i,s=r.j,o=r.S;e--;)t=o[a=255&a+1],n=256*n+o[255&(o[a]=o[s=255&s+t])+(o[s]=t)];return r.i=a,r.j=s,n})(256)}function f(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function m(e,t){for(var n,r=e+"",a=0;a<r.length;)t[255&a]=255&(n^=19*t[255&a])+r.charCodeAt(a++);return y(t)}function y(e){return String.fromCharCode.apply(0,e)}if(s["seed"+u]=c,m(s.random(),a),e.exports){e.exports=c;try{o=n(5042)}catch(g){}}else void 0!==(r=(function(){return c}).call(t,n,t,e))&&(e.exports=r)}([],Math)}}]);