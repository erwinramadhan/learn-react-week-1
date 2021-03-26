import { Component } from 'react'
import Biodata from './Biodata'
import React from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap"


class Home extends Component {
    constructor() {
        super()
        this.state = {
            title: "Ini adalah title",
            paragraph: "Ini adalah paragraph"
        }
    }

    handleTitle = (data) => {
        console.log(data);
        this.setState({
            title: data
        })
    }

    handleParagraf = (data) => {
        console.log(data);
        this.setState({
            paragraph: data
        })
    }

    handleInput = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    changeTitle = () => {
        this.setState({
            title: "judul berubah"
        })
    }

    render() {
        const dataDummyA = {
            name: "Gerry",
            job: "Asisten Hokage"
        }

        const dataDummyB = {
            name: "Rohim",
            job: "Bos Cupang"
        }

        const dataDummyC = {
            name: "Rizal",
            job: "Skripzier"
        }

        return (
            <>
                <Form style={{ width: "50%", margin: "0 auto" }}>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input
                            type="text"
                            name="title"
                            placeholder="Set your title"
                            // onChange={(event) => this.handleTitle(event.target.value)}
                            onChange={(event) => this.handleInput(event)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Paragraf</Label>
                        <Input
                            type="text"
                            name="paragraf"
                            placeholder="Set your paragraph"
                            // onChange={(event) => this.handleParagraf(event.target.value)}
                            onChange={(event) => this.handleInput(event)}
                        />
                    </FormGroup>
                </Form>
                <hr />
                <h2>{this.state.title}</h2>
                <p>{this.state.paragraph}</p>
                <Biodata data={dataDummyA} />
                <Biodata data={dataDummyB} />
                <Biodata data={dataDummyC} />
                <Button onClick={this.changeTitle}>
                    Berubah
            </Button>
            </>
        )
    }
}

export default Home
