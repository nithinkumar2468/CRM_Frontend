pipeline {
    agent any
 
    stages {
        stage('git clone') {
            steps {
                    deleteDir()
                    git branch: 'master', url: 'https://github.com/nithinkumar2468/CRM_Frontend.git'
            }
        }

        stage('Build') {
            steps {
                        sh 'npm install'
            }
        }
 
        stage('react run') {
            steps {
                    sh 'npm start'
            }
        }
    }
}