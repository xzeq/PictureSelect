import React from 'react'
import {pictures} from './pictures.js'
import PictureSelect from './PictureSelect'
export default class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedArr: [],
        }
    }

    changeCheck = (id) => {
        const selectedItem = this.state.checkedArr.find(item => item === id)
        if (selectedItem) {
            this.setState((state) => {
                const newArr = state.checkedArr.filter(item => item !== id)
                console.log(newArr)
                return { checkedArr: newArr }
            })
        } else {
            this.setState((state) => {
                const newArr = [ ...state.checkedArr, id ]
                console.log(newArr)
                return { checkedArr: newArr }
            })
        }
    }

    checkAll = () => {
        const { checkedArr } = this.state
        if (checkedArr.length === 3) {
            this.setState({ checkedArr: [] })
        } else {
            this.setState({ checkedArr: ['1', '2', '3'] })
        }
    }
    render() {
        // const { checked, count, picChecked } = this.state
        return (
            <PictureSelect pictures={pictures} value={this.state.checkedArr} checkAll={this.checkAll} onChange={this.changeCheck} />
        )
    }
}