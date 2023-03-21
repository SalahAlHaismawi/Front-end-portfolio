import blockContent from './blockContent'
import category from './category'
import post from './pageinfo'
import author from './author'
import schemaTypes from "all:part@sanity/base/schema=type";
export default createSchema({
    name: "default",
    types: schemaTypes.concat({
            pageinfo,
    })
})
