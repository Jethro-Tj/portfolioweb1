#!/usr/bin/env python3
"""
Simple Terminal Chat Application
"""
import os
import time
import threading

def clear_screen():
    """Clear the terminal screen."""
    os.system('cls' if os.name == 'nt' else 'clear')

class TerminalChat:
    def __init__(self):
        self.messages = []
        self.username = "You"
        self.running = True
    
    def display_messages(self):
        """Display all messages in the chat."""
        clear_screen()
        print("=== Terminal Chat ===")
        print("Type 'exit' to quit\n")
        
        for msg in self.messages:
            print(f"{msg['sender']}: {msg['text']}")
        
        print("\n" + "-" * 20)
    
    def input_loop(self):
        """Handle user input."""
        while self.running:
            message = input(f"{self.username}> ")
            
            if message.lower() == 'exit':
                self.running = False
                break
            
            if message.strip():
                self.messages.append({
                    'sender': self.username,
                    'text': message,
                    'timestamp': time.time()
                })
                
                # Simulate a response
                self.messages.append({
                    'sender': 'Bot',
                    'text': f"You said: {message}",
                    'timestamp': time.time()
                })
                
                self.display_messages()
    
    def start(self):
        """Start the chat application."""
        self.display_messages()
        self.input_loop()
        print("Chat ended. Goodbye!")

if __name__ == "__main__":
    username = input("Enter your username: ")
    chat = TerminalChat()
    if username.strip():
        chat.username = username
    chat.start()