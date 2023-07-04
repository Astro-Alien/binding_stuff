class w{static async perform(a,r,s,e){await this[a.action](a,r,s,e)}static async add(a,r,s,e){const l=await crs.process.getValue(a.args.target,r,s,e),t=await crs.process.getValue(a.args.value,r,s,e);l!=null&&t!=null?l.push(t):console.error(`can't add to array - array is null:${l==null}, value is null:${t==null}`)}static async remove(a,r,s,e){const l=await crs.process.getValue(a.args.target,r,s,e),t=await crs.process.getValue(a.args.value,r,s,e),c=l?.indexOf(t);l!=null&&t!=null&&c!==-1?l.splice(c,1):console.error(`can't remove from array - array is null:${l==null}, value is null:${t==null}, value is not contained within target`)}static async transfer(a,r,s,e){const l=await crs.process.getValue(a.args.source,r,s,e),t=await crs.process.getValue(a.args.target,r,s,e),c=await crs.process.getValue(a.args.value,r,s,e);await this.add({args:{target:t,value:c}},r,s,e),await this.remove({args:{target:l,value:c}},r,s,e)}static async field_to_csv(a,r,s,e){const l=await crs.process.getValue(a.args.source,r,s,e);if(l==null)return console.error("fieldToCSV - target array does not exist");let t;const c=await crs.process.getValue(a.args.delimiter,r,s,e)||",";return a.args.field!=null?t=V(l,a.args.field,c):a.args.fields!=null&&(t=d(l,a.args.fields,c)),a.args.target!=null&&await crs.process.setValue(a.args.target,t,r,s,e),t}static async concat(a,r,s,e){let l=[];const t=await crs.process.getValue(a.args.sources,r,s,e);for(let c of t){let u=await crs.process.getValue(c,r,s,e);l=[...l,...u]}return a.args.target!=null&&await crs.process.setValue(a.args.target,l,r,s,e),l}static async change_values(a,r,s,e){const l=await crs.process.getValue(a.args.source,r,s,e),t=Object.keys(a.args.changes);let c={};for(let u of t)c[u]=await crs.process.getValue(a.args.changes[u],r,s,e);for(let u of l)for(let g of t)u[g]=c[g]}static async get_value(a,r,s,e){let t=(await crs.process.getValue(a.args.source,r,s,e))[a.args.index][a.args.field];return a.args.target!=null&&await crs.process.setValue(a.args.target,t,r,s,e),t}static async map_objects(a,r,s,e){const l=await crs.process.getValue(a.args.source,r,s,e)??[],t=a.args.fields??[];let c=[];for(const u of l){const g=await Promise.all(t.map(o=>crs.binding.utils.getValueOnPath(u,o)));c.push(...g)}return a.args.target!=null&&await crs.process.setValue(a.args.target,c,r,s,e),c}static async get_records(a,r,s,e){const l=[],t=await crs.process.getValue(a.args.source,r,s,e),c=await crs.process.getValue(a.args.page_number,r,s,e),u=await crs.process.getValue(a.args.page_size,r,s,e),g=await crs.process.getValue(a.args.fields,r,s,e);for(let o=c;o<c+u&&t[o]!=null;o++)if(g==null)l.push(t[o]);else{let n={};for(let f of g)n[f]=t[o][f];l.push(n)}return a.args.target!=null&&await crs.process.setValue(a.args.target,l,r,s,e),l}static async get_range(a,r,s,e){const l=await crs.process.getValue(a.args.source,r,s,e),t=await crs.process.getValue(a.args.field,r,s,e),c={min:Number.MAX_VALUE,max:Number.MIN_VALUE};for(let u of l){const g=u[t];g<c.min&&(c.min=g),g>c.max&&(c.max=g)}return a.args.target!=null&&await crs.process.setValue(a.args.target,c,r,s,e),c}static async calculate_paging(a,r,s,e){const l=await crs.process.getValue(a.args.source,r,s,e),t=await crs.process.getValue(a.args.page_size,r,s,e),c=Math.ceil(l.length/t);let u={row_count:l.length,page_count:c};return a.args.target!=null&&await crs.process.setValue(a.args.target,u,r,s,e),u}static async map_assign_data(a,r,s,e){const l=await crs.process.getValue(a.args.source,r,s,e),t=await crs.process.getValue(a.args.mappings,r,s,e),c=Object.keys(t),u=Object.keys(l[0]??{});for(const g of l)for(let o of c){let n=t[o];if(o=await crs.process.getValue(o,r,s,e),n=await crs.process.getValue(n,r,s,e),n==null){g[o]=null;continue}if(u.indexOf(n)==-1){g[o]=n;continue}g[o]=g[n]}return a.args.target!=null&&await crs.process.setValue(a.args.target,l,r,s,e),l}static async delete_properties(a,r,s,e){const l=await crs.process.getValue(a.args.source,r,s,e),t=await crs.process.getValue(a.args.properties,r,s,e);for(const c of l)for(const u of t)delete c[u]}}async function V(i,a,r){return i.map(e=>e[a]).join(r||",")}async function d(i,a,r){let s=[];for(let e of i){let l=[];for(let t of a)l.push(e[t]);s.push(l.join(r))}return s}crs.intent.array=w;export{w as ArrayActions};