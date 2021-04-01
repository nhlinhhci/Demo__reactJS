import React, { Component } from 'react'

export default class FormReact extends Component {

    state = {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        }, errors: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        }

    }

    handleChangeInput = (event) => {
        let { name, value } = event.target;//event.target là tag input đang xảy ra onchange

        //lấy typeProps(tên tự đặt) của thẻ để xác định email hay phone ...
        let typeProps = event.target.getAttribute('typeProps');

        //Tạo value mới mỗi lần nhập liệu
        let newValue = {...this.state.values};

        // this.state.values['maSinhVien'] = value;
        newValue[name] = value;

        //Tạo errors mới mỗi lần nhập liệu
        let newErrors = {...this.state.errors}
        //this.state.errors['maSinhVien'] = tên lỗi

        let errorMess = ''
        //Kiểm tra rổng
        if(newValue[name] === '') {
            errorMess = 'Không được bỏ trống !';
        
        };
        if(typeProps === 'email') {
            let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if(!regexEmail.test(value)){
                errorMess = 'Email không hợp lệ!'
            }
        }
        newErrors[name] = errorMess;
        //Xử lý setState
        this.setState({
            values:newValue,
            errors:newErrors
        })
    }

    render() {
        return (
            <form className="container">
                <div className="card text-white bg-dark">
                    <div className="card-header">THÔNG TIN SINH VIÊN</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group" >
                                    <p>Mã sinh viên</p>
                                    <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput} />
                                    <p className="text text-danger">{this.state.errors.maSinhVien}</p>
                                </div>
                                <div className="form-group" >
                                    <p>Số diện thoại</p>
                                    <input className="form-control" name="soDienThoai" onChange={this.handleChangeInput} />
                                    <p className="text text-danger">{this.state.errors.soDienThoai}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group" >
                                    <p>Tên sinh viên</p>
                                    <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput} />
                                    <p className="text text-danger">{this.state.errors.tenSinhVien}</p>
                                </div>
                                <div className="form-group" >
                                    <p>Email</p>
                                    <input typeProps="email" className="form-control" name="email" type="email" onChange={this.handleChangeInput} />
                                    <p className="text text-danger">{this.state.errors.email}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-success">Thêm sinh viên</button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        )
    }
}
