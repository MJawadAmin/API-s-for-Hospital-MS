// export const createUser = async (req, res) => {
//     try {
//         const { name, age, phoneNo, address, bloodGroup, symptoms } = req.body;
//         const newUser = new UserModel({
//             name : name ,
//             age : age ,
//             phoneNo: phoneNo,
//             address: address,
//             bloodGroup: bloodGroup,
//             sypmtoms: symptoms
//         });
//         await newUser.save();
//         return res.status(200).json({
//             status: 'success',
//             message: 'User added succesfully!'
//         })
//     } catch (error) {
//         console.log('Internal Server Error', error);
//         return res.status(200).json({
//             status: 'failed',
//             message: 'Internal Server Error'
//         })
//     }
// }
// export const fetchUsers = async (req, res) => {
//     try {
//         const users = await UserModel.find();
//         if (!users) {
//             return res.status(200).json({
//                 status: 'failed',
//                 message: 'No user found in database!'
//             })
//         } else {
//             return res.status(200).json({
//                 status: 'success',
//                 message: 'Users fetched succesfully!'
//             })
//         }
//     } catch (error) {
//         console.log('Internal Server Error', error);
//         return res.status(200).json({
//             status: 'failed',
//             message: 'Internal server error'
//         })
//     }
// }
// export const removeUser = async (req, res) => {
//     try {
//         const { userId } = req.body;
//         const user = await UserModel.findById(userId);
//         if (!user) {
//             return res.status(200).json({
//                 status: 'failed',
//                 message: 'User not found in database!'
//             })
//         } else {
//             await UserModel.findByIdAndDelete(userId);
//             return res.status(200).json({
//                 status: 'success',
//                 message: 'Users deleted succesfully!'
//             })
//         }
//     } catch (error) {
//         console.log('Internal Server Error!')
//         return res.status(200).json({
//             status: 'failed',
//             message: 'Internal Server Error'
//         })
//     }
// }
// export const updateUser = async (req, res) => {
//     try {
//         const { userId, newName, newEmail, newPassword } = req.body;
//         const user = await UserModel.findById(userId);
//         if (!user) {
//             return res.status(200).json({
//                 status: 'failed',
//                 message: 'User not found in database!'
//             })
//         } else {
//             user.name = newName;
//             user.email = newEmail;
//             user.password = newPassword;
//             await user.save();
//             return res.status(200).json({
//                 status: 'success',
//                 message: 'User Updated succesfully!'
//             })
//         }
//     } catch (error) {
//         console.log('Internal Server Error');
//         return res.status(200).json({
//             status: 'failed',
//             message: 'Internal Server Error'
//         })
//     }
// }


import UserModel from '../models/patientModel.js'

export const createUser = async(req , res )=>{
    try {
        const patientData =  new UserModel(req.body)
        if (!patientData){
           return  res.status(404).json({
                status: "failed ",
                message : "Server issue user not found"
            })
        }
        const savedData = await patientData.save()
        res.status(200).json(savedData) 

        
    } catch (error) {
        res.status(500).json({error : error})
        
    }
}