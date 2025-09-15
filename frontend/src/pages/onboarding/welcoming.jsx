import React, { useState, useEffect } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, database } from '../../config/firebase.js'
import { useNavigate } from 'react-router-dom'
import helloAnimation from '../../../utils/welcome.json'
import Lottie from 'lottie-react'

const Welcome = () => {
  const [username, setUserName] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const navigate = useNavigate()

  const handleOption = (e) => setSelectedOption(e)

  const handleNavigation = async () => {
    const docRef = doc(database, "Users", auth.currentUser?.uid, "businessInfo", "data");
    const docSnap = await getDoc(docRef)
    if (!docSnap.exists()) {
      await setDoc(docRef, { isBusiness: selectedOption })
    }
    if (selectedOption === true) {
      navigate('/businessInfo')
    } else {
      navigate('/generalUsersInfo')
    }
  }

  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser
      if (user) {
        try {
          const docRef = doc(database, "Users", user.uid)
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()) {
            const userData = docSnap.data()
            setUserName(userData.username || "")
          }
        } catch (error) {
          console.error("Error fetching user profile:", error)
        }
      }
    }
    fetchProfile()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col lg:flex-row items-center justify-center p-6 gap-8">
      
      <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-700">
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center lg:text-left">
          Welcome to <span className="text-indigo-400">Seedlink</span>, {username}
        </h1>

        <p className="text-gray-300 mb-6 text-center lg:text-left">
          What is your purpose of visiting our platform?
        </p>

        <div className="space-y-4">
          <label className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/70 cursor-pointer hover:bg-gray-700/80 transition">
            <input
              type="radio"
              onChange={() => handleOption(false)}
              checked={selectedOption === false}
              className="w-5 h-5 accent-indigo-500"
            />
            <span className="text-gray-200">To explore small scale businesses</span>
          </label>

          <label className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/70 cursor-pointer hover:bg-gray-700/80 transition">
            <input
              type="radio"
              onChange={() => handleOption(true)}
              checked={selectedOption === true}
              className="w-5 h-5 accent-indigo-500"
            />
            <span className="text-gray-200">To publish my business to more people</span>
          </label>
        </div>

        <button
          onClick={handleNavigation}
          disabled={selectedOption === ''}
          className={`mt-6 w-full py-3 rounded-xl font-semibold transition ${
            selectedOption === '' 
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
        >
          Continue
        </button>
      </div>
      <div className="w-72 h-72 flex items-center justify-center order-1 lg:order-none">
        <Lottie animationData={helloAnimation} loop={true} className="w-full h-full" />
      </div>
    </div>
  )
}

export default Welcome
