import{VirtualizationManager as c}from"./../managers/virtualization/virtualization-manager.js";class g{static async perform(a,i,t,e){await this[a.action]?.(a,i,t,e)}static async enable(a,i,t,e){const n=await crs.dom.get_element(a,i,t,e),r=await crs.process.getValue(a.args.itemSize,i,t,e),l=await crs.process.getValue(a.args.template,i,t,e),s=await crs.process.getValue(a.args.inflation,i,t,e),o=await crs.process.getValue(a.args.manager,i,t,e);n.__virtualizationManager=new c(n,l,s,o,r)}static async disable(a,i,t,e){const n=await crs.dom.get_element(a,i,t,e);n.__virtualizationManager!=null&&(n.__virtualizationManager.dispose(),delete n.__virtualizationManager)}}crs.intent.virtualization=g;export{g as VirtualizationActions};