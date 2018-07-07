<template>
    <div>
        <div class="row">
            <div class="col">
                <img src="http://www.thaihemophilia.org/images/common/logo.png">
                <h3 class="title">SignUp</h3>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row ignore-screen level">
                    <div class="col-3 ignore-screen level-item">
                        <p>Email:</p>
                    </div>
                    <div class="col-9 ignore-screen level-item">
                        <input type="email" value="john.doe@cirrus.io">
                    </div>
                </div>

                <div class="row ignore-screen level">
                    <div class="col-3 ignore-screen level-item">
                        <p>Password:</p>
                    </div>
                    <div class="col-9 ignore-screen level-item">
                        <input type="password" value="password">
                    </div>
                </div>

                <div class="row ignore-screen level">
                    <div class="col-3 ignore-screen level-item">
                        <p>Name:</p>
                    </div>
                    <div class="col-9 ignore-screen level-item">
                        <input type="name" value="John Doe">
                    </div>
                </div>
                <div class="row ignore-screen level">
                    <div class="col-3 ignore-screen level-item">
                        <p>Hospital:</p>
                    </div>
                    <div class="col-9 ignore-screen level-item">
                        <input type="name" value="John Doe">
                    </div>
                </div>
            </div>
        </div>
        <div class="row position">
            <button type="button" class="submit">สมัครสมาชิก</button>
            <button type="butotn" class="cancel">ยกเลิก</button>
        </div>
    </div>

</template>
<style>
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: auto;
        width: 20vw;
    }

    .position {
        display: flex;
        flex-flow: row;
        justify-content: center;
    }

    .position button {
        margin-left: 20px;
    }

    .title {
        text-align: center;
    }

    .container {
        width: 50vw;
        margin-left: 25vw;
    }

    .submit {
        background-color: rgb(241, 28, 21);
        color: white;
        font-size: 18px
    }

    .cancel {
        background-color: rgb(149, 149, 149);
        color: white;
        font-size: 18px
    }

    .submit:hover {
        background-color: rgb(194, 24, 18);
        color: white;
    }

    .cancel:hover {
        background-color: rgb(102, 101, 101);
        color: white;
    }
</style>