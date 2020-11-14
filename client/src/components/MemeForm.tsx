import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';


const MemeForm = () => {
    const [file, setFile] = useState<File| null>();
    const [filename, setFilename] = useState<string>('Choose File');
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [tags, setTags] = useState<string>('');

    const clearForm = (): void => {
        setName('')
        setDescription('')
        setTags('')
        setFilename('Choose File')
        setFile(null)
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        clearForm()
        const formData: FormData = new FormData()
        if (file) {
            console.log('sending')
            formData.append('file', file)
            formData.append('name', name)
            formData.append('description', description)
            formData.append('tags', tags)
            const response = await axios.post('http://localhost:5000/api/v1/meme/', formData)
            console.log(response)
        } else {
            console.log('on submit invalid file')
            console.log(file)
        }
    };

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target !== null && e.target.files !== null ){
            const choosedFile: File = e.target.files[0]
            if (choosedFile !== undefined) {
                console.log('set file')
                setFile(choosedFile)
                setFilename(choosedFile.name)
            }
        }
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Label>Upload Meme</Form.Label>
                <Form.File
                    onChange={onFileChange}
                    required
                    id="custom-file"
                    label={filename}
                    custom
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    value={name}
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter name"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    value={description}
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                    type="text"
                    placeholder="Enter description"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Tags</Form.Label>
                <Form.Control
                    value={tags}
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTags(e.target.value)}
                    type="text"
                    placeholder="Enter tags"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Save Meme
            </Button>
        </Form>
    )
}

export default MemeForm
