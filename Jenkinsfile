pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('git clone') {
            steps {
                deleteDir()
                git branch: 'master', url: 'https://github.com/nithinkumar2468/CRM_Frontend.git'
            }
        }

        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('react run') {
            steps {
                bat 'npm start'
            }
        }
    }
}
