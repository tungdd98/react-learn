import React from "react";
import PropTypes from "prop-types";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";
import Select from "react-select";
import { CATEGORIES, IMAGES } from "utils/constants";
import style from "./PhotoForm.module.scss";

const PhotoForm = (props) => {
    const { onSubmit } = props;
    return (
        <div className={`mx-auto my-3 ${style.photoForm}`}>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                        name="title"
                        id="title"
                        placeholder="Eg: Wow nature..."
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="category">Category</Label>
                    <Select
                        name="category"
                        id="category"
                        placeholder="What's your photo category?"
                        options={CATEGORIES}
                    ></Select>
                </FormGroup>

                <FormGroup>
                    <Label for="category">Photo</Label>
                    <div>
                        <Button outline color="info" size="sm">
                            Random a photo
                        </Button>
                    </div>
                    <div
                        className={`overflow-hidden rounded shadow-sm my-2 ${style.photoImage}`}
                    >
                        <img
                            src={IMAGES.orangeBg}
                            alt="color"
                            className="img-fluid"
                        />
                    </div>
                </FormGroup>

                <FormGroup className="text-center">
                    <Button color="info" size="sm" type="submit">
                        Add a album
                    </Button>
                </FormGroup>
            </Form>
        </div>
    );
};

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
};

export default PhotoForm;
