async function s(n,o){const e=[],l=n.querySelectorAll("column");for(let t of l)e.push({title:t.dataset.heading,width:t.dataset.width,property:t.dataset.property,dataType:t.dataset.type||"string"});o.set(e)}export{s as columnsFromChildren};